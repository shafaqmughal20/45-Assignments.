//31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames=["hamza","sana", "admin","ahmed","hira"]
//removing all the values from array
userNames =[]
if(userNames.length === 0)
    {console.log("your array is empty. we need to find some user!")}

else{
    //for loop
userNames.forEach(oneUser =>{
    if (oneUser === "admin")
        {console.log(`hello ${oneUser}, would you like to see a status report?`)}
    else
    {console.log(`Hello ${oneUser}, thank you for logging in again.`)}
})
}
 