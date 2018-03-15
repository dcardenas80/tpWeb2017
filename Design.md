# Design

Le design de ce projet s'appuie sur le patron mvc décrit ci-après

## Modele
le fichier Model.js, contient les objets et ses propriétés, les objets dans ce modelé sont:
- Forme : C'est l'objet avec les propriétés communes des formes Rectangle et ligne.
- Ligne : Ceci est l'objet charge de la représentation d'une ligne.
- Rectangle: Celle-ci est la représentation de la forme rectangle.
- Design: Object charge de garder, ajoute et effacer les formes de la toile.

## Vue
Le fichier View.js contient les méthodes pour peintre les formes soient rectangle ou ligne dans le design qui sera montré à l'utilisateur dans l'interface web, ici on initialise les propriétés de chaque forme et donne l'instruction au canvas de montrer la forme.

## Controleur 

Le contrôleur à travers l'objet pencil est chargé de consulter les valeurs définies pour l'utilisateur dans l'interface web, c'est-a-dire, il collecte les valeurs du type de colleur, épaisseur, la forme souhaite pour l'utilisateur, les points où il faut designer le design (Le fichier iteraction.js est chargé de collecter les points de design et appeler l'objet pencil pour lui donner les points), aussi il ajoute une liste avec les formes dessinées pour que l'utilisateur puisse les effacer quand il veut.

## Iteraction

Le fichier iteraction.js est charge d'écouter les mouvements du souri dans trois cas

1. Quand la souris est pressé.
2. Quand la souris est déplacé.
3. Quand la souris est relâché.

## Main

Le fichier Main.js fait la création des objets requis pour faire marcher cette application.
