/**
 * SHADYI. — Video Editor & Motion Designer Portfolio
 * Dynamic Multi-Theme Engine (Cyan, Purple, Emerald, Gold, Crimson)
 * + 3D Scroll Tunnel + Interactive Particle & Portrait Canvases
 */

const THEME_PALETTES = {
  cyan: {
    primary: '#00e5ff',
    secondary: '#3b82f6',
    bright: '#7df9ff',
    deep: '#0369a1',
    bgGlow1: 'rgba(0, 229, 255, 0.52)',
    bgGlow2: 'rgba(37, 99, 235, 0.24)',
    jacketTop: '#041e34',
    jacketMid: '#020b16',
    faceLight: '#073452',
    faceMid: '#031322',
    hue1: 188,
    hue2: 215
  },
  purple: {
    primary: '#a855f7',
    secondary: '#ec4899',
    bright: '#e9d5ff',
    deep: '#6b21a8',
    bgGlow1: 'rgba(168, 85, 247, 0.52)',
    bgGlow2: 'rgba(236, 72, 153, 0.24)',
    jacketTop: '#24083d',
    jacketMid: '#0b0314',
    faceLight: '#3b0a64',
    faceMid: '#150426',
    hue1: 272,
    hue2: 325
  },
  emerald: {
    primary: '#10b981',
    secondary: '#06b6d4',
    bright: '#a7f3d0',
    deep: '#047857',
    bgGlow1: 'rgba(16, 185, 129, 0.52)',
    bgGlow2: 'rgba(6, 182, 212, 0.24)',
    jacketTop: '#042c1e',
    jacketMid: '#02100a',
    faceLight: '#064e3b',
    faceMid: '#021c14',
    hue1: 158,
    hue2: 182
  },
  gold: {
    primary: '#f59e0b',
    secondary: '#ef4444',
    bright: '#fef08a',
    deep: '#b45309',
    bgGlow1: 'rgba(245, 158, 11, 0.52)',
    bgGlow2: 'rgba(239, 68, 68, 0.24)',
    jacketTop: '#331c04',
    jacketMid: '#120902',
    faceLight: '#522c06',
    faceMid: '#1c0f03',
    hue1: 38,
    hue2: 16
  },
  crimson: {
    primary: '#ff1a2d',
    secondary: '#ff6a2b',
    bright: '#ffd6d9',
    deep: '#990012',
    bgGlow1: 'rgba(255, 38, 25, 0.55)',
    bgGlow2: 'rgba(180, 8, 24, 0.25)',
    jacketTop: '#2a0408',
    jacketMid: '#0c0204',
    faceLight: '#4a0b10',
    faceMid: '#1b0306',
    hue1: 352,
    hue2: 14
  }
};

let currentTheme = 'cyan';

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initPreloader();
  initEmberCanvas();
  initHeroFrameScrollAnimation();
  initHeroScrollEffect();
  initProjects3DTunnel();
  initScrollRevealsAndCounters();
  initNavbarActiveState();
  initProjectModal();
  initContactForm();
  initLogin();
  initScrollLightning();
});

/* ==========================================
   0. LOCKED CYAN THEME
   ========================================== */
function initThemeSwitcher() {
  currentTheme = 'cyan';
  document.documentElement.setAttribute('data-theme', 'cyan');
  localStorage.removeItem('shadyi_theme');
}

/* ==========================================
   1. FIRST-PAINT SETUP (NO LOADING SCREEN)
   ========================================== */
