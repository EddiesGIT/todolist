
$(document).ready(function() {
	//Show tasks store in localstorage when the page loads
 	showTasks();
	
	//Submit task when user submits the form
    var $newItemForm = $("#newItemForm");
    $newItemForm.on('submit', function(e){
    	e.preventDefault();
		submitTask();
    });
	//Wouldn't it be nice to submit a task by simply pressing enter
	$("#task").keypress(function( event ) {
		  //Each key on the keyboard as a number.  13 is the number for Enter / Return
		  //event.which tells you which key was pressed.  
		  //This only works for keyboard type events such as keypress
		  if ( event.which == 13 ) {
			 event.preventDefault();
			 submitTask()
		  }
	});
	
	//Check task then add and display tasks
	function submitTask(){
	    var task = $('#task').val();
    	if(task == "") {
    		alert("This is not a Task")
    		return false;

    	} else {
			add(task);
			showTasks();
    	}
		//Clear the textbox for the next entry
		$("#task").val('')
	}
	function add(task){
		//Get whatever is in local storage
		var todos = JSON.parse(localStorage.getItem('todo'));
		
		//if todos is empty set tasks to be an empty array
		if(todos == null)
			todos = {"tasks":[]}
		
		//push the new task onto the array
		todos["tasks"].push(task);
		
		//store the array on localstorage in todo
		localStorage.setItem('todo',JSON.stringify(todos))
	}

	function showTasks(){
		//Get whatever is in local storage in todo
		var todos = JSON.parse(localStorage.getItem('todo'));
		
		//Get the array tasks from todo
		tasks = todos["tasks"]
		
		//Clear the list so we can populate it from our array
		$("#taskList").html('')
		
		//For each item in the array tasks append a new list item
		for(t in tasks){
    		$("#taskList").append('<li>' + tasks[t] + '</li>')
		}
	}
	
	//Clear localstorage when the user clicks on the button; Event handler JQuery style
	$("button").click(function(){
		localStorage.setItem('todo',JSON.stringify({"tasks":[]}));
		showTasks();
	});

});






























 
