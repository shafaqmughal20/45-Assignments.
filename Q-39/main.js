//.39City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
//calling a function and print a return value
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));
city_country("Perth", "Australia");
console.log(city_country("Perth", "Australia"));
city_country("Dubai", "UAE");
console.log(city_country("Dubai", "UAE"));
