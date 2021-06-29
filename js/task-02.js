
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsItems = ingredients.forEach((item) => {
    const ingredientsList = document.querySelector('#ingredients');
    const ingridientsItem = document.createElement('li')
    ingridientsItem.textContent = item;

    return ingredientsList.append(ingridientsItem);

});
    


