// PERULANGAN -> LOOPING
// 3 structure for(index awal, syarat, Langkah){... }
console.log('=== FOR LOOPING ===');

for (let i = 0; i < 5; i++) {
  console.log(`Perulangan ke-${i}`);
  console.log(`... akhir loop ke-${i}...`);
}
//Negative loop
for (let i = 5; i >= 1; i--) {
  console.log(`Perulangan ke-${i}`);
  console.log(`... akhir loop ke-${i}...`);
}

const equipmets = ['knife', 'fork', 'spoon', 'plate'];
// manual akses data lewat index
console.log(equipmets[0]);
console.log(equipmets[1]);
const totalEquipments = equipmets.length;
for (let i = 0; i < totalEquipments; i++) {
  console.log(`item ke-${i} adalah ${equipmets[i]}`);
  console.log(`... akhir loop ke-${i}...`);
  
}

console.log('=== RECIPES LOOPING ===');
const recipes = [
    {name: 'Martabak', ingredients: ['flour', 'egg', 'milk', 'sugar']},
    {name: 'cheese cake', ingredients: ['flour', 'cream cheese', 'milk', 'sugar']},
    {name: 'lapis', ingredients: ['flour', 'egg', 'milk', 'sugar']},
];

for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    console.log(`Resep ke-${i}  ${recipes[i ].name}`);
    console.log(`Daftar BAhan Baku`);
    for (let j = 0; j < recipe.ingredients.length; j++) {
    const no = j+1;
    const itemIngredient = recipe.ingredients[j];
    console.log(`  ${no}. ${itemIngredient}`);
    }
    console.log(`... Resep ke-${i} selesai`);
}