<script>
$(document).ready(function(){
    $(".click1").click(function(){
        $("div#calendarTemporary").removeAttr('id');
    });
});

$(".click1").click(function(){
    $("div#timeTable").css( "display", "inline-block" );
});

$(".click2").click(function(){
    $("div.form").css( "display", "inherit" );
});

$(document).ready(function(){
    $(".button").click(function(){
        $(".booking").replaceWith('<div class="success"><h1>Thank You!</h1><p>Your booking was successfuly placed.</p></div>');
    });
});

$(function() {                       
  $(".click1").click(function() {  
    $(this).addClass("selected");      
  });
});

$(function() {                       
  $(".click2").click(function() {  
    $(this).addClass("selected");      
  });
});
</script>