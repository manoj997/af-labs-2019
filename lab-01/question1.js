const printMethods = function () {
  console.log("Hello World");
};

const secondMethod = function (printMethod) {
  printMethod();
};

secondMethod(printMethods);
