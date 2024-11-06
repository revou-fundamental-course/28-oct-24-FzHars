// Ini file js

// fungsi validasi
function validateInput(berat, tinggiCM, usia, jenisKelamin) {
  // validasi jika input kosong
  if (!jenisKelamin) {
    alert("Jenis Kelamin belum dipilih!");
    return false;
  } else if (!berat) {
    alert("Berat badan belum diisi!");
    return false;
  } else if (!usia) {
    alert("Belum mengisi usia!");
    return false;
  } else if (!tinggiCM) {
    alert("Silahkan isi tinggi badan!");
    return false;
  }
  // Validasi input untuk nilai negatif atau nol
  if (berat <= 0) {
    alert("Berat badan harus lebih besar dari nol dan tidak boleh negatif");
    return false;
  } else if (tinggiCM <= 0) {
    alert("Tinggi badan harus lebih besar dari nol dan tidak boleh negatif");
    return false;
  }
  // Validasi berat badan batasan 1-300kg
  if (berat <= 1 || berat > 300) {
    alert("Berat badan yang valid 2-200 kg :)");
    return false;
  }
  //  Validasi usia
  if (usia < 5 || usia > 120) {
    alert("Usia yang valid antara 5-120 tahun");
    return false;
  }
  // Validasi tinggi badan batasan 1-2.5meter convert cm 100-250cm
  if (tinggiCM <= 99 || tinggiCM > 250) {
    alert("Tinggi badan yang valid 100-250 cm :)");
    return false;
  }
  return true;
}
// fungsi tampil kategori dan pesan
function displayResult(bmi, jenisKelamin, usia) {
  const resultKategori = document.getElementById("result-kategori");
  const resultKeterangan = document.getElementById("result-keterangan");

  if (bmi < 18.5) {
    resultKategori.textContent = "Berat Badan Kurang";
    resultKeterangan.innerHTML = `Hasil BMI : Di bawah <span style="border-bottom: 2px solid red; font-weight: bold; font-size: 1.3rem;">18.5</span><br>Jenis kelamin : ${jenisKelamin.value}<br>Usia : ${usia}<br> Anda berada dalam kategori underweight atau berat badan kurang. Anda dianjurkan untuk menambah berat badan hingga batas normal.`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultKategori.textContent = "Berat Badan Normal";
    resultKeterangan.innerHTML = `Hasil BMI :  Diantara <span style="border-bottom: 2px solid #3dd68e; font-weight: bold; font-size: 1.3rem;">18.5 dan 24.9</span><br>Jenis kelamin : ${jenisKelamin.value}<br>Usia : ${usia}<br> Anda berada dalam kategori normal. Pertahankan pola makan dan gaya hidup sehat Anda.`;
  } else if (bmi >= 25 && bmi < 29.9) {
    resultKategori.textContent = "Berat Badan Lebih";
    resultKeterangan.innerHTML = `Hasil BMI : Diantara <span style="border-bottom: 2px solid yellow; font-weight: bold; font-size: 1.3rem;">25 dan 29.9</span><br>Jenis kelamin : ${jenisKelamin.value}<br>Usia : ${usia}<br> Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.`;
  } else {
    resultKategori.textContent = "Obesitas";
    resultKeterangan.innerHTML = `Hasil BMI : Di atas <span style="border-bottom: 2px solid red; font-weight: bold; font-size: 1.3rem;">30</span><br>Jenis kelamin : ${jenisKelamin.value}<br>Usia :${usia}<br> Anda berada dalam kategori obesitas. Anda dianjurkan untuk menurunkan berat badan hingga batas normal dengan berkonsultasi kepada ahli gizi dan dokter.`;
  }
}

// fungsi show button ketika hitung
function showButton() {
  document.querySelector(".btn-download").style.display = "flex";
  document.querySelectorAll(".btn-ahli").forEach((button) => {
    button.style.display = "flex";
  });
}
// fungsi hitung bmi pada form
function result() {
  const berat = parseInt(document.getElementById("berat-badan").value);
  const usia = parseInt(document.getElementById("usia").value);
  const jenisKelamin = document.querySelector('input[name="jk"]:checked');
  //   const jenisKelamin = document.querySelector('input[name="jk"]:checked')?.value || null;
  const tinggiCM = parseInt(document.getElementById("tinggi-badan").value);
  const tinggiM = tinggiCM / 100;
  const bmi = berat / (tinggiM * tinggiM);

  if (!validateInput(berat, tinggiCM, usia, jenisKelamin)) {
    return;
  }

  //   result / hasil
  const resultAngka = document.getElementById("result-angka");
  resultAngka.textContent = bmi.toFixed(1);
  displayResult(bmi, jenisKelamin, usia);

  showButton();
}
document.getElementById("hitungF").addEventListener("click", result);

// fungsi reset form, r-angka, r-kategori, r-keterangan
function resetAll() {
  document.getElementById("form-input").reset();
  document.getElementById("result-angka").textContent = "00.00";
  document.getElementById("result-kategori").innerHTML = "-<br><br>";
  document.getElementById("result-keterangan").innerHTML = "<br><br><br>";
  document.querySelectorAll(".btn-ahli, .btn-download").forEach((button) => {
    button.style.display = "none";
  });
}
