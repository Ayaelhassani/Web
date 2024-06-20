


var vid= document.getElementById("navideo");


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
var jour = d.getDate();
var mois = d.getMonth();
var annee = d.getFullYear();
var heures = d.getHours(); 
var minutes = d.getMinutes();

jour =((jour < 10) ? "0" : " ")+(jour);
mois =((mois < 10) ? "0" : " ")+(mois+1);
heures = ((heures < 10) ? " 0" : " ") + heures;
minutes = ((minutes < 10) ? "0" : ":") + minutes; 
  document.getElementById("time").innerHTML =jour+"/"+mois+"/"+annee +heures+ minutes;
}
function modifCoul()
{
    var couleurs = document.getElementById("couleurs").value;
    document.getElementById("field").style.backgroundColor = couleurs;
} 

 function Verif()   {    
   		var a =document.getElementById("nom").value;
   		var nm = document.getElementById("nom").value.indexOf(" ");
   		var b =document.getElementById("prenom").value;
   		var pr = document.getElementById("prenom").value.indexOf(" ");
        var idk = document.getElementById("mail").value;
        var mail = document.getElementById("mail").value.indexOf("@");
        var mail2 = document.getElementById("mail").value.indexOf(" ");
         SubmitOk = "true";
                if (nm != -1){
                    alert("Le nom ne doit pas contenir d'espaces, separez par(- or _)");
            SubmitOk = "false";}
                if (pr != -1){
                    alert("Le prenom ne doit pas contenir d'espaces, separez par(- or _)");
            SubmitOk = "false";}
                if (mail2 != -1){
                    alert("L'email ne doit pas contenir d'espaces");
                }

