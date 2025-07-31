let painCount = 0;
let level = 1;

const painCounter = document.getElementById("pain-count");
const levelCounter = document.getElementById("level");
const bloodBtn = document.getElementById("blood-btn");

bloodBtn.addEventListener("click", () => {
    painCount += 100;
    painCounter.textContent = painCount;

    if (painCount % 1000 === 0) {
        level += 1;
        levelCounter.textContent = level;
        alert("Новый уровень достигнут!");
        document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
});
