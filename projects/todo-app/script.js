// the input box is accesed
const inputBox = document.getElementById("input-box");
// the container where the new created list will be stored
const listContainer = document.getElementById("list-container");

// This function will add the input task to the list container
function addTask(){
    if(inputBox.value === ""){// if no input is given then no task is added
        alert("You must Write something!");
    }else{// when input is given and Add button is pressed
        let li = document.createElement("li");// new list element is created to show and store input
        li.innerHTML = inputBox.value;// the input text by user is passed to li
        listContainer.appendChild(li);// this li element is stored in the list container
        let span = document.createElement("span");// span tag created to delete any li
        span.innerHTML = "\u00d7";// the X symbol added 
        li.appendChild(span); // this span is added after the li
    }
    inputBox.value = "";
    saveData();// this saves all the the data is browsers local storage
}
//function to add the delete functionality of li items
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){// if clicked on li the task is marked as done
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){// if clicked on span or the X symbol the task is removed / deleted from dom
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// function to save the input data in browser local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//function to display the saved data when we again open the browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();// this must run always