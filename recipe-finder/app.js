const resultsDiv = document.getElementById("results");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const messageP = document.getElementById("message");
const recipeDetailsDiv = document.getElementById("recipe-details");

const fakeMeals = [
    { strMeal: "Chicken Handi", strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg", idMeal: "52795" },
    { strMeal: "Chicken Karaage", strMealThumb: "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg", idMeal: "53020" },
];

function renderMeals(meals) {
    const html = meals.map(meal => `
        <div class="card" data-id="${meal.idMeal}">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
        </div>
        `);
    resultsDiv.innerHTML = html.join("");
}

searchButton.addEventListener("click", async () => {
    const ingredient = searchInput.value.trim();
    if (ingredient === "") {
        messageP.textContent = "Please enter an ingredient";
        return;
    }

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    messageP.textContent = "Loading...";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();

        if (data.meals === null) {
            messageP.textContent = "No recipes found";
            resultsDiv.innerHTML = "";
        } else {
            renderMeals(data.meals)
            messageP.textContent = "";
        }

    } catch (error) {
        messageP.textContent = "Something went wrong. Please try again.";
        resultsDiv.innerHTML = "";
        console.error(error)
    }


});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
})

resultsDiv.addEventListener("click", async (event) => {
    const card = event.target.closest(".card");

    if (card === null) {
        return;
    }

    const mealId = card.dataset.id;

    const detailUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    recipeDetailsDiv.textContent = "Loading recipe...";

    try {
        const response = await fetch(detailUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch recipe");
        }
        const data = await response.json();
        if (data.meals === null) {
            throw new Error("Recipe not found");
        }
        const meal = data.meals[0];
        const { strMeal, strInstructions, strMealThumb } = meal;

        console.log(strMeal);
        console.log(strInstructions);

        const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

        const ingredients = numbers.map((number) => {
            return {
                ingredient: meal[`strIngredient${number}`],
                measure: meal[`strMeasure${number}`],
            };
        });

        const filteredIngredients = ingredients.filter((item) => {
            return item.ingredient && item.ingredient.trim() !== "";
        });

        const ingredientItems = filteredIngredients.map((item) => {
            return `<li>${item.measure} ${item.ingredient}</li>`;
        });

        const ingredientHTML = ingredientItems.join("");

        console.log(ingredients);
        console.log(filteredIngredients);

        recipeDetailsDiv.innerHTML = `
        <h2>${strMeal}</h2>
        <img src="${strMealThumb}" alt="${strMeal}">
        <h3>Ingredients</h3>
        <ul>${ingredientHTML}</ul>
        <h3>Instructions</h3>
        <p>${strInstructions}</p>
    `;
    } catch (error) {
        recipeDetailsDiv.textContent = "Could not load recipe. Please try again.";
        console.error(error);
    }
});