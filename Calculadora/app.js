document.addEventListener('DOMContentLoaded', () => {
    // Obtém o input pelo seu nome e acessa o primeiro item da coleção
    const txt_board = document.getElementsByName('text-board')[0];
    
    // Verifica se o elemento de input foi encontrado
    if (txt_board) {
        // Obtém todos os botões
        const buttons = document.querySelectorAll('button');
        
        // Itera sobre todos os botões
        buttons.forEach(button => {
            // Define a função para atualizar o valor do input
            button.addEventListener('click', () => {
                // Atualiza o valor do input para o texto do botão
                txt_board.value += button.textContent;
            });
        });
    } else {
        console.error('Elemento de input não encontrado: Verifique o nome do elemento.');
    }
});
