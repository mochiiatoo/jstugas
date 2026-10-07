// ============================================
// STUDENT DATA PROCESSOR
// ============================================

const studentName = "  Ahmad fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

console.log("--------------------------------------------");
console.log("           STUDENT DATA PROCESSOR");
console.log("--------------------------------------------");


// ============================================
// 1. NAME / STUDENT
// ============================================

console.log("\n[1] STUDENT NAME");

const username = studentName
    .trim()
    .toLowerCase()
    .split(" ")
    .join(".");

console.log(`Username : ${username}`);

// Mengecek apakah nama mengandung "Ahmad"
const cekAhmad = studentName.includes("Ahmad");

if (cekAhmad) {
    console.log(">> Nama Ahmad valid");
} else {
    console.log(">> Tidak ditemukan nama Ahmad!");
}

// Mengganti nama Ahmad menjadi Budi
const namaBaru = studentName.replace("Ahmad", "Budi");

console.log(`Nama Baru : ${namaBaru}`);

console.log("--------------------------------------------");


// ============================================
// 2. AGE
// ============================================

console.log("\n[2] AGE");

const age = parseInt(ageText);

const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

console.log(`Age        : ${age}`);
console.log(`Tipe Data  : ${typeof age}`);
console.log(`Birth Year : ${birthYear}`);

console.log("--------------------------------------------");


// ============================================
// 3. SCORE
// ============================================

console.log("\n[3] SCORE");

const score = parseFloat(scoreText);

console.log(`Score       : ${score}`);
console.log(`2 Decimal   : ${score.toFixed(2)}`);
console.log(`Round       : ${Math.round(score)}`);
console.log(`Floor       : ${Math.floor(score)}`);
console.log(`Ceil        : ${Math.ceil(score)}`);

// Menentukan Grade
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade       : ${grade}`);

console.log("--------------------------------------------");


// ============================================
// 4. REGISTRATION DATE
// ============================================

console.log("\n[4] REGISTRATION DATE");

const parts = registrationText.split("-");

const day = Number(parts[0]);
const month = Number(parts[1]);
const year = Number(parts[2]);

console.log(`Tanggal : ${day}`);
console.log(`Bulan   : ${month}`);
console.log(`Tahun   : ${year}`);

console.log("--------------------------------------------");


// ============================================
// 5. CURRENT DATE & TIME
// ============================================

console.log("\n[5] CURRENT DATE & TIME");

const now = new Date();

console.log(`Tahun  : ${now.getFullYear()}`);
console.log(`Bulan  : ${now.getMonth() + 1}`);
console.log(`Tanggal: ${now.getDate()}`);
console.log(`Hari   : ${now.getDay()}`);
console.log(`Jam    : ${now.getHours()}`);
console.log(`Menit  : ${now.getMinutes()}`);

console.log("--------------------------------------------");


// ============================================
// 6. FORMAT DATE
// ============================================

console.log("\n[6] FORMAT DATE");

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    return `${day}-${month}-${year}`;
}

console.log(`Formatted Date : ${formatDate(now)}`);

console.log("--------------------------------------------");


// ============================================
// 7. LUCKY DICE
// ============================================

console.log("\n[7] LUCKY DICE");

const dice = 4;

console.log(`Lucky Dice : ${dice}`);

console.log("--------------------------------------------");