$(document).ready(function() {
	var dropped = false;
	var folders = [];
	var files = [];
	var currentdate = new Date(); 
	var day = currentdate.getDate();
	if(day<10)
		day = "0" + day;
	var month = currentdate.getMonth()+1;
	if(month<10)
		month = "0" + month;
    var year = currentdate.getFullYear();
	var datetime = month + "/" + day + "/"  + year;
	$("#date").datepicker();
	$("#date").val(datetime);
    $( "#menu" ).menu();

	$( ".draggable" ).draggable({
		revert: function( event, ui ){
			$(this).data("uiDraggable").originalPosition = {
		        top : 0,
		        left : 0
			};
			return !event;
		}
	});

	$( ".droppable" ).droppable({
		drop: function( event, ui ) {
			//$( this ).addClass("ui-state-highlight").find( "p" ).html( "Dropped!" );
			dropped = true;
		}
	});
});
