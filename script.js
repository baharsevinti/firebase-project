import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  Timestamp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4JKwEGZOKL6FraTTB6P7HKC1W03ww5Zc",
  authDomain: "modern-js-80a62.firebaseapp.com",
  projectId: "modern-js-80a62",
  storageBucket: "modern-js-80a62.appspot.com",
  messagingSenderId: "346108360009",
  appId: "1:346108360009:web:d00dce8ed05e33f2dc5698"
};

// Uygulamayı başlat ve Firestore'u al
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM yüklendikten sonra butonu dinle
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");

  if (!button) {
    console.error("Buton bulunamadı!");
    return;
  }

  button.addEventListener("click", async () => {
    const yeniHaber = {
      ad: "Modül ile haber",
      icerik: "Modüler sistemden gönderildi",
      tarih: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, "haberler"), yeniHaber);
      console.log("Haber eklendi. Belge ID:", docRef.id);
    } catch (error) {
      console.error("Ekleme hatası:", error);
    }
  });
  if (deleteBtn) {
    deleteBtn.addEventListener("click", async () => {
      const belgeId = prompt("Silmek istediğiniz belge ID'sini girin:");

      if (!belgeId) {
        console.warn("Belge ID girilmedi.");
        return;
      }

      try {
        await deleteDoc(doc(db, "haberler", belgeId));
        console.log("Belge silindi:", belgeId);
      } catch (error) {
        console.error("Silme hatası:", error);
      }
    });
  }
});
