$(document).ready(function(){
	createGrid();

	$("#top > #reset").on("click", function() {
		$("#wrapper").find(".highlight").removeClass("highlight");
		$("#wrapper").find(".cell").removeClass("cell");

		createGrid();
	})



});

function createGrid() {
	var gridSize = prompt("Choose your grid size:");

	for (var i = 0; i < gridSize*gridSize; i++) {
		$("<div></div>").attr("class", "cell").appendTo("#wrapper");
	};

	$("#wrapper > .cell").on("mouseenter", function(){
		$(this).removeClass("cell").addClass("highlight");
	})
}

