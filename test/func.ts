function decorator(target) {

}

@decorator
class A {

}

// @ts-ignore
A = decorator(A) || A;


// function log(){
//  console.log('dddd')
// }
//
// @log
// function b(){
//
// }

function log(fn) {
  console.log('log')
  return fn();
}


let fn = log(function b(){})


