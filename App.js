import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Tus credenciales reales
const firebaseConfig = {
  apiKey: "AIzaSyACQnoclGBn0SKwjrSlpWfZSFttgIDxu3U",
  authDomain: "asado-92479.firebaseapp.com",
  projectId: "asado-92479",
  storageBucket: "asado-92479.firebasestorage.app",
  messagingSenderId: "614923179620",
  appId: "1:614923179620:web:8ba9927a64ed6483adf171"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('asado-form');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('userName').value;
    const fecha = document.getElementById('eventDate').value;

    try {
        await addDoc(collection(db, "asados"), {
            invitado: nombre,
            fechaDisponibilidad: fecha,
            timestamp: new Date()
        });
        
        status.innerText = "✅ ¡Anotado con éxito!";
        form.reset(); 
    } catch (error) {
        console.error("Error: ", error);
        status.innerText = "❌ Error al guardar.";
    }
});
