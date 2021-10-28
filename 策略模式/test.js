// 测试文件


// import Validator, {VALID_STRATEGIES_MAP} from "./Validator";

const a = require('./source.js')
const s = require('./Validator')
const res = s.Validator.addRules("123", [
    "notEmpty",
    "minLength:5",
    "maxLength:12",
]).valid();

// let res2 = s.Validator.addRules('32434', ['']).valid();

console.log(res)
// console.log(res2)