$(document).ready(function() {
			var $newItemForm = $("#newItemForm");
			$newItemForm.on('submit', function(e){
				e.preventDefault();
				var text = $('#task').val();
				if(text == "") {
					alert("This is not a Task")
					return false;

				} else {
					$( "ul").append('<li>' + text + '</li>')
				}
			})
});