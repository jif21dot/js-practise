const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

{
    async function morning() {
    console.log("Wake up");
    await wait(1000);
    console.log("Make coffee");
    await wait(1000);
    console.log("Go to work");
    }

    morning();
}

{
    async function order() {
        console.log("Start");
        await wait(1000);
        console.log("Middle");
        await wait(1000);
        console.log("End");
    }

    order();
}

{
    async function getNumber() {
        await wait(500);
        return 42;
    }

    async function main() {
        const number = await getNumber();
        console.log(number);
    }

    main();
}

{
    async function fetchRun(id) {
        await wait(500);
        if (id <= 0) {
            throw new Error("Invalid id: " + id);
        }
        return { id: id, km: 5.2, type: "easy" };
    }

    async function fetchThreeRuns() {
        const start = Date.now();
        try {
        const first = await fetchRun(1);
        console.log(first);
      } catch (error) {
        console.log("Caught:", error.message);
      } try {
        const second = await fetchRun(2);
        console.log(second);
      } catch (error) {
        console.log("Caught:", error.message);
      } try {
        const third = await fetchRun(3);
        console.log(third);
      } catch (error) {
        console.log("Caught:", error.message)
      }
      console.log("One by one took", Date.now() - start, "ms");
    }

    fetchThreeRuns();

    async function fetchAllRuns (){
        const start = Date.now();
        const runs = await Promise.all([fetchRun(1), fetchRun(2), fetchRun(3)]);
        console.log("Took", Date.now() - start, "ms");
    }

    fetchAllRuns();

    async function priority() {
        await fetchThreeRuns();
        await fetchAllRuns();
    }

    priority();
}

