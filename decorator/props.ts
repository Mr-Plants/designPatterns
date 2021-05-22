class Person {
  @readonly
  get name() {
    return 'jack';
  };
}

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

let jack = new Person();

jack.name = 'bruce';
// Cannot assign to 'name' because it is a read-only property.
