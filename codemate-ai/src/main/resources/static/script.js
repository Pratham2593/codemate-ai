document.addEventListener("DOMContentLoaded", () => {

window.onload = function () {

    const analyzeBtn = document.querySelector(".analyze-btn");
    const clearBtn = document.querySelector(".clear-btn");
    const codeInput = document.getElementById("codeInput");

    const languageBox = document.getElementById("language");
    const summaryBox = document.getElementById("summary");
    const issuesBox = document.getElementById("issues");
    const complexityBox = document.getElementById("complexity");
    const improvementsBox = document.getElementById("improvements");
    const scoreBox = document.getElementById("score");

    const API_URL = "http://localhost:8080/api/review";

    console.log(analyzeBtn);
    console.log(clearBtn);

    analyzeBtn.addEventListener("click", analyzeCode);
    clearBtn.addEventListener("click", clearEditor);

    async function analyzeCode() {

        const code = codeInput.value.trim();

        if (!code) {
            alert("Please enter some code first.");
            return;
        }

        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = "⏳ Analyzing...";

        try {

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: code
                })
            });

            if (!response.ok) {
                throw new Error("Failed to analyze code");
            }

            const result = await response.text();

            displayResult(result);

        } catch (error) {

            console.error(error);

            summaryBox.innerHTML =
                "❌ Unable to connect to backend server.";

        } finally {

            analyzeBtn.disabled = false;
            analyzeBtn.innerHTML = "✨ Analyze Code";
        }
    }

    function clearEditor() {

        codeInput.value = "";

        languageBox.innerHTML = "--";
        summaryBox.innerHTML = "--";
        issuesBox.innerHTML = "--";
        complexityBox.innerHTML = "--";
        improvementsBox.innerHTML = "--";
        scoreBox.innerHTML = "--";
    }

    function displayResult(result) {

        const language =
            extractSection(result, "🚀 Language", "📖 Summary");

        const summary =
            extractSection(result, "📖 Summary", "⚠️ Issues");

        const issues =
            extractSection(result, "⚠️ Issues", "📏 Complexity");

        const complexity =
            extractSection(result, "📏 Complexity", "💡 Improvements");

        const improvements =
            extractSection(result, "💡 Improvements", "⭐ Code Quality Score");

        const score =
            extractAfter(result, "⭐ Code Quality Score");

        languageBox.innerHTML = formatText(language);
        summaryBox.innerHTML = formatText(summary);
        issuesBox.innerHTML = formatText(issues);
        complexityBox.innerHTML = formatText(complexity);
        improvementsBox.innerHTML = formatText(improvements);
        scoreBox.innerHTML = formatText(score);
    }

    function extractSection(text, start, end) {

        const startIndex = text.indexOf(start);

        if (startIndex === -1) return "--";

        const endIndex = text.indexOf(end);

        return text
            .substring(startIndex + start.length, endIndex)
            .trim();
    }

    function extractAfter(text, marker) {

        const index = text.indexOf(marker);

        if (index === -1) return "--";

        return text
            .substring(index + marker.length)
            .trim();
    }

    function formatText(text) {

        return text.replace(/\n/g, "<br>");
    }
};
});