const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchRun(id) {
    await wait(500);
    if (id <= 0) {
        throw new Error("Invalid id: " + id);
    } 
    return { id: id, km: 5.2, type: "easy"}
}

    async function fetchOne() {
        try {
            const first = await fetchRun(2);
            console.log(first)
        } catch (error) {
            console.log("Caught:", error.message)
        }
    }
    fetchOne();