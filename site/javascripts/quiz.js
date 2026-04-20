document.addEventListener("DOMContentLoaded", () => {
  const finishBtn = document.getElementById("finish-btn");
  const scoreBox = document.getElementById("score-box");
  const blocks = Array.from(document.querySelectorAll(".mcq"));

  // Tambahkan name unik untuk setiap soal (supaya radio button tidak bentrok antar soal)
  blocks.forEach((block, idx) => {
    const group = `q${idx + 1}`;
    block.querySelectorAll("input[type=radio]").forEach(r => r.name = group);
  });

  // === Fungsi cek apakah semua soal sudah dijawab ===
  function allAnswered() {
    return blocks.every(block =>
      Array.from(block.querySelectorAll("input[type=radio]")).some(r => r.checked)
    );
  }

  // === Penjelasan per soal ===
  document.querySelectorAll(".explain-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!allAnswered()) {
        alert("Harap jawab semua soal dulu sebelum membuka penjelasan.");
        return;
      }
      const block = btn.closest(".mcq");
      const explanation = block.querySelector(".explanation");
      if (!explanation) return;
      explanation.style.display =
        explanation.style.display === "block" ? "none" : "block";
    });
  });

  // === Tombol selesai ===
  finishBtn.addEventListener("click", () => {
    let total = blocks.length;
    let right = 0, answered = 0;
    let firstUnanswered = null;

    blocks.forEach(block => {
      const correctKey = block.dataset.answer.trim().toLowerCase();
      const items = Array.from(block.querySelectorAll(".choices li"));
      const selected = items.find(li => li.querySelector("input").checked);

      // reset warna
      items.forEach(li => li.classList.remove("correct","incorrect"));

      if (selected) {
        answered++;
        const key = (selected.dataset.key || "").toLowerCase();
        if (key === correctKey) {
          right++;
          selected.classList.add("correct");
        } else {
          selected.classList.add("incorrect");
          const correctLi = items.find(li => (li.dataset.key || "").toLowerCase() === correctKey);
          if (correctLi) correctLi.classList.add("correct");
        }
      } else {
        if (!firstUnanswered) firstUnanswered = block;
      }
    });

    // kalau masih ada yang belum dijawab
    if (answered < total) {
      alert("Masih ada soal yang belum dijawab.");
      firstUnanswered?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // tampilkan skor
    scoreBox.textContent = `Skor: ${right}/${total} (dijawab: ${answered}/${total})`;
    scoreBox.style.display = "block";
  });
});
