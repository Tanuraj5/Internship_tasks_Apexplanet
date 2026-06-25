document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name == ""){
        alert("Please Enter Name");
        return;
    }

    if(email == ""){
        alert("Please Enter Email");
        return;
    }

    if( !email.includes('@') ){
        alert("Enter Valid Email");
        return;
    }

    if(message == ""){
        alert("Please Enter Message");
        return;
    }

    alert("Form Submitted Successfully");

    document.getElementById("form").reset();

});



// Todo List

document.getElementById("addbtn").addEventListener("click" , function() {

    let x = document.getElementById("task").value.trim();

    if( x !== "") {

        let l = document.createElement("li");

        l.innerHTML = `${x} <button class="delete">Delete</button>`;

        document.getElementById("ul").append(l);

        document.getElementById("task").value = "";

    }

});



document.getElementById("ul").addEventListener("click" , function(e) {

    if(e.target.tagName == "BUTTON") {

        e.target.parentElement.remove();

    }

    else {

       e.target.style.textDecoration = "line-through";
       e.target.style.opacity = "0.5";

    }

});