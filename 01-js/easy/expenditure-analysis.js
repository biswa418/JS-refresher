/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //ans list
  let ans = {};
  let ansList = [];

  transactions.map((transaction) => {
    const { category, price } = transaction;

    if (ans[category]) {
      ans[category] += price;
    } else {
      ans[category] = price;
    }
  });

  for (let i in ans) {
    ansList.push({ [i]: ans[i] })
  }

  return ansList;
}

// let ans = calculateTotalSpentByCategory([
//   {
//     itemName: "Soap",
//     category: "daily",
//     price: 35,
//     timestamp: '21-01-2023'
//   },
//   {
//     itemName: "Phone",
//     category: "electronics",
//     price: 350,
//     timestamp: '21-01-2023'
//   },
//   {
//     itemName: "Charger",
//     category: "electronics",
//     price: 100,
//     timestamp: '21-01-2023'
//   },

//   {
//     itemName: "Masala",
//     category: "daily",
//     price: 50,
//     timestamp: '21-01-2023'
//   },
// ]);

// console.log(ans);

module.exports = calculateTotalSpentByCategory;
