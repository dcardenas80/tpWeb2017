
// Implémenter ici les 4 classes du modèle.
class Form {

    constructor(couleur, epaisseur) {
        this.couleur = couleur;
        this.epaisseur = epaisseur;
    }

    get getCouleur(){
        return this.couleur;
    }
    get getEpaisseur() {
        return this.epaisseur;
    }
}
class Rectangle extends Form{

    constructor(couleur, epaisseur,pointX, pointY, largeur, hauteur) {
        super(couleur, epaisseur);
        this.points = {
            x : pointX,
            y : pointY
        };
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.formType = "Rectangle";
    }

    get getPointX(){
        return this.points.x;
    }
    get getPointY(){
        return this.points.y;
    }
    get getLargeur(){
        return this.largeur;
    }
    get getHauteur(){
        return this.hauteur;
    }
     setLargeur(lar){
        this.largeur = lar;
    }
     setHauteur(hau){
        this.hauteur = hau;
    }
    get getType() {
        return "Rectangle";
    }
}
class Line extends Form{
    constructor(couleur, epaisseur,xBegin,yBegin,xFinal,yFinal) {
        super(couleur, epaisseur);
        this.pointX = {
            x : xBegin,
            y : yBegin
        }
        this.pointY = {
            x : xFinal,
            y : yFinal
        }
        this.formType = "Line";
    
    }

    get getXBegin(){
        return this.pointX.x;
    }
    get getYBegin(){
        return this.pointX.y;
    }
    get getXFinal(){
        return this.pointY.x;
    }
    get getYFinal(){
        return this.pointY.y;
    }
    get getType() {
        return "Line";
    }
}
function Drawing () {
    this.forms = new Array();

    this.getForms = function() {
        return this.forms;
    }.bind(this);

    this.addShape = function(form) {
        this.forms.push(form);
    }.bind(this);
    this.removeForm = function(index){
        this.forms.splice(index, 1);
    }.bind(this);


}
// N'oubliez pas l'héritage !
