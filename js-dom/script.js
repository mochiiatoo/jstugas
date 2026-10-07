console.log("=== SKL 2 -RECIPE FINDER ===");
const $searchForm = document.getElementById('search-form');// by id value
const $searchInput = document.querySelector('#search-input');// by id (with#)
const $heroTag = document.querySelector('.eyebrow');// by class (pke.)
const $heroTitle = document.querySelector('h1');
//console.log($heroTitle);
//console.log($searchForm);
//console.log($searchInput);
//console.log($heroTag);
$heroTag.textContent = "RECIPE FINDER APP";
$heroTitle.textContent = "Find your recipe";
// menambahkan style ke elemen DOM
$heroTag.style.color = "#000";
$heroTag.style.backgroundColor = "#fff";
$heroTitle.style.color = "gold";
const $searchBtn = document.querySelector('#search-form button');
$searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const searchValue = $searchInput.value;
    console.log('tombol search click');
    alert('lakukan pencarian resep....' + searchValue);
    
})