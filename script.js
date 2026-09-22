

// Komentar

// Aktivitas 1 : Setup Berkas & Integrasi Javascript (script.js)
// Mencetak sebuah nilai = console.log("Teks")

console.log("=== Kalkulator Nilai Rapor Kelas");
console.log("Javascript Terhubung!");

// Variabel Const = Konstanta sifatnya tetap dan tidak bisa diubah

const Nama_Kampus = "UPI PWK"; //Nama Kampus & tidak bisa diubah karena constanta
const Mata_Kuliah = ["Promnet", "Jarkom", "SCM"]; //Mata Kuliah & tidak bisa diubah karena constanta

// Variabel Let = "let digunakan untuk nilai yang bisa diubah sewaktu-waktu

let Nama_Guru = "Pak Zamzam"; //Nama Guru berubah untuk guru yang mengajar & bisa diubah
let Kelas_Praktikum = "Lab B"; //Nama Kelas yang kita pakai untuk belajar & bisa diubah

// Cetak nilai nilai dari variabel let dan variabel const
// Operator + digunakan untuk menggabungkan teks string

console.log("Kampus : " + Nama_Kampus); //Tampilkan Nama Kampus
console.log("Kelas : " + Kelas_Praktikum); //Tampilkan Nama Kelas
console.log("Guru : " + Nama_Guru); //Tampilkan Nama Guru

// DEMO Perbedaan variabel const dan let

Nama_Guru = "Pak Adelio"; //Nama Guru variabel let'
console.log("Guru Baru (Setelah diubah dengan variabel let): " + Nama_Guru);

// Menggunakan Variabel Const
// Nama_Kampus = "UPI BUMSIL"; //Akan Terjadi ERROR Uncaught Typeerror

// Input Interaktif
// alert ini berfungsi sebagai penampil dialog pop up
alert("Selamat Datang di Aplikasi Kalkulator Nilai Rapor! ");

//Menampilkan Nama Mahasiswa
let Nama_Mahasiswa = prompt("Halo! Masukan Nama Kamu Untuk Memulai : ");

// Conditional Statement IF, IF ELSE, ELSE
// Tulis "if (Nama_Mahasiswa)"
// Maksudnya adalah "Jika Nama_Mahasiswa ada isinya " jalankan blok diatas
// "else" : Jika tidak sesuai tidak memenuhi atau kosong jalankan blok bawah
if (Nama_Mahasiswa) {
    // Jika user mengisi Nama :
    alert("Halo, " + Nama_Mahasiswa + "! Yuk kita hitung nilai rapor kamu.");
    console.log("Siswa yang aktif: " + Nama_Mahasiswa);
} else {
    // Jika user tidak mengisi nama (kosong) maka ia dipanggil anonim
    alert("Kamu tidak memasukkan nama. Kamu dipanggil Mahasiswa Anonymous");
    Nama_Mahasiswa = "Siswa Anonim";
    console.log("Siswa yang aktif: " + Nama_Mahasiswa);
}

// Operasi Aritmatika - Hitung Nilai Rata-rata
let Nilai_Promnet = 80;
let Nilai_Jarkom = 75;
let Nilai_SCM = 90;

// Jumlahkan Nilai
let Jumlah_Nilai = Nilai_Promnet + Nilai_Jarkom + Nilai_SCM;

// Bagi hasil penjumlahan dibagi 3
let Nilai_Ratarata = Jumlah_Nilai / 3;

// Cetak nilai nya / output
console.log("Nilai " + Nama_Mahasiswa + "cantik");
console.log("Promnet : " + Nilai_Promnet);
console.log("Jarkom : " + Nilai_Jarkom);
console.log("SCM : " + Nilai_SCM);

// Tampilkan Nilai Rata-rata
console.log("Jumlah Nilai Kamu Adalah " + Jumlah_Nilai);

// Tampilkan Nilai Rata-rata
console.log("Nilai Rata-rata Adalah " + Nilai_Ratarata);


