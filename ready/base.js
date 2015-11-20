/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function(){
  console.log( "The page says:", $("h1").text() );
});

$("h1").on("click", function handleClick(event){
$("h1").text("Go!");
});

//I believe this is correct

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
