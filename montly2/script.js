const API_URL = "https://dummyjson.com/recipes";
const FAVORITE_KEY = "recipeFinderFavorites";

let recipes = [];
let favorites = [];
let currentRecipes = [];

// ==============================
// AMBIL ELEMENT HTML
// ==============================

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const cuisineFilter = document.getElementById("cuisine-filter");
const difficultyFilter = document.getElementById("difficulty-filter");
const resetFilterButton = document.getElementById("reset-filter-button");

const recipeGrid = document.getElementById("recipe-grid");
const recipeCount = document.getElementById("recipe-count");
const sectionTitle = document.getElementById("section-title");

const loadingState = document.getElementById("loading-state");
const errorState = document.getElementById("error-state");
const emptyState = document.getElementById("empty-state");

const favoriteButton = document.getElementById("favorite-button");
const favoriteCount = document.getElementById("favorite-count");

const recipeDialog = document.getElementById("recipe-dialog");
const dialogContent = document.getElementById("dialog-content");
const closeDialog = document.getElementById("close-dialog");


// ==============================
// LOCAL STORAGE
// ==============================

function loadFavorites() {
    const savedFavorites = localStorage.getItem(FAVORITE_KEY);

    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    } else {
        favorites = [];
    }

    updateFavoriteCount();
}


function saveFavorites() {
    localStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(favorites)
    );
}


function updateFavoriteCount() {
    favoriteCount.textContent = favorites.length;
}


function isFavorite(recipeId) {
    return favorites.some(
        recipe => recipe.id === recipeId
    );
}


// ==============================
// FETCH DATA DARI DUMMYJSON
// ==============================

async function fetchRecipes() {
    try {
        showLoading();

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Gagal mengambil data recipe.");
        }

        const data = await response.json();

        recipes = data.recipes;
        currentRecipes = recipes;

        createCuisineOptions();
        renderRecipes(recipes);

        // Hilangkan loading
        loadingState.hidden = true;

    } catch (error) {
        console.error(error);
        showError();
    }
}


// ==============================
// MEMBUAT OPTION CUISINE
// ==============================

function createCuisineOptions() {
    const cuisines = [
        ...new Set(
            recipes.map(recipe => recipe.cuisine)
        )
    ];

    cuisines.sort();

    cuisines.forEach(cuisine => {
        const option = document.createElement("option");

        option.value = cuisine;
        option.textContent = cuisine;

        cuisineFilter.appendChild(option);
    });
}


// ==============================
// MENAMPILKAN RECIPE
// ==============================

