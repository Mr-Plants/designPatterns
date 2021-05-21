// 装饰模式

@useCase
class Phone {

}


function useCase(target) {
  console.log(target + 'has case')
}


let iphone = new Phone()
