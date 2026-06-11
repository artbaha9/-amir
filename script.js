function startGame() {
    document.querySelector('button').style.display = 'none';
    document.getElementById('game-content').style.display = 'block';
}

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    if (answer.trim() === 'البنفسجي') {
        alert('رائع! الإجابة صحيحة. أمير يعرفكِ جيداً. 💜');
    } else {
        alert('إجابة خاطئة، حاولي مرة أخرى!');
    }
}