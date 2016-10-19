   
(function(){
  "use strict";
  $("#minute").html("00");
  $("#seconde").html("00");
  // object
  var app = {

    timer:null,
    temps:null,
    intervalID:null,
    inputmin:null,
    inputsec:null,
    total:null,
    minu:null,
    seco:null,


    init: function(){
      app.listeners();
    },

    listeners:function(){
      $("#start").click(app.start);
      $("#stop").on('click', app.stop);
      $("#reset").on('click', app.reset);
      $("#réinitialiser").on('click', app.réinitialiser);
    },


    start:function(){
      app.timer=120,
      console.log(app.timer);
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
  
  console.log(timer);
},

reset:function(){
  app.temps=app.timer,
  console.log(app.timer);
  app.start();
},


réinitialiser:function(){


    // Je récupères les valeurs dans les inputs
    app.inputmin=$("#inputMinutes").val(),
    app.inputsec=$("#inputSecondes").val(),
    // j'assigne parseint aux inputs
    app.minu = parseInt(app.inputmin/60, 10);
    app.seco = parseInt(app.inputsec - app.minu*60);

    // J'affiche les inputs en haut 
    $("#minute").html(app.inputmin);
    $("#seconde").html(app.inputsec);

    if(app.inputmin < 10){
     app.inputmin = '0'+ app.inputmin; 
   }
   if(app.inputsec < 10){
     app.inputsec = '0' + app.inputsec;
   }
  

    app.timer=app.minu+app.seco,
    

    console.log(app.inputmin);
    console.log(app.inputsec);
    console.log(app.timer);
    
  },

};

app.init();

})();
