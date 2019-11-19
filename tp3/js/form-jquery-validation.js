$(document).ready(function () {

    // interception du "submit" du formulaire
    $("form").on("submit", function (event) {
        event.preventDefault();
        // votre code de vérification du formulaire

        var nomValue = document.querySelector("#name").value;
        var prenomValue = document.querySelector("#firstname").value;
        var dateValue = document.querySelector("#birthday").value;
        var adresseValue = document.querySelector("#adress").value;
        var emailValue = document.querySelector("#mail").value;
        $('#myModal').modal("show");

    
        if (nomValue.length == 0) {
    
            $(".modal-body").html("le champ nom est vide ");
        }
        else
            if (nomValue.length < 5) {
                $(".modal-body").html("le nom doit contenir au moins 5 caractères ");

            }
            else
                if (prenomValue.length == 0) {
                    $(".modal-body").html("le champ prénom est vide ");
    
                }
                else
                    if (prenomValue.length < 5) {
                        $(".modal-body").html("le prénom doit contenir au moins 5 caractères ");
        
                    }
                    else
                        if (dateValue.length == 0) {
                            $(".modal-body").html("le champ date est vide ");
            
                        }
                        else
                            if (adresseValue.length == 0) {
                                $(".modal-body").html("le champ adresse  est vide ");
                
                            }
                            else
                                if (adresseValue.length < 5) {
                                    $(".modal-body").html("le adresse doit contenir au moins 5 caractères ");
                    
                                }
                                else
                                    if (emailValue.length == 0) {
                                        $(".modal-body").html("le champ email  est vide ");
                        
                                    }
                                    else
                                        if (emailValue.length < 5) {
                                            $(".modal-body").html("l'email doit contenir au moins 5 caractères ");
                            
                                        }
                                        else
                                            if (nomValue.length >= 5
                                                && prenomValue.length >= 5
                                                && dateValue.length !== 0 && adresseValue.length >= 5 && emailValue.length >= 5) {
                                                $(".modal-body").html("Bienvenue" + " " + nomValue + "  " + adresseValue);
                                            }
    
    });
});