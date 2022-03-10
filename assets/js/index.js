const previousCorpo = document.querySelector(".corpo__previous")
previousCorpo.addEventListener("click", () => {
    const imgPrincipal = document.querySelector(".corpo__img")
    if(!imgPrincipal.classList.contains("carrosel1Img1Next") && !imgPrincipal.classList.contains("carrosel2Img1Next") && !imgPrincipal.classList.contains("carrosel3Img1Next") && !imgPrincipal.classList.contains("carrosel1Img1Previous") && !imgPrincipal.classList.contains("carrosel2Img1Previous") && !imgPrincipal.classList.contains("carrosel3Img1Previous")){
        return
    }else{
        if(imgPrincipal.classList.contains("carrosel1Img1Previous")){
            return

        }else{
            setTimeout(() => {displaynone()}, 1000)
        }
        
    }
})


function tela(){
    const tela = document.querySelector(".cabecalho__tela")
    const overlay = document.querySelector(".overlay")
    tela.classList.remove("slide-out")
    overlay.classList.remove("disappear")
    tela.classList.add("slide-in")
    overlay.classList.add("appear")
    
}
function telaOut(){
    const tela = document.querySelector(".cabecalho__tela")
    const overlay = document.querySelector(".overlay")
    tela.classList.remove("slide-in")
    overlay.classList.remove("appear")
    tela.classList.add("slide-out")
    overlay.classList.add("disappear")
    

}
function aumentar(){
    const quantidade = document.querySelector(".corpo__quantidade")
    const numero = parseInt(quantidade.innerHTML);
    if(numero == 30){
        return
    }
    quantidade.innerHTML = numero + 1


}
function diminuir(){
    const quantidade = document.querySelector(".corpo__quantidade")
    const numero = parseInt(quantidade.innerHTML);
    if(numero == 0){
        return
    }
    quantidade.innerHTML = numero - 1
    
}
function ativo(input){
    const imgs = document.querySelectorAll(".corpo__imgs")
    const imgPrincipal = document.querySelector(".corpo__img")
    if(input == 1){
        imgPrincipal.classList.add("prioritario1")
        imgPrincipal.classList.remove("prioritario2","prioritario3","prioritario4")
        imgs[0].classList.add("ativo")
        imgs[1].classList.remove("ativo")
        imgs[2].classList.remove("ativo")
        imgs[3].classList.remove("ativo")
    }
    else if(input == 2){
        imgPrincipal.classList.add("prioritario2")
        imgPrincipal.classList.remove("prioritario1","prioritario3","prioritario4")
        imgs[0].classList.remove("ativo")
        imgs[1].classList.add("ativo")
        imgs[2].classList.remove("ativo")
        imgs[3].classList.remove("ativo")
    }
    else if(input == 3){
        imgPrincipal.classList.add("prioritario3")
        imgPrincipal.classList.remove("prioritario1","prioritario2","prioritario4")
        imgs[0].classList.remove("ativo")
        imgs[1].classList.remove("ativo")
        imgs[2].classList.add("ativo")
        imgs[3].classList.remove("ativo")
    }
    else if(input == 4){
        imgPrincipal.classList.add("prioritario4")
        imgPrincipal.classList.remove("prioritario1","prioritario2","prioritario3")
        imgs[0].classList.remove("ativo")
        imgs[1].classList.remove("ativo")
        imgs[2].classList.remove("ativo")
        imgs[3].classList.add("ativo")
    }

}
function lightBoxOpen(){
    const lightBox = document.querySelector(".light-box")
    const overlay = document.querySelector(".overlay")
    const imgs = document.querySelectorAll(".corpo__imgs")
    lightBox.classList.remove("disappearOpacity0")
    overlay.classList.remove("disappear")
    lightBox.classList.add("appearOpacity1")
    overlay.classList.add("appear")
    for(let i = 0; i < 4; i++){
        if(imgs[i].classList.contains("ativo")){
            mundacaImg(i+1)
            
        }

    }

    

}
function lightBoxClosed(){
    const lightBox = document.querySelector(".light-box")
    const overlay = document.querySelector(".overlay")
    overlay.classList.remove("appear")
    lightBox.classList.remove("appearOpacity1")
    lightBox.classList.add("disappearOpacity0")
    overlay.classList.add("disappear")


}
function mundacaImg(input){
    const imgPrincipal = document.querySelector(".light-box__conteiner-img")
    const imgs = document.querySelectorAll(".light-box__imgs")

    if(input == 1){
        imgPrincipal.classList.add("prioritario1")
        imgPrincipal.classList.remove("prioritario2","prioritario3","prioritario4")
        imgs[0].classList.add("ativo")
        imgs[1].classList.remove("ativo")
        imgs[2].classList.remove("ativo")
        imgs[3].classList.remove("ativo")
    }
    else if(input == 2){
        imgPrincipal.classList.add("prioritario2")
        imgPrincipal.classList.remove("prioritario1","prioritario3","prioritario4")
        imgs[0].classList.remove("ativo")
        imgs[1].classList.add("ativo")
        imgs[2].classList.remove("ativo")
        imgs[3].classList.remove("ativo")
    }
    else if(input == 3){
        imgPrincipal.classList.add("prioritario3")
        imgPrincipal.classList.remove("prioritario1","prioritario2","prioritario4")
        imgs[0].classList.remove("ativo")
        imgs[1].classList.remove("ativo")
        imgs[2].classList.add("ativo")
        imgs[3].classList.remove("ativo")
    }
    else if(input == 4){
        imgPrincipal.classList.add("prioritario4")
        imgPrincipal.classList.remove("prioritario1","prioritario2","prioritario3")
        imgs[0].classList.remove("ativo")
        imgs[1].classList.remove("ativo")
        imgs[2].classList.remove("ativo")
        imgs[3].classList.add("ativo")
    }
}
function next(){
    const imgs = document.querySelectorAll(".light-box__imgs")
    for(i = 0; i < imgs.length; i++){
        if(imgs[i].classList.contains("ativo")){
            if(i==3){
                mundacaImg(1)
            }
            mundacaImg(i+2)
            return

        }

    }
}
function previous(){
    const imgs = document.querySelectorAll(".light-box__imgs")
    for(i = 0; i < imgs.length; i++){
        if(imgs[i].classList.contains("ativo")){
            if(i==0){
                mundacaImg(4)
            }
            mundacaImg(i)
            return

        }

    }
}
function carroselNext(){
   
}
function carroselPrevious(){


}
function basketOpen(){
    const basket = document.querySelector(".basket")
    if(!basket.classList.contains("appearOpacity1")){
        basket.classList.remove("disappearOpacity0")
        basket.classList.add("appearOpacity1")
    }else{
        basket.classList.remove("appearOpacity1")
        basket.classList.add("disappearOpacity0")
    }

}
function comprar(){
    const compra = document.querySelector(".basket__conteiner-compra")
    const texto = document.querySelector(".basket__texto")
    const precoTotal = document.querySelector(".basket__preco-total")
    const quantidade = document.querySelector(".corpo__quantidade")
    const quantidade2 = document.querySelector(".basket__quantidade")
    const notificacao = document.querySelector(".cabecalho__notificacao")
    if(quantidade.innerHTML == '0'){
        return
    }
    notificacao.classList.add("display-flex-notificacao")
    texto.classList.add("displaynone")
    compra.classList.add("displayblock")
    quantidadeInt = parseInt(quantidade.innerHTML)
    const precoTotal1 = 125 * quantidadeInt
    quantidade2.innerHTML =` ${quantidadeInt}`
    precoTotal.innerHTML = `$${precoTotal1}`
    notificacao.innerHTML = quantidadeInt

}
function deletar(){
    const compra = document.querySelector(".basket__conteiner-compra")
    const texto = document.querySelector(".basket__texto")
    const notificacao = document.querySelector(".cabecalho__notificacao")
    texto.classList.remove("displaynone")
    compra.classList.remove("displayblock")
    notificacao.classList.remove("display-flex-notificacao")

}
function previouCelular(){
    
    const imgPrincipal = document.querySelector(".corpo__img")
    const imgPrincipal2 = document.querySelector(".corpo__img2")
    const next = document.querySelector(".corpo__next")
    const previous = document.querySelector(".corpo__previous")
    if(imgPrincipal.classList.contains("carrosel1Img1Previous")){
        return

    }
    if(imgPrincipal.classList.contains("displaynone")){
        fix()
        

    }
    if(!imgPrincipal.classList.contains("carrosel1Img1Next") && !imgPrincipal.classList.contains("carrosel2Img1Next") && !imgPrincipal.classList.contains("carrosel3Img1Next") && !imgPrincipal.classList.contains("carrosel1Img1Previous") && !imgPrincipal.classList.contains("carrosel2Img1Previous") && !imgPrincipal.classList.contains("carrosel3Img1Previous")){
        return
        
    }
    else if(imgPrincipal.classList.contains("carrosel1Img1Next") || imgPrincipal.classList.contains("carrosel2Img1Previous")){
        imgPrincipal.classList.remove("carrosel2Img1Previous")
        imgPrincipal2.classList.remove("carrosel2Img2Previous")
        imgPrincipal.classList.remove("carrosel1Img1Next")
        imgPrincipal2.classList.remove("carrosel1Img2Next")
        imgPrincipal.classList.add("carrosel1Img1Previous")
        imgPrincipal2.classList.add("carrosel1Img2Previous")
        previous.classList.add("disativo")

    }
    else if(imgPrincipal.classList.contains("carrosel2Img1Next") || imgPrincipal.classList.contains("carrosel3Img1Previous")){
        imgPrincipal.classList.remove("carrosel3Img1Previous")
        imgPrincipal2.classList.remove("carrosel3Img2Previous")
        imgPrincipal.classList.remove("carrosel2Img1Next")
        imgPrincipal2.classList.remove("carrosel2Img2Next")
        imgPrincipal.classList.add("carrosel2Img1Previous")
        imgPrincipal2.classList.add("carrosel2Img2Previous")
    }else if(imgPrincipal.classList.contains("carrosel3Img1Next")){
        imgPrincipal.classList.remove("carrosel3Img1Next")
        imgPrincipal2.classList.remove("carrosel3Img2Next")
        imgPrincipal.classList.add("carrosel3Img1Previous")
        imgPrincipal2.classList.add("carrosel3Img2Previous")
        next.classList.remove("disativo")
    }
}
function nextCelular(){
    const imgPrincipal = document.querySelector(".corpo__img")
    if(imgPrincipal.classList.contains("displaynone")){
        fix()

    }
    const imgPrincipal2 = document.querySelector(".corpo__img2")
    const next = document.querySelector(".corpo__next")
    const previous = document.querySelector(".corpo__previous")
    if(!imgPrincipal.classList.contains("carrosel1Img1Next") && !imgPrincipal.classList.contains("carrosel2Img1Next") && !imgPrincipal.classList.contains("carrosel3Img1Next") && !imgPrincipal.classList.contains("carrosel1Img1Previous") && !imgPrincipal.classList.contains("carrosel2Img1Previous") && !imgPrincipal.classList.contains("carrosel3Img1Previous")){
        imgPrincipal.classList.add("carrosel1Img1Next")
        imgPrincipal2.classList.add("carrosel1Img2Next")
        previous.classList.remove("disativo")

    }
    else if(imgPrincipal.classList.contains("carrosel1Img1Previous")){
        imgPrincipal.classList.remove("carrosel1Img1Previous")
        imgPrincipal2.classList.remove("carrosel1Img2Previous")
        imgPrincipal.classList.add("carrosel1Img1Next")
        imgPrincipal2.classList.add("carrosel1Img2Next")
        previous.classList.remove("disativo")
    }
    else if(imgPrincipal.classList.contains("carrosel1Img1Next") || imgPrincipal.classList.contains("carrosel2Img1Previous")){
        imgPrincipal.classList.remove("carrosel2Img1Previous")
        imgPrincipal2.classList.remove("carrosel2Img2Previous")
        imgPrincipal.classList.remove("carrosel1Img1Next")
        imgPrincipal2.classList.remove("carrosel1Img2Next")
        imgPrincipal.classList.add("carrosel2Img1Next")
        imgPrincipal2.classList.add("carrosel2Img2Next")
        previous.classList.remove("disativo")

    }else if(imgPrincipal.classList.contains("carrosel2Img1Next") || imgPrincipal.classList.contains("carrosel3Img1Previous")){
        imgPrincipal.classList.remove("carrosel3Img1Previous")
        imgPrincipal2.classList.remove("carrosel3Img2Previous")
        imgPrincipal.classList.remove("carrosel2Img1Next")
        imgPrincipal2.classList.remove("carrosel2Img2Next")
        imgPrincipal.classList.add("carrosel3Img1Next")
        imgPrincipal2.classList.add("carrosel3Img2Next")
        next.classList.add("disativo")
        
    }else if(imgPrincipal.classList.contains("carrosel3Img1Next")){
        return
    }

    }

    // if(imgPrincipal.classList.contains("prioritario1")){
    //     imgPrincipal.classList.remove("prioritario1")
    //     imgPrincipal.classList.add("prioritario2")
    // }
    // else if(imgPrincipal.classList.contains("prioritario2")){
    //     imgPrincipal.classList.remove("prioritario2")
    //     imgPrincipal.classList.add("prioritario3")
    // }
    // else if(imgPrincipal.classList.contains("prioritario3")){
    //     imgPrincipal.classList.remove("prioritario3")
    //     imgPrincipal.classList.add("prioritario4")
    // }
    // else if(imgPrincipal.classList.contains("prioritario4")){
    //     imgPrincipal.classList.remove("prioritario4")
    //     imgPrincipal.classList.add("prioritario1")
    // }
    

