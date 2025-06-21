
function startGame() {
    alert("بدء اللعبة!");
}

function showSettings() {
    document.querySelector('.main-menu').style.display = 'none';
    document.querySelector('.settings').style.display = 'block';
}

function goBack() {
    document.querySelector('.settings').style.display = 'none';
    document.querySelector('.main-menu').style.display = 'block';
}
