
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
    const ingredientsList = document.querySelector('#ingredients');
   
const ingredientsListToAppend = ingredients.map((item) => {
    const ingridientsItem = document.createElement('li');
    ingridientsItem.textContent = item;
    return ingridientsItem;

});
   ingredientsList.append(...ingredientsListToAppend); 

// ingredients.forEach((item) => {
//     const ingredientsList = document.querySelector('#ingredients');
//     const ingridientsItem = document.createElement('li')
//     ingridientsItem.textContent = item;

//     return ingredientsList.append(ingridientsItem);

// });
