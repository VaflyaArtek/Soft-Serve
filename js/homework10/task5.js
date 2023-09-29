// task 5
var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (index) {
    return function () {
      console.log(index);
    };
  })(i);
}