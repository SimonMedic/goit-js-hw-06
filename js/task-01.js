// zadanie 1
const categoriesList = document.querySelector("#categories");

const itemsList = categoriesList.querySelectorAll("li.item");

const numberOfCategories = itemsList.length;

console.log(`Number of categories: ${numberOfCategories}`);

// zadanie 2
itemsList.forEach((item) => {
  const headerTwo = item.querySelector("h2");
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${headerTwo.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
