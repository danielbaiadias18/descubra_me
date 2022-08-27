//---------------------------------------------------------------//
//==================--- INÍCIO JOGO NÍVEL 1 ---==================//
//---------------------------------------------------------------//
debugger
var inicio1 = document.getElementById('inicio1');
var jogo1 = document.getElementById("jogo1");
function criaGrid() {
    const grid = document.getElementById("jogo1");

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function carregaJogo() {
    jogo1.style.display = 'block'
    inicio1.style.display = 'none'
    jogo1.classList.add("container_2")
    adicionaPixel(1, 1, 'lightblue')
    adicionaPixel(1, 2, 'lightblue')
    adicionaPixel(2, 1, 'lightblue')
    adicionaPixel(2, 2, 'lightblue')
    adicionaPixel(1, 3)
    adicionaPixel(1, 4)
    adicionaPixel(1, 5)
    adicionaPixel(1, 6)
    adicionaPixel(1, 7)
    adicionaPixel(2, 7)
    adicionaPixel(3, 7)
    adicionaPixel(4, 7)
    adicionaPixel(5, 7)
    adicionaPixel(6, 7)
    adicionaPixel(6, 6)
    adicionaPixel(6, 5)
    adicionaPixel(6, 4)
    adicionaPixel(6, 3)
    adicionaPixel(6, 2)
    adicionaPixel(7, 2)
    adicionaPixel(8, 2)
    adicionaPixel(8, 3)
    adicionaPixel(8, 4)
    adicionaPixel(8, 5)
    adicionaPixel(8, 6)
    adicionaPixel(8, 7)
    adicionaPixel(8, 8)
    adicionaPixel(8, 9)
    adicionaPixel(8, 9)
    adicionaPixel(7, 9)
    adicionaPixel(6, 9)
    adicionaPixel(5, 9)
    adicionaPixel(5, 10)
    adicionaPixel(5, 11)
    adicionaPixel(5, 12)
    adicionaPixel(5, 13)
    adicionaPixel(6, 13)
    adicionaPixel(7, 13)
    adicionaPixel(8, 13)
    adicionaPixel(9, 13)
    adicionaPixel(10, 9)
    adicionaPixel(11, 9)
    adicionaPixel(12, 9)
    adicionaPixel(13, 9)
    adicionaPixel(10, 13)
    adicionaPixel(10, 12)
    adicionaPixel(10, 11)
    adicionaPixel(10, 10)
    adicionaPixel(13, 10)
    adicionaPixel(13, 11)
    adicionaPixel(13, 12)
    adicionaPixel(13, 13)
    adicionaPixel(13, 14)
    adicionaPixel(14, 15, 'lightgreen')
    adicionaPixel(14, 14, 'lightgreen')
    adicionaPixel(15, 14, 'lightgreen')
    adicionaPixel(15, 15, 'lightgreen')
}
var jogo1 = document.getElementById("jogo1");

jogo1.addEventListener("mouseover", function () {
    // document.location.reload();
    console.log("jogo1")

})

function adicionaPixel(x, y, cor = "white") {
    var pixel1 = document.createElement("div");

    pixel1.addEventListener("mouseover", function (e) {
        e.stopPropagation()

        // if (x <= 14 && y <= 14)

        console.log("pode")
    })
    pixel1.style.gridColumnStart = x;
    pixel1.style.gridRowStart = y;
    pixel1.style.backgroundColor = cor;
    jogo1.appendChild(pixel1);
}

// function fase2() {
//     debugger
//     var jogo2 = document.createElement("div");
//     body.removeChild(jogo1)
//     var inicio2 = document.getElementById("inicio2");


// }
// //----------------------------------------------------------------//
// //===================--- FINAL JOGO NÍVEL 1 ---===================//
// //----------------------------------------------------------------//

// //---------------------------------------------------------------//
// //==================--- INÍCIO JOGO NÍVEL 2 ---==================//
// //---------------------------------------------------------------//

// function carregaInicio2() {
//     inicio2.style.display = 'inline-flex'
// }

// function carregaJogo2() {
//     debugger
//     inicio2.style.display = 'none'

//     jogo2.style.display = "grid";
//     jogo2.style.width = "80vmin";
//     jogo2.style.height = "80vmin";
//     jogo2.style.backgroundColor = "hsl(0, 0%, 14%)";
//     jogo2.style.border = "20px solid hsla(0, 0%, 31%, 0.649)";
//     jogo2.style.boxSizing = "content-box";
//     jogo2.style.gridTemplateRows = "repeat(15, auto)";
//     jogo2.style.gridTemplateColumns = "repeat(15, auto)";
//     body.appendChild(jogo2)

//     jogo2.classList.add("container_2")
//     adicionaPixelInicio(1, 1, jogo2)
//     adicionaPixelInicio(1, 2, jogo2)
//     adicionaPixelInicio(2, 1, jogo2)
//     adicionaPixelInicio(2, 2, jogo2)
//     adicionaPixel(1, 3, jogo2)
//     adicionaPixel(1, 4, jogo2)
//     adicionaPixel(1, 5, jogo2)
//     adicionaPixel(1, 6, jogo2)
//     adicionaPixel(1, 7, jogo2)
//     adicionaPixel(2, 7, jogo2)
//     adicionaPixel(3, 7, jogo2)
//     adicionaPixel(4, 7, jogo2)
//     adicionaPixel(5, 7, jogo2)
//     adicionaPixel(6, 7, jogo2)
//     adicionaPixel(6, 6, jogo2)
//     adicionaPixel(6, 5, jogo2)
//     adicionaPixel(6, 4, jogo2)
//     adicionaPixel(6, 3, jogo2)
//     adicionaPixel(6, 2, jogo2)
//     adicionaPixel(7, 2, jogo2)
//     adicionaPixel(8, 2, jogo2)
//     adicionaPixel(8, 3, jogo2)
//     adicionaPixel(8, 4, jogo2)
//     adicionaPixel(8, 5, jogo2)
//     adicionaPixel(8, 6, jogo2)
//     adicionaPixel(8, 7, jogo2)
//     adicionaPixel(8, 8, jogo2)
//     adicionaPixel(8, 9, jogo2)
//     adicionaPixel(8, 9, jogo2)
//     adicionaPixel(7, 9, jogo2)
//     adicionaPixel(6, 9, jogo2)
//     adicionaPixel(5, 9, jogo2)
//     adicionaPixel(5, 10, jogo2)
//     adicionaPixel(5, 11, jogo2)
//     adicionaPixel(5, 12, jogo2)
//     adicionaPixel(5, 13, jogo2)
//     adicionaPixel(6, 13, jogo2)
//     adicionaPixel(7, 13, jogo2)
//     adicionaPixel(8, 13, jogo2)
//     adicionaPixel(9, 13, jogo2)
//     adicionaPixel(10, 13, jogo2)
//     adicionaPixel(10, 12, jogo2)
//     adicionaPixel(10, 11, jogo2)
//     adicionaPixel(10, 10, jogo2)
//     adicionaPixel(10, 9, jogo2)
//     adicionaPixel(11, 9, jogo2)
//     adicionaPixel(12, 9, jogo2)
//     adicionaPixel(13, 9, jogo2)
//     adicionaPixel(13, 10, jogo2)
//     adicionaPixel(13, 11, jogo2)
//     adicionaPixel(13, 12, jogo2)
//     adicionaPixel(13, 13, jogo2)
//     adicionaPixel(13, 14, jogo2)
//     adicionaPixelFinal(14, 15, jogo2)
//     adicionaPixelFinal(14, 14, jogo2)
//     adicionaPixelFinal(15, 14, jogo2)
//     adicionaPixelFinal(15, 15, jogo2)
// }

//----------------------------------------------------------------//
//===================--- FINAL JOGO NÍVEL 2 ---===================//
//----------------------------------------------------------------//

function enviarResposta() {

    var url = window.location.href;

    var proximaUrl = url.split('/');

    proximaUrl.pop();

    proximaUrl = proximaUrl.join('/');

    console.log("proximaUrl", proximaUrl)

    window.location.href = proximaUrl + '/pagina5.html';
}

document.addEventListener('keypress', function (evento) {

    if (evento.key === "Enter") {

        const botaoEnter = document.querySelector('#botaoResposta');

        botaoEnter.click();

        enviarResposta()

    }
})