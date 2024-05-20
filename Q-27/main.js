//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//first version
var aliencolor = "green";
if (aliencolor === "green") {
    console.log("version 1 ! the player earned 5 points");
}
else if (aliencolor === "yellow") {
    console.log("the player earned 10 points");
}
else if (aliencolor === "red") {
    console.log("the player earned 15 points");
}
;
//second version
var aliencolor2 = "yellow";
if (aliencolor2 === "green") {
    console.log("the player earned 5 points");
}
else if (aliencolor2 === "yellow") {
    console.log("version 2 ! the player earned 10 points");
}
else if (aliencolor2 === "red") {
    console.log("the player earned 15 points");
}
;
//third version
var aliencolor3 = "red";
if (aliencolor3 === "green") {
    console.log("the player earned 5 points");
}
else if (aliencolor3 === "yellow") {
    console.log("the player earned 10 points");
}
else if (aliencolor3 === "red") {
    console.log("version 1 ! the player earned 15 points");
}
;
