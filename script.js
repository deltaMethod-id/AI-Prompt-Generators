/*
    AI Prompt Generator
    Main JavaScript
*/


function generatePrompt() {

    const idea = document.getElementById("idea").value;
    const ai = document.getElementById("ai").value;
    const type = document.getElementById("type").value;
    const result = document.getElementById("result");


    if (idea.trim() === "") {
        result.value = "⚠️ Silakan masukkan ide terlebih dahulu.";
        return;
    }


    let prompt = "";


    if (type === "Coding") {

        prompt = `
Bertindak sebagai developer profesional.

AI Target: ${ai}

Buatkan solusi untuk:
${idea}

Persyaratan:
- Gunakan kode yang bersih
- Buat struktur project yang rapi
- Jelaskan cara kerja
- Pastikan responsive dan mudah dikembangkan
`;

    } 
    
    else if (type === "Image") {

        prompt = `
Buat prompt gambar untuk ${ai}.

Ide:
${idea}

Tambahkan:
- Detail visual
- Style
- Lighting
- Camera angle
- Quality tinggi
`;

    } 
    
    else if (type === "Writing") {

        prompt = `
Bertindak sebagai penulis profesional.

Tugas:
${idea}

Gunakan:
- Bahasa yang jelas
- Struktur rapi
- Gaya menarik
- Informasi lengkap

AI:
${ai}
`;

    } 
    
    else if (type === "Marketing") {

        prompt = `
Bertindak sebagai ahli marketing.

Buat strategi untuk:
${idea}

Tambahkan:
- Target audience
- Ide promosi
- Branding
- Call to action

Gunakan AI:
${ai}
`;

    } 
    
    else if (type === "Learning") {

        prompt = `
Bertindak sebagai guru profesional.

Jelaskan:
${idea}

Buat:
- Penjelasan mudah dipahami
- Contoh
- Langkah pembelajaran

AI:
${ai}
`;

    } 
    
    else if (type === "Business") {

        prompt = `
Bertindak sebagai konsultan bisnis.

Analisis:
${idea}

Berikan:
- Strategi
- Risiko
- Solusi
- Rencana pengembangan

AI:
${ai}
`;

    }


    result.value = prompt.trim();

}



function improvePrompt() {

    const result = document.getElementById("result");


    if (result.value.trim() === "") {
        result.value = "⚠️ Generate prompt terlebih dahulu.";
        return;
    }


    result.value = `
✨ Improved Prompt:

${result.value}

Tambahan peningkatan:
- Buat output lebih detail
- Gunakan struktur profesional
- Tambahkan konteks yang jelas
- Optimalkan hasil AI
- Berikan jawaban berkualitas tinggi
`;

}



function copyPrompt() {

    const result = document.getElementById("result");


    if (result.value.trim() === "") {
        alert("Tidak ada prompt untuk disalin!");
        return;
    }


    navigator.clipboard.writeText(result.value)
        .then(() => {
            alert("✅ Prompt berhasil disalin!");
        })
        .catch(() => {
            alert("❌ Gagal menyalin prompt.");
        });

}
