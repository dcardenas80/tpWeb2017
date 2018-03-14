
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Form.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
}

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
       
        ctx.beginPath();
        ctx.strokeStyle = this.getCouleur;
        ctx.lineWidth = this.getEpaisseur;
        console.log(this.getPointX+" "+ this.getPointY+" "+  this.getLargeur+" "+  this.getHauteur);
        console.log(this.getCouleur);
        ctx.rect(this.getPointX, this.getPointY, this.getLargeur, this.getHauteur);
        ctx.stroke();
    };
    
Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
     ctx.strokeStyle = this.getCouleur;
     ctx.lineWidth = this.getEpaisseur;
        
        ctx.moveTo(this.getXBegin, this.getYBegin);
        ctx.lineTo(this.getXFinal, this.getYFinal);
        ctx.stroke();
    
};
    
    
Drawing.prototype.paint = function(ctx) {
        console.log(this.getForms);
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.getForms().forEach(function(x) {
            // now fill the canvas
            console.log("dedans" );
        
            x.paint(ctx);
        });
};
    
    