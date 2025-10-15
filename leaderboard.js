
const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "{}");
const container = document.getElementById("leaderboard");

Object.entries(leaderboard).forEach(([name, data]) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${name} - Score: ${data.score}</h3>`;
    const boxes = document.createElement("div");
    data.answers.forEach(correct => {
        const box = document.createElement("span");
        box.className = "box " + (correct ? "green" : "red");
        boxes.appendChild(box);
    });
    div.appendChild(boxes);
    container.appendChild(div);
});
