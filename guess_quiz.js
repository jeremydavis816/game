
document.getElementById("guessForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const friendAnswers = {};
    for (let [key, value] of formData.entries()) {
        if (key !== "friendName") {
            friendAnswers[key] = value;
        }
    }
    const friendName = formData.get("friendName");
    const correctAnswers = {
        q1: localStorage.getItem("q1"),
        q2: localStorage.getItem("q2"),
        q3: localStorage.getItem("q3"),
        q4: localStorage.getItem("q4"),
        q5: localStorage.getItem("q5")
    };
    let score = 0;
    const results = [];
    for (let q in correctAnswers) {
        const correct = correctAnswers[q];
        const guess = friendAnswers[q];
        if (correct === guess) {
            score++;
            results.push({question: q, correct: true});
        } else {
            results.push({question: q, correct: false, correctAnswer: correct, guess: guess});
        }
    }
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    leaderboard.push({name: friendName, score: score, results: results});
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    localStorage.setItem("lastResults", JSON.stringify(results));
    window.location.href = "results.html";
});
