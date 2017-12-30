$(document).ready(function() 
{
	setBindings();
});

function setBindings()
{
	$("nav a").click(function(e)
	{
		e.preventDefault(); //stops initial anchor tags

		//now animate
		var sectionID = e.currentTarget.id + "Section";
		
		//jquery call
		$("html, body").animate({scrollTop: $("#" + sectionID).offset().top}, 1000)
	})
}