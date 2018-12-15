// if (jQuery) {
// 	alert()
// }
$("div").css("background","purple");
// $("div.highlight").css("width","200px"); Also Correct for line 5
$(".highlight").css("width","200px");
$("#third").css("border","1px solid orange");
$("div:first-of-type").css("color","pink");
// $("div:first").css("color","pink"); Same but slower because it comes from jQuery instead of css.


// .text

// $("li").text(); -> "HelloWorld"

// $("ul").text(); -> "
// 		Hello
// 		World
// 	"

//If you change the text in the li, every single li will have that text. Does not run html like .html does.


// $("img").attr("width"); This will give you how many pixels does the width has,


// $("img").attr("width", "500px"); Change the width


$("img").attr("width");  //$("img").attr("width", This can be an object. { color:"green", etc.});

// $("img").last().attr("src", "https:www.google.com");
// .first() also exists

// $("select").val();


// .addClass can be used at the same time you use removeClass. toggleClass():

