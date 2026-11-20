/**
 * SHADYI ADMIN PANEL & CMS CONTROLLER
 * Complete Client-Side Website Customization & Management System
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DEFAULT PORTFOLIO CONTENT & CONFIGURATION
  // =========================================================================
  const DEFAULT_SITE_DATA = {
    meta: {
      title: "SHADYI Portfolio",
      description: "Crafting high-retention edits, kinetic motion graphics, and cinematic visual stories that command attention and scale brands."
    },
    design: {
      theme: "cyan", // cyan, purple, emerald, gold, crimson, custom
      customColors: {
        primary: "#00e5ff",
        secondary: "#3b82f6",
        bgDark: "#02060d"
      },
      particlesEnabled: true,
      particleCount: 80,
      streaksEnabled: true,
      haloIntensity: 1.0,
      fontFamily: "Outfit"
    },
    nav: {
      logoText: "shadyi",
      logoDot: true,
      letsTalkText: "LET'S TALK",
      letsTalkLink: "#contact"
    },
    hero: {
      badgeText: "VIDEO EDITOR & MOTION DESIGNER",
      title: "shadyi",
      titleDot: true,
      subtitle: "Crafting high-retention edits, kinetic motion graphics, and cinematic visual stories that command attention and scale brands.",
      ctaPrimaryText: "EXPLORE WORK",
      ctaPrimaryLink: "#projects",
      ctaSecondaryText: "START A PROJECT",
      ctaSecondaryLink: "#contact",
      hudStatus: "NEURAL OPTICS // SCROLL TO IGNITE",
      hudCallout1: "RETENTION // 99.4%",
      hudCallout2: "4K 60FPS PIPELINE",
      scrollHint: "SCROLL TO EXPERIENCE"
    },
    projects: [
      {
        id: "proj_1",
        title: "Is Cloud Gaming the Future?",
        category: "DOCUMENTARY & TECH EDIT",
        views: "1.4M Views",
        thumbClass: "thumb-cloud",
        customImage: "",
        chipText: "TECH DOCU",
        headline: "Is Cloud Gaming<br/>the Future?",
        sub: "LATENCY // SERVERS // 2026",
        overlayCat: "DOCUMENTARY EDIT",
        overlayName: "Is Cloud Gaming the Future?",
        meta: "3D Motion Tracking • Sound Design • Retention Pacing",
        videoUrl: "",
        ctaText: "REQUEST THIS STYLE",
        ctaLink: "#contact",
        description: "Deep-dive video essay analyzing cloud infrastructure and gaming latency. Included 3D camera tracking, custom motion maps, dynamic sound effects, and retention-optimized pacing."
      },
      {
        id: "proj_2",
        title: "Kinetic UI & Motion Reel",
        category: "MOTION GRAPHICS",
        views: "850K Views",
        thumbClass: "thumb-cyan",
        customImage: "",
        chipText: "MOTION UI",
        headline: "Kinetic UI<br/>&amp; Motion Reel",
        sub: "+340% ENGAGEMENT REEL",
        overlayCat: "MOTION DESIGN",
        overlayName: "Kinetic UI & SaaS Motion Reel",
        meta: "After Effects • Custom Expressions • 60FPS",
        videoUrl: "",
        ctaText: "REQUEST THIS STYLE",
        ctaLink: "#contact",
        description: "A showcase of buttery-smooth 60fps SaaS product animations, micro-interactions, kinetic typography, and interface visual systems."
      },
      {
        id: "proj_3",
        title: "Cybernetic 3D Brand Ident",
        category: "3D & VFX COMPOSITING",
        views: "920K Views",
        thumbClass: "thumb-neon-cube",
        customImage: "",
        chipText: "3D VFX",
        headline: "Cybernetic 3D<br/>Brand Ident",
        sub: "OCTANE // BLENDER // AFTER EFFECTS",
        overlayCat: "3D & VFX",
        overlayName: "Cybernetic 3D Brand Ident",
        meta: "Blender • After Effects • Optical Glow",
        videoUrl: "",
        ctaText: "REQUEST THIS STYLE",
        ctaLink: "#contact",
        description: "Futuristic brand identity animation with octane render passes, volumetric lighting, optical flares, green screen compositing, and cinematic sound design."
      },
      {
        id: "proj_4",
        title: "Turn Your Designs Into Motion",
        category: "SAAS LAUNCH PROMO",
        views: "1.1M Views",
        thumbClass: "thumb-purple",
        customImage: "",
        chipText: "SAAS LAUNCH",
        headline: "turn your<br/><span>designs</span>",
        sub: "INTO HIGH-CONVERTING MOTION",
        overlayCat: "COMMERCIAL PROMO",
        overlayName: "Turn Your Designs Into Motion",
        meta: "Kinetic Typography • Smooth Morphs • SFX",
        videoUrl: "",
        ctaText: "REQUEST THIS STYLE",
        ctaLink: "#contact",
        description: "High-energy commercial promo for a design software launch. Features rapid kinetic typography, seamless vector morphs, and heavy-hitting bass SFX."
      },
      {
        id: "proj_5",
        title: "Think Smarter: Viral Essay",
        category: "HIGH-RETENTION YOUTUBE",
        views: "2.3M Views",
        thumbClass: "thumb-yellow",
        customImage: "",
        chipText: "VIRAL ESSAY",
        headline: "Think Smarter",
        sub: "VISUAL STORYTELLING BREAKDOWN",
        overlayCat: "YOUTUBE LONG-FORM",
        overlayName: "Think Smarter — Visual Essay",
        meta: "78% Avg Percentage Viewed • Custom Maps & Charts",
        videoUrl: "",
        ctaText: "REQUEST THIS STYLE",
        ctaLink: "#contact",
        description: "Long-form viral video essay engineered for extreme audience retention. Reached over 2.3M organic views with an average percentage viewed of 78%."
      },
      {
        id: "proj_6",
        title: "Next-Gen FinTech App Launch",
        category: "SHORT-FORM & REELS",
        views: "680K Views",
        thumbClass: "thumb-green",
        customImage: "",
        chipText: "FINTECH REEL",
        headline: "Next-Gen FinTech<br/>App Launch",
        sub: "INSTANT SCALE // VIRAL REEL",
        overlayCat: "SHORT-FORM VIRAL",
        overlayName: "Next-Gen FinTech App Launch",
        meta: "3D Phone Rig • Speed Ramps • Sub-Bass Mixing",
        videoUrl: "",
        ctaText: "REQUEST THIS STYLE",
        ctaLink: "#contact",
        description: "9:16 vertical short-form campaign showcasing a next-generation finance mobile app with custom 3D device rigs, speed ramps, and crisp UI audio."
      }
    ],
    about: {
      sectionTag: "// THE CREATOR BEHIND THE CUTS",
      title: "ABOUT shadyi.",
      lead: "I don't just cut clips together — I engineer attention. With years of experience in high-retention video editing and bespoke motion design, I help creators, agencies, and tech brands turn raw ideas into unforgettable visual experiences.",
      body: "Every frame is crafted with intentional pacing, immersive sound design, and custom motion graphics in After Effects & Premiere Pro to keep viewers locked in from the first second to the final call-to-action.",
      highlights: [
        { id: "h1", title: "High-Retention Pacing", desc: "Story-first structure built for maximum watch time" },
        { id: "h2", title: "Custom Motion Graphics", desc: "Bespoke 2D/3D visuals tailored to your brand identity" },
        { id: "h3", title: "Cinematic Sound Design", desc: "Layered risers, hits, and spatial audio mastering" },
        { id: "h4", title: "Fast, Reliable Pipeline", desc: "Clear communication and 98% on-time delivery" }
      ]
    },
    skills: {
      sectionTag: "// CORE COMPETENCIES",
      title: "TECHNICAL SKILLS.",
      items: [
        { id: "s1", title: "Visual Storytelling", desc: "Narrative structure, hook engineering & audience retention", badge: "EXPERT", width: "98%" },
        { id: "s2", title: "Motion Graphics", desc: "2D/3D animation, kinetic typography & graph editor mastery", badge: "EXPERT", width: "96%" },
        { id: "s3", title: "Sound Design & Mixing", desc: "Multi-layered SFX, sub-bass drops, foley & crisp vocal EQ", badge: "EXPERT", width: "95%" },
        { id: "s4", title: "Color Grading & Look Dev", desc: "Cinematic LUT creation, skin-tone balancing & film emulation", badge: "ADVANCED", width: "90%" },
        { id: "s5", title: "Pacing & Retention Editing", desc: "Rhythm-based cuts, J/L cuts, speed ramping & pattern interrupts", badge: "EXPERT", width: "99%" },
        { id: "s6", title: "3D Camera & VFX Compositing", desc: "3D camera tracking, rotoscoping, glow/optical flares & green screen", badge: "ADVANCED", width: "92%" }
      ],
      arsenalTitle: "MY ARSENAL.",
      arsenalItems: [
        { id: "a1", name: "After Effects", iconType: "text", iconText: "Ae", iconClass: "icon-ae", title: "Adobe After Effects" },
        { id: "a2", name: "Premiere Pro", iconType: "text", iconText: "Pr", iconClass: "icon-pr", title: "Adobe Premiere Pro" },
        { id: "a3", name: "DaVinci", iconType: "svg-davinci", iconClass: "icon-dv", title: "DaVinci Resolve" },
        { id: "a4", name: "CapCut", iconType: "text", iconText: "Cc", iconClass: "icon-cc", title: "CapCut" },
        { id: "a5", name: "Lightroom", iconType: "text", iconText: "Lr", iconClass: "icon-lr", title: "Adobe Lightroom" }
      ]
    },
    contact: {
      sectionTag: "// GET IN TOUCH",
      title: "CONTACT.",
      ownerEmail: "shadifaseeh123@gmail.com",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Let's build something cinematic together...",
      buttonText: "Send Message",
      toastSuccessText: "✓ Message sent, {name}! Shadyi will reply to your email soon."
    },
    footer: {
      copyright: "© 2026 shadyi — Video Editor & Motion Designer. All Rights Reserved.",
      socials: [
        { id: "soc1", platform: "instagram", name: "INSTAGRAM", url: "https://instagram.com", enabled: true },
        { id: "soc2", platform: "youtube", name: "YOUTUBE", url: "https://youtube.com", enabled: true },
        { id: "soc3", platform: "github", name: "GITHUB", url: "https://github.com", enabled: true }
      ]
    }
  };

  // =========================================================================
  // 2. DATA STORE MANAGER (LOCALSTORAGE PERSISTENCE)
  // =========================================================================
  const STORAGE_KEY_DATA = 'shadyi_site_data';
  const STORAGE_KEY_AUTH = 'shadyi_admin_auth';
  const STORAGE_KEY_SESSION = 'shadyi_admin_logged_in';
  const STORAGE_KEY_INBOX = 'shadyi_inbox_messages';

  const SiteStore = {
    getData() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY_DATA);
        if (stored) {
          const parsed = JSON.parse(stored);
          return Object.assign({}, DEFAULT_SITE_DATA, parsed);
        }
      } catch (e) {
        console.error('Failed reading site data:', e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
    },

    saveData(data) {
      try {
        localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
        SiteRenderer.renderAll(data);
        return true;
      } catch (e) {
        console.error('Failed saving site data:', e);
        return false;
      }
    },

    resetToDefaults() {
      try {
        localStorage.removeItem(STORAGE_KEY_DATA);
        const data = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
        SiteRenderer.renderAll(data);
        return true;
      } catch (e) {
        return false;
      }
    },

    getInbox() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY_INBOX);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    },

    saveInbox(messages) {
      try {
        localStorage.setItem(STORAGE_KEY_INBOX, JSON.stringify(messages));
      } catch (e) {}
    },

    addInboxMessage(msg) {
      const list = this.getInbox();
      const newMsg = {
        id: 'msg_' + Date.now(),
        name: msg.name || 'Anonymous',
        email: msg.email || 'No email',
        message: msg.message || '',
        date: new Date().toLocaleString(),
        read: false
      };
      list.unshift(newMsg);
      this.saveInbox(list);
      AdminUI.updateInboxBadge();
      return newMsg;
    }
  };

  // =========================================================================
  // 3. AUTHENTICATION CONTROLLER
  // =========================================================================
  const AdminAuth = {
    getCredentials() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY_AUTH);
        if (stored) return JSON.parse(stored);
      } catch (e) {}
      // Default credentials
      return { username: 'admin', password: 'admin123' };
    },

    saveCredentials(username, password) {
      try {
        localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify({ username, password }));
        return true;
      } catch (e) {
        return false;
      }
    },

    isLoggedIn() {
      return localStorage.getItem(STORAGE_KEY_SESSION) === 'true';
    },

    login(username, password) {
      const creds = this.getCredentials();
      if (username.trim() === creds.username && password === creds.password) {
        localStorage.setItem(STORAGE_KEY_SESSION, 'true');
        AdminUI.onLoginStateChange(true);
        return { success: true };
      }
      return { success: false, message: 'Invalid admin username or password.' };
    },

    logout() {
      localStorage.removeItem(STORAGE_KEY_SESSION);
      AdminUI.onLoginStateChange(false);
      AdminUI.closePanel();
    }
  };

  // =========================================================================
  // 4. SITE RENDERER (UPDATES LIVE WEBSITE DOM IMMEDIATELY)
  // =========================================================================
  const SiteRenderer = {
    renderAll(data) {
      if (!data) data = SiteStore.getData();
      this.renderMeta(data.meta);
      this.renderDesign(data.design);
      this.renderNav(data.nav);
      this.renderHero(data.hero);
      this.renderProjects(data.projects);
      this.renderAbout(data.about);
      this.renderSkills(data.skills);
      this.renderContact(data.contact);
      this.renderFooter(data.footer);
    },

    renderMeta(meta) {
      if (!meta) return;
      if (meta.title) document.title = meta.title;
    },

    renderDesign(design) {
      if (!design) return;
      const theme = design.theme || 'cyan';
      document.documentElement.setAttribute('data-theme', theme);

      // Set global variable if script.js uses it
      if (window.currentTheme !== undefined) {
        window.currentTheme = theme;
      }

      // Handle custom theme overrides
      if (theme === 'custom' && design.customColors) {
        const root = document.documentElement;
        if (design.customColors.primary) {
          root.style.setProperty('--accent', design.customColors.primary);
          root.style.setProperty('--accent-glow', design.customColors.primary + '66');
          root.style.setProperty('--accent-border', design.customColors.primary + '55');
        }
        if (design.customColors.secondary) {
          root.style.setProperty('--accent-secondary', design.customColors.secondary);
        }
        if (design.customColors.bgDark) {
          root.style.setProperty('--bg-dark', design.customColors.bgDark);
        }
      } else {
        // Clear inline custom overrides so stylesheet class takes over
        const root = document.documentElement;
        root.style.removeProperty('--accent');
        root.style.removeProperty('--accent-glow');
        root.style.removeProperty('--accent-border');
        root.style.removeProperty('--accent-secondary');
        root.style.removeProperty('--bg-dark');
      }

      // Particles canvas visibility
      const emberCanvas = document.getElementById('ember-canvas');
      if (emberCanvas) {
        emberCanvas.style.display = design.particlesEnabled !== false ? 'block' : 'none';
      }
    },

    renderNav(nav) {
      if (!nav) return;
      const logoEl = document.querySelector('.nav-logo');
      if (logoEl) {
        logoEl.innerHTML = `${escapeHTML(nav.logoText || 'shadyi')}${nav.logoDot ? '<span class="red-dot">.</span>' : ''}`;
      }

      const letsTalkBtn = document.querySelector('.btn-lets-talk');
      if (letsTalkBtn) {
        letsTalkBtn.textContent = nav.letsTalkText || "LET'S TALK";
        letsTalkBtn.setAttribute('href', nav.letsTalkLink || "#contact");
      }
    },

    renderHero(hero) {
      if (!hero) return;
      const badgeSpan = document.querySelector('.hero-badge span:nth-child(2)');
      if (badgeSpan) badgeSpan.textContent = hero.badgeText || "VIDEO EDITOR & MOTION DESIGNER";

      const titleEl = document.querySelector('.hero-title');
      if (titleEl) {
        titleEl.innerHTML = `${escapeHTML(hero.title || 'shadyi')}${hero.titleDot ? '<span class="red-dot">.</span>' : ''}`;
      }

      const subEl = document.querySelector('.hero-subtitle');
      if (subEl) subEl.textContent = hero.subtitle || '';

      const cta1 = document.querySelector('.hero-cta-group .btn-primary-glow span');
      if (cta1) cta1.textContent = hero.ctaPrimaryText || 'EXPLORE WORK';
      const cta1Link = document.querySelector('.hero-cta-group .btn-primary-glow');
      if (cta1Link) cta1Link.setAttribute('href', hero.ctaPrimaryLink || '#projects');

      const cta2 = document.querySelector('.hero-cta-group .btn-secondary-glass');
      if (cta2) {
        cta2.textContent = hero.ctaSecondaryText || 'START A PROJECT';
        cta2.setAttribute('href', hero.ctaSecondaryLink || '#contact');
      }

      const hudStatus = document.getElementById('hero-frame-status');
      if (hudStatus && hero.hudStatus) hudStatus.textContent = hero.hudStatus;

      const hud1 = document.querySelector('.hud-callout-1 .hud-label');
      if (hud1 && hero.hudCallout1) hud1.textContent = hero.hudCallout1;

      const hud2 = document.querySelector('.hud-callout-2 .hud-label');
      if (hud2 && hero.hudCallout2) hud2.textContent = hero.hudCallout2;

      const scrollHint = document.querySelector('.hero-scroll-hint span');
      if (scrollHint && hero.scrollHint) scrollHint.textContent = hero.scrollHint;
    },

    renderProjects(projects) {
      const grid = document.getElementById('projects-grid');
      if (!grid || !projects) return;

      grid.innerHTML = '';
      projects.forEach((proj, idx) => {
        const article = document.createElement('article');
        article.className = 'project-card';
        article.setAttribute('data-index', idx);
        article.setAttribute('data-id', proj.id);
        article.setAttribute('data-title', proj.title);
        article.setAttribute('data-category', proj.category);
        article.setAttribute('data-views', proj.views);
        if (proj.videoUrl) article.setAttribute('data-video-url', proj.videoUrl);
        if (proj.description) article.setAttribute('data-desc', proj.description);
        if (proj.ctaText) article.setAttribute('data-cta-text', proj.ctaText);

        const thumbClass = proj.thumbClass || 'thumb-cloud';
        let thumbContent = '';

        if (proj.customImage) {
          thumbContent = `
            <div class="thumb-art custom-thumb" style="background-image: url('${escapeHTML(proj.customImage)}'); background-size: cover; background-position: center;">
              <span class="thumb-chip">${escapeHTML(proj.chipText || 'FEATURED')}</span>
              <div class="thumb-play-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              </div>
            </div>
          `;
        } else {
          thumbContent = `
            <div class="thumb-art">
              <span class="thumb-chip">${escapeHTML(proj.chipText || 'FEATURED')}</span>
              <div class="thumb-headline">${proj.headline || escapeHTML(proj.title)}</div>
              <div class="thumb-sub">${escapeHTML(proj.sub || '')}</div>
              <div class="thumb-play-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              </div>
            </div>
          `;
        }

        article.innerHTML = `
          <div class="project-thumb ${thumbClass}">
            ${thumbContent}
            <div class="project-overlay">
              <span class="project-cat">${escapeHTML(proj.overlayCat || proj.category)}</span>
              <h3 class="project-name">${escapeHTML(proj.overlayName || proj.title)}</h3>
              <p class="project-meta">${escapeHTML(proj.meta || '')}</p>
            </div>
          </div>
        `;

        grid.appendChild(article);
      });

      // Re-trigger 3D tunnel recalculation if window.initProjects3DTunnel is available
      if (typeof window.initProjects3DTunnel === 'function') {
        window.initProjects3DTunnel();
      }
    },

    renderAbout(about) {
      if (!about) return;
      const secTag = document.querySelector('#about .section-tag');
      if (secTag && about.sectionTag) secTag.textContent = about.sectionTag;

      const secTitle = document.querySelector('#about .section-title');
      if (secTitle && about.title) {
        secTitle.innerHTML = `${escapeHTML(about.title).replace('shadyi.', '<span class="text-red-glow brand-lower">shadyi<span class="red-dot">.</span></span>')}`;
      }

      const leadEl = document.querySelector('.about-lead');
      if (leadEl && about.lead) leadEl.textContent = about.lead;

      const bodyEl = document.querySelector('.about-body');
      if (bodyEl && about.body) bodyEl.textContent = about.body;

      const highlightsWrap = document.querySelector('.about-highlights');
      if (highlightsWrap && about.highlights) {
        highlightsWrap.innerHTML = '';
        about.highlights.forEach(h => {
          const item = document.createElement('div');
          item.className = 'highlight-item';
          item.innerHTML = `
            <span class="highlight-dot"></span>
            <div>
              <strong>${escapeHTML(h.title)}</strong>
              <span>${escapeHTML(h.desc)}</span>
            </div>
          `;
          highlightsWrap.appendChild(item);
        });
      }
    },

    renderSkills(skills) {
      if (!skills) return;
      const secTag = document.querySelector('#skills .section-tag');
      if (secTag && skills.sectionTag) secTag.textContent = skills.sectionTag;

      const secTitle = document.querySelector('#skills .section-title');
      if (secTitle && skills.title) {
        secTitle.innerHTML = `${escapeHTML(skills.title).replace('.', '<span class="red-dot">.</span>')}`;
      }

      // Skills grid
      const grid = document.querySelector('.skills-grid');
      if (grid && skills.items) {
        grid.innerHTML = '';
        skills.items.forEach((s, idx) => {
          const card = document.createElement('div');
          card.className = 'skill-card reveal-up visible';
          card.style.transitionDelay = `${idx * 0.05}s`;
          const badgeClass = s.badge === 'ADVANCED' ? 'badge-advanced' : '';
          card.innerHTML = `
            <div class="skill-top">
              <div>
                <h3 class="skill-title">${escapeHTML(s.title)}</h3>
                <p class="skill-sub">${escapeHTML(s.desc)}</p>
              </div>
              <span class="skill-badge ${badgeClass}">${escapeHTML(s.badge || 'EXPERT')}</span>
            </div>
            <div class="skill-progress-track">
              <div class="skill-progress-fill" data-width="${escapeHTML(s.width || '95%')}" style="width: ${escapeHTML(s.width || '95%')};"></div>
            </div>
          `;
          grid.appendChild(card);
        });
      }

      // Arsenal
      const arsenalTitle = document.querySelector('.arsenal-title');
      if (arsenalTitle && skills.arsenalTitle) {
        arsenalTitle.innerHTML = `${escapeHTML(skills.arsenalTitle).replace('.', '<span class="red-dot">.</span>')}`;
      }

      const arsenalGrid = document.querySelector('.arsenal-grid');
      if (arsenalGrid && skills.arsenalItems) {
        arsenalGrid.innerHTML = '';
        skills.arsenalItems.forEach(a => {
          const card = document.createElement('div');
          card.className = 'arsenal-card';
          card.title = a.title || a.name;

          let iconHtml = '';
          if (a.iconType === 'svg-davinci') {
            iconHtml = `
              <div class="arsenal-icon icon-dv">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="7" r="4" stroke="#ff4d4d"/>
                  <circle cx="7.5" cy="15.5" r="4" stroke="#38bdf8"/>
                  <circle cx="16.5" cy="15.5" r="4" stroke="#4ade80"/>
                </svg>
              </div>
            `;
          } else {
            iconHtml = `<div class="arsenal-icon ${escapeHTML(a.iconClass || 'icon-ae')}">${escapeHTML(a.iconText || a.name.slice(0, 2))}</div>`;
          }

          card.innerHTML = `
            ${iconHtml}
            <span class="arsenal-name">${escapeHTML(a.name)}</span>
          `;
          arsenalGrid.appendChild(card);
        });
      }
    },

    renderContact(contact) {
      if (!contact) return;
      const secTag = document.querySelector('#contact .section-tag');
      if (secTag && contact.sectionTag) secTag.textContent = contact.sectionTag;

      const secTitle = document.querySelector('#contact .section-title');
      if (secTitle && contact.title) {
        secTitle.innerHTML = `${escapeHTML(contact.title).replace('.', '<span class="red-dot">.</span>')}`;
      }

      const nameInput = document.getElementById('name-input');
      if (nameInput && contact.namePlaceholder) nameInput.placeholder = contact.namePlaceholder;

      const emailInput = document.getElementById('email-input');
      if (emailInput && contact.emailPlaceholder) emailInput.placeholder = contact.emailPlaceholder;

      const msgInput = document.getElementById('message-input');
      if (msgInput && contact.messagePlaceholder) msgInput.placeholder = contact.messagePlaceholder;

      const btnSpan = document.querySelector('#submit-btn span');
      if (btnSpan && contact.buttonText) btnSpan.textContent = contact.buttonText;
    },

    renderFooter(footer) {
      if (!footer) return;
      const copyEl = document.querySelector('.footer-copy');
      if (copyEl && footer.copyright) copyEl.textContent = footer.copyright;

      const socWrap = document.querySelector('.footer-socials');
      if (socWrap && footer.socials) {
        socWrap.innerHTML = '';
        footer.socials.forEach(s => {
          if (s.enabled === false) return;
          const a = document.createElement('a');
          a.href = s.url || '#';
          a.target = '_blank';
          a.rel = 'noreferrer';
          a.innerHTML = `${getSocialIconSvg(s.platform)}${escapeHTML(s.name)}`;
          socWrap.appendChild(a);
        });
      }
    }
  };

  // Helper: Social Icons SVG
  function getSocialIconSvg(platform) {
    platform = (platform || '').toLowerCase();
    if (platform === 'instagram') {
      return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor"></circle></svg>';
    } else if (platform === 'youtube') {
      return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4"></rect><polygon points="10 9 16 12 10 15 10 9" fill="currentColor"></polygon></svg>';
    } else if (platform === 'github') {
      return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';
    } else if (platform === 'twitter' || platform === 'x') {
      return '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
    }
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // =========================================================================
  // 5. ADMIN UI CONTROLLER (DOCK, PANEL, TABS & EDITORS)
  // =========================================================================
  const AdminUI = {
    currentTab: 'overview',
    editState: null,

    init() {
      this.mountDock();
      this.mountPanel();
      this.mountToastContainer();
      this.bindNavbarLogin();
      this.bindContactFormCapture();
      this.bindProjectModalInteractions();

      const isLoggedIn = AdminAuth.isLoggedIn();
      this.onLoginStateChange(isLoggedIn);
    },

    // 5.1 Mount Floating Dock
    mountDock() {
      let dock = document.getElementById('admin-floating-dock');
      if (dock) dock.remove();

      dock = document.createElement('div');
      dock.id = 'admin-floating-dock';
      dock.className = 'admin-dock hidden';
      dock.innerHTML = `
        <div class="admin-dock-badge">
          <span class="admin-dock-dot"></span>
          <span>ADMIN</span>
        </div>
        <button type="button" class="admin-dock-btn primary" id="dock-btn-open">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          <span>Control Center</span>
        </button>
        <button type="button" class="admin-dock-btn" id="dock-btn-inbox">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>Inbox</span>
          <span class="admin-dock-count" id="dock-unread-count" style="display:none;">0</span>
        </button>
        <button type="button" class="admin-dock-btn danger" id="dock-btn-logout" title="Log out of Admin">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          <span>Logout</span>
        </button>
      `;

      document.body.appendChild(dock);

      document.getElementById('dock-btn-open').addEventListener('click', () => this.openPanel());
      document.getElementById('dock-btn-inbox').addEventListener('click', () => {
        this.openPanel();
        this.switchTab('inbox');
      });
      document.getElementById('dock-btn-logout').addEventListener('click', () => {
        if (confirm('Are you sure you want to log out of the Admin Panel?')) {
          AdminAuth.logout();
          this.showToast('Logged out successfully.', 'info');
        }
      });
    },

    // 5.2 Mount Admin Panel DOM
    mountPanel() {
      let overlay = document.getElementById('admin-panel-overlay');
      if (overlay) overlay.remove();

      overlay = document.createElement('div');
      overlay.id = 'admin-panel-overlay';
      overlay.className = 'admin-overlay';
      overlay.innerHTML = `
        <div class="admin-panel" id="admin-panel">
          <!-- Panel Header -->
          <div class="admin-header">
            <div class="admin-header-title-wrap">
              <div class="admin-logo-badge">
                <span>SHADYI</span><span class="red-dot">.</span>
              </div>
              <span class="admin-badge-tag">ADMIN CONTROL // v2.4</span>
            </div>
            <div class="admin-header-actions">
              <button type="button" class="admin-icon-btn" id="adm-btn-dock" title="Toggle Split-Screen / Live Preview Mode">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line></svg>
              </button>
              <button type="button" class="admin-icon-btn" id="adm-btn-fullscreen" title="Toggle Fullscreen">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
              </button>
              <button type="button" class="admin-btn primary sm" id="adm-btn-save-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                <span>Save All Changes</span>
              </button>
              <button type="button" class="admin-close-btn" id="adm-btn-close" title="Close Panel">✕</button>
            </div>
          </div>

          <!-- Panel Body: Sidebar + Content -->
          <div class="admin-body">
            <!-- Sidebar Navigation Tabs -->
            <div class="admin-sidebar">
              <div class="admin-sidebar-section">Main</div>
              <button type="button" class="admin-nav-item active" data-tab="overview">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <span>Dashboard</span>
                </div>
              </button>
              <button type="button" class="admin-nav-item" data-tab="design">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20z"></path></svg>
                  <span>Design &amp; Theme</span>
                </div>
              </button>

              <div class="admin-sidebar-section">Website Content</div>
              <button type="button" class="admin-nav-item" data-tab="hero">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span>Hero Section</span>
                </div>
              </button>
              <button type="button" class="admin-nav-item" data-tab="projects">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  <span>Projects</span>
                </div>
                <span class="admin-dock-count" id="nav-count-projects">6</span>
              </button>
              <button type="button" class="admin-nav-item" data-tab="about">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span>About &amp; Bio</span>
                </div>
              </button>
              <button type="button" class="admin-nav-item" data-tab="skills">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  <span>Skills &amp; Tools</span>
                </div>
              </button>
              <button type="button" class="admin-nav-item" data-tab="contact">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>Contact Settings</span>
                </div>
              </button>

              <div class="admin-sidebar-section">Activity &amp; Config</div>
              <button type="button" class="admin-nav-item" data-tab="inbox">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                  <span>Inquiries Inbox</span>
                </div>
                <span class="admin-dock-count" id="nav-count-inbox" style="display:none;">0</span>
              </button>
              <button type="button" class="admin-nav-item" data-tab="footer">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span>Social &amp; Footer</span>
                </div>
              </button>
              <button type="button" class="admin-nav-item" data-tab="settings">
                <div class="admin-nav-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  <span>Admin &amp; Backup</span>
                </div>
              </button>

              <div class="admin-sidebar-footer">
                <button type="button" class="admin-btn secondary sm" id="sidebar-logout-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                  <span>Logout</span>
                </button>
              </div>
            </div>

            <!-- Content Panes Container -->
            <div class="admin-content" id="admin-content-panes">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      // Bind Panel Controls
      document.getElementById('adm-btn-close').addEventListener('click', () => this.closePanel());
      document.getElementById('adm-btn-dock').addEventListener('click', () => {
        overlay.classList.toggle('dock-mode');
        document.getElementById('adm-btn-dock').classList.toggle('active', overlay.classList.contains('dock-mode'));
      });
      document.getElementById('adm-btn-fullscreen').addEventListener('click', () => {
        overlay.classList.toggle('fullscreen-mode');
        document.getElementById('adm-btn-fullscreen').classList.toggle('active', overlay.classList.contains('fullscreen-mode'));
      });
      document.getElementById('adm-btn-save-all').addEventListener('click', () => {
        this.saveCurrentForms();
        this.showToast('All website changes saved and applied!', 'success');
      });
      document.getElementById('sidebar-logout-btn').addEventListener('click', () => {
        if (confirm('Log out of Admin?')) {
          AdminAuth.logout();
          this.showToast('Logged out.', 'info');
        }
      });

      // Tab switcher clicks
      overlay.querySelectorAll('.admin-nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab');
          this.switchTab(tab);
        });
      });

      // Close when clicking overlay backdrop outside panel (unless in dock-mode)
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay && !overlay.classList.contains('dock-mode')) {
          this.closePanel();
        }
      });

      // Build Panes
      this.renderPanes();
    },

    // 5.3 Mount Toast Notifications
    mountToastContainer() {
      let toastBox = document.getElementById('admin-toast-box');
      if (toastBox) toastBox.remove();
      toastBox = document.createElement('div');
      toastBox.id = 'admin-toast-box';
      toastBox.className = 'admin-toast-container';
      document.body.appendChild(toastBox);
    },

    showToast(message, type = 'info') {
      const box = document.getElementById('admin-toast-box');
      if (!box) return;
      const toast = document.createElement('div');
      toast.className = `admin-toast ${type}`;
      toast.innerHTML = `
        <span class="admin-dock-dot" style="${type === 'success' ? 'background: #10b981; box-shadow: 0 0 10px #10b981;' : type === 'error' ? 'background: #ff334b; box-shadow: 0 0 10px #ff334b;' : ''}"></span>
        <span>${escapeHTML(message)}</span>
      `;
      box.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    },

    // 5.4 Switch Tabs
    switchTab(tabName) {
      this.currentTab = tabName;
      const overlay = document.getElementById('admin-panel-overlay');
      if (!overlay) return;

      // Update sidebar nav items
      overlay.querySelectorAll('.admin-nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
      });

      // Update tab pane visibility
      overlay.querySelectorAll('.admin-tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.getAttribute('id') === `pane-${tabName}`);
      });

      // Refresh specific tab contents if needed
      if (tabName === 'projects') this.renderProjectsTab();
      if (tabName === 'skills') this.renderSkillsTab();
      if (tabName === 'about') this.renderAboutTab();
      if (tabName === 'inbox') this.renderInboxTab();
      if (tabName === 'overview') this.renderOverviewStats();
    },

    openPanel() {
      if (!AdminAuth.isLoggedIn()) {
        const loginOpenBtn = document.getElementById('login-open-btn');
        if (loginOpenBtn) loginOpenBtn.click();
        return;
      }
      const overlay = document.getElementById('admin-panel-overlay');
      if (overlay) {
        overlay.classList.add('open');
        this.renderAllFormsFromData();
        this.switchTab(this.currentTab || 'overview');
      }
    },

    closePanel() {
      const overlay = document.getElementById('admin-panel-overlay');
      if (overlay) overlay.classList.remove('open');
    },

    onLoginStateChange(isLoggedIn) {
      const dock = document.getElementById('admin-floating-dock');
      const loginBtn = document.getElementById('login-open-btn');

      if (isLoggedIn) {
        if (dock) dock.classList.remove('hidden');
        if (loginBtn) {
          loginBtn.textContent = '⚙️ ADMIN PANEL';
          loginBtn.classList.add('admin-active-badge');
          loginBtn.onclick = (e) => {
            e.preventDefault();
            this.openPanel();
          };
        }
        this.updateInboxBadge();
      } else {
        if (dock) dock.classList.add('hidden');
        if (loginBtn) {
          loginBtn.textContent = 'LOGIN';
          loginBtn.classList.remove('admin-active-badge');
          loginBtn.onclick = null;
        }
      }
    },

    updateInboxBadge() {
      const list = SiteStore.getInbox();
      const unreadCount = list.filter(m => !m.read).length;
      const dockCount = document.getElementById('dock-unread-count');
      const navCount = document.getElementById('nav-count-inbox');

      if (dockCount) {
        dockCount.textContent = unreadCount;
        dockCount.style.display = unreadCount > 0 ? 'inline-flex' : 'none';
      }
      if (navCount) {
        navCount.textContent = unreadCount;
        navCount.style.display = unreadCount > 0 ? 'inline-flex' : 'none';
      }
    },

    // 5.5 Render All Panes HTML
    renderPanes() {
      const container = document.getElementById('admin-content-panes');
      if (!container) return;

      container.innerHTML = `
        <!-- 1. OVERVIEW PANE -->
        <div class="admin-tab-pane active" id="pane-overview">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Control Center Overview</h2>
              <p class="admin-pane-subtitle">Monitor site status, quick stats, and fast-track actions.</p>
            </div>
            <button type="button" class="admin-btn primary" id="overview-btn-edit-hero">
              <span>Edit Hero Section</span>
            </button>
          </div>

          <div class="admin-inbox-stats" id="overview-stats-grid">
            <!-- Dynamically populated stats -->
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                <span>Quick Actions</span>
              </h3>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button type="button" class="admin-btn secondary" id="qa-add-project">+ Add New Project</button>
              <button type="button" class="admin-btn secondary" id="qa-change-theme">🎨 Change Color Theme</button>
              <button type="button" class="admin-btn secondary" id="qa-view-inbox">✉️ View Inquiries</button>
              <button type="button" class="admin-btn secondary" id="qa-export-backup">📥 Export Site Backup</button>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Live Website Quick Preview</h3>
              <span class="admin-badge-tag" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.4);">ONLINE</span>
            </div>
            <p class="admin-card-desc">Every edit in this admin panel reflects instantly on your live page and is securely saved in your browser storage.</p>
          </div>
        </div>

        <!-- 2. DESIGN & THEME PANE -->
        <div class="admin-tab-pane" id="pane-design">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Design, Aesthetics &amp; Themes</h2>
              <p class="admin-pane-subtitle">Switch visual color palettes, particle effects, and background streaks.</p>
            </div>
            <button type="button" class="admin-btn primary" id="btn-save-design">Save Theme</button>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Color Theme Presets</h3>
            </div>
            <div class="admin-theme-grid" id="design-theme-selector">
              <div class="admin-theme-card active" data-theme="cyan">
                <div class="admin-theme-swatch" style="background: linear-gradient(135deg, #00e5ff 0%, #3b82f6 100%);"></div>
                <span class="admin-theme-name">Cyan Matrix</span>
              </div>
              <div class="admin-theme-card" data-theme="purple">
                <div class="admin-theme-swatch" style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);"></div>
                <span class="admin-theme-name">Cyber Purple</span>
              </div>
              <div class="admin-theme-card" data-theme="emerald">
                <div class="admin-theme-swatch" style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);"></div>
                <span class="admin-theme-name">Emerald Code</span>
              </div>
              <div class="admin-theme-card" data-theme="gold">
                <div class="admin-theme-swatch" style="background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);"></div>
                <span class="admin-theme-name">Solar Gold</span>
              </div>
              <div class="admin-theme-card" data-theme="crimson">
                <div class="admin-theme-swatch" style="background: linear-gradient(135deg, #ff1a2d 0%, #ff6a2b 100%);"></div>
                <span class="admin-theme-name">Crimson Core</span>
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Custom Color Overrides</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-form-group">
                <label class="admin-label">Primary Accent Color</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="color" id="design-custom-primary" value="#00e5ff" style="width: 44px; height: 38px; border-radius: 6px; cursor: pointer;" />
                  <input type="text" class="admin-input" id="design-custom-primary-text" value="#00e5ff" />
                </div>
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Secondary Accent Color</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="color" id="design-custom-secondary" value="#3b82f6" style="width: 44px; height: 38px; border-radius: 6px; cursor: pointer;" />
                  <input type="text" class="admin-input" id="design-custom-secondary-text" value="#3b82f6" />
                </div>
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Background Dark Shade</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="color" id="design-custom-bg" value="#02060d" style="width: 44px; height: 38px; border-radius: 6px; cursor: pointer;" />
                  <input type="text" class="admin-input" id="design-custom-bg-text" value="#02060d" />
                </div>
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Visual FX &amp; Animations</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-switch-wrap">
                <div class="admin-switch-info">
                  <h4>3D Ember &amp; Bokeh Canvas</h4>
                  <p>Ambient depth particles reacting to mouse and scroll.</p>
                </div>
                <label class="admin-switch">
                  <input type="checkbox" id="design-particles-toggle" checked />
                  <span class="admin-switch-slider"></span>
                </label>
              </div>

              <div class="admin-switch-wrap">
                <div class="admin-switch-info">
                  <h4>Background Neon Streaks</h4>
                  <p>Cyber laser comet lines trailing through the viewport.</p>
                </div>
                <label class="admin-switch">
                  <input type="checkbox" id="design-streaks-toggle" checked />
                  <span class="admin-switch-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. HERO SECTION PANE -->
        <div class="admin-tab-pane" id="pane-hero">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Hero Section Customizer</h2>
              <p class="admin-pane-subtitle">Manage headlines, badge copy, callout metrics, and CTA buttons.</p>
            </div>
            <button type="button" class="admin-btn primary" id="btn-save-hero">Save Hero</button>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Main Headlines &amp; Subtitle</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-form-group">
                <label class="admin-label">Top Badge Text</label>
                <input type="text" class="admin-input" id="hero-badge-input" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Brand / Title</label>
                <input type="text" class="admin-input" id="hero-title-input" />
              </div>
              <div class="admin-form-group full-width">
                <label class="admin-label">Hero Subtitle / Value Pitch</label>
                <textarea class="admin-textarea" id="hero-sub-input"></textarea>
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Call-To-Action Buttons</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-form-group">
                <label class="admin-label">Primary Button Label</label>
                <input type="text" class="admin-input" id="hero-cta1-text" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Primary Button Link</label>
                <input type="text" class="admin-input" id="hero-cta1-link" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Secondary Button Label</label>
                <input type="text" class="admin-input" id="hero-cta2-text" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Secondary Button Link</label>
                <input type="text" class="admin-input" id="hero-cta2-link" />
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Cyber Visor HUD Callouts</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-form-group">
                <label class="admin-label">HUD Badge Status Line</label>
                <input type="text" class="admin-input" id="hero-hud-status" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">HUD Callout 1 (e.g. RETENTION)</label>
                <input type="text" class="admin-input" id="hero-hud-callout1" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">HUD Callout 2 (e.g. 4K PIPELINE)</label>
                <input type="text" class="admin-input" id="hero-hud-callout2" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Scroll Hint Label</label>
                <input type="text" class="admin-input" id="hero-scroll-hint" />
              </div>
            </div>
          </div>
        </div>

        <!-- 4. PROJECTS PANE -->
        <div class="admin-tab-pane" id="pane-projects">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Projects &amp; Portfolio Works</h2>
              <p class="admin-pane-subtitle">Add, edit, reorder, and remove showreel projects.</p>
            </div>
            <button type="button" class="admin-btn primary" id="btn-add-new-project">+ Add New Project</button>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Active Projects</h3>
              <span class="admin-card-desc">Click Edit to modify details or thumbnail. Use Up/Down to reorder.</span>
            </div>
            <div class="admin-projects-list" id="admin-projects-list-wrap">
              <!-- Dynamically populated projects list -->
            </div>
          </div>
        </div>

        <!-- 5. ABOUT PANE -->
        <div class="admin-tab-pane" id="pane-about">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">About Section &amp; Bio</h2>
              <p class="admin-pane-subtitle">Customize your creator story and key service highlights.</p>
            </div>
            <button type="button" class="admin-btn primary" id="btn-save-about">Save About</button>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Section Headings</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-form-group">
                <label class="admin-label">Section Tag</label>
                <input type="text" class="admin-input" id="about-tag-input" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Section Title</label>
                <input type="text" class="admin-input" id="about-title-input" />
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Bio Content</h3>
            </div>
            <div class="admin-form-group">
              <label class="admin-label">Lead Paragraph (Bold Hook)</label>
              <textarea class="admin-textarea" id="about-lead-input"></textarea>
            </div>
            <div class="admin-form-group">
              <label class="admin-label">Body Paragraph (Workflow &amp; Craft)</label>
              <textarea class="admin-textarea" id="about-body-input"></textarea>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Pillars &amp; Highlights</h3>
              <button type="button" class="admin-btn secondary sm" id="btn-add-highlight">+ Add Highlight</button>
            </div>
            <div id="admin-highlights-list" style="display: flex; flex-direction: column; gap: 10px;">
              <!-- Highlights items -->
            </div>
          </div>
        </div>

        <!-- 6. SKILLS PANE -->
        <div class="admin-tab-pane" id="pane-skills">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Skills &amp; Software Arsenal</h2>
              <p class="admin-pane-subtitle">Control technical competency levels, badges, and software toolset.</p>
            </div>
            <button type="button" class="admin-btn primary" id="btn-save-skills">Save Skills</button>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Technical Skill Cards</h3>
              <button type="button" class="admin-btn secondary sm" id="btn-add-skill">+ Add Skill</button>
            </div>
            <div id="admin-skills-list" style="display: flex; flex-direction: column; gap: 10px;">
              <!-- Skills items -->
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Software Arsenal</h3>
              <button type="button" class="admin-btn secondary sm" id="btn-add-tool">+ Add Software Tool</button>
            </div>
            <div id="admin-arsenal-list" style="display: flex; flex-direction: column; gap: 10px;">
              <!-- Software items -->
            </div>
          </div>
        </div>

        <!-- 7. CONTACT PANE -->
        <div class="admin-tab-pane" id="pane-contact">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Contact &amp; Form Settings</h2>
              <p class="admin-pane-subtitle">Configure email destinations, placeholders, and feedback messages.</p>
            </div>
            <button type="button" class="admin-btn primary" id="btn-save-contact">Save Contact Settings</button>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Inquiry Forwarding</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-form-group full-width">
                <label class="admin-label">Owner Notification Email Address</label>
                <input type="email" class="admin-input" id="contact-owner-email" />
                <span style="font-size: 0.72rem; color: var(--adm-text-dim); margin-top: 4px;">Form submissions are sent to this email via FormSubmit and also logged into your Admin Inquiries Inbox.</span>
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Section Tag</label>
                <input type="text" class="admin-input" id="contact-tag-input" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Section Title</label>
                <input type="text" class="admin-input" id="contact-title-input" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Send Button Text</label>
                <input type="text" class="admin-input" id="contact-btn-text" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">Success Confirmation Message</label>
                <input type="text" class="admin-input" id="contact-success-toast" />
              </div>
            </div>
          </div>
        </div>

        <!-- 8. INBOX PANE -->
        <div class="admin-tab-pane" id="pane-inbox">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Client Inquiries &amp; Messages</h2>
              <p class="admin-pane-subtitle">Every message submitted through your website contact form is recorded here.</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <button type="button" class="admin-btn secondary sm" id="btn-inbox-test-msg">⚡ Send Test Inquiry</button>
              <button type="button" class="admin-btn danger sm" id="btn-inbox-clear-all">Clear All</button>
            </div>
          </div>

          <div class="admin-messages-list" id="admin-inbox-list">
            <!-- Messages rendered dynamically -->
          </div>
        </div>

        <!-- 9. FOOTER & SOCIALS PANE -->
        <div class="admin-tab-pane" id="pane-footer">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Navigation Logo &amp; Footer Socials</h2>
              <p class="admin-pane-subtitle">Manage social channels and bottom copyright credits.</p>
            </div>
            <button type="button" class="admin-btn primary" id="btn-save-footer">Save Socials</button>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Brand &amp; Navigation</h3>
            </div>
            <div class="admin-form-grid">
              <div class="admin-form-group">
                <label class="admin-label">Navbar Brand Name</label>
                <input type="text" class="admin-input" id="nav-brand-text" />
              </div>
              <div class="admin-form-group">
                <label class="admin-label">"Let's Talk" Button Label</label>
                <input type="text" class="admin-input" id="nav-talk-label" />
              </div>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Social Links</h3>
              <button type="button" class="admin-btn secondary sm" id="btn-add-social">+ Add Social Link</button>
            </div>
            <div id="admin-socials-list" style="display: flex; flex-direction: column; gap: 10px;">
              <!-- Social links -->
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Copyright Notice</h3>
            </div>
            <div class="admin-form-group">
              <label class="admin-label">Footer Copyright Line</label>
              <input type="text" class="admin-input" id="footer-copyright-input" />
            </div>
          </div>
        </div>

        <!-- 10. SETTINGS & SECURITY PANE -->
        <div class="admin-tab-pane" id="pane-settings">
          <div class="admin-pane-header">
            <div>
              <h2 class="admin-pane-title">Admin Security &amp; Data Backup</h2>
              <p class="admin-pane-subtitle">Update credentials, export backup JSON, or restore default state.</p>
            </div>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Change Admin Credentials</h3>
            </div>
            <form id="form-change-creds" style="display: flex; flex-direction: column; gap: 14px;">
              <div class="admin-form-grid">
                <div class="admin-form-group">
                  <label class="admin-label">New Admin Username</label>
                  <input type="text" class="admin-input" id="settings-username" required />
                </div>
                <div class="admin-form-group">
                  <label class="admin-label">Current Password (Verification)</label>
                  <input type="password" class="admin-input" id="settings-curr-pw" required />
                </div>
                <div class="admin-form-group">
                  <label class="admin-label">New Password</label>
                  <input type="password" class="admin-input" id="settings-new-pw" required />
                </div>
              </div>
              <div>
                <button type="submit" class="admin-btn primary">Update Credentials</button>
              </div>
            </form>
          </div>

          <div class="admin-card">
            <div class="admin-card-header">
              <h3 class="admin-card-title">Backup &amp; Migration</h3>
            </div>
            <p class="admin-card-desc">Download your entire website setup as a portable JSON file, or restore from an existing backup.</p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button type="button" class="admin-btn secondary" id="btn-export-json">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Export Site Data (JSON)</span>
              </button>
              <label class="admin-btn secondary" style="cursor: pointer;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <span>Import Site Data</span>
                <input type="file" id="input-import-json" accept=".json" style="display: none;" />
              </label>
            </div>
          </div>

          <div class="admin-card" style="border-color: rgba(255, 51, 75, 0.35);">
            <div class="admin-card-header">
              <h3 class="admin-card-title" style="color: #ff5268;">Danger Zone</h3>
            </div>
            <p class="admin-card-desc">Reset the website to its original default state. All custom text and added projects will be reset to the original template.</p>
            <div>
              <button type="button" class="admin-btn danger" id="btn-factory-reset">Reset to Factory Defaults</button>
            </div>
          </div>
        </div>
      `;

      this.bindPaneEvents();
    },

    // 5.6 Populate All Forms from SiteStore
    renderAllFormsFromData() {
      const data = SiteStore.getData();

      // Theme
      const activeThemeCard = document.querySelector(`.admin-theme-card[data-theme="${data.design.theme || 'cyan'}"]`);
      if (activeThemeCard) {
        document.querySelectorAll('.admin-theme-card').forEach(c => c.classList.remove('active'));
        activeThemeCard.classList.add('active');
      }

      if (data.design.customColors) {
        setVal('design-custom-primary', data.design.customColors.primary || '#00e5ff');
        setVal('design-custom-primary-text', data.design.customColors.primary || '#00e5ff');
        setVal('design-custom-secondary', data.design.customColors.secondary || '#3b82f6');
        setVal('design-custom-secondary-text', data.design.customColors.secondary || '#3b82f6');
        setVal('design-custom-bg', data.design.customColors.bgDark || '#02060d');
        setVal('design-custom-bg-text', data.design.customColors.bgDark || '#02060d');
      }

      const pToggle = document.getElementById('design-particles-toggle');
      if (pToggle) pToggle.checked = data.design.particlesEnabled !== false;

      const sToggle = document.getElementById('design-streaks-toggle');
      if (sToggle) sToggle.checked = data.design.streaksEnabled !== false;

      // Hero
      setVal('hero-badge-input', data.hero.badgeText);
      setVal('hero-title-input', data.hero.title);
      setVal('hero-sub-input', data.hero.subtitle);
      setVal('hero-cta1-text', data.hero.ctaPrimaryText);
      setVal('hero-cta1-link', data.hero.ctaPrimaryLink);
      setVal('hero-cta2-text', data.hero.ctaSecondaryText);
      setVal('hero-cta2-link', data.hero.ctaSecondaryLink);
      setVal('hero-hud-status', data.hero.hudStatus);
      setVal('hero-hud-callout1', data.hero.hudCallout1);
      setVal('hero-hud-callout2', data.hero.hudCallout2);
      setVal('hero-scroll-hint', data.hero.scrollHint);

      // About
      setVal('about-tag-input', data.about.sectionTag);
      setVal('about-title-input', data.about.title);
      setVal('about-lead-input', data.about.lead);
      setVal('about-body-input', data.about.body);

      // Contact
      setVal('contact-owner-email', data.contact.ownerEmail);
      setVal('contact-tag-input', data.contact.sectionTag);
      setVal('contact-title-input', data.contact.title);
      setVal('contact-btn-text', data.contact.buttonText);
      setVal('contact-success-toast', data.contact.toastSuccessText);

      // Footer
      setVal('nav-brand-text', data.nav.logoText);
      setVal('nav-talk-label', data.nav.letsTalkText);
      setVal('footer-copyright-input', data.footer.copyright);

      // Security
      const creds = AdminAuth.getCredentials();
      setVal('settings-username', creds.username);

      // Counts
      const navCountProj = document.getElementById('nav-count-projects');
      if (navCountProj) navCountProj.textContent = (data.projects || []).length;
    },

    // 5.7 Save Forms into SiteStore
    saveCurrentForms() {
      const data = SiteStore.getData();

      // Theme
      const activeThemeCard = document.querySelector('.admin-theme-card.active');
      const themeName = activeThemeCard ? activeThemeCard.getAttribute('data-theme') : 'cyan';
      data.design.theme = themeName;
      data.design.customColors = {
        primary: getVal('design-custom-primary') || '#00e5ff',
        secondary: getVal('design-custom-secondary') || '#3b82f6',
        bgDark: getVal('design-custom-bg') || '#02060d'
      };
      const pToggle = document.getElementById('design-particles-toggle');
      if (pToggle) data.design.particlesEnabled = pToggle.checked;
      const sToggle = document.getElementById('design-streaks-toggle');
      if (sToggle) data.design.streaksEnabled = sToggle.checked;

      // Hero
      data.hero.badgeText = getVal('hero-badge-input') || data.hero.badgeText;
      data.hero.title = getVal('hero-title-input') || data.hero.title;
      data.hero.subtitle = getVal('hero-sub-input') || data.hero.subtitle;
      data.hero.ctaPrimaryText = getVal('hero-cta1-text') || data.hero.ctaPrimaryText;
      data.hero.ctaPrimaryLink = getVal('hero-cta1-link') || data.hero.ctaPrimaryLink;
      data.hero.ctaSecondaryText = getVal('hero-cta2-text') || data.hero.ctaSecondaryText;
      data.hero.ctaSecondaryLink = getVal('hero-cta2-link') || data.hero.ctaSecondaryLink;
      data.hero.hudStatus = getVal('hero-hud-status') || data.hero.hudStatus;
      data.hero.hudCallout1 = getVal('hero-hud-callout1') || data.hero.hudCallout1;
      data.hero.hudCallout2 = getVal('hero-hud-callout2') || data.hero.hudCallout2;
      data.hero.scrollHint = getVal('hero-scroll-hint') || data.hero.scrollHint;

      // About
      data.about.sectionTag = getVal('about-tag-input') || data.about.sectionTag;
      data.about.title = getVal('about-title-input') || data.about.title;
      data.about.lead = getVal('about-lead-input') || data.about.lead;
      data.about.body = getVal('about-body-input') || data.about.body;

      // Contact
      data.contact.ownerEmail = getVal('contact-owner-email') || data.contact.ownerEmail;
      data.contact.sectionTag = getVal('contact-tag-input') || data.contact.sectionTag;
      data.contact.title = getVal('contact-title-input') || data.contact.title;
      data.contact.buttonText = getVal('contact-btn-text') || data.contact.buttonText;
      data.contact.toastSuccessText = getVal('contact-success-toast') || data.contact.toastSuccessText;

      // Footer & Nav
      data.nav.logoText = getVal('nav-brand-text') || data.nav.logoText;
      data.nav.letsTalkText = getVal('nav-talk-label') || data.nav.letsTalkText;
      data.footer.copyright = getVal('footer-copyright-input') || data.footer.copyright;

      SiteStore.saveData(data);
    },

    // 5.8 Bind Pane Events
    bindPaneEvents() {
      // Overview quick actions
      document.getElementById('overview-btn-edit-hero')?.addEventListener('click', () => this.switchTab('hero'));
      document.getElementById('qa-add-project')?.addEventListener('click', () => this.openProjectEditor());
      document.getElementById('qa-change-theme')?.addEventListener('click', () => this.switchTab('design'));
      document.getElementById('qa-view-inbox')?.addEventListener('click', () => this.switchTab('inbox'));
      document.getElementById('qa-export-backup')?.addEventListener('click', () => this.exportBackup());

      // Save buttons per section
      document.getElementById('btn-save-design')?.addEventListener('click', () => {
        this.saveCurrentForms();
        this.showToast('Design & Theme saved!', 'success');
      });
      document.getElementById('btn-save-hero')?.addEventListener('click', () => {
        this.saveCurrentForms();
        this.showToast('Hero section updated!', 'success');
      });
      document.getElementById('btn-save-about')?.addEventListener('click', () => {
        this.saveCurrentForms();
        this.showToast('About section updated!', 'success');
      });
      document.getElementById('btn-save-skills')?.addEventListener('click', () => {
        this.saveCurrentForms();
        this.showToast('Skills & Tools updated!', 'success');
      });
      document.getElementById('btn-save-contact')?.addEventListener('click', () => {
        this.saveCurrentForms();
        this.showToast('Contact settings updated!', 'success');
      });
      document.getElementById('btn-save-footer')?.addEventListener('click', () => {
        this.saveCurrentForms();
        this.showToast('Footer & Socials saved!', 'success');
      });

      // Themes selector cards
      document.querySelectorAll('.admin-theme-card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.admin-theme-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          const theme = card.getAttribute('data-theme');
          const data = SiteStore.getData();
          data.design.theme = theme;
          SiteStore.saveData(data);
          this.showToast(`Applied ${card.querySelector('.admin-theme-name').textContent}!`, 'info');
        });
      });

      // Color pickers sync
      bindColorSync('design-custom-primary', 'design-custom-primary-text', (val) => {
        const data = SiteStore.getData();
        data.design.theme = 'custom';
        data.design.customColors.primary = val;
        SiteStore.saveData(data);
      });
      bindColorSync('design-custom-secondary', 'design-custom-secondary-text', (val) => {
        const data = SiteStore.getData();
        data.design.theme = 'custom';
        data.design.customColors.secondary = val;
        SiteStore.saveData(data);
      });
      bindColorSync('design-custom-bg', 'design-custom-bg-text', (val) => {
        const data = SiteStore.getData();
        data.design.theme = 'custom';
        data.design.customColors.bgDark = val;
        SiteStore.saveData(data);
      });

      // Add buttons
      document.getElementById('btn-add-new-project')?.addEventListener('click', () => this.openProjectEditor());
      document.getElementById('btn-add-highlight')?.addEventListener('click', () => this.openHighlightEditor());
      document.getElementById('btn-add-skill')?.addEventListener('click', () => this.openSkillEditor());
      document.getElementById('btn-add-tool')?.addEventListener('click', () => this.openToolEditor());
      document.getElementById('btn-add-social')?.addEventListener('click', () => this.openSocialEditor());

      // Inbox controls
      document.getElementById('btn-inbox-test-msg')?.addEventListener('click', () => {
        SiteStore.addInboxMessage({
          name: 'Sarah Connor',
          email: 'sarah@skynet-vfx.studio',
          message: 'Hey Shadyi! We loved your cloud gaming docu cut. We have a 60-second sci-fi brand trailer that needs retention pacing and custom sound design. Can we book a call this week?'
        });
        this.renderInboxTab();
        this.showToast('Test inquiry added to inbox!', 'success');
      });

      document.getElementById('btn-inbox-clear-all')?.addEventListener('click', () => {
        if (confirm('Clear all received inbox messages?')) {
          SiteStore.saveInbox([]);
          this.renderInboxTab();
          this.updateInboxBadge();
          this.showToast('Inbox cleared.', 'info');
        }
      });

      // Credentials Form
      document.getElementById('form-change-creds')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = getVal('settings-username');
        const currPw = getVal('settings-curr-pw');
        const newPw = getVal('settings-new-pw');

        const creds = AdminAuth.getCredentials();
        if (currPw !== creds.password) {
          this.showToast('Incorrect current password.', 'error');
          return;
        }

        if (newPw.length < 4) {
          this.showToast('New password must be at least 4 characters.', 'error');
          return;
        }

        AdminAuth.saveCredentials(username, newPw);
        setVal('settings-curr-pw', '');
        setVal('settings-new-pw', '');
        this.showToast('Admin credentials updated successfully!', 'success');
      });

      // Backup Export / Import
      document.getElementById('btn-export-json')?.addEventListener('click', () => this.exportBackup());
      document.getElementById('input-import-json')?.addEventListener('change', (e) => this.importBackup(e));

      // Reset to defaults
      document.getElementById('btn-factory-reset')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to RESET all content to original defaults? All your custom edits will be lost.')) {
          SiteStore.resetToDefaults();
          this.renderAllFormsFromData();
          this.showToast('Reset to original template content.', 'warning');
        }
      });
    },

    // 5.9 Overview Stats Render
    renderOverviewStats() {
      const data = SiteStore.getData();
      const inbox = SiteStore.getInbox();
      const unread = inbox.filter(m => !m.read).length;

      const grid = document.getElementById('overview-stats-grid');
      if (!grid) return;

      grid.innerHTML = `
        <div class="admin-stat-card">
          <span class="admin-stat-num">${(data.projects || []).length}</span>
          <span class="admin-stat-label">Active Projects</span>
        </div>
        <div class="admin-stat-card">
          <span class="admin-stat-num">${(data.skills?.items || []).length}</span>
          <span class="admin-stat-label">Technical Skills</span>
        </div>
        <div class="admin-stat-card">
          <span class="admin-stat-num">${(data.skills?.arsenalItems || []).length}</span>
          <span class="admin-stat-label">Software Tools</span>
        </div>
        <div class="admin-stat-card" style="${unread > 0 ? 'border-color: var(--adm-accent);' : ''}">
          <span class="admin-stat-num" style="${unread > 0 ? 'color: var(--adm-accent);' : ''}">${inbox.length}</span>
          <span class="admin-stat-label">Inquiries (${unread} New)</span>
        </div>
      `;
    },

    // 5.10 Projects Tab Render & Reorder
    renderProjectsTab() {
      const data = SiteStore.getData();
      const wrap = document.getElementById('admin-projects-list-wrap');
      if (!wrap) return;

      wrap.innerHTML = '';
      if (!data.projects || data.projects.length === 0) {
        wrap.innerHTML = '<p style="color: var(--adm-text-dim); padding: 12px;">No projects yet. Click "+ Add New Project" above.</p>';
        return;
      }

      data.projects.forEach((proj, idx) => {
        const item = document.createElement('div');
        item.className = 'admin-project-item';
        item.innerHTML = `
          <div class="admin-project-info">
            <div class="admin-project-thumb-preview">
              ${proj.customImage ? `<img src="${escapeHTML(proj.customImage)}" alt="" />` : `<span>0${idx + 1}</span>`}
            </div>
            <div class="admin-project-details">
              <span class="admin-project-title">${escapeHTML(proj.title)}</span>
              <div class="admin-project-meta-row">
                <span class="admin-project-tag">${escapeHTML(proj.category)}</span>
                <span>•</span>
                <span>${escapeHTML(proj.views || '0 Views')}</span>
              </div>
            </div>
          </div>
          <div class="admin-item-actions">
            <button type="button" class="admin-icon-btn btn-proj-up" title="Move Up" ${idx === 0 ? 'disabled style="opacity:0.3;"' : ''}>▲</button>
            <button type="button" class="admin-icon-btn btn-proj-down" title="Move Down" ${idx === data.projects.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>▼</button>
            <button type="button" class="admin-btn secondary sm btn-proj-edit">Edit</button>
            <button type="button" class="admin-btn danger sm btn-proj-del">✕</button>
          </div>
        `;

        item.querySelector('.btn-proj-up')?.addEventListener('click', () => {
          if (idx > 0) {
            const temp = data.projects[idx];
            data.projects[idx] = data.projects[idx - 1];
            data.projects[idx - 1] = temp;
            SiteStore.saveData(data);
            this.renderProjectsTab();
          }
        });

        item.querySelector('.btn-proj-down')?.addEventListener('click', () => {
          if (idx < data.projects.length - 1) {
            const temp = data.projects[idx];
            data.projects[idx] = data.projects[idx + 1];
            data.projects[idx + 1] = temp;
            SiteStore.saveData(data);
            this.renderProjectsTab();
          }
        });

        item.querySelector('.btn-proj-edit')?.addEventListener('click', () => {
          this.openProjectEditor(proj);
        });

        item.querySelector('.btn-proj-del')?.addEventListener('click', () => {
          if (confirm(`Delete project "${proj.title}"?`)) {
            data.projects.splice(idx, 1);
            SiteStore.saveData(data);
            this.renderProjectsTab();
            this.showToast('Project deleted.', 'warning');
          }
        });

        wrap.appendChild(item);
      });
    },

    // 5.11 Project Editor Modal
    openProjectEditor(project = null) {
      const isNew = !project;
      const proj = project ? Object.assign({}, project) : {
        id: 'proj_' + Date.now(),
        title: 'New High-Retention Project',
        category: 'DOCUMENTARY EDIT',
        views: '500K Views',
        thumbClass: 'thumb-cyan',
        customImage: '',
        chipText: 'NEW',
        headline: 'New Cinematic<br/>Project',
        sub: 'MOTION // 2026',
        overlayCat: 'DOCUMENTARY EDIT',
        overlayName: 'New High-Retention Project',
        meta: 'After Effects • 60FPS • Sound Design',
        videoUrl: '',
        ctaText: 'REQUEST THIS STYLE',
        ctaLink: '#contact',
        description: 'Detailed showcase breakdown.'
      };

      const modal = this.createSubmodal('Project Editor', `
        <div class="admin-form-grid">
          <div class="admin-form-group full-width">
            <label class="admin-label">Project Title <span class="req">*</span></label>
            <input type="text" class="admin-input" id="pe-title" value="${escapeHTML(proj.title)}" required />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Category</label>
            <input type="text" class="admin-input" id="pe-category" value="${escapeHTML(proj.category)}" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Views / Metric Badge</label>
            <input type="text" class="admin-input" id="pe-views" value="${escapeHTML(proj.views)}" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Thumbnail Preset Style</label>
            <select class="admin-select" id="pe-thumb-class">
              <option value="thumb-cloud" ${proj.thumbClass === 'thumb-cloud' ? 'selected' : ''}>Cloud Blue</option>
              <option value="thumb-cyan" ${proj.thumbClass === 'thumb-cyan' ? 'selected' : ''}>Cyan Matrix</option>
              <option value="thumb-neon-cube" ${proj.thumbClass === 'thumb-neon-cube' ? 'selected' : ''}>Neon Orb / 3D</option>
              <option value="thumb-purple" ${proj.thumbClass === 'thumb-purple' ? 'selected' : ''}>Purple Sunset</option>
              <option value="thumb-yellow" ${proj.thumbClass === 'thumb-yellow' ? 'selected' : ''}>Gold / Yellow</option>
              <option value="thumb-green" ${proj.thumbClass === 'thumb-green' ? 'selected' : ''}>FinTech Green</option>
            </select>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Custom Thumbnail Image URL (Optional)</label>
            <input type="text" class="admin-input" id="pe-custom-img" placeholder="https://... or data:image/..." value="${escapeHTML(proj.customImage || '')}" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Thumbnail Chip Tag</label>
            <input type="text" class="admin-input" id="pe-chip" value="${escapeHTML(proj.chipText)}" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Thumbnail Subtitle / Tags</label>
            <input type="text" class="admin-input" id="pe-sub" value="${escapeHTML(proj.sub)}" />
          </div>
          <div class="admin-form-group full-width">
            <label class="admin-label">Card Overlay Metadata (e.g. Tools • SFX • Pacing)</label>
            <input type="text" class="admin-input" id="pe-meta" value="${escapeHTML(proj.meta)}" />
          </div>
          <div class="admin-form-group full-width">
            <label class="admin-label">Project Description (Shown in Showreel Modal)</label>
            <textarea class="admin-textarea" id="pe-desc">${escapeHTML(proj.description || '')}</textarea>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Modal Button Text</label>
            <input type="text" class="admin-input" id="pe-cta-text" value="${escapeHTML(proj.ctaText || 'REQUEST THIS STYLE')}" />
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Modal Button Link</label>
            <input type="text" class="admin-input" id="pe-cta-link" value="${escapeHTML(proj.ctaLink || '#contact')}" />
          </div>
        </div>
      `, [
        { label: 'Cancel', class: 'secondary', action: (m) => m.close() },
        {
          label: isNew ? 'Create Project' : 'Save Changes',
          class: 'primary',
          action: (m) => {
            proj.title = getVal('pe-title') || 'Untitled';
            proj.category = getVal('pe-category') || 'EDIT';
            proj.views = getVal('pe-views') || '1M Views';
            proj.thumbClass = getVal('pe-thumb-class');
            proj.customImage = getVal('pe-custom-img');
            proj.chipText = getVal('pe-chip') || 'REEL';
            proj.sub = getVal('pe-sub') || '';
            proj.overlayCat = proj.category;
            proj.overlayName = proj.title;
            proj.meta = getVal('pe-meta') || '';
            proj.description = getVal('pe-desc') || '';
            proj.ctaText = getVal('pe-cta-text') || 'REQUEST THIS STYLE';
            proj.ctaLink = getVal('pe-cta-link') || '#contact';

            const data = SiteStore.getData();
            if (isNew) {
              data.projects.push(proj);
            } else {
              const idx = data.projects.findIndex(p => p.id === proj.id);
              if (idx !== -1) data.projects[idx] = proj;
            }
            SiteStore.saveData(data);
            this.renderProjectsTab();
            this.showToast(isNew ? 'Project created!' : 'Project updated!', 'success');
            m.close();
          }
        }
      ]);
      modal.open();
    },

    // 5.12 About Highlights Tab & Editor
    renderAboutTab() {
      const data = SiteStore.getData();
      const wrap = document.getElementById('admin-highlights-list');
      if (!wrap) return;

      wrap.innerHTML = '';
      (data.about.highlights || []).forEach((h, idx) => {
        const item = document.createElement('div');
        item.className = 'admin-project-item';
        item.innerHTML = `
          <div class="admin-project-info">
            <span class="admin-dock-dot"></span>
            <div class="admin-project-details">
              <span class="admin-project-title">${escapeHTML(h.title)}</span>
              <span style="font-size: 0.76rem; color: var(--adm-text-muted);">${escapeHTML(h.desc)}</span>
            </div>
          </div>
          <div class="admin-item-actions">
            <button type="button" class="admin-btn secondary sm btn-edit-h">Edit</button>
            <button type="button" class="admin-btn danger sm btn-del-h">✕</button>
          </div>
        `;

        item.querySelector('.btn-edit-h')?.addEventListener('click', () => this.openHighlightEditor(h));
        item.querySelector('.btn-del-h')?.addEventListener('click', () => {
          if (confirm('Delete this highlight?')) {
            data.about.highlights.splice(idx, 1);
            SiteStore.saveData(data);
            this.renderAboutTab();
            this.showToast('Highlight removed.', 'warning');
          }
        });

        wrap.appendChild(item);
      });
    },

    openHighlightEditor(highlight = null) {
      const isNew = !highlight;
      const h = highlight ? Object.assign({}, highlight) : { id: 'h_' + Date.now(), title: '', desc: '' };

      const modal = this.createSubmodal('Highlight Pillar Editor', `
        <div class="admin-form-group">
          <label class="admin-label">Title</label>
          <input type="text" class="admin-input" id="he-title" value="${escapeHTML(h.title)}" placeholder="e.g. High-Retention Pacing" required />
        </div>
        <div class="admin-form-group" style="margin-top: 12px;">
          <label class="admin-label">Description</label>
          <input type="text" class="admin-input" id="he-desc" value="${escapeHTML(h.desc)}" placeholder="e.g. Story-first structure built for maximum watch time" required />
        </div>
      `, [
        { label: 'Cancel', class: 'secondary', action: (m) => m.close() },
        {
          label: isNew ? 'Add' : 'Save',
          class: 'primary',
          action: (m) => {
            h.title = getVal('he-title');
            h.desc = getVal('he-desc');
            const data = SiteStore.getData();
            if (isNew) {
              data.about.highlights.push(h);
            } else {
              const idx = data.about.highlights.findIndex(x => x.id === h.id);
              if (idx !== -1) data.about.highlights[idx] = h;
            }
            SiteStore.saveData(data);
            this.renderAboutTab();
            m.close();
          }
        }
      ]);
      modal.open();
    },

    // 5.13 Skills & Arsenal Tab & Editors
    renderSkillsTab() {
      const data = SiteStore.getData();

      // Skills
      const sWrap = document.getElementById('admin-skills-list');
      if (sWrap) {
        sWrap.innerHTML = '';
        (data.skills.items || []).forEach((s, idx) => {
          const item = document.createElement('div');
          item.className = 'admin-project-item';
          item.innerHTML = `
            <div class="admin-project-info">
              <span class="admin-project-tag">${escapeHTML(s.badge || 'EXPERT')}</span>
              <div class="admin-project-details">
                <span class="admin-project-title">${escapeHTML(s.title)} (${escapeHTML(s.width || '90%')})</span>
                <span style="font-size: 0.74rem; color: var(--adm-text-muted);">${escapeHTML(s.desc)}</span>
              </div>
            </div>
            <div class="admin-item-actions">
              <button type="button" class="admin-btn secondary sm btn-edit-s">Edit</button>
              <button type="button" class="admin-btn danger sm btn-del-s">✕</button>
            </div>
          `;
          item.querySelector('.btn-edit-s')?.addEventListener('click', () => this.openSkillEditor(s));
          item.querySelector('.btn-del-s')?.addEventListener('click', () => {
            if (confirm('Delete skill?')) {
              data.skills.items.splice(idx, 1);
              SiteStore.saveData(data);
              this.renderSkillsTab();
            }
          });
          sWrap.appendChild(item);
        });
      }

      // Arsenal
      const aWrap = document.getElementById('admin-arsenal-list');
      if (aWrap) {
        aWrap.innerHTML = '';
        (data.skills.arsenalItems || []).forEach((a, idx) => {
          const item = document.createElement('div');
          item.className = 'admin-project-item';
          item.innerHTML = `
            <div class="admin-project-info">
              <span class="admin-project-tag">${escapeHTML(a.iconText || a.name.slice(0, 2))}</span>
              <div class="admin-project-details">
                <span class="admin-project-title">${escapeHTML(a.name)}</span>
              </div>
            </div>
            <div class="admin-item-actions">
              <button type="button" class="admin-btn secondary sm btn-edit-a">Edit</button>
              <button type="button" class="admin-btn danger sm btn-del-a">✕</button>
            </div>
          `;
          item.querySelector('.btn-edit-a')?.addEventListener('click', () => this.openToolEditor(a));
          item.querySelector('.btn-del-a')?.addEventListener('click', () => {
            if (confirm('Delete software tool?')) {
              data.skills.arsenalItems.splice(idx, 1);
              SiteStore.saveData(data);
              this.renderSkillsTab();
            }
          });
          aWrap.appendChild(item);
        });
      }
    },

    openSkillEditor(skill = null) {
      const isNew = !skill;
      const s = skill ? Object.assign({}, skill) : { id: 's_' + Date.now(), title: '', desc: '', badge: 'EXPERT', width: '95%' };

      const modal = this.createSubmodal('Technical Skill Editor', `
        <div class="admin-form-group">
          <label class="admin-label">Skill Name</label>
          <input type="text" class="admin-input" id="se-title" value="${escapeHTML(s.title)}" placeholder="e.g. Visual Storytelling" required />
        </div>
        <div class="admin-form-group" style="margin-top: 10px;">
          <label class="admin-label">Subtitle / Key Techniques</label>
          <input type="text" class="admin-input" id="se-desc" value="${escapeHTML(s.desc)}" placeholder="e.g. Narrative structure & hook engineering" />
        </div>
        <div class="admin-form-group" style="margin-top: 10px;">
          <label class="admin-label">Proficiency Percentage</label>
          <div class="admin-range-wrap">
            <input type="range" class="admin-range" id="se-range" min="50" max="100" value="${parseInt(s.width, 10) || 95}" />
            <span class="admin-range-val" id="se-range-val">${s.width || '95%'}</span>
          </div>
        </div>
        <div class="admin-form-group" style="margin-top: 10px;">
          <label class="admin-label">Badge Tag</label>
          <select class="admin-select" id="se-badge">
            <option value="EXPERT" ${s.badge === 'EXPERT' ? 'selected' : ''}>EXPERT</option>
            <option value="ADVANCED" ${s.badge === 'ADVANCED' ? 'selected' : ''}>ADVANCED</option>
            <option value="PRO" ${s.badge === 'PRO' ? 'selected' : ''}>PRO</option>
            <option value="SPECIALIST" ${s.badge === 'SPECIALIST' ? 'selected' : ''}>SPECIALIST</option>
          </select>
        </div>
      `, [
        { label: 'Cancel', class: 'secondary', action: (m) => m.close() },
        {
          label: isNew ? 'Add Skill' : 'Save',
          class: 'primary',
          action: (m) => {
            s.title = getVal('se-title') || 'Skill';
            s.desc = getVal('se-desc');
            s.width = getVal('se-range') + '%';
            s.badge = getVal('se-badge');
            const data = SiteStore.getData();
            if (isNew) data.skills.items.push(s);
            else {
              const idx = data.skills.items.findIndex(x => x.id === s.id);
              if (idx !== -1) data.skills.items[idx] = s;
            }
            SiteStore.saveData(data);
            this.renderSkillsTab();
            m.close();
          }
        }
      ]);

      const range = modal.dialog.querySelector('#se-range');
      const valText = modal.dialog.querySelector('#se-range-val');
      range?.addEventListener('input', () => {
        valText.textContent = range.value + '%';
      });

      modal.open();
    },

    openToolEditor(tool = null) {
      const isNew = !tool;
      const t = tool ? Object.assign({}, tool) : { id: 'a_' + Date.now(), name: '', iconText: 'Ae', iconClass: 'icon-ae', title: '' };

      const modal = this.createSubmodal('Software Tool Editor', `
        <div class="admin-form-group">
          <label class="admin-label">Software Name</label>
          <input type="text" class="admin-input" id="te-name" value="${escapeHTML(t.name)}" placeholder="e.g. Adobe Premiere Pro" required />
        </div>
        <div class="admin-form-group" style="margin-top: 10px;">
          <label class="admin-label">Badge Abbreviation</label>
          <input type="text" class="admin-input" id="te-abbr" value="${escapeHTML(t.iconText || '')}" placeholder="e.g. Pr, Ae, Dv, Bl" maxlength="4" />
        </div>
      `, [
        { label: 'Cancel', class: 'secondary', action: (m) => m.close() },
        {
          label: isNew ? 'Add Tool' : 'Save',
          class: 'primary',
          action: (m) => {
            t.name = getVal('te-name') || 'Software';
            t.iconText = getVal('te-abbr') || t.name.slice(0, 2);
            t.title = t.name;
            const data = SiteStore.getData();
            if (isNew) data.skills.arsenalItems.push(t);
            else {
              const idx = data.skills.arsenalItems.findIndex(x => x.id === t.id);
              if (idx !== -1) data.skills.arsenalItems[idx] = t;
            }
            SiteStore.saveData(data);
            this.renderSkillsTab();
            m.close();
          }
        }
      ]);
      modal.open();
    },

    // 5.14 Social Links Tab & Editor
    renderSocialsList() {
      const data = SiteStore.getData();
      const wrap = document.getElementById('admin-socials-list');
      if (!wrap) return;

      wrap.innerHTML = '';
      (data.footer.socials || []).forEach((soc, idx) => {
        const item = document.createElement('div');
        item.className = 'admin-project-item';
        item.innerHTML = `
          <div class="admin-project-info">
            <span class="admin-project-tag">${escapeHTML(soc.platform)}</span>
            <div class="admin-project-details">
              <span class="admin-project-title">${escapeHTML(soc.name)}</span>
              <span style="font-size: 0.74rem; color: var(--adm-text-muted);">${escapeHTML(soc.url)}</span>
            </div>
          </div>
          <div class="admin-item-actions">
            <button type="button" class="admin-btn secondary sm btn-edit-soc">Edit</button>
            <button type="button" class="admin-btn danger sm btn-del-soc">✕</button>
          </div>
        `;
        item.querySelector('.btn-edit-soc')?.addEventListener('click', () => this.openSocialEditor(soc));
        item.querySelector('.btn-del-soc')?.addEventListener('click', () => {
          if (confirm('Delete social link?')) {
            data.footer.socials.splice(idx, 1);
            SiteStore.saveData(data);
            this.renderSocialsList();
          }
        });
        wrap.appendChild(item);
      });
    },

    openSocialEditor(social = null) {
      const isNew = !social;
      const s = social ? Object.assign({}, social) : { id: 'soc_' + Date.now(), platform: 'instagram', name: 'INSTAGRAM', url: 'https://', enabled: true };

      const modal = this.createSubmodal('Social Channel Editor', `
        <div class="admin-form-group">
          <label class="admin-label">Platform</label>
          <select class="admin-select" id="soce-platform">
            <option value="instagram" ${s.platform === 'instagram' ? 'selected' : ''}>Instagram</option>
            <option value="youtube" ${s.platform === 'youtube' ? 'selected' : ''}>YouTube</option>
            <option value="github" ${s.platform === 'github' ? 'selected' : ''}>GitHub</option>
            <option value="twitter" ${s.platform === 'twitter' || s.platform === 'x' ? 'selected' : ''}>Twitter / X</option>
            <option value="linkedin" ${s.platform === 'linkedin' ? 'selected' : ''}>LinkedIn</option>
            <option value="discord" ${s.platform === 'discord' ? 'selected' : ''}>Discord</option>
          </select>
        </div>
        <div class="admin-form-group" style="margin-top: 10px;">
          <label class="admin-label">Display Name</label>
          <input type="text" class="admin-input" id="soce-name" value="${escapeHTML(s.name)}" />
        </div>
        <div class="admin-form-group" style="margin-top: 10px;">
          <label class="admin-label">URL Link</label>
          <input type="url" class="admin-input" id="soce-url" value="${escapeHTML(s.url)}" />
        </div>
      `, [
        { label: 'Cancel', class: 'secondary', action: (m) => m.close() },
        {
          label: isNew ? 'Add' : 'Save',
          class: 'primary',
          action: (m) => {
            s.platform = getVal('soce-platform');
            s.name = getVal('soce-name') || s.platform.toUpperCase();
            s.url = getVal('soce-url');
            const data = SiteStore.getData();
            if (isNew) data.footer.socials.push(s);
            else {
              const idx = data.footer.socials.findIndex(x => x.id === s.id);
              if (idx !== -1) data.footer.socials[idx] = s;
            }
            SiteStore.saveData(data);
            this.renderSocialsList();
            m.close();
          }
        }
      ]);
      modal.open();
    },

    // 5.15 Inbox Tab & Message Reader
    renderInboxTab() {
      const list = SiteStore.getInbox();
      const wrap = document.getElementById('admin-inbox-list');
      if (!wrap) return;

      wrap.innerHTML = '';
      if (list.length === 0) {
        wrap.innerHTML = `
          <div style="padding: 32px; text-align: center; color: var(--adm-text-dim);">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 8px; opacity: 0.5;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            <p>No inquiries in your inbox yet.</p>
            <p style="font-size: 0.78rem; margin-top: 4px;">Click "⚡ Send Test Inquiry" above to test the submission flow.</p>
          </div>
        `;
        return;
      }

      list.forEach((msg, idx) => {
        const item = document.createElement('div');
        item.className = `admin-message-item ${msg.read ? '' : 'unread'}`;
        item.innerHTML = `
          <div class="admin-message-header">
            <div class="admin-message-sender">
              <span>${escapeHTML(msg.name)}</span>
              ${!msg.read ? '<span class="admin-message-badge-new">NEW</span>' : ''}
              <span style="font-size: 0.76rem; color: var(--adm-text-dim); font-weight: 400;">&lt;${escapeHTML(msg.email)}&gt;</span>
            </div>
            <span class="admin-message-date">${escapeHTML(msg.date)}</span>
          </div>
          <p class="admin-message-snippet">${escapeHTML(msg.message)}</p>
        `;

        item.addEventListener('click', () => {
          msg.read = true;
          SiteStore.saveInbox(list);
          this.updateInboxBadge();
          this.openMessageModal(msg, () => {
            this.renderInboxTab();
          });
        });

        wrap.appendChild(item);
      });
    },

    openMessageModal(msg, onDone) {
      const modal = this.createSubmodal(`Inquiry from ${msg.name}`, `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px;">
            <div>
              <div style="font-weight: 700; color: #fff;">${escapeHTML(msg.name)}</div>
              <a href="mailto:${escapeHTML(msg.email)}" style="font-size: 0.82rem; color: var(--adm-accent); text-decoration: none;">${escapeHTML(msg.email)}</a>
            </div>
            <div style="font-size: 0.74rem; color: var(--adm-text-dim); font-family: var(--adm-font-mono);">${escapeHTML(msg.date)}</div>
          </div>
          <div style="background: rgba(0,0,0,0.3); padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; line-height: 1.6; color: #fff; white-space: pre-wrap;">${escapeHTML(msg.message)}</div>
        </div>
      `, [
        {
          label: 'Delete',
          class: 'danger',
          action: (m) => {
            const list = SiteStore.getInbox().filter(x => x.id !== msg.id);
            SiteStore.saveInbox(list);
            this.showToast('Message deleted.', 'warning');
            m.close();
            if (onDone) onDone();
          }
        },
        {
          label: 'Reply via Email',
          class: 'primary',
          action: () => {
            const subject = encodeURIComponent(`Re: Project Enquiry — Shadyi Portfolio`);
            window.location.href = `mailto:${msg.email}?subject=${subject}`;
          }
        },
        { label: 'Close', class: 'secondary', action: (m) => { m.close(); if (onDone) onDone(); } }
      ]);
      modal.open();
    },

    // 5.16 Submodal Helper
    createSubmodal(title, bodyHTML, buttons = []) {
      const modalEl = document.createElement('div');
      modalEl.className = 'admin-submodal';
      modalEl.innerHTML = `
        <div class="admin-submodal-dialog">
          <div class="admin-submodal-header">
            <h3 class="admin-submodal-title">${escapeHTML(title)}</h3>
            <button type="button" class="admin-close-btn submodal-close" style="width: 30px; height: 30px; font-size: 0.8rem;">✕</button>
          </div>
          <div class="admin-submodal-body">
            ${bodyHTML}
          </div>
          <div class="admin-submodal-footer"></div>
        </div>
      `;

      const footer = modalEl.querySelector('.admin-submodal-footer');
      const dialog = modalEl.querySelector('.admin-submodal-dialog');

      const modalController = {
        dialog,
        open() {
          document.body.appendChild(modalEl);
          requestAnimationFrame(() => modalEl.classList.add('open'));
        },
        close() {
          modalEl.classList.remove('open');
          setTimeout(() => modalEl.remove(), 250);
        }
      };

      modalEl.querySelector('.submodal-close').addEventListener('click', () => modalController.close());

      buttons.forEach(btnConfig => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `admin-btn ${btnConfig.class || 'secondary'}`;
        btn.textContent = btnConfig.label;
        btn.addEventListener('click', () => btnConfig.action(modalController));
        footer.appendChild(btn);
      });

      return modalController;
    },

    // 5.17 Backup Export & Import
    exportBackup() {
      const data = SiteStore.getData();
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `shadyi-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('Backup configuration exported!', 'success');
    },

    importBackup(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed && typeof parsed === 'object') {
            SiteStore.saveData(parsed);
            this.renderAllFormsFromData();
            this.showToast('Backup restored successfully!', 'success');
          } else {
            throw new Error('Invalid JSON');
          }
        } catch (err) {
          this.showToast('Invalid backup file. Could not parse JSON.', 'error');
        }
      };
      reader.readAsText(file);
    },

    // 5.18 Intercept Contact Form Submissions
    bindContactFormCapture() {
      const form = document.getElementById('contact-form');
      if (!form) return;

      form.addEventListener('submit', () => {
        const name = (document.getElementById('name-input')?.value || '').trim();
        const email = (document.getElementById('email-input')?.value || '').trim();
        const message = (document.getElementById('message-input')?.value || '').trim();

        if (name || email || message) {
          SiteStore.addInboxMessage({ name, email, message });
        }
      }, true);
    },

    // 5.19 Interactive Project Modal Showreel Integration
    bindProjectModalInteractions() {
      const modal = document.getElementById('project-modal');
      const grid = document.getElementById('projects-grid');
      if (!modal || !grid) return;

      grid.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (!card) return;

        const title = card.getAttribute('data-title');
        const cat = card.getAttribute('data-category');
        const views = card.getAttribute('data-views');
        const desc = card.getAttribute('data-desc');
        const ctaText = card.getAttribute('data-cta-text');

        const titleEl = document.getElementById('modal-title');
        const catEl = document.getElementById('modal-cat');
        const viewsEl = document.getElementById('modal-views');
        const modalFooterP = document.querySelector('.modal-footer p');
        const modalCta = document.getElementById('modal-cta');

        if (titleEl && title) titleEl.textContent = title;
        if (catEl && cat) catEl.textContent = cat;
        if (viewsEl && views) viewsEl.textContent = views;
        if (modalFooterP && desc) modalFooterP.textContent = desc;
        if (modalCta && ctaText) modalCta.textContent = ctaText;
      });
    },

    // 5.20 Bind Navbar Login Form Submission
    bindNavbarLogin() {
      const form = document.getElementById('login-form');
      const msg = document.getElementById('login-msg');
      const modal = document.getElementById('login-modal');

      if (!form) return;

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        const user = (document.getElementById('login-email')?.value || '').trim();
        const pass = document.getElementById('login-password')?.value || '';

        const result = AdminAuth.login(user, pass);
        if (result.success) {
          if (msg) {
            msg.className = 'login-msg';
            msg.style.color = '#10b981';
            msg.textContent = '✓ Login successful! Opening Admin Panel...';
          }
          setTimeout(() => {
            if (modal) {
              modal.classList.remove('open');
              modal.setAttribute('aria-hidden', 'true');
              document.body.style.overflow = '';
            }
            if (msg) msg.textContent = '';
            this.openPanel();
            this.showToast('Welcome to Shadyi Admin Panel!', 'success');
          }, 400);
        } else {
          if (msg) {
            msg.className = 'login-msg err';
            msg.textContent = result.message || 'Invalid admin credentials.';
          }
        }
      }, true);
    }
  };

  // Helper Form Utilities
  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
  }

  function bindColorSync(colorInputId, textInputId, onChange) {
    const colorEl = document.getElementById(colorInputId);
    const textEl = document.getElementById(textInputId);
    if (!colorEl || !textEl) return;

    colorEl.addEventListener('input', () => {
      textEl.value = colorEl.value;
      if (onChange) onChange(colorEl.value);
    });
    textEl.addEventListener('input', () => {
      if (/^#[0-9A-Fa-f]{6}$/.test(textEl.value)) {
        colorEl.value = textEl.value;
        if (onChange) onChange(textEl.value);
      }
    });
  }

  // =========================================================================
  // 6. INITIALIZATION HOOK
  // =========================================================================
  function initAdmin() {
    const data = SiteStore.getData();
    SiteRenderer.renderAll(data);
    AdminUI.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdmin);
  } else {
    initAdmin();
  }

  // Expose to window for external integration & debugging
  window.ShadyiAdmin = {
    SiteStore,
    AdminAuth,
    SiteRenderer,
    AdminUI
  };

})();
