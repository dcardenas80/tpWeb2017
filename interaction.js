
// La création d'un Dnd requière un canvas et un interacteur.
var canvas = document.getElementById('myCanvas');
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
 
  this.xBeginPosition = 0;
  this.yBeginPosition = 0;
  this.xFinalPosition = 0;
  this.yFinalPosition = 0;
  this.isPressed = false;
  
	// Developper les 3 fonctions gérant les événements
   this.onPressed = function(evt){
     this.isPressed = true;
     this.xBeginPosition =getMousePosition(canvas,evt).x;
     this.yBeginPosition = getMousePosition(canvas,evt).y;
     console.log();
     interactor.onInteractionStart(this);
   }
   this.onMove = function(evt){
    if (this.isPressed) {

       this.xFinalPosition = getMousePosition(canvas,evt).x;
       this.yFinalPosition = getMousePosition(canvas,evt).y;
       console.log("Begin Positions X: " + this.xBeginPosition + "Y: "+this.yBeginPosition);
       console.log("Final Positions X: " + this.xFinalPosition + "Y: "+this.yFinalPosition);
      interactor.onInteractionUpdate(this);
    }
   
   }
   this.onReleased = function(evt){
    this.isPressed = false;
      console.log("isPressed: "+this.isPressed);
      interactor.onInteractionEnd(this);
   }
  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.onPressed, false);
  canvas.addEventListener('mousemove',this.onMove, false);
  canvas.addEventListener('mouseup', this.onReleased, false);
};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



