(() => {
  const variants = {
    100: {sku: '01306', price: 326.40, oldPrice: 349.20, availability: 'много'},
    500: {sku: '01307', price: 1432, oldPrice: 1646, availability: 'много'},
    1000: {sku: '01308', price: 2064, oldPrice: 2592, availability: 'немного'},
    5000: {sku: '01309', price: 6320, oldPrice: 8710, availability: 'много'},
  };

  const skuElement = document.querySelector('#sku');
  const priceElement = document.querySelector('#price');
  const oldPriceElement = document.querySelector('#old-price');
  const availabilityElement = document.querySelector('#availability');
  const buttons = document.querySelectorAll('#product-variants input[name="weight"]');
  const tabs = document.querySelectorAll('#product-tabs input[name="product-tab"]');
  const tabPanels = document.querySelectorAll('.product-tabs__panel');

  const formatPrice = (value) =>
    `${value.toLocaleString('ru-RU', {maximumFractionDigits: 2, minimumFractionDigits: Number.isInteger(value) ? 0 : 2})} ₽`;

  function selectVariant(weight) {
    const variant = variants[weight];

    skuElement.textContent = variant.sku;
    priceElement.textContent = formatPrice(variant.price);
    oldPriceElement.textContent = formatPrice(variant.oldPrice);
    availabilityElement.textContent = variant.availability;
  }

  function selectTab(tab) {
    tabPanels.forEach((panel) => {
      panel.classList.remove('active');

      if (panel.dataset.tab === tab) {
        panel.classList.add('active');
      }
    });
  }


  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      selectVariant(button.value);
    });
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      selectTab(tab.value);
    });
  });
})();