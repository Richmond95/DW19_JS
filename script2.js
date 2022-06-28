// Les conditions:
// IF * ELSE * THEN


/*age = prompt("votre âge");
age =parseInt(age) // transforme age en format numérique

// si l'age est > à 18 alors dans la console la personne est majeure

if (age>18){
    console.error("vous êtes majeur")
}

if (age<18){
    console.error("vous êtes mineur")
}

if (age==18){ // tester l'égalité de la valeur entre deux informations
    console.error("vous etes pile majeur!")
}*/
// == on veut tester l'égalité de la valeur entre deux informations
//=== on veut tester l'égalité de la valeur et l'égalité du type entre deux informations

// EXO: AFficher dans la console si ce le nombre est positif ou négatif

nombre = prompt("veuillez rentrer un numéro ! ") // ouvre un tiroire pour le nombre entré par l'utilisateur
nombre=parseInt(nombre) // convertir la chaine de caractere en nombre
if ( nombre > 0 )  {
    console.error("le nombre est positif")
}
else  {
    console.error("le nombre est négatif")
}


/**
 * EX 2 : 
 * Demander avec prompt un nombre à l'utilisateur
 * AFficher dans la console si ce le nombre est pair ou impair
 * 
 */ 
 nombre = prompt("veuillez rentrer un numéro!") // ouvre un tiroire pour le nombre entré par l'utilisateur
 nombre=parseInt(nombre) // convertir la chaine de caractere en nombre
 if ( (nombre % 2) == 0 )  {
     console.error("le nombre est pair")
 }
 else  {
     console.error("le nombre est impair")
 }

 ////////////////////////////////////////////////////////////


 