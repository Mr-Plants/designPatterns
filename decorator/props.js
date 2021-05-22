var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return 'jack';
        },
        enumerable: false,
        configurable: true
    });
    ;
    __decorate([
        readonly
    ], Person.prototype, "name", null);
    return Person;
}());
/**
 * 属性只读
 * @param target  目标类的原型
 * @param name 要装饰的属性名
 * @param descriptor  属性描述符
 */
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
var jack = new Person();
jack.name = 'bruce';
// Cannot assign to 'name' because it is a read-only property.
