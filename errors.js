try {
  console.log("Before the problem");
  const result = JSON.parse("not valid json");
  console.log("This line never runs");
} catch (error) {
  console.log("Caught an error:", error.message);
}

console.log("The program carried on");

{
    function double(n) {
        return n*2;
    }

    console.log(double(4));

    function getPace(km, minutes) {
        if (km <= 0) {
            throw new ErrorEvent("Distance must be greater than 0");
        }
        return minutes / km;
    }

    console.log(getPace(5, 30));

    try {
        console.log(getPace(0, 30));
    } catch (error) {
        console.log("Caught:", error.message);
    }

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

    function findRun(runs, id) {
        const run = runs.find(r => r.id === id);
        if (!run) {
            throw new Error("No run with id " + id);
        }
        return run;
    }

    console.log(findRun(runs, 5));

    try {
        console.log(findRun(runs, 62));
    } catch (error) {
        console.log("Caught:", error.message);
    }

    function checkMinutes(minutes) {
        if (typeof minutes !== "number") {
            throw new Error("Minutes must be a number")
        }
        return minutes;
    }
    console.log(checkMinutes(30));

    try {
        console.log(checkMinutes("thrty"));
    } catch (error) {
        console.log("Caught: " + error.message);
    }
}