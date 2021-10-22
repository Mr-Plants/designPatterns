// 测试文件


// import Validator, {VALID_STRATEGIES_MAP} from "./Validator";

let a = require('./source.js')
const res = a.Validator.addRules("123", [
    "isNonEmpty",
    "minLength:5",
    "maxLength:12",
]).valid();

console.log(res)