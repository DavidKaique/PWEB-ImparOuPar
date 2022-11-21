const numero_jog1 = document.querySelector("#escolha1")
const numero_jogador2 = document.querySelector("#escolha2")
const btnInicio = document.querySelector("#jogar")
const resultado = document.querySelector("#venceu")
const par = document.querySelector("#par")
const impar = document.querySelector("#impar")

const butaoJogar = function(e){
    e.preventDefault()

    let jog1 = Number(numero_jog1.value)
    let jog2 = Number(numero_jogador2.value)
    let soma = jog1 + jog2

    if (par.checked == true || impar.checked == true){
        if(par.checked == true && soma % 2 == 0){
            resultado.innerText = `
            Jogador 1 colocou ${jog1} e escolheu ${par.value}
            Jogador 2 colocou ${jog2} e escolheu ${impar.value}

            ${jog1} + ${jog2} = ${soma} o resultado dessa soma é ${par.value}

            O jogador 1 venceu!`
        }
        else if(par.checked == false && soma % 2 == 0){
            resultado.innerText = `
            Jogador 1 colocou ${jog1} e escolheu ${impar.value}
            Jogador 2 colocou ${jog2} e escolheu ${par.value}

            ${jog1} + ${jog2} = ${soma} o resultado dessa soma é ${par.value}

            O jogador 2 venceu!`
        }
        else if(impar.checked == true && soma % 2 == 1){
            resultado.innerText = `
            Jogador 1 colocou ${jog1} e escolheu ${impar.value}
            Jogador 2 colocou ${jog2} e escolheu ${par.value}

            ${jog1} + ${jog2} = ${soma} o resultado dessa soma é ${impar.value}

            O jogador 1 venceu!`
        }
        else if(impar.checked == false && soma % 2 == 1){
            resultado.innerText = `
            Jogador 1 colocou ${jog1} e escolheu ${par.value}
            Jogador 2 colocou ${jog2} e escolheu ${impar.value}

            ${jog1} + ${jog2} = ${soma} o resultado dessa soma é ${impar.value}

            O jogador 2 venceu!`
        }
    }
}

btnInicio.addEventListener("click", butaoJogar);

