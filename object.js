   
(function(){
  // object
  window.app = {
  	
    timer:20,
   
    intervalID:null,
    init: function(){
      app.listeners();
  	},

  	listeners:function(){
  		$("#start").click(app.start);
  		$("#stop").on('click', app.stop);
  		$("#reset").on('click', app.reset);
  	},


  	start:function(){
      app.stop();
      app.intervalID=setInterval(app.decremente,1000);

    },

    decremente : function () {
      app.timer--;
      app.afficher();
      if(app.timer<=0){
       clearInterval(app.intervalID);

     }
    },

   stop:function(){
    clearInterval(app.intervalID);

  },
  afficher:function(){

    var minute = parseInt(app.timer/60, 10);
    var seconde = parseInt(app.timer - minute*60);


    if(minute < 10){
     minute = '0'+ minute; 
   }
   if(seconde < 10){
     seconde = '0' + seconde;
   }
   $("#minute").html(minute);
   $("#seconde").html(seconde);

 },

 recuperer:function(){
  var sec =$("#inputSecondes").val();
  var min =$("#inputMinutes").val();
  },

reset:function(){
  return app.start();
  
},
};

app.init();

})();
