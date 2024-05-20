//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//functions
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Making ".concat(size, " shirt with ").concat(printMessage, " print on it . "));
}
//calling function (by default values)
make_shirt();
//calling a function with medium size with default message
make_shirt("Medium");
//calling a function with small size with difrent  message
make_shirt("small", "I Love JavaScript");
