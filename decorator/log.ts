class Student {
  @log
  speak(language, content) {
    return `I said ${content} in ${language}`
  }
}

function log(target, name, descriptor) {
  const origin = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`calling ${name} with `, args);
    console.log(`time: ${+new Date()}`)
    return origin.apply(this, args);
  }

  return descriptor;
}

let bruce = new Student();
bruce.speak('English', 'good morning');

// calling speak with  [ 'English', 'good morning' ]
// time: 1621684323962