function renderRecipes(recipeList) {
    currentRecipes = recipeList;

    recipeGrid.innerHTML = "";

    recipeCount.textContent = `${recipeList.length} recipes`;

    if (recipeList.length === 0) {
        recipeGrid.hidden = true;
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;
    recipeGrid.hidden = false;

    recipeList.forEach(recipe => {

        const card = document.createElement("article");

        card.className = "recipe-card";

        const favoriteIcon = isFavorite(recipe.id)
            ? "❤️"
            : "♡";

        card.innerHTML = `
            <img
                class="recipe-image"
                src="${recipe.image}"
                alt="${recipe.name}"
            >

            <div class="recipe-body">

                <span class="recipe-cuisine">
                    ${recipe.cuisine}
                </span>

                <h3 class="recipe-title">
                    ${recipe.name}
                </h3>

                <div class="recipe-meta">
                    <span>
                        ⭐ ${recipe.rating}
                    </span>

                    <span>
                        ⏱️ ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                    </span>

                    <span>
                        👥 ${recipe.servings} servings
                    </span>
                </div>

                <div class="recipe-actions">

                    <button
                        class="detail-button"
                        type="button"
                        data-action="detail"
                        data-id="${recipe.id}"
                    >
                        View Detail
                    </button>

                    <button
                        class="like-button"
                        type="button"
                        data-action="favorite"
                        data-id="${recipe.id}"
                        aria-label="Favorite ${recipe.name}"
                        title="Favorite"
                    >
                        ${favoriteIcon}
                    </button>

                </div>

            </div>
        `;

        recipeGrid.appendChild(card);
    });
}


// ==============================
// SEARCH & FILTER
// ==============================

function applyFilters() {

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    const selectedCuisine = cuisineFilter.value;

    const selectedDifficulty = difficultyFilter.value;


    const filteredRecipes = recipes.filter(recipe => {

        const matchesSearch =
            recipe.name
                .toLowerCase()
                .includes(keyword);


        const matchesCuisine =
            selectedCuisine === "" ||
            recipe.cuisine === selectedCuisine;


        const matchesDifficulty =
            selectedDifficulty === "" ||
            recipe.difficulty === selectedDifficulty;


        return (
            matchesSearch &&
            matchesCuisine &&
            matchesDifficulty
        );
    });


    if (
        keyword ||
        selectedCuisine ||
        selectedDifficulty
    ) {
        sectionTitle.textContent = "Search Results";
    } else {
        sectionTitle.textContent = "Explore Recipes";
    }


    renderRecipes(filteredRecipes);

    updateResetButton();
}


// ==============================
// TOMBOL RESET
// ==============================

function updateResetButton() {

    const hasFilter =
        searchInput.value.trim() !== "" ||
        cuisineFilter.value !== "" ||
        difficultyFilter.value !== "";


    resetFilterButton.hidden = !hasFilter;
}


function resetFilters() {

    searchInput.value = "";

    cuisineFilter.value = "";

    difficultyFilter.value = "";

    sectionTitle.textContent = "Explore Recipes";

    renderRecipes(recipes);

    updateResetButton();
}


// ==============================
// DETAIL RECIPE
// ==============================

function showRecipeDetail(recipeId) {

    const recipe = recipes.find(
        recipe => recipe.id === recipeId
    );


    if (!recipe) {
        return;
    }


    const ingredientsHTML = recipe.ingredients
        .map(ingredient => {
            return `<li>${ingredient}</li>`;
        })
        .join("");


    const instructionsHTML = recipe.instructions
        .map((instruction, index) => {

            return `
                <p>
                    <strong>
                        Step ${index + 1}:
                    </strong>

                    ${instruction}
                </p>
            `;

        })
        .join("");


    dialogContent.innerHTML = `

        <img
            class="dialog-image"
            src="${recipe.image}"
            alt="${recipe.name}"
        >


        <div class="dialog-body">

            <span class="recipe-cuisine">
                ${recipe.cuisine}
            </span>


            <h2>
                ${recipe.name}
            </h2>


            <div class="dialog-meta">

                <span>
                    ⭐ ${recipe.rating}
                </span>

                <span>
                    📊 ${recipe.difficulty}
                </span>

                <span>
                    ⏱️ Prep: ${recipe.prepTimeMinutes} min
                </span>

                <span>
                    🔥 Cook: ${recipe.cookTimeMinutes} min
                </span>

                <span>
                    👥 ${recipe.servings} servings
                </span>

                <span>
                    🔥 ${recipe.caloriesPerServing} cal/serving
                </span>

            </div>


            <h3>
                🥕 Ingredients
            </h3>


            <ul class="ingredients">
                ${ingredientsHTML}
            </ul>


            <h3>
                👨‍🍳 Instructions
            </h3>


            <div class="instructions">
                ${instructionsHTML}
            </div>

        </div>
    `;


    recipeDialog.showModal();
}


// ==============================
// FAVORITE
// ==============================

function toggleFavorite(recipeId) {

    const recipe = recipes.find(
        recipe => recipe.id === recipeId
    );


    if (!recipe) {
        return;
    }


    const favoriteIndex = favorites.findIndex(
        favorite => favorite.id === recipeId
    );


    if (favoriteIndex === -1) {

        // Tambahkan ke favorite
        favorites.push(recipe);

    } else {

        // Hapus dari favorite
        favorites.splice(favoriteIndex, 1);

    }


    saveFavorites();

    updateFavoriteCount();


    // Render ulang agar icon favorite berubah
    renderRecipes(currentRecipes);
}


// ==============================
// MENAMPILKAN FAVORITE
// ==============================

function showFavorites() {

    if (favorites.length === 0) {

        sectionTitle.textContent = "My Favorites";

        renderRecipes([]);

        return;
    }


    sectionTitle.textContent = "My Favorites";

    renderRecipes(favorites);


    window.scrollTo({
        top: document.querySelector(".recipes-section").offsetTop,
        behavior: "smooth"
    });
}


// ==============================
// LOADING & ERROR
// ==============================

function showLoading() {

    loadingState.hidden = false;

    errorState.hidden = true;

    emptyState.hidden = true;

    recipeGrid.hidden = true;
}


function showError() {

    loadingState.hidden = true;

    errorState.hidden = false;

    emptyState.hidden = true;

    recipeGrid.hidden = true;
}


// ==============================
// EVENT
// ==============================

// Search form
searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    applyFilters();

});


// Search realtime
searchInput.addEventListener("input", function () {

    applyFilters();

});


// Filter cuisine
cuisineFilter.addEventListener("change", function () {

    applyFilters();

});


// Filter difficulty
difficultyFilter.addEventListener("change", function () {

    applyFilters();

});


// Reset
resetFilterButton.addEventListener("click", function () {

    resetFilters();

});


// Favorite menu
favoriteButton.addEventListener("click", function () {

    showFavorites();

});


// Recipe card buttons
recipeGrid.addEventListener("click", function (event) {

    const button = event.target.closest("button");


    if (!button) {
        return;
    }


    const recipeId = Number(button.dataset.id);

    const action = button.dataset.action;


    if (action === "detail") {

        showRecipeDetail(recipeId);

    }


    if (action === "favorite") {

        toggleFavorite(recipeId);

    }

});


// Close detail dialog
closeDialog.addEventListener("click", function () {

    recipeDialog.close();

});


// Klik area luar dialog untuk menutup
recipeDialog.addEventListener("click", function (event) {

    if (event.target === recipeDialog) {

        recipeDialog.close();

    }

});


// ==============================
// JALANKAN APLIKASI
// ==============================

loadFavorites();

fetchRecipes();