const category = document.querySelectorAll('.item')
console.log(`Number of categories: ${category.length}`);

category.forEach((item) => {
    
    const title = item.firstElementChild.textContent;
    const elements = item.lastElementChild.children.length;
    
    console.log(`Category: `, title);
    console.log(`Elements: `, elements);
});