function initPreloader() {
  // No loading screen; the replay button just scrolls back to the top.
  const replayBtn = document.getElementById('replay-intro-btn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================
   2. 3D EMBER & BOKEH PARTICLE ENGINE
   ========================================== */
function initEmberCanvas() {
  const canvas = document.getElementById('ember-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  let mouseX = width / 2;
  let mouseY = height / 2;
  let scrollVelocity = 0;
  let lastScrollY = window.scrollY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    scrollVelocity = (currentY - lastScrollY) * 0.12;
    lastScrollY = currentY;
  }, { passive: true });

  const PARTICLE_COUNT = 80;
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const isBokeh = i < 16;
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1000,
      size: isBokeh ? 14 + Math.random() * 32 : 1.5 + Math.random() * 3.5,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -0.25 - Math.random() * 0.65,
      vz: -1.2 - Math.random() * 2.2,
      alpha: isBokeh ? 0.14 + Math.random() * 0.26 : 0.45 + Math.random() * 0.5,
      useSecondaryHue: Math.random() > 0.65,
      isBokeh
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    scrollVelocity *= 0.92;

    const palette = THEME_PALETTES[currentTheme] || THEME_PALETTES.cyan;
    const cx = width / 2 + (mouseX - width / 2) * 0.05;
    const cy = height / 2 + (mouseY - height / 2) * 0.05;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const hue = p.useSecondaryHue ? palette.hue2 : palette.hue1;

      p.x += p.vx;
      p.y += p.vy - scrollVelocity * (p.isBokeh ? 0.35 : 0.15);
      p.z += p.vz - Math.abs(scrollVelocity) * 0.8;

      if (p.z <= 10) {
        p.z = 1000;
        p.x = Math.random() * width;
        p.y = Math.random() * height;
      }
      if (p.y < -60) p.y = height + 60;
      if (p.y > height + 60) p.y = -60;
      if (p.x < -60) p.x = width + 60;
      if (p.x > width + 60) p.x = -60;

      const scale = 600 / (600 + p.z);
      const sx = cx + (p.x - cx) * scale;
      const sy = cy + (p.y - cy) * scale;
      const r = p.size * scale;

      ctx.save();
      if (p.isBokeh) {
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
        grad.addColorStop(0, `hsla(${hue}, 100%, 62%, ${p.alpha})`);
        grad.addColorStop(0.45, `hsla(${palette.hue1}, 95%, 45%, ${p.alpha * 0.5})`);
        grad.addColorStop(1, `hsla(${palette.hue1}, 100%, 30%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = `hsla(${hue}, 100%, 68%, ${p.alpha * scale})`;
        ctx.shadowColor = palette.primary;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.8, r), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================
   3. HERO MAN PORTRAIT SCROLL-DRIVEN ANIMATION (86 FRAMES)
   ========================================== */
function initHeroFrameScrollAnimation() {
  const canvas = document.getElementById('hero-portrait-canvas');
  const wrapper = document.getElementById('visor-portrait-wrapper');
  const heroCard = document.getElementById('hero-card');
  const statusEl = document.getElementById('hero-frame-status');
  const counterEl = document.getElementById('hero-frame-counter');
  const haloEl = document.getElementById('visor-halo');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const TOTAL_FRAMES = 86;
  const frames = [];
  let loadedCount = 0;

  // Preload all 86 frames
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const num = String(i).padStart(3, '0');
    const img = new Image();
    img.src = `frames/ezgif-frame-${num}.jpg`;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === 1) {
        drawFrame(0);
      }
    };
    frames.push(img);
  }

  let targetFrame = 0;
  let currentFrame = 0;
  let isMouseHovering = false;

  function drawFrame(index) {
    const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(index)));
    const img = frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Dynamic HUD updates based on cyber activation state
    if (counterEl) {
      counterEl.textContent = `${String(idx + 1).padStart(2, '0')}/${TOTAL_FRAMES}`;
    }
    if (statusEl) {
      if (idx < 15) {
        statusEl.textContent = 'NEURAL OPTICS // STANDBY';
      } else if (idx < 45) {
        statusEl.textContent = 'CYBER FOCUS // EYES CHARGING';
      } else if (idx < 72) {
        statusEl.textContent = 'OPTICAL SHIELDS // MATERIALIZING';
      } else {
        statusEl.textContent = 'CYBER VISOR LOCKED // OVERCLOCK 60FPS';
      }
    }

    // Dynamic halo expansion & glow with power state
    if (haloEl) {
      const power = idx / (TOTAL_FRAMES - 1);
      const scale = 0.85 + power * 0.45;
      const opacity = 0.5 + power * 0.5;
      haloEl.style.transform = `scale(${scale})`;
      haloEl.style.opacity = `${opacity}`;
    }
  }

  // Update target frame based on window scroll
  function updateScrollTarget() {
    if (isMouseHovering) return;
    const scrollY = window.scrollY;
    // Top 600px of scrolling maps seamlessly to frames 0..85
    const maxScroll = Math.min(window.innerHeight * 0.85, 600);
    const scrollProgress = Math.min(1, Math.max(0, scrollY / Math.max(1, maxScroll)));
    targetFrame = scrollProgress * (TOTAL_FRAMES - 1);
  }

  window.addEventListener('scroll', updateScrollTarget, { passive: true });
  updateScrollTarget();

  // Mouse horizontal scrubbing over portrait for interactive preview
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => {
      isMouseHovering = true;
    });

    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const xRatio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      targetFrame = xRatio * (TOTAL_FRAMES - 1);
    });

    wrapper.addEventListener('mouseleave', () => {
      isMouseHovering = false;
      updateScrollTarget();
    });

    // Mouse wheel scrubbing when hovering directly over the portrait
    wrapper.addEventListener('wheel', (e) => {
      e.preventDefault();
      isMouseHovering = true;
      targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, targetFrame + (e.deltaY > 0 ? 4 : -4)));
      clearTimeout(wrapper._wheelTimeout);
      wrapper._wheelTimeout = setTimeout(() => {
        isMouseHovering = false;
        updateScrollTarget();
      }, 900);
    }, { passive: false });
  }

  // 3D Parallax Tilt for the hero card
  if (heroCard && wrapper) {
    heroCard.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = heroCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      wrapper.style.transform = `translate3d(${x * 16}px, ${y * 16}px, 20px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      wrapper.style.transform = 'translate3d(0,0,0) rotateY(0) rotateX(0)';
      wrapper.style.transition = 'transform 0.5s ease';
      setTimeout(() => { wrapper.style.transition = ''; }, 500);
    });
  }

  // Smooth 60fps render loop with lerp interpolation
  function renderLoop() {
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.02) {
      currentFrame += diff * 0.16;
      drawFrame(currentFrame);
    }
    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
}

/* ==========================================
   4. HERO SCROLL ZOOM / PARALLAX
   ========================================== */
function initHeroScrollEffect() {
  const heroSection = document.getElementById('hero');
  const heroCard = document.getElementById('hero-card');
  if (!heroSection || !heroCard) return;

  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) {
      heroCard.style.transform = 'none';
      heroCard.style.opacity = '1';
      return;
    }
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    if (scrollY < vh * 1.1) {
      const progress = Math.min(1, Math.max(0, scrollY / (vh * 0.85)));
      const scale = 1 - progress * 0.08;
      const opacity = 1 - progress * 0.35;
      heroCard.style.transform = `scale(${scale})`;
      heroCard.style.opacity = `${opacity}`;
    }
  }, { passive: true });
}

