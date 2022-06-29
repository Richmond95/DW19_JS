/*function mafonction(){
    alert("vous avez cliqué sur le boutton ! ");
    document.getElementById("montexte").value="LA VALEUR QUI M INTERESSE  !"
    document.getElementById("monboutton").value="BOUTTON CLIQUE   !"
    document.getElementById("madiv").innerHTML="ma div a ete changé ! "
 }
 
 console.error(document.getElementById("montexte"))
 console.error(document.getElementById("monboutton"))
 console.error(document.getElementById("madiv"))*/

/**
 * 
 * 1. RECUPERER UN OBJET DE LA PAGE HTML 
 * document
 * RECUPERER UN DES CHAMP DE CETTE OBJET
 * getElementById("identifiantcorrespondant")
 * Modifier le html
 * .laproprietehtml = valeur // on affecte une valeur a cette propriete
 * 
 * 
 * Modifier le html d'une div on utilier innerHTML
 */


// EXO 1 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT BIENVENUE SUR LE BOUTTON
//EXO 2 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI EST ECRIT SUR LE BOUTON
//EXO 3 Lorsqu on clique sur le bouton on affiche dans la div le contenue du champs texte
// EXO 4 on affiche dans la div le contenue du "Le texte contient : " champs texte
// EXO 5  on affiche dans la div le contenue du "Le prix est  : " champs texte La TVA est champs texte*0.2


// EXO 1 & 2 & 3 
/*function alert2(){
    alert("Bienvenue sur le boutton ! ")
    alert(    document.getElementById("boutton").value     )
    document.getElementById("madiv").innerHTML=document.getElementById("montexte").value
    document.getElementById("madiv").innerHTML="Le texte contient : " +  document.getElementById("montexte").value
    RESULT=parseInt(document.getElementById("montexte").value) *0.2
    document.getElementById("madiv").innerHTML="Le prix est  : " +  parseInt(document.getElementById("montexte").value) + "La TVA est   " + RESULT
}*/

// EXO 2


/**
 * EXO 6
 * ECRIRE une fonction qui affiche dans la div ce qu il y a dans le champs texte .
 * Cette fonction se declenche au moment ou vous tapez du texte dans le champs texte
 */

/*function mafonction2(){
   document.getElementById("madiv").innerHTML=document.getElementById("montexte").value
}
document.getElementById("montexte").addEventListener(  "input", mafonction2       )

document.getElementById("monboutton").addEventListener(  "click", mafonction       )
document.getElementById("boutton").addEventListener(  "click", alert2       )*/

//exo 7

function mafonction3() {

    compteur = parseInt(document.getElementById("madiv2").innerHTML);
    compteur = (compteur + 1);
    document.getElementById("madiv2").innerHTML = compteur;
}

//EXO 8

/*document.getElementById("button4").addEventListener("click, mafonction4")
function mafonction4(){
    parseInt(document.getElementById("age").value)

    if (age > 18){
        console.error("vous etes majeur")

    } 
    else {
        console.error("vous etes mineur")
    }

}*/

/////////// EXO 9


document.getElementById("multiplication_boutton").addEventListener("click", multuplication_fonction)

function multuplication_fonction() {
    // 1. RECUPERER CE QUI A DANS L INPUT TEXTE  
    numero = parseInt(document.getElementById("multiplication_texte").value)
    console.error(numero)



    // 2. MODIFIER LA DIV
    document.getElementById("multiplication_div").innerHTML = "Table de " + numero

    // 3. MULTIPLICATION AVEC LA BOUCLE FOR
    for (i = 1; i < 10; i++) {
        document.getElementById("multiplication_div").innerHTML += "<br />" + numero + " * " + i + " = " + (numero * i)
        console.error(i)
    }


}


/**
 * EXO 1 : LES IF ?
 * EXO 2 : CREEZ UN CHAMP TEXTE, UN BOUTON, UNE DIV 
 * SI J ECRIS DANS LE CHAMPS TEXTE LE NOMBRE 5
 * JE VAIS AVOIR LE RESULTAT 1 + 2 + 3 + 4 + 5 = 
 */


document.getElementById("addition_boutton").addEventListener("click", addition_fonction)

function addition_fonction() {

    /*if (numero = ){
        alert("ce n'est pas un chiffre");

    }*/

    numero = parseInt(document.getElementById("addition_texte").value)

    SOMME=0

    for (i = 1; i < numero; i++) {
        SOMME=SOMME+i 

        document.getElementById("addition_div").innerHTML += i + " + "

        document.getElementById("addition_div").innerHTML += i + " = " + SOMME 
    }

}

