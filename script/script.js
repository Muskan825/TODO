var todoInput = document.querySelector(".item");
var btn = document.querySelector(".btn");
var todoList = document.querySelector(".todo-list");

btn.onclick = create;
todoList.onclick = action;
var data;
let todos = [];
function create(){
    data = todoInput.value;
    if(data!=""){

        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");
        var newli = document.createElement("li");
        newli.classList.add("to-do-item");
        newli.innerText = data;
        newDiv.appendChild(newli);
        var cmpbtn = document.createElement("button");
        cmpbtn.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
        cmpbtn.classList.add("cmpltBtn");
        newDiv.appendChild(cmpbtn);
        var delbtn = document.createElement("button");
        delbtn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        delbtn.classList.add("delBtn");
        newDiv.appendChild(delbtn);
        todoList.appendChild(newDiv);
        todoInput.value="";
    }
    else{
        alert("Input Field cannot be Empty");
    }
}

function action(e){
    var x = e.target;
    console.log(x);

    if(x.classList[0]=="cmpltBtn"){
        var parent = x.parentElement;
        parent.classList.toggle("todo-done");
        console.log("Compelted Task");
    }
    if(x.classList[0]=="delBtn"){
        console.log("Deleted Succesfull");
        var parent = x.parentElement;
        parent.remove();
    }
}