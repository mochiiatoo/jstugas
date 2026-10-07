console.log('>>>> JS EVENT FORMS <<<<');
const nameInput = document.getElementById('nameInput');
const nameInfo = document.getElementById('nameInfo');
const previewName = document.getElementById('previewName');
const classSelect = document.getElementById('classSelect');
const previewClass = document.getElementById('previewClass');
const agreementCheckbox = document.getElementById('agreement');
const previewStatus = document.getElementById('previewStatus');
const previewInterest = document.getElementById('previewInterest');
const previewReason = document.getElementById('previewReason');
const message = document.getElementById('message');



console.log(nameInput);
nameInput.addEventListener('input', function () {
    const name = nameInput.value;
    console.log(`User menginput nama: ${name}`);
    nameInfo.textContent = `HALO ${name}`;
    previewName.textContent = name;
}
);


console.log(classSelect);
classSelect.addEventListener('change', function () {
    const className = classSelect.value;
    console.log(`User memilih kelas: ${className}`);
    previewClass.textContent = className;
});


console.log(agreementCheckbox);
agreementCheckbox.addEventListener('change', function () {
    const isChecked = agreementCheckbox.checked;// ambil status checknya
    console.log({ isChecked });//boolean
    previewStatus.textContent = isChecked ? 'Siap' : 'Belum siap';
    
});


document.addEventListener('DOMContentLoaded', function () {
    alert('Welcome to Coders Club')
});

const reasonInput = document.getElementById('reasonInput');
console.log(reasonInput);
reasonInput.addEventListener('keydown', function (e) {
    console.log(`User menginput key: ${e.key}`);
    const reason = reasonInput.value;
    previewReason.textContent = reason;
    const characterCount = document.getElementById('characterCount');
    const totalCounter = reason.length;
    characterCount.textContent = totalCounter;
    //Logika perubahan warna indicator
    if (totalCounter >= 90) {
      characterCount.style.color = "red"; // Kritis (Sisa 10 karakter)
    } else if (totalCounter >= 70) {
      characterCount.style.color = "orange"; // Peringatan (Sisa 30 karakter)
    } else {
      characterCount.style.color = "inherit"; // Normal (Kembali ke warna asli bawaan CSS)
    }
    
});

const registrationForm = document.getElementById('registrationForm');
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
    registrationForm.reset();
    previewName.textContent = 'Belum Di isi';
    previewClass.textContent = 'Belum Di pilih';
    previewInterest.textContent = 'Belum DI pilih';
    previewReason.textContent = 'Belum Ada alasan';
    previewStatus.textContent = 'Belum siap di kirim';
    message.textContent = 'silakan isi form pendaftaran';
});

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const confirmDialog = confirm(`Apakah Anda yakin ingin mengirim form ini?`);
    if (!confirmDialog) {
        console.log('user membatalkan');
        return;
}
console.log('form berhasil dikirim');

});
