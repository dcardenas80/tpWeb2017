
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    var pencil = this;
    document.getElementById('butRect').onclick = function(){
        pencil.currEditingMode = editingMode.rect;
    }

    document.getElementById('butLine').onclick = function(){
        pencil.currEditingMode = editingMode.line;
    }

    document.getElementById('spinnerWidth').onchange = function(){
        pencil.currLineWidth = this.value;
    }

    document.getElementById('colour').onchange = function(){
        pencil.currColour = this.value;
    }
	
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
        switch (this.currEditingMode) {
            case 0:
                this.currentShape = new Rectangle(DnD.xBeginPosition, DnD.yBeginPosition, 0, 0, this.currLineWidth, this.currColour);
                break;
            case 1:
                this.currentShape = new Line(DnD.xBeginPosition, DnD.yBeginPosition, DnD.xBeginPosition, DnD.yBeginPosition, this.currLineWidth, this.currColour);
                break;
        }
        drawing.paint(ctx);
        this.currentShape.paint(ctx);
    }

    this.onInteractionUpdate = function(DnD){
        switch (this.currEditingMode) {
            case 0:
                this.currentShape.width = DnD.xFinalPosition - this.currentShape.x;
                this.currentShape.height = DnD.yFinalPosition - this.currentShape.y;
                break;
            case 1:
                this.currentShape.xFinalPosition = DnD.xFinalPosition;
                this.currentShape.yFinalPosition = DnD.yFinalPosition;
                break;
        }
        drawing.paint(ctx);
        this.currentShape.paint(ctx);
    }

    this.onInteractionEnd = function(DnD){
	
        switch (this.currEditingMode) {
            case 0:
                this.currentShape.width = DnD.xFinalPosition - this.currentShape.x;
                this.currentShape.height = DnD.yFinalPosition - this.currentShape.y;
                break;
            case 1:
                this.currentShape.xFinalPosition = DnD.xFinalPosition;
                this.currentShape.yFinalPosition = DnD.yFinalPosition;
                break;
        }
        drawing.ajouterForme(this.currentShape);
        var b = modifierListeForme(this.currEditingMode, this.currColour, drawing.getIndex(this.currentShape));
        b.onclick = function() {
            var id = this.parentNode.id;
            delete drawing.forme[id];
            drawing.paint(ctx);
            var element = document.getElementById(id);
            element.outerHTML = "";
            delete element;
        };
        drawing.paint(ctx);
    }
};


