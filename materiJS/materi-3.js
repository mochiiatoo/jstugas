console.log("=====================================");
console.log("MATERI 3 PSRT ! - DATA MANIPULATION");
console.log("======================================");
const namaSultan = "Sri Sultan hamungkubuwono X";
const namaKecil = namaSultan.toLowerCase();
const namaBesar = namaSultan.toUpperCase();
console.log({namaSultan});
console.log({namaKecil, namaBesar});
const gelar = namaSultan.slice(11, 26);// (index awal, index akhir)
console.log({gelar});
const nomorGelar = namaSultan.replace("X", "IIX");
console.log({gelar, nomorGelar});
const cekSultan = namaSultan.includes("Sultan");
if (cekSultan) {
    console.log(">>Nama Sultan Valid");
} else {
    console.log("Nama Sultan Tidak DI temukan");
}

// number manipulation
const hartaSultan = "350000000";// string angka
const konversiHarta = Number(hartaSultan);// konversi ke number
console.log({hartaSultan, konversiHarta});
const utangSultan = 25000.678;