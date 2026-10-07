console.log("===================================");
console.log(" MATERI 3 PART 2 - DATA PROCESSING");
console.log("===================================");
const skills = ['HTML', 'CSS', 'JavaScript', 'Python'];
console.log(skills);
// push = nambah di item terakhir
// unshift = nambah di item pertama
skills.push('TailwindCSS');
skills.unshift('GitHub');
console.log(skills);
// pop = menghapus item terakhir
// shift = menghapus item pertama
skills.pop();
skills.pop();
skills.shift();
console.log(skills);
// includes = cek apakah item ada di array atau tidak
const cekJs = skills.includes('JavaScript');
const cekReactJs = skills.includes('ReactJS');
console.log({ cekJs, cekReactJs });

// --------------------
// DATA PROCESSING
// --------------------
//  mapping data dengan .map()
const dompetDigital = [1000000, 750000, 250000, 5000000];
console.log(dompetDigital);
const kursUSD = 17672;
const dompetDollar = dompetDigital.map(
    duitRupiah => {
        const nilaiUSD = (duitRupiah / kursUSD).toFixed(2);
        return `$ ${nilaiUSD}`;
    }
);
console.log(dompetDollar);
// filter data dengan .filter()
const filterDuit = dompetDigital.filter(
    duitRupiah => duitRupiah < 1000000
);
console.log(filterDuit);
//  mengakumulasi data dengan .reduce()
const totalDompetRupiah = dompetDigital.reduce(
    (akumulator, duitRupiah) => akumulator + duitRupiah,
    0
);
console.log(totalDompetRupiah);
// Method Chaining = menggabungkan method-method yg sejenis
const namaSiswa = "  Budi Siregar  ";
// trim = menghapus spasi di awal dan akhir
// toUpperCase = mengubah ke huruf besar
// slice = mengambil bagian string dari index 0 ke 4
const formatNamaSiswa = namaSiswa.trim().toUpperCase().slice(0, 4);
console.log({ namaSiswa, formatNamaSiswa });
// method chaining di array
const totalMurahUSD = dompetDigital.map(rupiah => rupiah / kursUSD)
    .filter(usd => usd < 100)
    .reduce((sum, usd) => sum + usd, 0);

const totalBawah100Dollar = `$ ${totalMurahUSD.toFixed(2)}`;
console.log({ totalBawah100Dollar });
