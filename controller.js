
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
     window.deleteForm = function(button){
          pencil.deleteForm(button);
    }
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
    new DnD(canvas, this);
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
        switch (this.currEditingMode) {
            case 0:
                
                this.currentShape = new Rectangle(this.currColour,this.currLineWidth,DnD.xBeginPosition, DnD.yBeginPosition, 0, 0);
                break;
            case 1:
                this.currentShape = new Line( this.currColour, this.currLineWidth,DnD.xBeginPosition, DnD.yBeginPosition, DnD.xBeginPosition, DnD.yBeginPosition);
                break;
        }
        drawing.paint(ctx);
        this.currentShape.paint(ctx);
    }.bind(this);

    this.onInteractionUpdate = function(DnD){

        switch (this.currEditingMode) {
            case 0:
                 if (DnD.xBeginPosition <= DnD.xFinalPosition) {
					this.currentShape.setHauteur = DnD.xBeginPosition - DnD.xFinalPosition;
				} else {
					this.currentShape.points.x = DnD.xFinalPosition;
					this.currentShape.hauteur = DnD.xBeginPosition -  DnD.xFinalPosition;
				}

				if (DnD.yBeginPosition <= DnD.yFinalPosition) {
					this.currentShape.largeur = DnD.yFinalPosition - DnD.yBeginPosition;
				} else {
					this.currentShape.points.y = DnD.yFinalPosition;
					this.currentShape.largeur = DnD.yFinalPosition - DnD.yBeginPosition;
				}
                break;
            case 1:
                    this.currentShape.pointY = {
                        x : DnD.xFinalPosition,
                        y : DnD.yFinalPosition
                    };
                break;
        }
        drawing.paint(ctx);
        this.currentShape.paint(ctx);
    }.bind(this);

    this.onInteractionEnd = function(DnD){
	
        drawing.addShape(this.currentShape);
        this.updateList();
        this.currentShape = 0;
        drawing.paint(ctx);
    }.bind(this);
    this.updateList = function(){
        listElem = document.getElementById('shapeList');
        html = "";
        index = 0;
        drawing.getForms().forEach(function(x) {
        html += "<li> Forme " + (index + 1)+" : " + x.formType
            + "<button type='button' class='btn btn-default'"
            + "value = '"+index+"'"
            + "onClick='deleteForm(this)'>"
            + "effacer"
            + "</button>"
            + "</li>";
        index++;
        });
        listElem.innerHTML = html;
    }.bind(this);

    this.deleteForm = function (button){
        index = button.value;
        drawing.removeForm(index);
        drawing.paint(ctx);
        this.updateList();
    }.bind(this);
};


