const formatResult = (isPass = false, errMsg = "") => {
    return {
        result: isPass,
        msg: errMsg,
    };
};

const ValidStrategies = {
    isNonEmpty: function (val = "") {
        if (!val) return formatResult(false, "内容不能为空");
    },
    minLength: function (val = "", length = 0) {
        console.log(val, length);
        if (typeof length === "string") length = parseInt(length);
        if (val.length < length)
            return formatResult(false, `内容长度不能小于 ${length}`);
    },
    maxLength: function (val = "", length = 0) {
        if (typeof length === "string") length = parseInt(length);
        if (val.length > length)
            return formatResult(false, `内容长度不能大于 ${length}`);
    },
    default: function () {
        return formatResult(true);
    },
};

/**
 * 验证器
 * 策略模式 —— 环境类，负责调度算法
 */
class Validator {
    // 存储规则
    _ruleExecuters;

    constructor() {
        this._ruleExecuters = [];
    }

    /**
        * addRules
        * 添加校验规则
        */
    addRules(value = "", rules) {
        this._ruleExecuters = [];
        rules.forEach((rule) => {
            const args = rule.split(":");
            const functionName = args.shift() || "default";
            // 忽略下这里的断言类型👀
            const ruleFunc = ValidStrategies[functionName].bind(this, value);
            this._ruleExecuters.push({
                func: ruleFunc,
                args,
            });
        });
        return this;
    }

    /**
        * valid
        */
    valid() {
        for (let i = 0; i < this._ruleExecuters.length; i++) {
            const res = this._ruleExecuters[i].func.apply(
                this,
                this._ruleExecuters[i].args
            );
            if (res && !res.result) {
                return res;
            }
        }
        return formatResult(true);
    }
}

module.exports.Validator = new Validator()

