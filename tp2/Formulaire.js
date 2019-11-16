function validation(){
    var error = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";

    if(document.getElementById("name").value.length < 5){
        error += "La saisie du nom est obligatoire <br>"
    }
    if(document.getElementById("firstname").value.length < 5){
        error += "La saisie du firstname est obligatoire <br>"
    }

    if(document.getElementById("birthday").value.length < 5){
        error += "La saisie du nom est obligatoire <br>"
    }

   if(document.getElementById("Adresse").value.length < 5){
        error += "La saisie du nom est obligatoire <br>"
    }

    if(document.getElementById("Mail").value.length < 5){
        error += "La saisie du nom est obligatoire <br>"
    }



    if(error == ""){
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#name").value;
    }else{
        
        document.getElementById("error").innerHTML = error;
    }


    
}
