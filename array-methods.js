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


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

let names = users.map( item => item.name);

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);