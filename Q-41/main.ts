//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//define a function to print each magician name frem array
function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}

//define an array containing magicians name
let magician_names =[ "hamza" , "usama" ,"ali"]


 // call the function to print each magicaian names
 show_magicians(magician_names)