var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class A {
    method() {
        console.log('method 正常执行');
    }
}
__decorate([
    dec11
], A.prototype, "method", null);
function dec11(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
let a = new A();
a.method = function () {
    console.log('非正常执行');
};
a.method();
