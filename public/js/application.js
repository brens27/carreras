$(document).ready(function() {
 //$('#counter').hide();

 	$("button").on("click",function(){
  		setTimeout(counter,1000);
  		setTimeout(function() { $('#counter').text(2); }, 2000);
  		setTimeout(function() { $('#counter').text(3);}, 3000);
  		setTimeout(function() { $('#counter').text("Go!");}, 4000);
  		setTimeout(keypress,4100);
 		$(this).prop("disabled",true);
 	});
});

function update_player_position(player){
	$("#" + player +  " .active").removeClass("active").next().addClass("active");
}

function counter(){
	$('#counter').text(1);
	$('button').prop("disabled",false);
}

function keypress(){	
	var time_start = $.now()
	$(document).keypress(function(event) {
        if ( event.which == 97){
		 	update_player_position('jugador_1');
		 	if ($("#jugador_1").children().last().hasClass('active')){
		 	var time_end = $.now()
		 	alert('jugador 1 ganador ' + ((time_end - time_start) / 1000)+'s');
		 	}
		 }
		 if( event.which == 108){
		 	update_player_position('jugador_2');
		 	if ($("#jugador_2").children().last().hasClass('active')){
		 		var time_end = $.now()
		 		alert('jugador 2 ganador ' + ((time_end - time_start) / 1000)+'s');
		 	}
        }
	});
}