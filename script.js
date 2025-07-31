let painCount = 0;
let level = 1;

const painCounter = document.getElementById("pain-count");
const levelCounter = document.getElementById("level");
const bloodBtn = document.getElementById("blood-btn");
const character = document.getElementById("character");
const levelUpSound = document.getElementById("level-up-sound");
const clickSound = document.getElementById("click-sound");

bloodBtn.addEventListener("click", () => {
    painCount += 100;
    painCounter.textContent = painCount;
    clickSound.play();

    if (painCount % 1000 === 0) {
        level += 1;
        levelCounter.textContent = level;
        alert("Новый уровень достигнут!");
        document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        character.src = `images/character${level % 5 + 1}.png`;
        levelUpSound.play();
    }
});
