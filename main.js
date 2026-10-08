import { runs } from "./runs.js";
import { totalKm, longRuns, groupByType, findRun } from "./stats.js";

console.log(runs.length);
console.log(totalKm(runs));
console.log(longRuns(runs).length);
console.log(groupByType(runs));
console.log(findRun(runs, 5));

try {
    console.log(findRun(runs, 42));
    } catch (error) {
        console.log("caught: " + error.message);
    }