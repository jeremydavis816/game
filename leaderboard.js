
const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
leaderboard.sort((a, b) => b.score - a.score);
const container = document.getElementById("leaderboardContainer");
leaderboard.forEach(entry => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${entry.name}</strong> - Score: ${entry.score}<br>`;
    entry.results.forEach(r => {
        const box = document.createElement("span");
        box.className = r.correct ? "correct" : "incorrect";
        div.appendChild(box);
    });
    container.appendChild(div);
});
