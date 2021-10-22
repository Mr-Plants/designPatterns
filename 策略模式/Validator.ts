// 校验策略
const VALID_STRATEGIES = {
    maxLength() {

    },
    minLength() {

    },
    notEmpty() {

    }

}
export const VALID_STRATEGIES_MAP = {
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
            this.rules[i] = ''

        }

        return formatResult(true,)
    }
}

export default new Validator();