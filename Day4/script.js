var uname = "admin";
let password = "admin";
function authenticateUser(){
    n = document.getElementById("name").value;
    p = document.getElementById("pass").value;
    if(n==uname && p==password){
        if (n.length<10){
            var message="Username is too short"
        }
        var message= "Logged in succesfully!";
    }
    else{
        var message="Wrong email ID or password";
    }
    alert(message);
}