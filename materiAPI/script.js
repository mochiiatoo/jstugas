console.log('=== MATERI 5 - CONSUME API ===');
const API_URL = 'https://dummyjson.com/products';
console.log({ API_URL });

const loadingState = document.getElementById('loading-state');
const productGrid = document.getElementById('product-grid');
const resultSummary = document.getElementById('result-summary');
function renderProduct(dataProduct) {
    dataProduct.map((dataProduct) => {
        const {id, title, price, category, thumbnail, rating} = dataProduct;
        loadingState.hidden = true;
        resultSummary.hidden = false;
        productGrid.hidden = false;
        productGrid.innerHTML += `
    
         <article class="product-card">
        <div class="product-image-wrap">
          <img class="product-image" src="${thumbnail}" alt="${title}" loading="lazy">
        </div>

        <div class="product-body">
          <span class="product-category">
            ${category}
          </span>

          <h3 class="product-title">
            ${title}
          </h3>

          <div class="product-meta">
            <span class="product-price">
              $${price}
            </span>

            <span class="product-rating">
              ⭐️ ${rating}
            </span>
          </div>

          <button type="button" class="detail-btn" data-id="${id}">
            Lihat Detail
          </button>
        </div>
      </article>
`;                                                                                                                                                                                                                                                                                   
    })
}
const getProductApi = async () => {

        const response = await fetch(API_URL);
        const data = await response.json();
        const {products, skip, limit} = data;
        console.log({products, skip, limit});
        //return products;
        renderProduct(products);
    
};


getProductApi();