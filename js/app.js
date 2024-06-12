function alterarStatus(gameId) {
    let gameItem = document.getElementById(`game-${gameId}`);
    
    let gameImg = gameItem.querySelector('.dashboard__item__img');
    let gameButton = gameItem.querySelector('.dashboard__item__button');
    
    let isRented = gameImg.classList.contains('dashboard__item__img--rented');
    
    if (isRented) {
        
        gameImg.classList.remove('dashboard__item__img--rented');
        gameButton.textContent = 'Alugar';
        gameButton.classList.remove('dashboard__item__button--return');
    } else {
        
        gameImg.classList.add('dashboard__item__img--rented');
        gameButton.textContent = 'Devolver';
        gameButton.classList.add('dashboard__item__button--return');
    }
}
