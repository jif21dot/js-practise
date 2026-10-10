import { runs } from "./data.js";

const list = document.getElementById("run-list");
const totalElement = document.getElementById("total");
let currentRuns = runs;

function renderRuns(runsToShow) {
    const html = runsToShow.map(run => `<li>${run.date}: ${run.km} km (${run.type}), ${run.heartRate} bpm </li>`);
    list.innerHTML = html.join("");

    const totalKm = runsToShow.reduce((total, run) => total + run.km, 0);
    totalElement.textContent = `Total distance: ${totalKm.toFixed(1)} km`;
}

renderRuns(runs);

const typeFilter = document.getElementById("type-filter");

typeFilter.addEventListener("change", () => {
    const chosen = typeFilter.value;

    if (chosen === "all") {
    currentRuns = runs;
    } else {
        currentRuns = runs.filter(run => run.type === chosen);
    }
    renderRuns(currentRuns);
});

const sortDistanceButton = document.getElementById("sort-distance");

sortDistanceButton.addEventListener("click", () => {
    const sorted = [...currentRuns].sort((a, b) => b.km - a.km);
    renderRuns(sorted);
});

const sortDateButton = document.getElementById("sort-date");

sortDateButton.addEventListener("click", () => {
    const sorted = [...currentRuns].sort((a, b) => b.date.localeCompare(a.date));
    renderRuns(sorted);
});