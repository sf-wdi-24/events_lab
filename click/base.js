console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").on("click", function clickAndAdd(event){
	  var current_text = $("h2").text()
	  $("h2").text( current_text + " (this)" )
	});
});
