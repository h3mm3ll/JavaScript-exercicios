
function calcularimc (){
    const peso =parseFloat(document.getElementById("peso").value)
    const altura =parseFloat(document.getElementById("altura").value)
    let imc = peso/(altura*altura)
    let imcformatado = imc.toFixed(2)
    console.log(imcformatado)
    const resultado = document.getElementById( "resultado").innerText = imcformatado
}

