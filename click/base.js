console.log("Sanity Check: JS is working!");

$(document).ready(function(){

});

$("span").on("click", function(event){
$("ul").text($(this));
});


/* Breon explained to me

That you need a variable to contain the text
for each span.

Than you append your stored variable


*/