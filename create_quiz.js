
const questions = [{"question": "What is your favorite color?", "options": ["Red", "Blue", "Green", "Yellow"]}, {"question": "Which season do you prefer?", "options": ["Spring", "Summer", "Autumn", "Winter"]}, {"question": "Choose a pet:", "options": ["Dog", "Cat", "Bird", "Fish"]}];
let currentIndex = 0;
let answers = [];

function showQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    if (currentIndex >= questions.length) {
        localStorage.setItem("quiz_answers", JSON.stringify(answers));
        container.innerHTML = `<p>Quiz saved! Share the link to guess.html with your friends.</p>`;
        return;
    }
    const q = questions[currentIndex];
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<p><strong>Question ${currentIndex + 1}:</strong> ${q.question}</p>`;
    q.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
            answers.push(opt);
            currentIndex++;
            showQuestion();
        };
        qDiv.appendChild(btn);
    });
    container.appendChild(qDiv);
}

showQuestion();
