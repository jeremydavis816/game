document.addEventListener("DOMContentLoaded", function () {
    const leaderboardList = document.getElementById("leaderboard");
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboardList.appendChild(li);
    });
});
