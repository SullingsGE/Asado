import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "ID",
    appId: "APP_ID"
};

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
        form.reset(); // Vaciamos los campos como en el despacho de Chascomús
    } catch (error) {
        console.error("Error: ", error);
        status.innerText = "❌ Error al guardar.";
    }
});
