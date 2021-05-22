// 装饰模式



@standable(true)
class Phone {}

/**
 * 把手机立起来
 * @param isStandable 是否可以站立
 */
function standable(isStandable) {
  return function (target){
    target.standable = isStandable;
  }
}

console.log(Phone)
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

