{
    const meals = [
    { name: "chicken rice", calories: 650, protein: 45, type: "lunch" },
    { name: "porridge", calories: 400, protein: 15, type: "breakfast" },
    { name: "salmon pasta", calories: 720, protein: 40, type: "dinner" },
    { name: "omelette", calories: 350, protein: 28, type: "breakfast" },
    { name: "beef chilli", calories: 600, protein: 42, type: "dinner" },
    ];

    const names = meals.map(meal => meal.name);
    console.log(names);

    const highProtein = meals.filter(meals => meals.protein > 40);
    console.log(highProtein);

    const firstBreakfast = meals.find(meal => meal.type === "breakfast");
    console.log(firstBreakfast)

    const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);
    console.log(totalCalories);

    const lighterMeal = {...meals[0], calories: 500};
    console.log(meals[0]);
    console.log(lighterMeal);
}

{
    const students = [
    { name: "Alex", grade: 85 },
    { name: "Sam", grade: 92 },
    { name: "Jordan", grade: 78 },
    { name: "Taylor", grade: 95 }
    ];

    const names = students.map(student => student.name);
    console.log(names);

    const topStudent = students.reduce((highest, student) => 
        student.grade > highest.grade ? student : highest
    );
    console.log(topStudent);

    const averageGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
    console.log(averageGrade);

    const highStudents = students.filter(student => student.grade >= 90);
    console.log(highStudents);
}

{
    const user = {
    name: "James",
    age: 24,
    city: "London",
    hobbies: ["gaming", "football"]
    };

    const { name, age, ...details } = user
    console.log(name);
    console.log(age);

    const userCopy = { ...user };
    userCopy.city = "Manchester";
    userCopy.hobbies = [ ...userCopy.hobbies, "Coding" ]
    console.log(userCopy);

    const { name: userName, ...rest } = user;
    console.log(userName);
    console.log(details);

}

{
    const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];

    const uniqueNumbers = [];
    for (const number of numbers) {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }

    console.log(uniqueNumbers);

    const newNumbers = [ ...new Set(numbers) ];
    console.log(newNumbers);
}

{
    const cart = [
    { name: "Laptop", price: 800, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 60, quantity: 1 }
    ];

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    console.log(totalPrice);

    const itemNames = cart.map( item => item.name);
    console.log(itemNames);

    const topItem = cart.reduce((highest, item) => {
        return item.price > highest.price ? item : highest;
    });

    console.log(topItem);
    
}