function previousCelular(){

    const imgPrincipal = document.querySelector(".corpo__img")
    if(imgPrincipal.classList.contains("prioritario1")){
        imgPrincipal.classList.remove("prioritario1")
        imgPrincipal.classList.add("prioritario4")
    }
    else if(imgPrincipal.classList.contains("prioritario4")){
        imgPrincipal.classList.remove("prioritario4")
        imgPrincipal.classList.add("prioritario3")
    }
    else if(imgPrincipal.classList.contains("prioritario3")){
        imgPrincipal.classList.remove("prioritario3")
        imgPrincipal.classList.add("prioritario2")
    }
    else if(imgPrincipal.classList.contains("prioritario2")){
        imgPrincipal.classList.remove("prioritario2")
        imgPrincipal.classList.add("prioritario1")
    }
    
}
// function carrocelPrevious(){
//     const next = document.querySelector(".corpo__next")
//     const img2 = document.querySelector(".corpo__img2")
//     img2.classList.remove("slide-out-2")
//     img2.classList.add("slide-in-2")
//     next.classList.add("next-disativo")
//     next.classList.remove("next-disativo")
// }
// function carrocelNext(){
//     const next = document.querySelector(".corpo__next")
//     if(next.classList.contains("next-disativo")){
//         return
//     }
//     const img2 = document.querySelector(".corpo__img2")
//     img2.classList.remove("slide-in-2")
//     img2.classList.add("slide-out-2")
//     next.classList.remove("next-disativo")
//     next.classList.add("next-disativo")
// }

function displaynone(){
    const imgPrincipal = document.querySelector(".corpo__img")
    const imgPrincipal2 = document.querySelector(".corpo__img2")
    const fix = document.querySelector(".corpo__conteiner-texto")
    const cetas = document.querySelector(".corpo__conteiner-cetas")
    imgPrincipal.classList.add("displaynone")
    fix.classList.add("fix")
    imgPrincipal2.classList.add("fix2")
    cetas.classList.add("fix3")
    
     

}
function fix(){
    const imgPrincipal = document.querySelector(".corpo__img")
    const imgPrincipal2 = document.querySelector(".corpo__img2")
    const fix = document.querySelector(".corpo__conteiner-texto")
    const cetas = document.querySelector(".corpo__conteiner-cetas")
    imgPrincipal.classList.remove("displaynone")
    fix.classList.remove("fix")
    imgPrincipal2.classList.remove("fix2")
    cetas.classList.remove("fix3")
}