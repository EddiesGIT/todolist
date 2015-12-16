$(document).ready(function() {
 
       function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;

    var $newItemForm = $("newItemForm");
    $newItemForm.on('submit', function(e){
    	e.preventDefault();
    	var text = $('input').val();
    	if(text == "") {
    		alert("This is not a Task")
    		return false;

    	} else {
    		$( "ul").append('<li>' + text + '</li>')
    	}

    	
  
})
 };

});


































 
