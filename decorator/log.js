var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Student {
    speak(language, content) {
        return `I said ${content} in ${language}`;
    }
}
__decorate([
    log
], Student.prototype, "speak", null);
function log(target, name, descriptor) {
    const origin = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`calling ${name} with `, args);
        console.log(`time: ${+new Date()}`);
        return origin.apply(this, args);
    };
    return descriptor;
}
let bruce = new Student();
bruce.speak('English', 'good morning');
// calling speak with  [ 'English', 'good morning' ]
// time: 1621684323962
