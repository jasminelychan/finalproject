console.log("final project");

$(document).ready(function(){
    $(".circle").click(function(){n
        console.log("hello there");
    });

    $(".rectangle1").draggable({
    });

    $(".rectangle2").draggable({
    });

    $(".rectangle3").draggable({
    });

    $(".rectangle4").draggable({
    });

    $(".rectangle5").draggable({
    });

    $(".rectangle6").draggable({
    });

    $(".rectangle7").draggable({
    });

    $(".rectangle8").draggable({
    });

    $(".rectangle9").draggable({
    });
    
    $(".draggable2").draggable({
    });


    $('.draggable1').draggable({
        cancel: null
    });

    $('.draggable1 textarea').click(function() {
        $(this).focus();
    });

    $(".places").mouseover(function(){
        $(this).css("background-color","#12de19");    
    });
    

    $(".places").mouseout(function(){
        $(".places").css("background-color","");    
    });

    // $(".draggable").draggable();
    // $(".droppable").droppable({
    //     over:function(event,ui){
    //         $(this).css("background-color","lightblue")
    //         .html("correct!")
    //     },
    //     out:function(event,ui){
    //         $(this).css("background-color","white")
    //         .html("")
    //     }
    // });

    // let rect=element.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    // function printMousePos(event) {
    //     document.textContent =
    //       "X: " + event.clientX +
    //       " Y: " + event.clientY;
    //       console.log(printMousePos);
    //   }
      
    //   document.addEventListener("click", printMousePos);

});