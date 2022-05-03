function ligaOuDesliga() {

    let valor_do_botao = document.getElementById("liga-ou-desliga").value;
    
    let status = 0;

    if (valor_do_botao == 0) {
        status = 1;
    } else {
        status = 0;
    }

    if (status == 1) {
        
        document.getElementById("motor").classList.add("liga-motor");
        
        document.getElementById("liga-ou-desliga").style.backgroundColor = "red";

        document.getElementById("liga-ou-desliga").firstChild.data = "Desligar";

        document.getElementById("liga-ou-desliga").value = 1;
    

    } else {

        document.getElementById("motor").classList.remove("liga-motor");

        document.getElementById("liga-ou-desliga").style.backgroundColor = "green";
        
        document.getElementById("liga-ou-desliga").firstChild.data = "Ligar";

        document.getElementById("liga-ou-desliga").value = 0;

    }


}