/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (!Array.isArray(transactions)) return [];

  const categoryamount = {};

  transactions.forEach(transaction => {
    if (transaction.category && typeof transaction.price === 'number') {
      if (!categoryamount[transaction.category]) {
        categoryamount[transaction.category] = 0;
      }
      categoryamount[transaction.category] += transaction.price;
    }
  });

  return Object.entries(categoryamount).map(([category, totalSpent]) => ({
    category,
    totalSpent
  }));
}

module.exports = calculateTotalSpentByCategory;

