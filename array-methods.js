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



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr)

{
  const prices = [12, 5, 30, 8, 22];

  const increased = prices.map(n => Number((n * 1.1).toFixed(2)));
  console.log(increased);

  const cheap = prices.filter(n => n < 20);
  console.log(cheap);

  const over = prices.find(n => n > 25);
  console.log(over);

  const total = prices.reduce((priceTotal, price) => priceTotal + price, 0);
  console.log(total);

  const order = [...prices].sort((a, b) => a - b);
  console.log(order);
}