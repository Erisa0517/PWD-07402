
document.getElementById("formNilai").addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil input dari HTML
    const xnama = document.getElementById("nama").value.trim();
    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;

    // Memeriksa kelengkapan input
    if (xnama === "") {
        alert("Nama mahasiswa harus diisi!");
        return;
    }

    if (inputTugas === "" || inputUTS === "" || inputUAS === "") {
        alert("Semua nilai harus diisi!");
        return;
    }

    const ytugas = Number(inputTugas);
    const yuts = Number(inputUTS);
    const yuas = Number(inputUAS);

    // Memeriksa rentang nilai
    if (
        ytugas < 0 || ytugas > 100 ||
        yuts < 0 || yuts > 100 ||
        yuas < 0 || yuas > 100
    ) {
        alert("Nilai harus antara 0 sampai 100!");
        return;
    }

    // Menghitung nilai akhir sesuai kode dosen
    let nilaiAkhir =
        (ytugas * 0.30) +
        (yuts * 0.30) +
        (yuas * 0.40);

    // Menentukan nilai huruf
    let nilaiHuruf;

    if (nilaiAkhir >= 85) {
        nilaiHuruf = "A";
    } else if (nilaiAkhir >= 75) {
        nilaiHuruf = "B";
    } else if (nilaiAkhir >= 65) {
        nilaiHuruf = "C";
    } else if (nilaiAkhir >= 50) {
        nilaiHuruf = "D";
    } else {
        nilaiHuruf = "E";
    }

    // Menentukan status kelulusan
    let status;

    if (nilaiAkhir >= 60) {
        status = "Lulus";
    } else {
        status = "Tidak Lulus";
    }

    // Menampilkan hasil perhitungan
    document.getElementById("hasilNama").textContent = xnama;
    document.getElementById("hasilTugas").textContent = ytugas;
    document.getElementById("hasilUTS").textContent = yuts;
    document.getElementById("hasilUAS").textContent = yuas;

    document.getElementById("nilaiAkhir").textContent =
        nilaiAkhir.toFixed(2);

    document.getElementById("nilaiHuruf").textContent = nilaiHuruf;
    document.getElementById("keterangan").textContent = status;

    document.getElementById("hasil").classList.remove("d-none");
});

// Menyembunyikan hasil ketika tombol Reset ditekan
document.getElementById("formNilai").addEventListener("reset", function () {
    document.getElementById("hasil").classList.add("d-none");
});
