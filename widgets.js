$(document).ready(function() {
	var dropped = false;
	var numOfFolders = 2;
	var folders = [];
	var numOfFiles = 5;
	var files = [];
	var datetime = updateDate();
	$("#date").datepicker();
	$("#date").val(datetime);
    $("#menu").menu();
	function setDraggable(){
		$(".draggable").draggable({
			revert: function( event, ui ){
				$(this).data("uiDraggable").originalPosition = {
				    top : 0,
				    left : 0
				};
				if(event){
					console.log("FADE");
					$(this).effect("fade");
					$(this).remove();
					numOfFiles--;
				}
				return !event;
			}
		});
	};
	setDraggable();

	function setDroppable(){
		$(".droppable").droppable({
			drop: function( event, ui ) {
				//$( this ).addClass("ui-state-highlight").find("p").html( "Dropped!" );
				dropped = true;
			}
		});
	};
	setDroppable();

	$("#newFile").click(function() {
		numOfFiles++;
		var HtmlElement = '<img class="draggable effect" src="images/windows_icons/086.png">';
		$("#files").append($(HtmlElement));
		// it's necesary to set the new img as draggable
		setDraggable();
	});

	$("#newFolder").click(function() {
		numOfFolders++;
		var HtmlElement = '<img class="droppable" src="images/windows_icons/218.png">';
		$("#folders").append($(HtmlElement));
		// it's necesary to set the new img as draggable
		setDroppable();
	});

	function updateDate(){
		var currentdate = new Date(); 
		var day = currentdate.getDate();
		if(day<10)
			day = "0" + day;
		var month = currentdate.getMonth()+1;
		if(month<10)
			month = "0" + month;
		var year = currentdate.getFullYear();
		return (month + "/" + day + "/" + year);
	};
});
