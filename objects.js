{
    let user = {}; // create an empty object
    user.name = "John"; // add a property with a value
    user.surname = "Smith"; // add a property with a value
    user.name = "Pete"; // change the value of a property
    delete user.name; // delete a property
}

{ //return true if object has no properties, false otherwise
    function isEmpty(obj) {
        for (let key in obj) {
            // if the loop has started then there is a property
            return false;
        }
        return true;
    }
}

{
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }

    console.log(sum);
}

{
    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof obj[key] == 'number') {
                obj[key] *= 2;
            }
        }
    }
}

{
    const runner = {
        name: "Alex",
        age: 29,
        shoes: { brand: "Nike", model: "Pegasus", km: 320 },
        bestTimes: { fiveK: 24.5, tenK: 52.1 },
    };

    console.log(runner.name);
    console.log(runner.shoes.brand);
    
    runner.shoes.km += 12;
    console.log(runner.shoes.km)

    runner.club = "Aberdeen";
    console.log(runner);

    const {name, age} = runner;
    console.log(name);
    console.log(age);

    const {fiveK, tenK} = runner.bestTimes;
    console.log(fiveK);
    console.log(tenK);
    
    const olderRunner = { ...runner, age: 30};

    console.log(runner);
    console.log(olderRunner);
}