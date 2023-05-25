fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.querySelector('.products');

    data.products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'relative rounded-md';

      const image = document.createElement('img');
      image.className =
        'w-300 h-300 object-cover mb-2 rounded-md border-black border-[1px] border-black cursor-pointer';
      image.src = product.images[0].src;
      image.alt = '';

      const usedLabel = document.createElement('span');
      usedLabel.className =
        'absolute top-[12px] left-[12px] bg-black text-white rounded-md py-[4px] px-2 uppercase ';
      usedLabel.textContent = 'Used';

      const title = document.createElement('h2');
      title.className = 'text-lg font-bold';
      title.textContent = product.title.split(' ').slice(0, 2).join(' ');

      const cost = document.createElement('h3');
      cost.className = 'text-lg font-bold mb-2 max-[500px]:hidden';
      cost.textContent = `${product.variants[1].price} KR.`;

      const buy = document.createElement('a');
      buy.className =
        'bg-black text-white font-bold rounded-md cursor-pointer block uppercase py-[16px] text-center hidden max-[500px]:block mb-12 mt-[12px]';
      buy.textContent = `PICK-UP IN `;

      const price = document.createElement('span');
      price.className = 'underline';
      price.textContent = product.variants[1].price;

      productCard.appendChild(image);
      productCard.appendChild(usedLabel);
      productCard.appendChild(title);
      productCard.appendChild(cost);
      buy.appendChild(price);
      productCard.appendChild(buy);
      productsContainer.appendChild(productCard);
    });
  })
  .catch((error) => console.error(error));

const expandableSection = document.getElementById('info');
const hiddenInfo = document.getElementById('hiddenInfo');
const arrowImage = document.getElementById('arrow');

expandableSection.addEventListener('click', () => {
  hiddenInfo.classList.toggle('hidden');
  arrowImage.classList.toggle('rotate-90');
  expandableSection.classList.toggle('rounded-md');
  expandableSection.classList.toggle('rounded-t-md');
});
