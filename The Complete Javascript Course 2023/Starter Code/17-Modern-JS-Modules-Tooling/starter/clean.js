// L281 Let's Fix Some Bad Code: Part 1

// Change all var declaratiosn to const/lim

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

// limits -> spendingLimits
const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

// Refactor repeated code into functions
const getLimit = user => spendingLimits?.[user] ?? 0;

// add -> addExpense
const addExpense = function (value, description, user = 'jonas') {
  // if (!user) user = 'jonas'; // Use default parameers
  user = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // Use ternary operator
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // Cleaner code by using optional chaining and null coalescing operator
  const limit = getLimit(user);

  if (value <= limit) {
    // budget.push({ value: -value, description: description, user: user });
    // With enchanged literal syntax, don't need to repeat
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (const entry of budget) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }
    // Cleaner code using optional chaining and null coalescing operator
    // Call code as a function in the conditional directly
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // {
  //   if (entry.value <= -bigLimit) {
  // output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
  // Use template literals
  // output += `${entry.description.slice(-2)} / `;
  // }
  // }
  // Replace if statement with ternary

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);
