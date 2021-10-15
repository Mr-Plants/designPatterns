// 校验策略
const VALID_STRATEGIES = {
    maxLength() {

    },
    minLength() {

    },
    notEmpty() {

    },
    number() {

    }

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
    }

    valid() {
        const length = this.rules.length;
        for (let i = 0; i < length; i++) {
            this.rules[i] = ''

        }
    }
}

export default new Validator();