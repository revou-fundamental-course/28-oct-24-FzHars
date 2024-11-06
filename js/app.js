// Ini file js
// fungsi hitung bmi pada form
function result() {
  const berat = parseInt(document.getElementById("berat-badan").value);
  const usia = parseInt(document.getElementById("usia").value);
  const jenisKelamin = document.querySelector('input[name="jk"]:checked');
  //   const jenisKelamin = document.querySelector('input[name="jk"]:checked')?.value || null;
  const tinggiCM = parseInt(document.getElementById("tinggi-badan").value);
  const tinggiM = tinggiCM / 100;
  const bmi = berat / (tinggiM * tinggiM);

  // Validasi input untuk nilai negatif atau nol
  if (berat <= 0 || tinggiCM <= 0) {
    alert("Berat dan tinggi badan harus lebih besar dari nol");
    return;
  }
  // Validasi berat badan batasan 1-300kg
  if (berat <= 0 || berat > 300) {
    alert("Berat badan yang valid 1-200 kg :)");
    return;
  }
  // Validasi tinggi badan batasan 1-2.5meter convert cm 100-250cm
  if (tinggiCM <= 100 || tinggiCM > 250) {
    alert("Tinggi badan yang valid 100-250 cm :)");
    return;
  }
  // Validasi jenis kelamin
  if (!jenisKelamin) {
    alert("Silakan pilih jenis kelamin");
    return;
  }

  const resultAngka = document.getElementById("result-angka");
  const resultKategori = document.getElementById("result-kategori");
  const resultKeterangan = document.getElementById("result-keterangan");
  //   result / hasil
  resultAngka.textContent = bmi.toFixed(1);
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

// fungsi reset form, r-angka, r-kategori, r-keterangan
function resetAll() {
  document.getElementById("form-input").reset();
  document.getElementById("result-angka").textContent = "00.00";
  document.getElementById("result-kategori").textContent = "";
  document.getElementById("result-keterangan").innerHTML = "<br><br><br>";
}
