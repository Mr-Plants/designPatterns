var counter = 0;

var add = function () {
  counter++;
};

@add
function foo() {
}

// 编译后
var counter;
var add;

@add
function foo() {
}

counter = 0;

add = function () {
  counter++;
};
