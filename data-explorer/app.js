import { runs } from "./data.js";

const list = document.getElementById("run-list");

function renderRuns(runsToShow) {
    const html = runsToShow.map(run => `<li>${run.date}: ${run.km} km (${run.type}), ${run.heartRate} bpm </li>`);
    list.innerHTML = html.join("");
}

renderRuns(runs);

const typeFilter = document.getElementById("type-filter");

typeFilter.addEventListener("change", () => {
    const chosen = typeFilter.value;

    if (chosen === "all") {
        renderRuns(runs);
    } else {
        const filtered = runs.filter(run => run.type === chosen);
        renderRuns(filtered)
    }
});