//Percabangan IF ELSE untuk menentukan predikat = A, B, C, D

// Buat Variabel Kosong
let Predikat = ""; //Akan diisi Grade / Predikat A, B, C, D
let Keterangan = ""; //Diisi Keterangan A -> Sangat Baik

// Percabangan / Conditional Statement ELSE IF
if (Nilai_Ratarata >= 90) {
    // Kondisi yang Pertama kali di cek : apakah nilai itu terpenuhi
    Predikat = "A";
    Keterangan = "Sangat Baik!";
} else if (Nilai_Ratarata >= 80) {
    // Kondisi Kedua Jika kondisi  pertama itu tidak terpenuhi
    Predikat = "B";
    Keterangan = "Baik";
} else if (Nilai_Ratarata >= 70) {
    // Kondisi ke Tiga Jika kondisi kedua itu tidak terpenuhi
    Predikat = "C";
    Keterangan = "Cukup";
} else {
    // Jika semua kondisi diatas tidak terpenuhi (Rata-rata nya < 70)
    Predikat = "D";
    Keterangan = "Perlu Perbaikan, Semangat!";
}

// Tampilkan Nilai Percabangan IF ELSE IF
console.log("Predikat : " + Predikat + "-" + Keterangan);

// Tampilkan pop up alert
alert(
    "Hasil Rapor " + Nama_Mahasiswa + ":\n" +
    "Rata-rata " + Nilai_Ratarata + ":\n" +
    "Predikat " + Predikat +" (" + Keterangan + ")"
);

// Function Cara membungkus sekumpulan kode menjadi satu blok
// Yang bisa dipanggil kapan saja dengan nama Functoin nya
// Struktur nya : function Penjumlahan (nilai1 + niai2 + nilai3)
function Hitung_Ratarata(n1, n2, n3) {
    let Jumlah = n1 + n2 + n3;
    return Jumlah / 3;
}

//Menentukan Predikat
function Tentukan_Predikat(Rata) {
    //Setiap baris "if" untuk menentukan predikat
    if (Rata >= 90) return "A - Sangat Baik";
    if (Rata >= 80) return "B - Baik";
    if (Rata >= 70) return "C - Cukup";
    return " D - Perlu Perbaikan";
}

// Buat Variabel dulu 
let Mahasiswa_A = Hitung_Ratarata(88, 92, 85);
//Predikat
let Mahasiswa_A_Predikat = Tentukan_Predikat(Mahasiswa_A);

// Cetak Tampilkan Konsole
console.log("Rata-rata Nilai Mahasiswa A Adalah " + Mahasiswa_A);
console.log("Predikatnya Adalah" + Mahasiswa_A_Predikat);

// ARRAY dan LOOPING RAJA TERAKHIR

// KOTAK PENYIMPANAN YANG DIISI NILAI
// DOTULIS DENGAN [..]
// NOTES INDEX OF ARRAY DIMULAI DARI 0

// Contoh ARRAY menampilkan Daftar Mahasiswa
let Daftar_Mahasiswa = [
    "Marsyah", // Posisi ke - 0 index ke 0
    "Fika", // Posisi ke - 1 index ke 1
    "Sheva", // Posisi ke - 2 index ke 2
    "Khoerul", // Posisi ke - 3 index ke 3
    "Cantik" // Posisi ke - 4 index ke 4
    // Total Panjang ARRAY Adalah 5
];

// Cetak ARRAY
console.log("=== Daftar Mahasiswa Kelas A " + Kelas_Praktikum + "===");

// Looping For
for (let i = 0; i < Daftar_Mahasiswa.length; i++) {
    console.log((i + 1) + "." Daftar_Mahasiswa[i]);
}

// .length
console.log("Total Mahasiswa : " Daftar_Mahasiswa.length + "Orang");
console.log("Praktikum Selesai War is Over");


