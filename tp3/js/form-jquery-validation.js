$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
      

            $("#name").keyup(function(){
                if(($("#name").val().length < 5))
                {
                    $("#name").css("border-color","#ff0000");
                }
                else
                {
                    $("#name").css("border-color","#48DE14");
                }
            
            });
            $("#firstname").keyup(function(){
                if(($("#firstname").val().length < 5))
                {
                    $("#firstname").css("border-color","#ff0000");
                }
                else
                {
                    $("firstname").css("border-color","#48DE14");
                }
            
            });
            $("#adress").keyup(function(){
                if(($("#adress").val().length < 5))
                {
                    $("#adress").css("border-color","#ff0000");
                }
                else
                {
                    $("#adress").css("border-color","#48DE14");
                }
            
            });
            $("#birthday").keyup(function(){
                if(($("#birthday").val().length < 5))
                {
                    $("#birthday").css("border-color","#ff0000");
                }
                else
                {
                    $("#birthday").css("border-color","#48DE14");
                }
            
            });
            $("#mail").keyup(function(){
                if(($("#mail").val().length < 5))
                {
                    $("#mail").css("border-color","#ff0000");
                }
                else
                {
                    $("#mail").css("border-color","#48DE14");
                }
            
            });

            $("#name").keydown(function(){
                if(($("#name").val().length < 5))
                {
                    $("#name").css("border-color","#ff0000");
                }
                else
                {
                    $("#name").css("border-color","#48DE14");
                }
            
            });
            $("#firstname").keydown(function(){
                if(($("#firstname").val().length < 5))
                {
                $("#firstname").css("border-color","#ff0000");
                }
                else
                {
                    $("#firstname").css("border-color","#48DE14");
                }
            
            });
            $("#adress").keydown(function(){
                if(($("#adress").val().length < 5))
                {
                    $("#adress").css("border-color","#ff0000");
                }
                else
                {
                    $("#adress").css("border-color","#48DE14");
                }
            
            });
            $("#birthday").keydown(function(){
                if(($("#birthday").val().length < 5))
                {
                    $("#birthday").css("border-color","#ff0000");
                }
                else
                {
                    $("#birthday").css("border-color","#48DE14");
                }
            
            });
            $("#mail").keydown(function(){
                if(($("#mail").val().length < 5))
                {
                    $("#mail").css("border-color","#ff0000");
                }
                else
                {
                    $("#mail").css("border-color","#48DE14");
                }
            
            });



            $("#envoyer").on("click", function (event) {
            event.preventDefault();
 
                if($("#name").val().length < 5)
                {
                    $('#myModal').modal("show");
                    $(".modal-title").text(" Veuillez remplir tout les champs");
                    $('.modal-body').text(" le champs nom doit contenir au moins 5 caractères ");
                }
                    else
                    { 
                        if($("#firstname").val().length < 5)
                        {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs Prenom doit contenir au moins 5 caractères ");
                        }

                        else 
                        {
                            if($("#adress").val().length < 5)
                            {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs Adresse doit contenir au moins 5 caractères ");
                            }
                            else 
                            {
                                if($("#birthday").val().length < 5)
                                {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs date de naissance doit contenir au moins 5 caractères ");
                                }
                                else
                                {
                                        if($("#mail").val().length < 5)
                                        {
                                        $('#myModal').modal("show");
                                        $(".modal-title").text(" Veuillez remplir tout les champs !");
                                        $('.modal-body').text(" le champs email doit contenir au moins 5 caractères ");
                                        }
                                        else
                                        {
                                            if($("#name").val() !== "" && $("#firstname").val() !== "" && $("#birthday").val() !== "" 
                                            && $("#adress").val() !== "" && $("#mail").val() !== "" )
                                            {
                                                    $('#myModal').modal("show");
                                                    $(".modal-title").html("Bienvenue "+ document.querySelector("#firstname").value);
                                                    $('.modal-body').html("Vous étes né le: "+ document.querySelector("#birthday").value
                                                    +"</br>Et vous Habitez à: "
                                                    + document.querySelector("#adress").value
                                                    +'</br><a href="https://maps.google.com/maps?q='
                                                    +document.querySelector("#Adresse").value
                                                    +'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='
                                                    +document.querySelector("#adress").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
                                            }
                                                        
                                        }
                                                    
                                }
                                                    
                            }
                            
                            
                        }
                        
                        
                    }
                
        
    });
  });
