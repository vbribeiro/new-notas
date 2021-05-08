const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'Detelar'
    botaoDeleta.addEventListener('click', delarTarefa)
    return botaoDeleta 
}

const delarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()
    return botaoDeleta
}

export default BotaoDeleta