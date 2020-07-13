const btncalc = document.querySelector("#btn-calc")

btncalc.addEventListener("click", () => {
    const peso = document.querySelector("#peso")
    const altura = document.querySelector("#altura")

    let result_imc = document.querySelector("#imc-result")
    let status_imc = document.querySelector("#imc-status")

    let imc = peso.value / (altura.value * altura.value)

    result_imc.innerHTML = imc.toFixed(2)

    if(imc <= 17) {
        status_imc.innerHTML = "MUITO ABAIXO DO PESO"
    }

    else if(imc > 17 && imc <= 18.49) {
        status_imc.innerHTML = "ABAIXO DO PESO"
    }

    else if(imc > 18.49 && imc <= 24.99) {
        status_imc.innerHTML = "PESO NORMAL"
    }

    else if(imc > 24.99 && imc <= 29.99) {
        status_imc.innerHTML = "ACIMA DO PESO"
    }

    else if(imc > 29.99 && imc <= 34.99) {
        status_imc.innerHTML = "OBESIDADE I"
    }

    else if(imc > 34.99 && imc <= 39.99) {
        status_imc.innerHTML = "OBESIDADE II (SEVERA)"
    }

    else if(imc > 39.99) {
        status_imc.innerHTML = "OBESIDADE III (MÓRBIDA)"
    }

    if(peso.value < 1 || altura.value > 100 || altura.value < 1) {
        imc.innerHTML = "0"
        status_imc.innerHTML = "INSIRA UM VALOR VALIDO"
    }

})