/*
Nous allons apprendre:
1. les variables
2. les conditions
3. les boucles
4. les fonctions

Les variables, pour stocker des données. EX: nom d'un jeu = "jeu du plus ou du moins";
une variable: le nom de la variable et la valeur de la variable: tiroir qui porte un nom
le numérique ne contient pas de guillemts.
les chaines de caractères contiennent des guillemts
Additionner des nombres ça fonctionne
Addition une chaine de caractères avec une autre chose fait de la concetanation


*/

a=20
b=60
c=100

console.error(a+b);
console.error(typeof(c));

// exo les variables

SEL=80;
SUCRE=100;





console.error("Nous avons du SEL en Q de " + SEL + " . Nous avons du SUCRE en Q de " + SUCRE)

//mon code, inverser la variables

TEMP=SEL; //TEMP sauvegarde la valeur de SEL 

SEL=SUCRE;
SUCRE=TEMP;

console.error("Nous avons du SEL en Q de " + SEL + " . Nous avons du SUCRE en Q de " + SUCRE)


// EXO 2: recuperer l'âge de l'utilisateurvia la commande prompt, 
//affichez l'age de l'utilisateur dans la console
//afficher l'âge de l'utilisateur dans 2 ans dans la console


/* EXO 4 */

 date=new date();
 console.error(date);
 day = date.getDate();
 MOIS = date.getDate() +1;

