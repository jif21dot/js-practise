const resultsDiv = document.getElementById("results");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const messageP = document.getElementById("message");

const fakeMeals = [
    { strMeal: "Chicken Handi", strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg", idMeal: "52795" },
    { strMeal: "Chicken Karaage",  strMealThumb: "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg", idMeal: "53020" },
];

function renderMeals(meals) {
    const html = meals.map(meal => `
        <div class="card">
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