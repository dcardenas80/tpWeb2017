
// La création d'un Dnd requière un canvas et un interacteur.
var canvas = document.getElementById('myCanvas');
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  var self = this;
  self.xBeginPosition = 0;
  self.yBeginPosition = 0;
  self.xFinalPosition = 0;
  self.yFinalPosition = 0;
  self.isPressed = false;
  
	// Developper les 3 fonctions gérant les événements
   self.onPressed = function(evt){
     self.isPressed = true;
     console.log("isPressed: "+self.isPressed);
     self.xBeginPosition =getMousePosition(canvas,evt).x;
     self.yFinalPosition = getMousePosition(canvas,evt).y;
     self.interactor.onInteractionStart(this);
   }
   self.onMove = function(evt){
    if (self.isPressed) {

       self.xFinalPosition = getMousePosition(canvas,evt).x;
       self.yFinalPosition = getMousePosition(canvas,evt).y;
       console.log("Begin Positions X: " + self.xBeginPosition + "Y: "+self.yBeginPosition);
       console.log("Final Positions X: " + self.xFinalPosition + "Y: "+self.yFinalPosition);
      self.interactor.onInteractionUpdate(this);
    }
   
   }
   self.onReleased = function(evt){
      self.isPressed = false;
      console.log("isPressed: "+self.isPressed);
      self.interactor.onInteractionEnd(this);
   }
  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', self.onPressed, false);
  canvas.addEventListener('mousemove',self.onMove, false);
  canvas.addEventListener('mouseup', self.onReleased, false);
};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



