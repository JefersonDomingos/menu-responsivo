function menuShow(){
    let mobileMenu = document.querySelector('.menu-mobile');// a <div class="menu-mobile"> contem os itens Inicio, Projetos, Sobre.
    if (mobileMenu.classList.contains("openMenu")){//se minha a <div class="menu-mobile"> CONTIVER (contains) ,a   class="openMenu"{display:block;}
      mobileMenu.classList.remove("openMenu")  //então removerei essa classe que deixa meu display: block(VISÍVEL) e minha <div class="menu-mobile"> FICARÁ INVISIVEL
    } 
    else{ //SE  minha a <div class="menu-mobile"> NÃO CONTIVER (NO contains) ,a   class="openMenu"{display:block;}
        mobileMenu.classList.add("openMenu") // <div class="menu-mobile"> VAI RECEBER (add) class="openMenu"{display:block;} e FICARÁ VISIVEL
    }
}