/* ==========================================
   6. PROJECTS 3D SCROLL TUNNEL FLY-IN
   ========================================== */
function initProjects3DTunnel() {
  const section = document.querySelector('.projects-scroll-section');
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const progressBar = document.getElementById('projects-scroll-bar');
  const coreGlow = document.getElementById('tunnel-core-glow');

  if (!section || cards.length === 0) return;

  const trajectories = [
    { x: -280, y: -160, z: -750, rx: 22, ry: -24, delay: 0.00 },
    { x:    0, y: -210, z: -900, rx: 26, ry:   0, delay: 0.06 },
    { x:  280, y: -160, z: -780, rx: 22, ry:  24, delay: 0.12 },
    { x: -280, y:  160, z: -820, rx: -22, ry: -22, delay: 0.18 },
    { x:    0, y:  220, z: -950, rx: -26, ry:   0, delay: 0.24 },
    { x:  280, y:  160, z: -850, rx: -22, ry:  22, delay: 0.30 }
  ];

  function updateTunnel() {
    if (window.innerWidth <= 960) {
      cards.forEach(c => {
        c.style.transform = 'none';
        c.style.opacity = '1';
      });
      return;
    }

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    const entryDistance = vh * 0.85 + (section.offsetHeight - vh) * 0.45;
    const travelled = vh * 0.85 - rect.top;
    const rawProgress = Math.min(1, Math.max(0, travelled / Math.max(1, entryDistance)));

    if (progressBar) {
      progressBar.style.width = `${Math.max(15, rawProgress * 100)}%`;
    }

    if (coreGlow) {
      const glowPulse = Math.sin(rawProgress * Math.PI);
      coreGlow.style.transform = `scale(${0.8 + glowPulse * 0.7})`;
      coreGlow.style.opacity = `${0.4 + glowPulse * 0.55}`;
    }

    cards.forEach((card, i) => {
      const t = trajectories[i % trajectories.length];
      const localP = Math.min(1, Math.max(0, (rawProgress - t.delay) / 0.65));
      const ease = 1 - Math.pow(1 - localP, 3);

      const curX = t.x * (1 - ease);
      const curY = t.y * (1 - ease);
      const curZ = t.z * (1 - ease);
      const curRX = t.rx * (1 - ease);
      const curRY = t.ry * (1 - ease);

      card.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, ${curZ.toFixed(1)}px) rotateX(${curRX.toFixed(1)}deg) rotateY(${curRY.toFixed(1)}deg)`;
      card.style.opacity = `${Math.min(1, 0.25 + ease * 0.75)}`;
    });
  }

  window.addEventListener('scroll', updateTunnel, { passive: true });
  window.addEventListener('resize', updateTunnel);
  updateTunnel();
}

/* ==========================================
   7. SCROLL REVEALS, STATS COUNTERS & SKILL BARS
   ========================================== */
function initScrollRevealsAndCounters() {
  const revealEls = document.querySelectorAll('.reveal-up');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObserver.observe(el));

  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const target = parseInt(el.getAttribute('data-target'), 10) || 100;
        const start = performance.now();
        const duration = 1200;

        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      } else {
        el.textContent = '0';
      }
    });
  }, { threshold: 0.25 });

  counters.forEach(c => counterObserver.observe(c));

  const skillBars = document.querySelectorAll('.skill-progress-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = entry.target.getAttribute('data-width') || '90%';
        entry.target.style.width = targetWidth;
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => skillObserver.observe(bar));
}

/* ==========================================
   8. NAVBAR SCROLL & ACTIVE STATE
   ========================================== */
function initNavbarActiveState() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const sections = ['projects', 'about', 'skills', 'contact'].map(id => document.getElementById(id));

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      if (!sec) return;
      const top = sec.offsetTop - 240;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ==========================================
   9. INTERACTIVE PROJECT SHOWREEL MODAL
   ========================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');
  const titleEl = document.getElementById('modal-title');
  const catEl = document.getElementById('modal-cat');
  const viewsEl = document.getElementById('modal-views');
  const modalCta = document.getElementById('modal-cta');
  const canvas = document.getElementById('modal-showreel-canvas');
  const cards = document.querySelectorAll('.project-card');

  if (!modal || !canvas) return;
  const ctx = canvas.getContext('2d');
  let animId = null;
  let t = 0;

  function renderShowreelPreview(projectTitle) {
    t += 0.04;
    const w = canvas.width;
    const h = canvas.height;
    const palette = THEME_PALETTES[currentTheme] || THEME_PALETTES.cyan;

    ctx.fillStyle = '#02060d';
    ctx.fillRect(0, 0, w, h);

    const grad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * 0.55);
    grad.addColorStop(0, palette.bgGlow1);
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 32; i++) {
      const barH = 30 + Math.sin(t * 2 + i * 0.45) * 28 + Math.cos(t * 1.3 - i * 0.2) * 18;
      const x = 120 + i * 18;
      ctx.fillStyle = i % 3 === 0 ? palette.primary : 'rgba(255, 255, 255, 0.22)';
      ctx.fillRect(x, h / 2 - barH / 2, 10, barH);
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 28px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(projectTitle.toUpperCase(), w / 2, h / 2 - 75);

    ctx.fillStyle = palette.primary;
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillText('60 FPS // SHADYI MOTION GRAPHICS & SOUND DESIGN TIMELINE', w / 2, h / 2 + 85);

    animId = requestAnimationFrame(() => renderShowreelPreview(projectTitle));
  }

  function closeModal() {
    modal.classList.remove('open');
    if (animId) cancelAnimationFrame(animId);
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title') || 'Selected Project';
      const cat = card.getAttribute('data-category') || 'MOTION DESIGN';
      const views = card.getAttribute('data-views') || '1M+ Views';

      titleEl.textContent = title;
      catEl.textContent = cat;
      viewsEl.textContent = views;
      modal.classList.add('open');

      if (animId) cancelAnimationFrame(animId);
      renderShowreelPreview(title);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  modalCta.addEventListener('click', closeModal);
}

/* ==========================================
   11. CONTACT FORM SUBMISSION
   ========================================== */
function initContactForm() {
  const OWNER_EMAIL = 'shadifaseeh123@gmail.com';
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  const setBusy = (busy) => {
    submitBtn.disabled = busy;
    submitBtn.querySelector('span').textContent = busy ? 'Sending...' : 'Send Message';
  };

  // Backup: opens the visitor's email app with everything pre-filled.
  function openMailApp(name, email, message) {
    const subject = `Project enquiry from ${name || 'your website'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.textContent = 'Opening your email app. Press Send there to deliver your message.';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const message = document.getElementById('message-input').value.trim();

    setBusy(true);
    toast.textContent = '';
    try {
      // Delivers straight to the owner's inbox, no email app needed.
      const res = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name, email, message,
          _subject: `Project enquiry from ${name || 'your website'}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'false'
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error('send failed');
      toast.textContent = `✓ Message sent, ${name || 'friend'}! Shadyi will reply to your email soon.`;
      form.reset();
    } catch (err) {
      openMailApp(name, email, message);
    } finally {
      setBusy(false);
    }
  });
}

/* ==========================================
   BACKGROUND NEON STREAKS
   Glowing comet lines shoot across the screen behind the content.
   A few drift by when idle; scrolling spawns more and speeds them up.
   ========================================== */
function initScrollLightning() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'scroll-streaks';
  canvas.setAttribute('aria-hidden', 'true');
  // z-index 1 = behind main/header/footer (z-index 2), above the ember canvas
  canvas.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:1;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const rnd = (a, b) => a + Math.random() * (b - a);
  const streaks = [];
  let lastY = window.scrollY, energy = 0, dirSign = 1, last = 0, carry = 0;

  function spawn(boost) {
    const dir = Math.random() < 0.82 ? dirSign : -dirSign;      // mostly follows the scroll direction
    const len = rnd(140, 360) * (W < 700 ? 0.6 : 1);
    streaks.push({
      x: dir > 0 ? -len : W + len,
      y: rnd(0.04, 0.96) * H,
      dir,
      len,
      speed: rnd(0.55, 1.5) * (1 + boost * 1.6),               // px per ms
      slope: rnd(-0.16, 0.16),
      w: rnd(1.2, 2.8),
      tint: Math.random() < 0.65 ? 'a' : 'b',
      alpha: rnd(0.55, 1)
    });
  }

  function frame(t) {
    const dt = Math.min(64, t - last); last = t;
    const sy = window.scrollY;
    const dy = sy - lastY; lastY = sy;
    if (Math.abs(dy) > 0.5) dirSign = dy > 0 ? 1 : -1;
    energy += (Math.min(1, Math.abs(dy) / 38) - energy) * 0.12;

    carry += dt * (0.0007 + energy * 0.014);                     // spawns per ms
    while (carry >= 1 && streaks.length < 46) { spawn(energy); carry -= 1; }
    if (carry >= 1) carry = 0;

    ctx.clearRect(0, 0, W, H);
    const cs = getComputedStyle(document.documentElement);
    const accent = (cs.getPropertyValue('--accent') || '#00e5ff').trim() || '#00e5ff';
    const second = (cs.getPropertyValue('--accent-secondary') || '#3b82f6').trim() || '#3b82f6';
    ctx.lineCap = 'round';

    for (let i = streaks.length - 1; i >= 0; i--) {
      const s = streaks[i];
      s.x += s.dir * s.speed * dt;
      s.y += s.slope * s.speed * dt * s.dir;
      if ((s.dir > 0 && s.x - s.len > W) || (s.dir < 0 && s.x + s.len < 0) || s.y < -40 || s.y > H + 40) {
        streaks.splice(i, 1); continue;
      }
      const hx = s.x, hy = s.y;                                   // bright head
      const tx = hx - s.dir * s.len, ty = hy - s.slope * s.len;   // fading tail
      const col = s.tint === 'a' ? accent : second;
      const g = ctx.createLinearGradient(tx, ty, hx, hy);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.7, col);
      g.addColorStop(1, '#ffffff');

      const a = s.alpha * (0.3 + 0.7 * Math.max(energy, 0.35));
      ctx.shadowColor = col; ctx.shadowBlur = 14;
      ctx.globalAlpha = a * 0.55; ctx.strokeStyle = g; ctx.lineWidth = s.w * 3.2;
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(hx, hy); ctx.stroke();
      ctx.globalAlpha = a; ctx.lineWidth = s.w;
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(hx, hy); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ==========================================
   LOGIN WINDOW (interface only, no server behind it yet)
   ========================================== */
function initLogin() {
  const openBtn = document.getElementById('login-open-btn');
  const modal = document.getElementById('login-modal');
  if (!openBtn || !modal) return;
  const closeEls = modal.querySelectorAll('[data-login-close]');
  const form = document.getElementById('login-form');
  const msg = document.getElementById('login-msg');
  const pw = document.getElementById('login-password');
  const pwToggle = document.getElementById('login-pw-toggle');

  function open() {
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('login-email').focus(), 60);
  }
  function close() {
    modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    openBtn.focus();
  }
  openBtn.addEventListener('click', open);
  closeEls.forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
  pwToggle.addEventListener('click', () => {
    const show = pw.type === 'password';
    pw.type = show ? 'text' : 'password';
    pwToggle.textContent = show ? 'HIDE' : 'SHOW';
  });
}
