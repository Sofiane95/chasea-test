	/*Ajouter du contenu à la fin*/
            $(document).ready(function(){
               $("#b1").click(function(){
                    $("#p1").append(" - vacances");
                });
               
            });
        
/*Désactiver le bouton*/	
 $(function() 
 {
    $("#btn_valider").click(function()
    {
       $(this).attr("disabled", "disabled");
    });
 });