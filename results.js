
const results = JSON.parse(localStorage.getItem("lastResults") || "[]");
const container = document.getElementById("resultsContainer");
results.forEach((r, i) => {
    const div = document.createElement("div");
    if (r.correct) {
        div.textContent = `Question ${i+1}: Correct`;
    } else {
        div.textContent = `Question ${i+1}: Incorrect. You answered ${r.guess}, but the correct answer was ${r.correctAnswer}.`;
    }
    container.appendChild(div);
});
