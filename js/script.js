$(document).ready(function(){
	createDiv();

	$("#wrapper > .cell").on("mouseenter", function(){
		$(this).removeClass("cell").addClass("highlight");
	})

});

function createDiv() {
	for (var i = 0; i < 16; i++) {
		$("<div></div>").attr("class", "cell").appendTo("#wrapper");
	};

}