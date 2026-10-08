export function totalKm(runs) {
    return runs.reduce((total, run) => total + run.km, 0);
}

export function longRuns(runs) {
    console.log(runs);
    return runs.filter(run => run.km > 10);
}

export function groupByType(runs) {
    const byType = runs.reduce((groups, run) => {
        if (!groups[run.type]) {
            groups[run.type] = [];
        }
        groups[run.type].push(run);
        return groups;
    }, {});

    return byType

}

export function findRun(runs, id) {
    const run = runs.find(r => r.id === id);
    if (!run) {
        throw new Error("No run with id " + id);
    }
    return run;
}