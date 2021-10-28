// 校验策略
const VALID_STRATEGIES = {
    maxLength(val, length) {
        if (!val || val.length > +length) return formatResult(false, `最大长度为${length}`)
    },
    minLength(val, length) {
        if (!val || val.length < +length) return formatResult(false, `最小长度为${length}`)
    },
    notEmpty(val) {
        if (!val) return formatResult(false, '不能为空')
    },
    default() {
        return formatResult(true)
    }
}
const VALID_STRATEGIES_MAP = {
    MAXLENGTH: 'maxLength',
    MINLENGTH: 'minLength',
    NOT_EMPTY: 'notEmpty',

}

function formatResult(isPass, msg = '通过') {
    return {
        isPass,
        msg
    }
}

class Validator {
    rules = [];
    value;

    addRules(value, rules) {
        this.value = value;
        this.rules = rules;

        return this
    }

    valid() {
        const length = this.rules.length;
        for (let i = 0; i < length; i++) {
            let [rule, arg] = this.rules[i].split(':')
            const res = VALID_STRATEGIES[rule].call(this, this.value, arg)
            if (res) return res;
        }

        return formatResult(true)
    }
}

module.exports.Validator = new Validator();