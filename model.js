
// Implémenter ici les 4 classes du modèle.
class Form {

    constructor(couleur, epaisseur) {
        this.couleur = couleur;
        this.epaisseur = epaisseur;
    }



}
class Rectangle extends Form{

    constructor(pointX, largeur, hauteur, couleur, epaisseur) {
        super(couleur, epaisseur);
        this.pointX = pointX;
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
}
class line extends Form{
    constructor(pointX,pointY,couleur, epaisseur) {
        super(couleur, epaisseur);
        this.pointX = pointX;
        this.pointY = pointY;
    }
}
function Drawing () {
   var forms =  [];
}
// N'oubliez pas l'héritage !
