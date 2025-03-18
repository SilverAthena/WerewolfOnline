const roles = ['Loup-Garou', 'Villageois', 'Voyante', 'Sorcière', 'Chasseur'];
const joueurs = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function attribuerRoles() {
    const rolesDistribues = [];
    joueurs.forEach(joueur => {
        const role = roles[Math.floor(Math.random() * roles.length)];
        rolesDistribues.push({ joueur, role });
    });

    console.log(rolesDistribues);
    // Ici tu pourrais afficher les rôles dans le HTML
}
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA7kY93eZ6sBiCRk87ocEWa629Fs5u7PR8",
    authDomain: "werewolf-7b416.firebaseapp.com",
    projectId: "werewolf-7b416",
    storageBucket: "werewolf-7b416.firebasestorage.app",
    messagingSenderId: "531604198104",
    appId: "1:531604198104:web:c72a86255147105172fdad",
    measurementId: "G-W441M3LJVH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

attribuerRoles();