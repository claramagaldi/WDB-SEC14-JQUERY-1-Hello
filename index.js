//console.log($("h1").css("color")); //getter
//$("h1").css("color", "green"); //setter

//Better practice (not using method css)
$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");
console.log($("h1").attr("class")); //show classes

//Has class?
console.log($("h1").hasClass("margin-50"));

//Changes text
$("h1").text("Hello");

console.log($("a").attr("href")); //getter
$("a").attr("href", "https://www.google.com.br") //setter

//Event listener
$("h1").click(function() {
  $("h1").css("color", "blue");
});

$("button").click(function() {
  $("h1").css("color", "green")
});

$("input").keydown(function(event) {
  console.log(event.key);
})

$(document).keydown(function(event) {
  $("h1").html(event.key);
})

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})

$("h1").on("mouseleave", function() {
  $("h1").css("color", "yellow");
})

$("h1").before("<button>Before h1</button>")
$("h1").after("<button>After h1</button>")
$("h1").prepend("<button>Prepend h1</button>")
$("h1").append("<button>Append h1</button>")
//$("button").remove();

$(".hideShow").on("click", function(){
  $("h1").hide();
  setTimeout(function() {
    $("h1").show();
  }, 500);
})

$(".fade").on("click", function(){
  $("h1").fadeOut();
  setTimeout(function() {
    $("h1").fadeIn();
  }, 300);
})

$(".upDown").on("click", function(){
  $("h1").slideUp();
  setTimeout(function() {
    $("h1").slideDown();
  }, 300);
})

$(".toggle").on("click", function(){
  $("h1").toggle();
})

$(".fadeToggle").on("click", function(){
  $("h1").fadeToggle();
})

$(".slideToggle").on("click", function(){
  $("h1").slideToggle();
})

$(".animate").on("click", function(){
  $("h1").animate({opacity: 0.5}); //only numeric values accepted //% is written in double quotation "%50"
  setTimeout(function() {
    $("h1").animate({opacity: 1});
  }, 100);
})

$(".chain").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5}).animate({opacity: 1}); //only numeric values accepted //% is written in double quotation "%50"
})
