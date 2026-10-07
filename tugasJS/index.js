const studentName = "  Ahmad fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";
console.log("--------------------------------------------");
console.log("STUDENT DATA PROCESSOR");
console.log("____________________________________________");




const username = studentName
    .trim()
    .toLowerCase()
    .split(" ")
    .join(".");

console.log(`Username : ${username}`);
const cekAhmad = studentName.includes("Ahmad");
if (cekAhmad) {
    console.log(">> Nama Ahmad valid")
} else {
    console.log(">> Tidak ditemukan nama Ahmad!")
}

const namaBaru = studentName.replace("Ahmad", "Budi");
console.log({ namaBaru });
console.log("===================================");

const result = parseInt(ageText);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - result;


console.log(result);
console.log(typeof result);
console.log(birthYear);

const score = parseFloat(scoreText);

console.log(score.toFixed(2));
console.log(Math.round(score));
console.log(Math.floor(score));
console.log(Math.ceil(score));

let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade: ${grade}`);
console.log("===================================");


const parts = registrationText.split("-");

const day = Number(parts[0]);
const month = Number(parts[1]);
const year = Number(parts[2]);

console.log("Tanggal :", day);
console.log("Bulan   :", month);
console.log("Tahun   :", year);

const now = new Date();

console.log("Tahun       :", now.getFullYear());
console.log("Bulan       :", now.getMonth());
console.log("Tanggal     :", now.getDate());
console.log("Hari        :", now.getDay());
console.log("Jam         :", now.getHours());
console.log("Menit       :", now.getMinutes());

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    return `${day}-${month}-${year}`;
}

const noww = new Date();

console.log(formatDate(now));

const dice = 4;

console.log(`Lucky Dice : ${dice}`);
