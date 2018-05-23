// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"aplicación7","Aceptar"});
		}); //cierre deslizar izquierda
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(2);
					break;
					
					case 2:
					navigator.notification.vibrate(2000);
					break;
				}
			},"aplicación7","Beepear,Vibrar,Cancelar");
		});// cierre del deslizar derecha
	}, false);// cierre del deviceready
});// cierre del document principal
