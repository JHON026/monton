 document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'Vous avez cliqué sur le bouton!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
});

 let prixReduction=0.06;
 let prixPomme=500;
 let prixTotal=3;
 let totTotal=0;
 let total=prixReduction*prixPomme;
 if(total>=10){
 	alert("vous avez droit a une reduction!");
 	totTotal=total-(prixReduction);
 	let infotext="vos delisieuse pomme a $"+totTotal;
 	infotext+="au lieu de a $"+total;
 	document.write(infotext);
 }
 function myf(name){
return a+b;
 }
 function myf(name){
 	return a-b;
 }
 function myf(name){
 	return a/b;
 }
 function myf(name){
 	return a*b;
 }
 console.log(name)

 for(let b=1000;b>=0;b--){
 	console.log(b);
 }