// 装饰模式
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone = __decorate([
        standable(true)
    ], Phone);
    return Phone;
}());
/**
 * 把手机立起来
 * @param isStandable 是否可以站立
 */
function standable(isStandable) {
    return function (target) {
        target.standable = isStandable;
    };
}
console.log(Phone);
// [Function: Phone] { standAble: true }
// @standable
// class Phone {}
/**
 * 把手机立起来
 * @param target 要修饰的类
 */
// function standable(target) {
//   target.standable = true;
//   console.log(target.name + ' can stand!')
// }
// let iphone = new Phone();
// console.log(Phone)
// Phone can stand!
// [Function: Phone] { standAble: true }
