//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.hide();
});

$(".previous").click(function(){
	
	
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	

	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.hide();
});

$(".submit").click(function(){
	return false;
})
