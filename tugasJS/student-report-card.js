const students = [
    {
        name: "Andi",
        className: "X RPL 1",
        scores: [80, 90, 85],
        attendance: 90,
        hasViolation: false
    },

    {
        name: "Ochi",
        className:"X RPL 2",
        scores: [80, 100, 100],
        attendance: 100,
        hasViolation: true
    },
    {
        name: "matcha",
        className:"X RPL 2",
        scores: [60, 79, 100],
        attendance: 100,
        hasViolation: true
    }
]



const reportDate = new Date();

console.log("========================================");
console.log("        HSI STUDENT REPORT CARD");
console.log("========================================");

console.log(`Tanggal : ${reportDate.toLocaleDateString("id-ID")}`);
console.log("");


for (let i = 0; i < students.length; i++) {
    const student = students[i];

    let total = 0;
    for (let j = 0; j < student.scores.length; j++) {
        total += student.scores[j];
    }

    const average = total / student.scores.length;

    // Menentukan grade
    let grade;
    if (average >= 85) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 65) {
        grade = "C";
    } else {
        grade = "D";
    }

    const status = average >= 65 ? "LULUS" : "BELUM LULUS";

    // Output menggunakan template literal
    console.log(`
Student #${i + 1}
Nama       : ${student.name}
Kelas      : ${student.className}
Nilai      : ${student.scores.join(", ")}
Total      : ${total}
Rata-rata  : ${average.toFixed(2)}
Grade      : ${grade}
Kehadiran  : ${student.attendance}%
Pelanggaran: ${student.hasViolation ? "Ya" : "Tidak"}
Status     : ${status}
`);
}

