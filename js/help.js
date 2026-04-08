var to = 0;
function showSubsection(header, clazz) {
	header.next(clazz).show();
}

function hideSubsection(header, clazz) {
	header.next(clazz).hide();
}

function toggleSubsection(header, clazz) {
	header.next(clazz).toggle();
}

function expandAll() {
	$(".toggleable").show();
}

function collapseAll() {
	$(".toggleable").hide();
}

function expandOperations()
{
	$(".toggleable.operations_section").show();
}

function collapseOperations()
{
	$(".toggleable.operations_section").hide();
}

function expandOperation(link)
{
	$(link).parents(".subsection2").find(".toggleable").show();
}

function collapseOperation(link)
{
	$(link).parents(".subsection2").find(".toggleable").hide();
}

function jumpToLinkedCall()
{
	var hash = location.hash.replace( /^#/, '' );
	if (hash.startsWith('call_')) {
	    var callBlock = $("#block" + hash);
	    if (callBlock) {
	        callBlock.parents('.subsection1').show();
	        callBlock.children('.subsection2').show();
	        $('html, body').animate({
	            scrollTop: callBlock.offset().top + 'px'
	        }, 'fast');
	    }
	}
}

function jumpToType(id)
{
	var typeBlock = $("#" + id);
	if (typeBlock) {
		typeBlock.parents('.subsection3').show();
		$('html, body').animate({
            scrollTop: typeBlock.offset().top + 'px'
        }, 'fast');
	}	
}

$(function(){
	var options = {};
	
	$(".jsonCode").each(function() {
		var t = $(this).text();
		try {
		t = JSON.stringify(JSON.parse(t), null, 4);
		} catch(err) {}
		$(this).text(t); 
	});
	
	jumpToLinkedCall();
});
