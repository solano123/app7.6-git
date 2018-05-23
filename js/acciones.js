// JavaScript Document

$(document).ready(function (e) {
	document.addEventListener("Deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"Aplicacion7","Aceptar"});
		});
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Qué quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(2);
					break;
					
					case2:
					navigator.notification.vibrate(2000);
					break;
				}
			},"Aplicacion7","Beep,Vibrar,Cancelar");	
	});
},false);
});