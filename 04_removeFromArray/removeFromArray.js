function removeFromArray(array, ...removeThis) {
    // Criar uma cópia do array original para não modificá-lo diretamente
    const novoArray = [...array];

    // Percorrer os elementos a remover
    for (let i = 0; i < removeThis.length; i++) {
        let indice = novoArray.indexOf(removeThis[i]);
        // Se o elemento existir no array (índice diferente de -1)
        while (indice !== -1) {
            // Remover o elemento do array
            novoArray.splice(indice, 1);
            // Procurar novamente o elemento no array, a partir do índice anterior
            indice = novoArray.indexOf(removeThis[i], indice);
        }
    }
    return novoArray;
}

// Do not edit below this line
module.exports = removeFromArray;
