
var AllTodos = [];

var Type_AllTodos = JSON.stringify(AllTodos)

localStorage.setItem("AllTodos", Type_AllTodos)


function AddTodoFunc() {



    var taskInput = document.getElementById("userTodo").value
    var dateInput = document.getElementById("userDate").value


    var newUser = {
        task: taskInput,
        date: dateInput,
        status: "incomp"
    }


    AllTodos.push(newUser)


    var Type_AllTodos = JSON.stringify(AllTodos)

    localStorage.setItem("AllTodos", Type_AllTodos)

    ReadTask();
}





function ReadTask() {
    var tbody = document.getElementById("tbodyData");
    tbody.innerHTML = " ";
    // localstorage se sare task manga rahe hen 

    var items = localStorage.getItem("AllTodos");


    // todoItems ek array he jisme mene localstorage se data retrv kraker save kia he array format me
    var todoItems = JSON.parse(items)



    todoItems.forEach(
        (element, index) => {




            tbody.innerHTML += `
            
             <tr id=${index}>

                    <th>${index + 1}</th>
                    <td>${element.task}</td>
                    <td>${element.date}</td>
                    <th scope="col">
                            <button class="btn btn-secondary btn-sm" onclick="completeTask('${element.task}')">Complete</button>
                        <button class="btn btn-danger btn-sm">Delete</button>
                    </th>

                </tr>
           
            `


        }
    )

}




function completeTask(taskName) {
    let todolist = JSON.parse(localStorage.getItem("AllTodos"))

    let SingleTodo = todolist.find(optionskey => optionskey.task == taskName);

    console.log(SingleTodo)

    SingleTodo.status = "comp"


    console.log(SingleTodo);


    console.log(SingleTodo.status)


    localStorage.setItem("AllTodos", JSON.stringify(todolist));
}


