$(document).ready(function(){

    $('#green').hover(
        function(){$('#text').css('color','#00ff00')},
        function(){$('#text').css('color','#000000')}
    );
    $('#red').hover(
        function(){$('#text').css('color','#ff0000')},
        function(){$('#text').css('color','#000000')}
    );
    $('#blue').hover(
        function(){$('#text').css('color','#0000ff')},
        function(){$('#text').css('color','#000000')}
    );
// pour chacune des fonctions, je cible dans un premier temps le bouton de couleur rataché à son "id" de couleur avec le gestionnaire d'évènement "hover", (au survol de la cible) et je déclare une fonction anonyme qui cible mon id "text" avec le gestionnaire d'évènement "css" qui cible le paragraphe et change le style css que je lui détermine ('propriétéCSS','valeur').
// le gestionnaire hover me permet de déclarer deux fonctions: une pour changer la couleur et une deuxième pour revenir à la couleur d'origine.
// attention de ne pas oublier la "," entre les deux fonctions.
});