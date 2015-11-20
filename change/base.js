console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

});

$("#total").on("change","input",function(){
	return ($("#left").text(); + $("#right").text();
});

//Not right, but I believe this is the general idea
//You want to aim for