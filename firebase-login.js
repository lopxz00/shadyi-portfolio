import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

// ✅ Updated Firebase Config — shadi-potpholio project
const firebaseConfig = {
  apiKey: "AIzaSyA0BzNUhQXkx25MUIRlgHQsc_FMHJ-_6ns",
  authDomain: "shadi-potpholio.firebaseapp.com",
  projectId: "shadi-potpholio",
  storageBucket: "shadi-potpholio.firebasestorage.app",
  messagingSenderId: "1019115665023",
  appId: "1:1019115665023:web:13f3edafc520a141d0314a",
  measurementId: "G-654SYLQE0S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const form     = document.getElementById('login-form');
const msg      = document.getElementById('login-msg');
const modal    = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-open-btn');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  msg.className   = 'login-msg';
  msg.textContent = 'Logging in...';

  try {
    await signInWithEmailAndPassword(auth, email, password);
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    msg.textContent = '';
    window.location.href = 'admin.html';
  } catch (err) {
    msg.className   = 'login-msg error';
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
