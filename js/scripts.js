var color= function(){

};



$(document).ready(function (){
  $("#survey form").submit(function(event){
    var nameInput = $("#name").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();
    var food = $("#food").val();
    var superhero= $("input:radio[name=superhero]:checked").val();
    $(".name").text(nameInput);
    $(".born").text(dob);
    $(".color").text(favoriteColor);
    $(".food").text(food);
    $(".superhero").text(superhero);
    $("#answers").show();
  event.preventDefault();
  });
});
