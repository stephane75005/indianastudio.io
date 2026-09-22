// Animations du site : révélations au scroll, hero scrubbé, curseur, menu,
// champ d'ions, ions du portrait, formulaire.
// Porté tel quel depuis la maquette — aucun framework d'animation requis.

export function initEffects() {
  class SiteFX {
    props = { accentColor: "#3845e1", animIntensity: 3 };
    componentDidMount() {
      this._alive = true;
      this._boot();
    }
    componentWillUnmount() {
      this._alive = false;
      if (this._raf) cancelAnimationFrame(this._raf);
      if (this._io) this._io.disconnect();
      if (this._onCursor) window.removeEventListener('pointermove', this._onCursor);
      if (this._onCursorOut) document.removeEventListener('mouseleave', this._onCursorOut);
      if (this._cursorStop) this._cursorStop();
      if (this._onResize) window.removeEventListener('resize', this._onResize);
      if (this._onMove) window.removeEventListener('pointermove', this._onMove);
      if (this._onScroll) window.removeEventListener('scroll', this._onScroll);
      if (this._scrubRaf) cancelAnimationFrame(this._scrubRaf);

      if (this._onKey) document.removeEventListener('keydown', this._onKey);
      if (this._onMq) window.removeEventListener('resize', this._onMq);
      if (this._onIonsResize) window.removeEventListener('resize', this._onIonsResize);
      if (this._ionsCleanup) this._ionsCleanup();
      if (this._onPhotoIonsResize) window.removeEventListener('resize', this._onPhotoIonsResize);
      if (this._photoIonsCleanup) this._photoIonsCleanup();
  
  
  
  
  
    }
  
    async _boot() {
      await this._waitFor(() => document.querySelector('[data-reveal]'));
      this._reveal();
      this._scroll();
      this._blob();
      this._heroVideo();
      this._ions();
      this._photoIons();
      this._menu();
      this._contact();
      this._words();
      this._cursor();
    }
  
    _cursor() {
      const ring = document.querySelector('[data-cursor]');
      const dot = document.querySelector('[data-cursor-dot]');
      if (!ring || !dot || matchMedia('(hover: none)').matches) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
      const glow = ring.querySelector('[data-cursor-glow]');
      let rx = innerWidth / 2, ry = innerHeight / 2, dx = rx, dy = ry, tx = rx, ty = ry, raf = 0;
      const hot = 'a, button, input, select, textarea, label';
  
      const tick = () => {
        rx += (tx - rx) * 0.16;
        ry += (ty - ry) * 0.16;
        dx += (tx - dx) * 0.42;
        dy += (ty - dy) * 0.42;
        ring.style.transform = 'translate3d(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px,0)';
        dot.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0)';
        raf = (Math.abs(tx - rx) > 0.2 || Math.abs(ty - ry) > 0.2) ? requestAnimationFrame(tick) : 0;
      };
  
      this._onCursor = e => {
        tx = e.clientX; ty = e.clientY;
        if (ring.style.opacity !== '1') { ring.style.opacity = '1'; dot.style.opacity = '1'; }
        if (!raf) raf = requestAnimationFrame(tick);
        const big = e.target instanceof Element && !!e.target.closest(hot);
        ring.style.width = ring.style.height = big ? '58px' : '34px';
        ring.style.margin = big ? '-29px 0 0 -29px' : '-17px 0 0 -17px';
        ring.style.backgroundColor = big ? 'rgba(56,69,225,.22)' : 'transparent';
        ring.style.borderColor = big ? 'rgba(143,155,255,.95)' : 'rgba(143,155,255,.7)';
        dot.style.opacity = big ? '0' : '1';
        if (glow) {
          glow.style.opacity = '1';
          glow.style.filter = big ? 'blur(1.4px)' : 'blur(.3px)';
        }
      };
      this._onCursorOut = () => { ring.style.opacity = '0'; dot.style.opacity = '0'; };
      window.addEventListener('pointermove', this._onCursor, { passive: true });
      document.addEventListener('mouseleave', this._onCursorOut);
      this._cursorStop = () => { if (raf) cancelAnimationFrame(raf); };
    }
  
    _words() {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const heads = [...document.querySelectorAll('[data-reveal-lines]')];
      if (!heads.length || !('IntersectionObserver' in window)) return;
  
      const split = el => {
        if (el.dataset.split === '1') return;
        el.dataset.split = '1';
        const out = [];
        const walk = node => {
          if (node.nodeType === 3) {
            const parts = node.textContent.split(/(\s+)/).filter(s => s !== '');
            const frag = document.createDocumentFragment();
            parts.forEach(part => {
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
              const mask = document.createElement('span');
              mask.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.06em';
              const word = document.createElement('span');
              word.textContent = part;
              word.style.cssText = 'display:inline-block;transform:translateY(105%);will-change:transform';
              mask.appendChild(word);
              frag.appendChild(mask);
              out.push(word);
            });
            node.parentNode.replaceChild(frag, node);
            return;
          }
          if (node.nodeType === 1) [...node.childNodes].forEach(walk);
        };
        [...el.childNodes].forEach(walk);
        el.__words = out;
        // la révélation globale ne doit plus masquer le titre : les mots s'en chargent
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.removeProperty('filter');
      };
  
      heads.forEach(split);
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          (el.__words || []).forEach((w, i) => {
            w.style.transition = 'transform .85s cubic-bezier(.16,1,.3,1) ' + (i * 0.04).toFixed(2) + 's';
            w.style.transform = 'none';
          });
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
      heads.forEach(el => io.observe(el));
    }
  
    _contact() {
      const form = document.querySelector('[data-contact-form]');
      if (!form) return;
      const status = form.querySelector('[data-contact-status]');
      const btn = form.querySelector('[data-contact-submit]');
      form.addEventListener('submit', e => {
        e.preventDefault();
        const d = new FormData(form);
        const nom = (d.get('nom') || '').toString().trim();
        const mail = (d.get('email') || '').toString().trim();
        const msg = (d.get('message') || '').toString().trim();
        if (!nom || !mail || !msg) {
          if (status) status.textContent = 'Merci de renseigner votre nom, votre email et votre projet.';
          return;
        }
        if (btn) { btn.disabled = true; btn.style.opacity = '.6'; }
        if (status) status.textContent = 'Envoi en cours…';
        const done = (txt, ok) => {
          if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
          if (status) status.textContent = txt;
          if (ok) form.reset();
        };
        fetch('/api/contact', { method: 'POST', body: d })
          .then(async r => {
            let out = {};
            try { out = await r.json(); } catch (_) {}
            if (r.ok && out.ok) done('Merci ' + nom.split(' ')[0] + ' — demande reçue. Je vous réponds très vite.', true);
            else done(out.error || "L'envoi a échoué. Merci de réessayer dans un instant.", false);
          })
          .catch(() => done("L'envoi a échoué — vérifiez votre connexion et réessayez.", false));
      });
    }
  
    _menu() {
      const btn = document.querySelector('[data-burger]');
      const sheet = document.querySelector('[data-sheet]');
      if (!btn || !sheet) return;
      const l1 = sheet.parentElement.querySelector('[data-burger-l1]');
      const l2 = sheet.parentElement.querySelector('[data-burger-l2]');
      const l3 = sheet.parentElement.querySelector('[data-burger-l3]');
      let open = false;
      const set = next => {
        open = next;
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
        if (open) {
          sheet.style.display = 'flex';
          requestAnimationFrame(() => { sheet.style.opacity = '1'; sheet.style.transform = 'none'; });
        } else {
          sheet.style.opacity = '0';
          sheet.style.transform = 'translateY(-10px)';
          setTimeout(() => { if (!open) sheet.style.display = 'none'; }, 340);
        }
        if (l1) l1.style.transform = open ? 'translateY(5.5px) rotate(45deg)' : 'none';
        if (l2) { l2.style.opacity = open ? '0' : '1'; l2.style.transform = open ? 'scaleX(.2)' : 'none'; }
        if (l3) l3.style.transform = open ? 'translateY(-5.5px) rotate(-45deg)' : 'none';
      };
      btn.addEventListener('click', () => set(!open));
      sheet.querySelectorAll('[data-sheet-link]').forEach(a => a.addEventListener('click', () => set(false)));
      this._onKey = e => { if (e.key === 'Escape' && open) set(false); };
      document.addEventListener('keydown', this._onKey);
      this._onMq = () => { if (window.innerWidth > 1080 && open) set(false); };
      window.addEventListener('resize', this._onMq);
    }
  
    // Ions autour du portrait : même vocabulaire néon que le champ de fond,
    // mais une ascension lente et centrée sur la photo. Tourne quand elle est visible.
    async _photoIons() {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const cv = await this._waitFor(() => document.querySelector('[data-photo-ions]'));
      if (!cv || !this._alive) return;
      const ctx = cv.getContext('2d');
      const CYAN = '78,195,255', DEEP = '41,140,255', INDIGO = '143,155,255';
      const dpr = Math.min(devicePixelRatio || 1, 2);
      let w = 0, h = 0, ps = [], raf = 0, on = false;
      const rnd = (a, b) => a + Math.random() * (b - a);
  
      const seed = (p, low) => {
        p.x = rnd(0.1, 0.9) * w;
        p.y = low ? h + rnd(6, 40) : rnd(0, h);
        p.r = rnd(0.7, 1.9);
        p.vy = rnd(0.12, 0.42);
        p.amp = rnd(5, 19);
        p.freq = rnd(0.0004, 0.0013);
        p.ph = rnd(0, 6.28);
        p.a = rnd(0.3, 0.8);
        p.life = 0;
        p.hue = Math.random() < 0.34 ? INDIGO : (Math.random() < 0.5 ? CYAN : DEEP);
        return p;
      };
  
      const size = () => {
        const r = cv.getBoundingClientRect();
        if (!r.width || !r.height) return;
        w = r.width; h = r.height;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ps = Array.from({ length: 1 }, () => seed({}, false));
      };
      size();
      this._onPhotoIonsResize = () => size();
      addEventListener('resize', this._onPhotoIonsResize);
  
      const frame = now => {
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'lighter';
        for (const p of ps) {
          p.y -= p.vy;
          p.life += 0.004;
          if (p.y < -30) seed(p, true);
          const x = p.x + Math.sin(now * p.freq + p.ph) * p.amp;
          // fondu aux deux extrémités : les ions naissent et s'éteignent en douceur
          const edge = Math.min(1, p.y / 50, (h + 30 - p.y) / 70);
          const a = p.a * Math.max(0, edge) * (0.65 + 0.35 * Math.sin(now * 0.0017 + p.ph));
          const R = p.r * 9;
          const g = ctx.createRadialGradient(x, p.y, 0, x, p.y, R);
          g.addColorStop(0, 'rgba(' + p.hue + ',' + (a * 0.8).toFixed(3) + ')');
          g.addColorStop(0.2, 'rgba(' + p.hue + ',' + (a * 0.3).toFixed(3) + ')');
          g.addColorStop(1, 'rgba(' + p.hue + ',0)');
          ctx.beginPath();
          ctx.arc(x, p.y, R, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(x, p.y, p.r * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,' + Math.min(1, a * 1.2).toFixed(3) + ')';
          ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';
        if (this._alive && on) raf = requestAnimationFrame(frame);
      };
  
      const io = new IntersectionObserver(es => {
        const vis = es.some(e => e.isIntersecting);
        if (vis && !on) { on = true; if (!w) size(); raf = requestAnimationFrame(frame); }
        else if (!vis && on) { on = false; cancelAnimationFrame(raf); }
      }, { threshold: 0 });
      io.observe(cv);
  
      this._photoIonsCleanup = () => { on = false; cancelAnimationFrame(raf); io.disconnect(); };
    }
  
    // Champ d'ions, d'après l'image de référence : électrons à cœur blanc et
    // halo néon cyan, traînée le long de leur course, poussière d'étoiles et
    // réseau de hairlines. Le scroll entraîne l'ensemble vers le bas.
    async _ions() {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const hero = await this._waitFor(() => document.querySelector('[data-hero-wrap]'));
      if (!hero || !this._alive) return;
  
      const cv = document.createElement('canvas');
      cv.setAttribute('aria-hidden', 'true');
      cv.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0;transition:opacity .7s ease';
      document.body.appendChild(cv);
      const ctx = cv.getContext('2d');
  
      const CYAN = '78,195,255', DEEP = '41,140,255', INDIGO = '143,155,255';
      const dpr = Math.min(devicePixelRatio || 1, 2);
      let w = 0, h = 0, stars = [], ions = [], nodes = [], raf = 0, lastY = scrollY, pull = 0, shown = false;
  
      const rnd = (a, b) => a + Math.random() * (b - a);
  
      const seedStar = (p, top) => {
        p.x = rnd(0, w);
        p.y = top ? rnd(-60, -10) : rnd(0, h);
        p.r = rnd(0.3, 1.05);
        p.a = rnd(0.07, 0.34);
        p.k = rnd(0.06, 0.34);
        p.tw = rnd(0.0006, 0.002);
        p.ph = rnd(0, 6.28);
        return p;
      };
  
      const seedIon = (p, top) => {
        p.x = rnd(0, w);
        p.y = top ? rnd(-90, -20) : rnd(0, h);
        p.r = rnd(1.1, 2.4);
        p.vy = rnd(0.05, 0.16);
        p.amp = rnd(14, 52);
        p.freq = rnd(0.00016, 0.00048);
        p.ph = rnd(0, 6.28);
        p.a = rnd(0.34, 0.78);
        p.k = rnd(0.5, 1.5);
        p.hue = Math.random() < 0.3 ? INDIGO : (Math.random() < 0.5 ? CYAN : DEEP);
        p.tr = [];
        return p;
      };
  
      const size = () => {
        w = innerWidth; h = innerHeight;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        stars = Array.from({ length: Math.max(14, Math.min(44, Math.round(w * h / 38000))) }, () => seedStar({}, false));
        ions = Array.from({ length: Math.max(2, Math.min(4, Math.round(w * h / 340000))) }, () => seedIon({}, false));
        nodes = Array.from({ length: 3 }, () => ({ x: rnd(0, w), y: rnd(0, h), k: rnd(0.1, 0.5) }));
      };
      size();
      this._onIonsResize = () => size();
      addEventListener('resize', this._onIonsResize);
  
      const frame = now => {
        const heroEnd = hero.offsetTop + hero.offsetHeight;
        const after = Math.max(0, Math.min(1, (scrollY - heroEnd + innerHeight * 0.9) / (innerHeight * 0.5)));
        if ((after > 0.02) !== shown) { shown = after > 0.02; cv.style.opacity = shown ? '1' : '0'; }
  
        const dy = scrollY - lastY;
        lastY = scrollY;
        pull = pull * 0.88 + dy * 0.12;           // inertie : ça continue après l'arrêt
  
        ctx.clearRect(0, 0, w, h);
        if (after < 0.02) { if (this._alive) raf = requestAnimationFrame(frame); return; }
        ctx.globalCompositeOperation = 'lighter';   // additif : c'est ce qui fait le néon
  
        // réseau : hairlines entre nœuds proches, presque invisibles
        for (const n of nodes) {
          n.y += 0.02 + pull * n.k;
          if (n.y > h + 80) { n.y = -80; n.x = rnd(0, w); }
          else if (n.y < -120) n.y = h + 60;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x, dyy = nodes[i].y - nodes[j].y;
            const d = Math.hypot(dx, dyy);
            if (d > 460) continue;
            ctx.strokeStyle = 'rgba(' + DEEP + ',' + (0.05 * (1 - d / 460) * after).toFixed(3) + ')';
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
  
        // poussière d'étoiles
        for (const p of stars) {
          p.y += 0.012 + pull * p.k;
          if (p.y > h + 20) seedStar(p, true);
          else if (p.y < -40) { p.y = h + 10; p.x = rnd(0, w); }
          const a = p.a * after * (0.62 + 0.38 * Math.sin(now * p.tw + p.ph));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(210,232,255,' + a.toFixed(3) + ')';
          ctx.fill();
        }
  
        // électrons : traînée, halo, cœur
        for (const p of ions) {
          p.y += p.vy + pull * p.k;
          if (p.y > h + 60) seedIon(p, true);
          else if (p.y < -120) { p.y = h + 40; p.x = rnd(0, w); p.tr.length = 0; }
          const x = p.x + Math.sin(now * p.freq + p.ph) * p.amp;
  
          p.tr.unshift(x, p.y);
          if (p.tr.length > 30) p.tr.length = 30;
  
          const a = p.a * after;
          for (let i = 2; i < p.tr.length; i += 2) {
            const f = 1 - i / p.tr.length;
            ctx.beginPath();
            ctx.arc(p.tr[i], p.tr[i + 1], p.r * f * 0.85, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + p.hue + ',' + (a * f * f * 0.32).toFixed(3) + ')';
            ctx.fill();
          }
  
          const R = p.r * 11;
          const g = ctx.createRadialGradient(x, p.y, 0, x, p.y, R);
          g.addColorStop(0, 'rgba(' + p.hue + ',' + (a * 0.85).toFixed(3) + ')');
          g.addColorStop(0.18, 'rgba(' + p.hue + ',' + (a * 0.34).toFixed(3) + ')');
          g.addColorStop(0.55, 'rgba(' + p.hue + ',' + (a * 0.07).toFixed(3) + ')');
          g.addColorStop(1, 'rgba(' + p.hue + ',0)');
          ctx.beginPath();
          ctx.arc(x, p.y, R, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
  
          ctx.beginPath();
          ctx.arc(x, p.y, p.r * 0.72, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,' + Math.min(1, a * 1.25).toFixed(3) + ')';
          ctx.fill();
        }
  
        ctx.globalCompositeOperation = 'source-over';
        if (this._alive) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
  
      this._ionsCleanup = () => { cancelAnimationFrame(raf); cv.remove(); };
    }
  
    async _heroVideo() {
      const v = await this._waitFor(() => document.querySelector('[data-hero-video]'));
      if (!v || !this._alive) return;
      const skip = matchMedia('(prefers-reduced-motion: reduce)').matches
        || (navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || '')));
      if (skip) { v.remove(); return; }
      const mobile = matchMedia('(max-width: 700px)').matches;
      try {
        v.src = mobile ? '/assets/hero-triangle-mobile.mp4' : '/assets/hero-triangle.mp4';
        v.load();
        const ready = () => {
          v.pause();
          this._video = v;
          this._vDur = v.duration || 0;
          this._vTime = 0;
          v.currentTime = 0;
        };
        v.readyState >= 2 ? ready() : v.addEventListener('loadeddata', ready, { once: true });
      } catch (err) {
        console.warn('vidéo du hero indisponible', err);
        v.style.display = 'none';
      }
    }
  
  
    _waitFor(fn, tries = 120) {
      return new Promise(res => {
        const tick = n => {
          if (!this._alive) return;
          if (fn() || n <= 0) return res(fn());
          requestAnimationFrame(() => tick(n - 1));
        };
        tick(tries);
      });
    }
  
    _reveal() {
      const els = [...document.querySelectorAll('[data-reveal]')];
      if (!els.length || !('IntersectionObserver' in window)) return;
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;
      els.forEach((el, i) => {
        const lines = el.hasAttribute('data-reveal-lines') && el.dataset.split !== '1';
        const d = (i % 5) * 0.07;
        el.style.opacity = '0';
        el.style.willChange = 'opacity, transform, filter';
        el.style.transform = lines ? 'translateY(34px) scale(.985)' : 'translateY(28px)';
        el.style.filter = 'blur(' + (lines ? 10 : 6) + 'px)';
        el.style.transition =
          'opacity .9s cubic-bezier(.16,1,.3,1) ' + d + 's,' +
          'transform 1.05s cubic-bezier(.16,1,.3,1) ' + d + 's,' +
          'filter .9s cubic-bezier(.16,1,.3,1) ' + d + 's';
      });
      this._io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.removeProperty('filter');
          setTimeout(() => { el.style.willChange = 'auto'; }, 1400);
          this._io.unobserve(el);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      els.forEach(el => this._io.observe(el));
    }
  
    _scroll() {
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const px = [...document.querySelectorAll('[data-parallax]')].map(el => ({
        el, speed: parseFloat(el.dataset.parallax) || 0
      }));
      const header = document.querySelector('[data-header]');
      const pill = document.querySelector('[data-header-pill]');
      const bar = document.querySelector('[data-progress]');
      const marquee = document.querySelector('[data-marquee]');
  
      const counters = [...document.querySelectorAll('[data-count]')].map(el => ({
        el,
        target: parseFloat(el.dataset.count),
        pre: el.dataset.prefix || '',
        suf: el.dataset.suffix || '',
        shown: null
      }));
      px.forEach(p => { p.el.style.willChange = 'transform'; });
  
  
  
      const wrap = document.querySelector('[data-hero-wrap]');
      const scrub = document.querySelector('[data-hero-scrub]');
      const veil = document.querySelector('[data-hero-veil]');
      const heroBar = document.querySelector('[data-hero-bar]');
      const label = document.querySelector('[data-hero-label]');
      const claim = document.querySelector('[data-hero-claim]');
      const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
      const seg = (p, a, b) => clamp((p - a) / (b - a), 0, 1);
  
      let last = window.scrollY, vel = 0, queued = false;
      const frame = () => {
        queued = false;
        const y = window.scrollY;
        const vh = window.innerHeight;
  
        if (wrap) {
          const span = Math.max(1, wrap.offsetHeight - vh);
          const p = clamp((y - wrap.offsetTop) / span, 0, 1);
  
          if (this._video && this._vDur) {
            const target = p * (this._vDur - 0.05);
            this._vTarget = target;
            const delta = target - this._vTime;
            this._vTime += reduce ? delta : (Math.abs(delta) < 0.02 ? delta : delta * 0.16);
            if (Math.abs(this._vTime - this._video.currentTime) > 0.015 && !this._video.seeking) {
              this._video.currentTime = this._vTime;
            }
          }
          if (scrub) {
            const out = seg(p, 0.52, 0.94);
            scrub.style.opacity = (1 - out).toFixed(3);
            scrub.style.transform = 'translate3d(0,' + (-out * 90).toFixed(1) + 'px,0) scale(' + (1 - out * 0.05).toFixed(4) + ')';
            scrub.style.filter = out > 0.02 ? 'blur(' + (out * 9).toFixed(1) + 'px)' : 'none';
          }
          if (claim) {
            const inn = seg(p, 0.88, 0.99);
            claim.style.opacity = inn.toFixed(3);
            claim.style.transform = 'translate3d(0,' + ((1 - inn) * 34).toFixed(1) + 'px,0)';
          }
          if (veil) veil.style.opacity = (1 - seg(p, 0.1, 0.62) * 0.42).toFixed(3);
          if (heroBar) heroBar.style.width = (p * 100).toFixed(1) + '%';
          if (label) label.textContent = p > 0.9 ? 'Suite' : p > 0.06 ? Math.round(p * 100) + ' %' : 'Défilez';
        }
        vel += ((y - last) - vel) * 0.25;
        last = y;
  
        if (!reduce) {
          px.forEach(({ el, speed }) => {
            const r = el.getBoundingClientRect();
            if (r.bottom < -220 || r.top > vh + 220) return;
            const progress = (r.top + r.height / 2 - vh / 2) / vh;
            el.style.transform = 'translate3d(0,' + (progress * speed * 11).toFixed(2) + 'px,0)';
          });
          if (marquee) {
            const skew = Math.max(-2.2, Math.min(2.2, vel * 0.055));
            marquee.style.transform = 'skewX(' + skew.toFixed(2) + 'deg)';
          }
        }
  
        counters.forEach(c => {
          const r = c.el.getBoundingClientRect();
          if (r.bottom < -80 || r.top > vh + 80) return;
          const p = Math.max(0, Math.min(1, (vh * 0.92 - r.top) / (vh * 0.44)));
          const val = Math.round(c.target * (1 - Math.pow(1 - p, 3)));
          if (val !== c.shown) {
            c.shown = val;
            c.el.textContent = c.pre + val + c.suf;
          }
        });
  
        if (bar) {
          const max = document.documentElement.scrollHeight - vh;
          bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0).toFixed(1) + '%';
        }
        if (pill) {
          const on = y > 60;
          pill.style.height = on ? '58px' : '66px';
          pill.style.background = on ? 'rgba(22,23,26,.74)' : 'rgba(30,31,34,.5)';
          pill.style.boxShadow = on
            ? '0 22px 52px rgba(0,0,0,.46),inset 0 1px 0 rgba(255,255,255,.07)'
            : '0 18px 44px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.08)';
        }
        if (header) header.style.top = y > 60 ? '12px' : '18px';
      };
      const pump = () => {
        if (!this._alive) return;
        frame();
        const settling = this._video && this._vDur
          && Math.abs((this._vTarget ?? 0) - (this._vTime ?? 0)) > 0.01;
        if (settling || queued) this._scrubRaf = requestAnimationFrame(pump);
        else this._pumping = false;
      };
      this._onScroll = () => {
        queued = true;
        if (!this._pumping) { this._pumping = true; this._scrubRaf = requestAnimationFrame(pump); }
      };
      window.addEventListener('scroll', this._onScroll, { passive: true });
      frame();
    }
  
    _counters() {
      const nodes = [...document.querySelectorAll('[data-count]')];
      if (!nodes.length || !('IntersectionObserver' in window)) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          io.unobserve(el);
          const target = parseFloat(el.dataset.count);
          const pre = el.dataset.prefix || '';
          const suf = el.dataset.suffix || '';
          const t0 = performance.now();
          const dur = 1100;
          const step = now => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = pre + Math.round(target * eased) + suf;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      }, { threshold: 0.5 });
      nodes.forEach(n => io.observe(n));
    }
  
    async _blob() {
      const canvas = await this._waitFor(() => document.getElementById('is-blob'));
      if (!canvas || !this._alive) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let THREE;
      try {
        THREE = await import('three');
      } catch (err) {
        console.warn('three.js indisponible — hero sans animation 3D', err);
        return;
      }
      if (!this._alive) return;

      try {
      const accent = new THREE.Color(this.props.accentColor ?? '#3845e1');
      const amp = (this.props.animIntensity ?? 3) / 3;
      const detail = Math.min(window.innerWidth, 1400) < 700 ? 14 : 22;
  
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0, 4.4);
  
      const group = new THREE.Group();
      group.position.x = 1.25;
      scene.add(group);
  
      const geo = new THREE.IcosahedronGeometry(1.45, detail);
      const base = geo.attributes.position.array.slice();
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#0d1016'), metalness: 0.35, roughness: 0.42, flatShading: true
      });
      const mesh = new THREE.Mesh(geo, mat);
      group.add(mesh);
  
      const wire = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color: accent, wireframe: true, transparent: true, opacity: 0.16
      }));
      wire.scale.setScalar(1.004);
      group.add(wire);
  
      const halo = new THREE.Points(geo, new THREE.PointsMaterial({
        color: accent, size: 0.018, transparent: true, opacity: 0.55
      }));
      halo.scale.setScalar(1.02);
      group.add(halo);
  
      scene.add(new THREE.AmbientLight(0xffffff, 0.35));
      const key = new THREE.DirectionalLight(accent, 3.1);
      key.position.set(-2.4, 1.8, 2.6);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xffffff, 1.5);
      rim.position.set(2.8, -1.4, 1.4);
      scene.add(rim);
  
      const size = () => {
        const w = canvas.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        group.position.x = w < 900 ? 0 : 1.25;
        group.scale.setScalar(w < 900 ? 0.72 : 1);
        camera.updateProjectionMatrix();
      };
      size();
      this._onResize = size;
      window.addEventListener('resize', size);
  
      let mx = 0, my = 0, tx = 0, ty = 0;
      this._onMove = e => { tx = (e.clientX / window.innerWidth - 0.5); ty = (e.clientY / window.innerHeight - 0.5); };
      window.addEventListener('pointermove', this._onMove);
  
      const pos = geo.attributes.position;
      const noise = (x, y, z, t) =>
        Math.sin(x * 1.7 + t) * 0.5 +
        Math.sin(y * 2.3 - t * 0.8) * 0.34 +
        Math.sin(z * 1.9 + t * 1.35) * 0.3 +
        Math.sin((x + y + z) * 2.9 + t * 0.55) * 0.2;
  
      let frame = 0;
      const t0 = performance.now();
      const loop = () => {
        if (!this._alive) return;
        this._raf = requestAnimationFrame(loop);
        try {
          const t = (performance.now() - t0) / 1000;
          for (let i = 0; i < pos.count; i++) {
            const j = i * 3;
            const bx = base[j], by = base[j + 1], bz = base[j + 2];
            const k = 1 + noise(bx, by, bz, t * 0.42) * 0.085 * amp;
            pos.array[j] = bx * k;
            pos.array[j + 1] = by * k;
            pos.array[j + 2] = bz * k;
          }
          pos.needsUpdate = true;
          if (frame++ % 2 === 0) geo.computeVertexNormals();
          mx += (tx - mx) * 0.045;
          my += (ty - my) * 0.045;
          group.rotation.y = t * 0.14 + mx * 0.55;
          group.rotation.x = Math.sin(t * 0.21) * 0.12 - my * 0.4;
          renderer.render(scene, camera);
        } catch (err) {
          if (this._raf) cancelAnimationFrame(this._raf);
          console.warn('three.js — animation du hero interrompue (échec de rendu WebGL)', err);
        }
      };
      loop();
      } catch (err) {
        console.warn('three.js — hero sans animation 3D (échec de rendu WebGL)', err);
      }
    }
  
    renderVals() { return {}; }
  }

  const fx = new SiteFX();
  fx.componentDidMount();
  return () => fx.componentWillUnmount();
}
