document.addEventListener("DOMContentLoaded", function () {
    const questionsDiv = document.getElementById("questions");
    for (let i = 1; i <= 10; i++) {
        const question = document.createElement("div");
        question.innerHTML = `
            <p>Question ${i}</p>
            <label><input type="radio" name="q${i}" value="A"> A</label>
            <label><input type="radio" name="q${i}" value="B"> B</label>
            <label><input type="radio" name="q${i}" value="C"> C</label>
            <label><input type="radio" name="q${i}" value="D"> D</label>
        `;
        questionsDiv.appendChild(question);
    }

    document.getElementById("guessForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const participantName = document.getElementById("participantName").value;
        const answers = JSON.parse(localStorage.getItem("quizAnswers"));
        let score = 0;
        for (let i = 1; i <= 10; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected && selected.value === answers[`q${i}`]) {
                score++;
            }
        }
        const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
        leaderboard.push({ name: participantName, score: score });
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        alert(`You scored ${score} out of 10!`);
    });
});
