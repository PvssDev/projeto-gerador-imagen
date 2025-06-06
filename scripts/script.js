function simulateGeneration() {
    const promptText = document.getElementById('promptInput').value
    if (promptText.trim() !== '') {
        alert('Gerando imagens para: "' + promptText + '"... (apenas uma simulação!)')
    } else {
        alert('Por favor, insira uma descrição para gerar a imagem.')
    }
}