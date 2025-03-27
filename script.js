//your code here
let ol = document.getElementById("todoList");
document.getElementById("addTodoBtn").addEventListener("click",()=>{
	let input = document.getElementById("newTodoInput").value;
	let li = document.createElement("li");
	if(input!==""){
		li.textContent = input;
		ol.appendChild(li);
	}
	
});

document.getElementById("newTodoInput").addEventListener("click",()=>{
	document.getElementById("newTodoInput").value = "";
});
