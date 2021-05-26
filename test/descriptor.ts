class A {
  @dec11
  method() {
    console.log('method 正常执行')
  }
}


function dec11(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

let a = new A();

a.method = function () {
  console.log('非正常执行')
}

a.method();
