
console.log("bismillah, hello world")
console.log("_________________________________________________________")
// setiap deklarasi di beri tiik koma

let namaStasiun = "st. kutoarjo";
let nomorGerbong = 4;
let statusKeberangkatan = false;

console.log(namaStasiun);
console.log({nomorGerbong, statusKeberangkatan});

const jumlahKursi = 100;
nomorGerbong = 7;
console.log({nomorGerbong, jumlahKursi});

const infoKereta = `Stasiun: ${namaStasiun} Nomor Gerbong: ${nomorGerbong}`;
console.log(infoKereta);


let nilaiA = 10
let nilaiB = 15
const formulaX = nilaiA + nilaiB;
console.log({nilaiA, nilaiB, formulaX})

// typeof pengecek tipe data
const checkNilai = typeof nilaiA;
console.log({checkNilai})


//operator pertandingan
const umurUjang = 20;
const umurAsep = 20;
const cekUmur = umurUjang === umurAsep;
console.log({cekUmur});
// cek umur
if (cekUmur) {
    console.log('umur ujang dan asep sama');
}
else{
    console.log('umur nya beda!!')
};

// > : lebih dari, < : kurang, != : tidak sama dengan 
const umurSumanto = 25;
if (umurSumanto > umurUjang){
    console.log('sumanto tuaan yak');
}
else{
    console.log ('umurnya muda');
}

//tidak smaa dengan
const umurCahyono = "25";
if(umurSumanto !== umurCahyono){
    console.log('umur mereka beda')
}
else {
    console.log('umur mereka sama ')
}

// array = list data dalam 1 variable
const daftarKereta = ["bengawan", "bangunkarta", "sinkasen", "prameks"];
console.log (daftarKereta);
console.log (daftarKereta[0]);
console.log (daftarKereta[1]);
console.log (daftarKereta[2]);
console.log (daftarKereta[3]);

//looping => for
//for (let i = 1; i <= 5; i++){
for (let i = 5; i >= 1; i--){
    console.log(`halo kak ke-${i}`);
}

const jumlahKereta = daftarKereta.length;
console.log({jumlahKereta});
for (let x = 0; x < jumlahKereta; x++) {
    const namaKereta = daftarKereta[x];
    console.log(`kereta ${namaKereta}`);
    
    
}

// object di js, mirip array tapi ada nama dan key nya
const profilSantri = {
    nama: "mochi",
    kelas:11,
    status:true,
    asrama:"ibnu khaldun",
    alamat: {
        kelurahan: "paradise",
        kecamatan: "konoha",
        kabupaten: "seoul",
        provinsi: "inggris jawa",
        detail: "dunia fantasi"
    }
};
console.log(profilSantri);
console.log('INFO SANTRI');
console.log('---------------');
console.log(`Nama Lengkap: ${profilSantri.nama}`);
console.log(`kelas: ${profilSantri.kelas}`);
console.log(`asrama santri: ${profilSantri.asrama}`);
console.log(`status aktif: ${profilSantri.status}`);
console.log(`alamat: ${profilSantri.alamat.detail}`);

// date = fitur object pengolahan waktu
const tanggalBaru = new Date();
console.log({tanggalBaru});
console.log(tanggalBaru.toString());
console.log(tanggalBaru.toLocaleString());



