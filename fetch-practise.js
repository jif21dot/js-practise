async function getMeals() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
  const data = await response.json();

  const mealNames = data.meals.map(meal => meal.strMeal)
  console.log(mealNames);
}

 
async function findByIngredient(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    if (!response.ok) {
        throw new Error("Request failed: " + response.status);
    }

    const data = await response.json();
    return data.meals ?? [];
}

async function main() {
    try {
    const meals = await findByIngredient("chicken_breast");

    if (meals.length === 0) {
        console.log("No recipes found");
        return;
    }

    const names = meals.map(meal => meal.strMeal);
    console.log(names);
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}


async function mains() {
    const start = Date.now();
    try {
        const [tuna, tomato] = await Promise.all([
            findByIngredient("tuna"),
            findByIngredient("tomato")
        ]);

        const names = [...tuna, ...tomato].map(meal => meal.strMeal);
        console.log(names);
        console.log("At the same time took:", Date.now() - start, "ms")
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}

async function oneByOne() {
    const start = Date.now();
    const tuna = await findByIngredient("tuna");
    const tomato = await findByIngredient("tomato");
    console.log("One by one took:", Date.now() - start, "ms");
}

async function priority() {
    await main();
    await mains();
    await oneByOne();
}

priority();