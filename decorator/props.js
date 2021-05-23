function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly name = 'jack'
}

const person = new Person();
person.name = 'bruce';
