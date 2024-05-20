//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//functions
function make_shirt(size:string = "large", printMessage:string = "I Love TypeScript"){
    console.log(`Making ${size} shirt with ${printMessage} print on it . `)
}
//calling function (by default values)

make_shirt ();

//calling a function with medium size with default message

make_shirt ("Medium");

//calling a function with small size with difrent  message
make_shirt("small" ,"I Love JavaScript")
