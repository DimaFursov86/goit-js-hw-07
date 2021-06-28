
const allCategoriesListEl = document.querySelectorAll('.item');

console.log(`В списке ${allCategoriesListEl.length} категории.`);

allCategoriesListEl.forEach((element) =>
    (console.log(`Категория: ${element.firstElementChild.textContent}`),
    console.log(`Количество элементов: ${element.childNodes[3].children.length}`)));





