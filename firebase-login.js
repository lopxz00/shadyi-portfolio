import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3n-9IzWM7gUBp_ZXXo48S-7eqE-JK3hc",
  authDomain: "shadyi-portfolio.firebaseapp.com",
  projectId: "shadyi-portfolio",
  storageBucket: "shadyi-portfolio.firebasestorage.app",
  messagingSenderId: "319583502536",
  appId: "1:319583502536:web:0d37577e89eab2e11fa5fd",
  measurementId: "G-TCPJ5CPBXN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const form = document.getElementById('login-form');
const msg  = document.getElementById('login-msg');
const modal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-open-btn');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  msg.className = 'login-msg';
  msg.textContent = 'Logging in...';

  try {
    await signInWithEmailAndPassword(auth, email, password);
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    msg.textContent = '';
    // Redirect to admin panel after successful login
    window.location.href = 'admin.html';
  } catch (err) {
    msg.className = 'login-msg error';
    msg.textContent = 'Invalid email or password.';
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.textContent = 'LOGOUT';
    loginBtn.onclick = () => signOut(auth);
  } else {
    loginBtn.textContent = 'LOGIN';
    loginBtn.onclick = () => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
  }
});
