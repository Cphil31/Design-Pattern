   
(function(){
  // object
  window.app = {
  	timer : 100,
  	intervalID:null,
  	init: function(){
  		app.listeners();

  	},
  	listeners: function(){
  		$("#start").click(app.start);
  		$("#stop").on('click', app.stop);
  	},
  	start: function(){
  		app.intervalID=setInterval(app.decremente,1000);
  		console.log("ok");
  	},

  	decremente : function () {
  		app.timer--;
  		app.afficher();
  		if(app.timer==0){
  			clearInterval(app.intervalID);
  		}
  	},

  	stop:function(){
  		clearInterval(app.intervalID);

  	},
  	afficher:function(){
  		var minute = parseInt(app.timer/60, 10);
  		var seconde = parseInt(app.timer - minute*60);
  		$("#minute").html(minute);
  		$("#seconde").html(seconde);
  	}
  };

  app.init();

})();
