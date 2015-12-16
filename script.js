$(document).ready(function() {
  var enteredText = $("input").val()

     $("#newItemForm").on("submit"), function(e){
        e.preventDefault();

           $("ul").append("<li>")+$("#itemDescription").val()+"</li>");
             $("li").on("click",function(){
                $(this).remove();
             });
           });
                $("li").on("click", function(){
                    $(this).remove();
                })


     });
      


































 
