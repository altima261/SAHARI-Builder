const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
  <html dir="rtl" style="background:#0f1117;color:#e8dcc6;font-family:Arial;text-align:center;padding:40px">
  <h1 style="color:#ff8c00">🌴 SAHARI Builder - يعمل في بيتك</h1>
  <h2>شاشة البداية: الأحساء أولاً - مسقط الرأس</h2>
  <p>6 ثيمات - 60 ثانية - Boot = الأحساء</p>
  <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
    <div style="background:#e8dcc6;color:#0f1117;padding:20px;border-radius:15px;border:3px solid gold">🌴 1. الأحساء - مسقط الرأس</div>
    <div style="background:#222;padding:20px;border-radius:15px">🏎️ 2. F1 Jeddah</div>
    <div style="background:#222;padding:20px;border-radius:15px">🏜️ 3. Al-Ula</div>
    <div style="background:#222;padding:20px;border-radius:15px">🐠 4. Red Sea</div>
    <div style="background:#222;padding:20px;border-radius:15px">🌃 5. KAFD</div>
    <div style="background:#222;padding:20px;border-radius:15px">🏜️ 6. Desert</div>
  </div>
  <br><button style="background:#ff8c00;color:white;padding:15px 30px;font-size:20px;border:none;border-radius:10px">Build APK - الأحساء أولاً</button>
  <p>SAHARI-M-A Final CLEAN V2 - 1024x600 - T7 P1</p>
  </html>
  `);
});

app.listen(PORT, () => console.log('SAHARI Builder يعمل على http://localhost:3000'));