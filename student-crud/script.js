// ========================================
// STUDENT CRUD
// ========================================


// ========================================
// DATA SISWA
// ========================================

let students = [];


// ========================================
// INDEX DATA YANG SEDANG DI-EDIT
// ========================================

let editIndex = null;


// ========================================
// AMBIL ELEMENT HTML
// ========================================

const studentForm =
    document.getElementById("studentForm");

const studentName =
    document.getElementById("studentName");

const studentScore =
    document.getElementById("studentScore");

const studentList =
    document.getElementById("studentList");

const formTitle =
    document.getElementById("formTitle");

const submitButton =
    document.getElementById("submitButton");

const cancelButton =
    document.getElementById("cancelButton");

const message =
    document.getElementById("message");

const totalStudents =
    document.getElementById("totalStudents");

const averageScore =
    document.getElementById("averageScore");


// ========================================
// LOAD DATA DARI LOCALSTORAGE
// ========================================

function loadStudents() {

    const studentData =
        localStorage.getItem("hsiStudents");


    if (studentData !== null) {

        students =
            JSON.parse(studentData);

    } else {

        students = [];

    }
}


// ========================================
// SAVE DATA KE LOCALSTORAGE
// ========================================

function saveStudents() {

    const studentData =
        JSON.stringify(students);

    localStorage.setItem(
        "hsiStudents",
        studentData
    );
}


// ========================================
// MENAMPILKAN PESAN
// ========================================

function showMessage(text, type) {

    message.textContent = text;

    message.className =
        `message ${type}`;
}


// ========================================
// RESET FORM
// ========================================

function resetForm() {

    studentForm.reset();

    editIndex = null;

    formTitle.textContent =
        "➕ Tambah Siswa";

    submitButton.textContent =
        "➕ Tambah Siswa";

    cancelButton.hidden = true;
}


// ========================================
// SUBMIT FORM
// ========================================

studentForm.addEventListener(
    "submit",
    function (event) {

        // Supaya halaman tidak refresh
        event.preventDefault();


        const name =
            studentName.value.trim();

        const score =
            Number(studentScore.value);


        // ================================
        // VALIDASI NAMA
        // ================================

        if (name === "") {

            showMessage(
                "⚠️ Nama siswa wajib diisi.",
                "error"
            );

            return;
        }


        // ================================
        // VALIDASI NILAI
        // ================================

        if (
            studentScore.value === "" ||
            score < 0 ||
            score > 100
        ) {

            showMessage(
                "⚠️ Nilai harus berada di antara 0 - 100.",
                "error"
            );

            return;
        }


        // ================================
        // UPDATE SISWA
        // ================================

        if (editIndex !== null) {

            students[editIndex].nama =
                name;

            students[editIndex].score =
                score;


            saveStudents();

            generateStudentList();


            showMessage(
                `🔄 Data ${name} berhasil diupdate!`,
                "success"
            );


            resetForm();

            return;
        }


        // ================================
        // TAMBAH SISWA
        // ================================

        const newStudent = {
            nama: name,
            score: score
        };


        students.push(newStudent);


        saveStudents();

        generateStudentList();


        showMessage(
            `✅ ${name} berhasil ditambahkan!`,
            "success"
        );


        resetForm();
    }
);


// ========================================
// GENERATE STUDENT LIST
// ========================================

function generateStudentList() {

    studentList.innerHTML = "";


    // Jika kosong
    if (students.length === 0) {

        studentList.innerHTML = `
            <div class="empty">
                📭 Belum ada data siswa.
            </div>
        `;

        updateStats();

        return;
    }


    // Tampilkan semua siswa
    for (
        let i = 0;
        i < students.length;
        i++
    ) {

        const student =
            students[i];


        const studentItem =
            document.createElement("div");


        studentItem.className =
            "student-item";


        studentItem.innerHTML = `

            <div class="student-name">

                <span class="student-number">
                    ${i + 1}.
                </span>

                ${student.nama}

            </div>


            <div class="score">
                ${student.score}
            </div>


            <div class="action-buttons">

                <button
                    type="button"
                    class="edit-button"
                    data-action="edit"
                    data-index="${i}"
                >
                    ✏️ Ubah
                </button>


                <button
                    type="button"
                    class="delete-button"
                    data-action="delete"
                    data-index="${i}"
                >
                    🗑️ Hapus
                </button>

            </div>
        `;


        studentList.appendChild(studentItem);
    }


    updateStats();
}


// ========================================
// EVENT BUTTON EDIT & DELETE
// ========================================

studentList.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest("button");


        if (!button) {
            return;
        }


        const index =
            Number(button.dataset.index);

        const action =
            button.dataset.action;


        if (action === "edit") {

            editStudent(index);

        }


        if (action === "delete") {

            deleteStudent(index);

        }
    }
);


// ========================================
// EDIT SISWA
// ========================================

function editStudent(index) {

    const student =
        students[index];


    editIndex = index;


    studentName.value =
        student.nama;

    studentScore.value =
        student.score;


    formTitle.textContent =
        "✏️ Ubah Siswa";

    submitButton.textContent =
        "🔄 Update Siswa";

    cancelButton.hidden = false;


    studentName.focus();
}


// ========================================
// BATAL EDIT
// ========================================

cancelButton.addEventListener(
    "click",
    function () {

        resetForm();

        message.textContent = "";

        message.className = "message";
    }
);


// ========================================
// DELETE SISWA
// ========================================

function deleteStudent(index) {

    const student =
        students[index];


    // Confirm dialog
    const confirmDelete =
        confirm(
            `Apakah kamu yakin ingin menghapus ${student.nama}?`
        );


    // Jika Cancel
    if (!confirmDelete) {
        return;
    }


    // Hapus data
    students.splice(index, 1);


    // Simpan perubahan
    saveStudents();


    // Tampilkan ulang
    generateStudentList();


    // Jika data yang sedang diedit ikut terhapus
    if (editIndex === index) {

        resetForm();

    }


    showMessage(
        `🗑️ ${student.nama} berhasil dihapus!`,
        "success"
    );
}


// ========================================
// UPDATE STATISTIK
// ========================================

function updateStats() {

    totalStudents.textContent =
        students.length;


    if (students.length === 0) {

        averageScore.textContent =
            "0";

        return;
    }


    let totalScore = 0;


    for (
        let i = 0;
        i < students.length;
        i++
    ) {

        totalScore +=
            Number(students[i].score);

    }


    const average =
        totalScore / students.length;


    averageScore.textContent =
        average.toFixed(1);
}


// ========================================
// PROGRAM PERTAMA
// ========================================

loadStudents();

generateStudentList();
