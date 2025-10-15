
const questions = [{"question": "What is your favorite color?", "options": ["Red", "Blue", "Green", "Yellow"]}, {"question": "Which season do you prefer?", "options": ["Spring", "Summer", "Autumn", "Winter"]}, {"question": "Choose a pet:", "options": ["Dog", "Cat", "Bird", "Fish"]}];
let currentIndex = 0;
let guesses = [];

function showQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    if (currentIndex >= questions.length) {
        const correctAnswers = JSON.parse(localStorage.getItem("quiz_answers"));
        let score = 0;
        let details = [];
        for (let i = 0; i < correctAnswers.length; i++) {
            const correct = correctAnswers[i];
            const guess = guesses[i];
            if (correct === guess) score++;
            details.push({ correct, guess });
        }
        const name = prompt("Enter your name:");
        const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "{}");
        leaderboard[name] = { score, answers: details.map(d => d.correct === d.guess) };
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        localStorage.setItem("latest_result", JSON.stringify({ score, total: correctAnswers.length, details }));
        window.location.href = "result.html";
        return;
    }
    const q = questions[currentIndex];
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<p><strong>Question ${currentIndex + 1}:</strong> ${q.question}</p>`;
    q.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
            guesses.push(opt);
            currentIndex++;
            showQuestion();
        };
        qDiv.appendChild(btn);
    });
    container.appendChild(qDiv);
}

showQuestion();
