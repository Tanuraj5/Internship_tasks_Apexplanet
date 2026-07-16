let tasks = [];

if(localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    showTasks();

}



document.getElementById("addbtn").addEventListener("click", function(){
    let x = document.getElementById("task").value.trim();

    if(x == ""){
        alert("Enter a Task");
        return;
    }

    tasks.push({
        name : x,
        completed : false

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("task").value = "";

    showTasks();

});



function showTasks(){

    document.getElementById("tasklist").innerHTML = "";

    tasks.forEach(function(task,index){

        let li = document.createElement("li");

        li.innerHTML = `
        <span class="tasktext">${task.name}</span>
        <button class="delete">Delete</button>
        `;

        if(task.completed){
            li.querySelector(".tasktext").style.textDecoration = "line-through";
            li.querySelector(".tasktext").style.opacity = "0.5";

        }

        li.querySelector(".tasktext").addEventListener("click",function(){
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showTasks();

        });

        li.querySelector(".delete").addEventListener("click",function(){
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showTasks();

        });

        document.getElementById("tasklist").append(li);

    });

}







let products = [

    {
        name: "Laptop",
        category: "Laptop",
        price: 65000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },

    {
        name: "Gaming Mouse",
        category: "Accessories",
        price: 1800,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },

    {
        name: "Smartphone",
        category: "Mobile",
        price: 28000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },

    {
        name: "Keyboard",
        category: "Accessories",
        price: 2500,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
    },

    {
        name: "MacBook",
        category: "Laptop",
        price: 95000,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        name: "iPhone",
        category: "Mobile",
        price: 70000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
    }

];

showProducts(products);


function showProducts(arr){

    document.getElementById("productlist").innerHTML = "";
    arr.forEach(function(product){
        let div = document.createElement("div");
        div.className = "productcard";
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button>${product.category}</button>`;

        document.getElementById("productlist").append(div);

    });

}




document.getElementById("category").addEventListener("change", function(){
    let value = this.value;
    if(value == "All"){
        showProducts(products);
    }

    else{
        let filtered = products.filter(function(product){
            return product.category == value;

        });

        showProducts(filtered);

    }

});





document.getElementById("sort").addEventListener("change", function(){

    let value = this.value;
    let temp = [...products];

    if(value == "low"){
        temp.sort(function(a,b){
            return a.price - b.price;

        });
    }

    else if(value == "high"){
        temp.sort(function(a,b){
            return b.price - a.price;

        });

    }
    showProducts(temp);

});