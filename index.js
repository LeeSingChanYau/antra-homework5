const items = [
  {
    name: 'apple',
    category: 'fruit',
  },
  {
    name: 'Cucumber',
    category: 'vegetable',
  },
  {
    name: 'Banana',
    category: 'fruit',
  },
  {
    name: 'Celery',
    category: 'vegetable',
  },
  {
    name: 'orange',
    category: 'fruit',
  },
  {
    name: 'sausage',
    category: 'meat',
  },
  {
    name: 'bacon',
    category: 'meat',
  },
];

function updateItems(element) {
  const filteredItems = items.filter((item) => item.category === element.value);
  let options = '';
  for (item of filteredItems) {
    options +=
      '<option value="' + `${item.name}` + '"' + `>${item.name}</option>`;
  }
  currentItems.innerHTML = options;
}
const currentCategory = document.getElementById('category');
const currentItems = document.getElementById('item');
const itemSelected = document.getElementById('item-selected');

updateItems(currentCategory);
itemSelected.innerText = currentItems.children[0].value;
currentCategory.addEventListener('change', (e) => {
  updateItems(e.target);
  console.log(currentItems.children[0].value);
  itemSelected.innerText = currentItems.children[0].value;
});

currentItems.addEventListener('change', (e) => {
  itemSelected.innerText = e.target.value;
});
