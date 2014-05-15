$(document).ready(function(){
	createGrid();
	prompt("I run when loaded")
	$("#top > #reset").on("click", function() {
		$("#wrapper").find(".highlight").remove(".highlight");
		$("#wrapper").find(".cell").remove(".cell");

	createGrid();
	});



});

function createGrid() {
	var gridSize = prompt("Choose your grid size (up to 128):");
	
	
	if (gridSize > 0 && gridSize < 129) {
		var cell_size = $("#wrapper").width()/gridSize - 2;

		for (var i = 0; i < gridSize; i++) {
			for(var j = 0; j < gridSize; j++) {
				$("<div class='cell'></div>").appendTo("#wrapper");
			}
			//$("#wrapper").append("<div class='new_row'></div>")
		}
		
		$(".cell").css("width", cell_size);
		$(".cell").css("height", cell_size);

		$("#wrapper > .cell").on("mouseenter", function(){
			$(this).addClass("highlight");
		});

	}

	else {
		alert("Invalid input")
	}
}

