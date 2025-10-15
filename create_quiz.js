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

    document.getElementById("quizForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const answers = {};
        for (let i = 1; i <= 10; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            answers[`q${i}`] = selected ? selected.value : null;
        }
        localStorage.setItem("quizAnswers", JSON.stringify(answers));
        alert("Quiz saved! Share the guess.html link with your friends.");
    });
});
