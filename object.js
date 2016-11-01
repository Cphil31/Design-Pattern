   
(function(){
  "use strict";
  $("#minute").html("00");
  $("#seconde").html("00");
  
  var app = {

    timer:null,
    temps:null,
    intervalID:null,
    inputMin:null,
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
      $("#réinitialiser").on('click', app.restart);
    },


    start:function(){
      var minute = parseInt($("#inputMinutes").val()*60) ;
      var seconde = parseInt($("#inputSecondes").val())<0;
      app.timer=minute+seconde,
      console.log(minute);
      console.log(seconde);
      console.log(app.inputSecondes);
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
   

    // j'assigne parseint aux inputs
    app.minu = parseInt(app.inputMin/60, 10);
    app.seco = parseInt(app.inputsec - app.minu*60);
    // J'affiche les inputs en haut 
    $("#minute").html(app.inputMin);
    $("#seconde").html(app.inputsec);

    if(app.inputMin < 10){
     app.inputmin = '0'+ app.inputmin; 
   }
   if(app.inputsec < 10){
     app.inputsec = '0' + app.inputsec;
   }


   app.timer=app.inputmin+app.inputsec,

   console.log(app.inputmin);
   console.log(app.inputsec);
   console.log(app.timer);


 },
restart:function(){
  window.location.reload()
},
};

app.init();

})();
