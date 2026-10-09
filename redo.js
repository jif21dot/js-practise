{
    const meals = [
    { name: "chicken rice", calories: 650, protein: 45, type: "lunch" },
    { name: "porridge", calories: 400, protein: 15, type: "breakfast" },
    { name: "salmon pasta", calories: 720, protein: 40, type: "dinner" },
    { name: "omelette", calories: 350, protein: 28, type: "breakfast" },
    { name: "beef chilli", calories: 600, protein: 42, type: "dinner" },
    ];

    const names = meals.map( meal => meal.name);
    console.log(names);

    const firstBreakfast = meals.find( meal => meal.type === "breakfast" );
    console.log(firstBreakfast);

    const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);
    console.log(totalCalories);
}