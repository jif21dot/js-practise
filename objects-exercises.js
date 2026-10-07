{
    const runs = [
    { id: 1, date: "2026-09-01", km: 5.2, minutes: 28, type: "easy" },
    { id: 2, date: "2026-09-03", km: 10.1, minutes: 52, type: "long" },
    { id: 3, date: "2026-09-05", km: 8.0, minutes: 38, type: "tempo" },
    { id: 4, date: "2026-09-08", km: 5.0, minutes: 27, type: "easy" },
    { id: 5, date: "2026-09-10", km: 16.4, minutes: 89, type: "long" },
    { id: 6, date: "2026-09-12", km: 6.5, minutes: 30, type: "tempo" },
    { id: 7, date: "2026-09-15", km: 4.0, minutes: 24, type: "easy" },
    { id: 8, date: "2026-09-17", km: 12.0, minutes: 60, type: "long" },
    ];

    const anotherRun = { id: 9, date: "2026-09-18", km: 10.0, minutes: 50, type: "easy" };

    const allRuns = [...runs, anotherRun];

    console.log(runs.length);
    console.log(allRuns.length);

    const runner = { name: "Alex", age: 29 };
    const runnerClub = { club: "Turriff Harriers", age: 30 };
    const merged = { ...runner, ...runnerClub};

    console.log(merged);

    const {id, ...details } = runs[0];
    console.log(id);
    console.log(details);

    const jogger = {
        name: "Jack",
        shoes: { type: "Running", brand: "Adidas"}
    };

    console.log(jogger.shoes?.brand);

    const toMiles = runs.map(run => ({ ...run, miles: Number((run.km * 0.621).toFixed(1))}));

    console.log(toMiles[0]);
    console.log(runs[0]);
    
    const withoutId = runs.map(run => {
        const { id, ...rest } = run;
        return rest;
    });

    console.log(withoutId);

    const noId = runs.map(({ id, ...rest}) => rest);

    console.log(noId);

    const recentRuns = [
        { id: 10, date: "2026-09-06", km: 15, minutes: 70, type: "long" },
        { id: 11, date: "2026-09-13", km: 5, minutes: 20, type: "easy" },
    ]

    const all = [...runs, ...recentRuns];
    const sortedRuns = [...all].sort((a, b) => a.date.localeCompare(b.date));

    console.log(sortedRuns);

    const byType = runs.reduce((groups, run) => {
        if (!groups[run.type]) {
            groups[run.type] = [];
        }
        groups[run.type].push(run);
        return groups;
    }, {});

    console.log(byType);
}