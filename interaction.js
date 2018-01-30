
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
     isPressed = true;
     console.log("isPressed: "+isPressed);
   }
   self.onMove = function(evt){
    if (isPressed) {
       self.xBeginPosition = self.xFinalPosition;
       self.yBeginPosition = self.yBeginPosition;
       self.xFinalPosition = getMousePosition(canvas,evt).x;
       self.yFinalPosition = getMousePosition(canvas,evt).y;
       console.log("Begin Positions X: " + self.xBeginPosition + "Y: "+self.yBeginPosition);
       console.log("Final Positions X: " + self.xFinalPosition + "Y: "+self.yFinalPosition);
    }
   }
   self.onReleased = function(evt){
      isPressed = false;
      console.log("isPressed: "+isPressed);
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



