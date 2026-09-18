import EffectsClient from './EffectsClient'
import ChatWidget from './ChatWidget'

export default function Home() {
  return (
    <>
      <div>

        <a data-skip="" href="#approche">Aller au contenu</a>

        <div data-cursor="" aria-hidden="true" style={{ "position": "fixed", "top": "0", "left": "0", "zIndex": "90", "width": "34px", "height": "34px", "margin": "-17px 0 0 -17px", "border": "1.5px solid rgba(143,155,255,.7)", "borderRadius": "50%", "pointerEvents": "none", "opacity": "0", "transition": "width .3s cubic-bezier(.16,1,.3,1),height .3s cubic-bezier(.16,1,.3,1),margin .3s cubic-bezier(.16,1,.3,1),background-color .3s,border-color .3s,opacity .3s", "willChange": "transform" }}>
          <span data-cursor-glow="" style={{ "position": "absolute", "inset": "-5px", "borderRadius": "50%", "background": "conic-gradient(from 0deg,transparent 0deg,transparent 260deg,rgba(143,155,255,.5) 320deg,#ffffff 350deg,rgba(143,155,255,.5) 360deg)", "WebkitMask": "radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2.4px))", "mask": "radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2.4px))", "animation": "is-spin 2.6s linear infinite", "opacity": ".85", "transition": "opacity .3s,filter .3s", "filter": "blur(.3px)" }}></span>
        </div>
        <div data-cursor-dot="" aria-hidden="true" style={{ "position": "fixed", "top": "0", "left": "0", "zIndex": "91", "width": "4px", "height": "4px", "margin": "-2px 0 0 -2px", "background": "#fff", "borderRadius": "50%", "pointerEvents": "none", "opacity": "0", "transition": "opacity .3s", "willChange": "transform" }}></div>

        <header data-header="" style={{ "position": "fixed", "top": "18px", "left": "0", "right": "0", "zIndex": "60", "padding": "0 28px", "transition": "top .4s cubic-bezier(.16,1,.3,1)" }}>
          <div data-header-pill="" style={{ "position": "relative", "maxWidth": "1240px", "margin": "0 auto", "height": "66px", "borderRadius": "999px", "background": "rgba(30,31,34,.5)", "backdropFilter": "blur(26px) saturate(170%)", "WebkitBackdropFilter": "blur(26px) saturate(170%)", "border": "1px solid rgba(244,244,245,.12)", "boxShadow": "0 18px 44px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.08)", "padding": "0 10px 0 24px", "display": "flex", "alignItems": "center", "gap": "28px", "overflow": "hidden", "transition": "background .4s,box-shadow .4s,height .4s cubic-bezier(.16,1,.3,1)" }}>
            <span data-progress="" style={{ "position": "absolute", "left": "0", "bottom": "0", "height": "2px", "width": "0%", "background": "#3845e1", "transition": "width .12s linear" }}></span>
            <a href="#top" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "color": "#fff", "marginRight": "auto" }}>
              <span style={{ "display": "flex", "alignItems": "center", "gap": "11px", "color": "#fff", "background": "linear-gradient(115deg,#ffffff 0%,#ffffff 34%,#ffffff 46%,#8f9bff 51%,#ffffff 58%,#ffffff 100%)", "backgroundSize": "320% 100%", "backgroundPosition": "100% 0", "WebkitBackgroundClip": "text", "backgroundClip": "text", "transition": "background-position .9s cubic-bezier(.16,1,.3,1)" }} className="x1"><svg viewBox="0 0 24 21" style={{ "width": "15px", "height": "13.125px", "flex": "none", "display": "block" }}><path d="M12 0 24 21H0Z" fill="#3845e1" /></svg><span style={{ "fontWeight": "800", "fontSize": "15px", "letterSpacing": ".06em", "textTransform": "uppercase", "whiteSpace": "nowrap", "WebkitTextFillColor": "transparent" }}>Indiana <span style={{ "fontWeight": "300", "letterSpacing": ".1em" }}>Studio</span></span></span>
            </a>
            <button data-burger="" type="button" aria-label="Ouvrir le menu" aria-expanded="false" style={{ "display": "none", "width": "42px", "height": "42px", "flex": "none", "border": "1px solid rgba(244,244,245,.18)", "borderRadius": "999px", "background": "rgba(244,244,245,.05)", "color": "#f4f4f5", "cursor": "pointer", "padding": "0", "placeItems": "center", "transition": "background .3s,border-color .3s" }} className="x2">
              <span style={{ "display": "flex", "flexDirection": "column", "gap": "4px", "alignItems": "center" }}><span data-burger-l1="" style={{ "width": "16px", "height": "1.5px", "background": "currentColor", "display": "block", "transition": "transform .35s cubic-bezier(.16,1,.3,1)" }}></span><span data-burger-l2="" style={{ "width": "16px", "height": "1.5px", "background": "currentColor", "display": "block", "transition": "transform .35s cubic-bezier(.16,1,.3,1),opacity .2s" }}></span><span data-burger-l3="" style={{ "width": "16px", "height": "1.5px", "background": "currentColor", "display": "block", "transition": "transform .35s cubic-bezier(.16,1,.3,1)" }}></span></span>
            </button>
            <nav data-nav="" style={{ "display": "flex", "gap": "26px", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".07em", "textTransform": "uppercase" }}>
              <a href="#approche" style={{ "color": "rgba(244,244,245,.62)" }} className="x3">Approche</a>
              <a href="#projets" style={{ "color": "rgba(244,244,245,.62)" }} className="x4">Projets</a>
              <a href="#expertise" style={{ "color": "rgba(244,244,245,.62)" }} className="x5">Expertise</a>
              <a href="#offres" style={{ "color": "rgba(244,244,245,.62)" }} className="x6">Offres</a>
              <a href="#studio" style={{ "color": "rgba(244,244,245,.62)" }} className="x7">Studio</a>
            </nav>
            <a href="#contact" style={{ "backgroundColor": "#3845e1", "backgroundImage": "linear-gradient(112deg,rgba(255,255,255,0) 34%,rgba(255,255,255,.42) 47%,rgba(255,255,255,.62) 50%,rgba(255,255,255,.42) 53%,rgba(255,255,255,0) 66%)", "backgroundSize": "260% 100%", "backgroundRepeat": "no-repeat", "backgroundPosition": "135% 0", "boxShadow": "inset 0 1px 0 rgba(255,255,255,.22),inset 0 -1px 0 rgba(0,0,0,.14)", "transition": "background-position .8s cubic-bezier(.16,1,.3,1),background-color .3s,box-shadow .3s", "color": "#fff", "fontWeight": "800", "fontSize": "12px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "0 20px", "height": "42px", "borderRadius": "999px", "whiteSpace": "nowrap", "flex": "none", "display": "inline-flex", "alignItems": "center", "gap": "8px" }} className="x8">Démarrer <span>→</span></a>
          </div>
          <div data-sheet="" style={{ "maxWidth": "1240px", "margin": "10px auto 0", "borderRadius": "26px", "background": "rgba(22,23,26,.9)", "backdropFilter": "blur(26px) saturate(170%)", "WebkitBackdropFilter": "blur(26px) saturate(170%)", "border": "1px solid rgba(244,244,245,.12)", "boxShadow": "0 26px 60px rgba(0,0,0,.44)", "padding": "14px", "display": "none", "flexDirection": "column", "gap": "2px", "opacity": "0", "transform": "translateY(-10px)", "transition": "opacity .35s cubic-bezier(.16,1,.3,1),transform .35s cubic-bezier(.16,1,.3,1)" }}>
            <a href="#approche" data-sheet-link="" style={{ "color": "#f4f4f5", "fontWeight": "800", "fontSize": "15px", "letterSpacing": ".04em", "textTransform": "uppercase", "padding": "13px 16px", "borderRadius": "16px", "transition": "background .25s" }} className="x9">Approche</a>
            <a href="#projets" data-sheet-link="" style={{ "color": "#f4f4f5", "fontWeight": "800", "fontSize": "15px", "letterSpacing": ".04em", "textTransform": "uppercase", "padding": "13px 16px", "borderRadius": "16px", "transition": "background .25s" }} className="x10">Projets</a>
            <a href="#expertise" data-sheet-link="" style={{ "color": "#f4f4f5", "fontWeight": "800", "fontSize": "15px", "letterSpacing": ".04em", "textTransform": "uppercase", "padding": "13px 16px", "borderRadius": "16px", "transition": "background .25s" }} className="x11">Expertise</a>
            <a href="#offres" data-sheet-link="" style={{ "color": "#f4f4f5", "fontWeight": "800", "fontSize": "15px", "letterSpacing": ".04em", "textTransform": "uppercase", "padding": "13px 16px", "borderRadius": "16px", "transition": "background .25s" }} className="x12">Offres</a>
            <a href="#studio" data-sheet-link="" style={{ "color": "#f4f4f5", "fontWeight": "800", "fontSize": "15px", "letterSpacing": ".04em", "textTransform": "uppercase", "padding": "13px 16px", "borderRadius": "16px", "transition": "background .25s" }} className="x13">Studio</a>
            <a href="#contact" data-sheet-link="" style={{ "marginTop": "6px", "background": "#3845e1", "color": "#fff", "fontWeight": "800", "fontSize": "14px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "15px 16px", "borderRadius": "16px", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "transition": "background .25s" }} className="x14">Démarrer un projet <span>→</span></a>
          </div>
        </header>

        <section id="top" data-hero-wrap="" style={{ "position": "relative", "zIndex": "1", "height": "300vh", "background": "radial-gradient(95% 72% at 50% 34%,#4a4b51 0%,#36373b 64%)" }}>
          <div data-hero-pin="" style={{ "position": "sticky", "top": "0", "height": "100vh", "minHeight": "560px", "overflow": "hidden", "display": "flex", "alignItems": "flex-start", "padding": "104px 0 84px", "boxSizing": "border-box" }}>
          <video data-hero-video="" muted playsInline preload="none" aria-hidden="true" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "zIndex": "0", "willChange": "transform" }}></video>
          <div data-hero-veil="" style={{ "position": "absolute", "inset": "0", "zIndex": "1", "background": "linear-gradient(90deg,rgba(24,25,27,.96) 0%,rgba(24,25,27,.88) 46%,rgba(24,25,27,.62) 74%,rgba(24,25,27,.52) 100%),linear-gradient(180deg,rgba(24,25,27,.72) 0%,rgba(24,25,27,.3) 24%,rgba(24,25,27,.3) 58%,#2b2c2e 100%)", "pointerEvents": "none" }}></div>
          <div data-hero-claim="" style={{ "position": "absolute", "inset": "0", "zIndex": "3", "display": "flex", "alignItems": "center", "justifyContent": "flex-start", "opacity": "0", "pointerEvents": "none", "willChange": "opacity,transform" }}>
            <div style={{ "width": "100%", "maxWidth": "1320px", "margin": "0 auto", "padding": "0 28px", "boxSizing": "border-box" }}>
            <p aria-hidden="true" style={{ "margin": "0", "fontSize": "clamp(26px,4.1vw,60px)", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-.03em", "color": "#f4f4f5", "textAlign": "left", "textWrap": "balance" }}>Design <span style={{ "color": "#3845e1" }}>×</span> Code <span style={{ "color": "#3845e1" }}>×</span> IA</p>
            <div style={{ "display": "flex", "justifyContent": "flex-start", "marginTop": "28px" }}>
              <a href="#offres" style={{ "pointerEvents": "auto", "border": "1px solid rgba(244,244,245,.28)", "color": "#f4f4f5", "fontWeight": "800", "fontSize": "13px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "16px 30px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "10px", "backgroundColor": "rgba(244,244,245,.04)", "backdropFilter": "blur(6px)" }}>Offres ThunderBird <span>→</span></a>
            </div>
            </div>
          </div>
          <div data-hero-scrub="" style={{ "position": "relative", "zIndex": "2", "maxWidth": "1320px", "margin": "auto", "padding": "0 28px", "width": "100%", "boxSizing": "border-box", "willChange": "transform,opacity" }}>
            <div data-reveal="" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(244,244,245,.72)", "marginBottom": "26px" }}>
              <svg viewBox="0 0 24 21" style={{ "width": "9px", "height": "8px", "flex": "none", "color": "#fff", "animation": "is-blink 2.4s infinite" }}><path d="M12 0 24 21H0Z" fill="currentColor"></path></svg>
              Product Builder · Paris
            </div>
            <h1 data-reveal="" data-reveal-lines="" style={{ "fontSize": "clamp(34px,4.9vw,72px)", "fontWeight": "800", "lineHeight": ".98", "letterSpacing": "-.035em", "margin": "0", "maxWidth": "22ch" }}>
              L'innovation donne des ailes à ceux qui <span style={{ "color": "#3845e1" }}>osent avancer</span>.
            </h1>
            <p data-reveal="" style={{ "fontSize": "clamp(16px,1.5vw,22px)", "fontWeight": "600", "lineHeight": "1.25", "letterSpacing": "-.015em", "color": "#f4f4f5", "margin": "20px 0 0", "maxWidth": "48ch" }}>
              Je conçois, développe et déploie des produits digitaux de bout en bout.
            </p>
            <p data-reveal="" style={{ "maxWidth": "56ch", "color": "rgba(244,244,245,.72)", "fontSize": "clamp(14.5px,1.2vw,17px)", "margin": "22px 0 0" }}>
              Design, développement et IA réunis sous une même direction : vous parlez à celui qui imagine, code et met en ligne, sans aucune friction.
            </p>
            <div data-reveal="" style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px", "marginTop": "30px" }}>
              <a href="#contact" style={{ "backgroundColor": "#3845e1", "backgroundImage": "linear-gradient(112deg,rgba(255,255,255,0) 34%,rgba(255,255,255,.42) 47%,rgba(255,255,255,.62) 50%,rgba(255,255,255,.42) 53%,rgba(255,255,255,0) 66%)", "backgroundSize": "260% 100%", "backgroundRepeat": "no-repeat", "backgroundPosition": "135% 0", "boxShadow": "inset 0 1px 0 rgba(255,255,255,.22),inset 0 -1px 0 rgba(0,0,0,.14)", "transition": "background-position .8s cubic-bezier(.16,1,.3,1),background-color .3s,box-shadow .3s", "color": "#fff", "fontWeight": "800", "fontSize": "13px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "16px 30px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "10px" }} className="x15">Démarrer un projet <span>→</span></a>
              <a href="#projets" style={{ "border": "1px solid rgba(244,244,245,.28)", "color": "#f4f4f5", "fontWeight": "800", "fontSize": "13px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "16px 30px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "10px", "backgroundColor": "rgba(244,244,245,.04)", "backgroundImage": "linear-gradient(112deg,rgba(255,255,255,0) 34%,rgba(255,255,255,.42) 47%,rgba(255,255,255,.62) 50%,rgba(255,255,255,.42) 53%,rgba(255,255,255,0) 66%)", "backgroundSize": "260% 100%", "backgroundRepeat": "no-repeat", "backgroundPosition": "135% 0", "backdropFilter": "blur(6px)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,.1)", "transition": "background-position .8s cubic-bezier(.16,1,.3,1),border-color .3s,background-color .3s" }} className="x16">Voir mes réalisations</a>
            </div>
          <div data-hero-cue="" style={{ "position": "absolute", "right": "28px", "bottom": "30px", "zIndex": "3", "display": "flex", "alignItems": "center", "gap": "12px", "fontSize": "10px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(244,244,245,.5)" }}>
            <span style={{ "position": "relative", "width": "96px", "height": "2px", "background": "rgba(244,244,245,.2)", "display": "block" }}><span data-hero-bar="" style={{ "position": "absolute", "inset": "0", "width": "0%", "background": "#3845e1", "display": "block" }}></span></span>
            <span data-hero-label="">Défilez</span>
          </div>
          </div>
          </div>
        </section>

        <section aria-labelledby="metiers-title" style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "0 28px", "boxSizing": "border-box" }}>
          <h2 id="metiers-title" style={{ "position": "absolute", "width": "1px", "height": "1px", "margin": "-1px", "padding": "0", "overflow": "hidden", "clip": "rect(0 0 0 0)", "whiteSpace": "nowrap", "border": "0" }}>Mes métiers</h2>
      <div data-reveal="" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(150px,1fr))", "gap": "1px", "marginTop": "0", "background": "rgba(244,244,245,.14)", "borderTop": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}>
              <div style={{ "background": "#2b2c2e", "padding": "26px 22px" }}><p style={{ "margin": "0", "fontSize": "22px", "fontWeight": "800", "letterSpacing": "-.02em", "lineHeight": "1", "color": "#3845e1" }}>01</p><h3 style={{ "margin": "6px 0 0", "fontWeight": "800", "fontSize": "15px", "letterSpacing": "0", "lineHeight": "1.2" }}>Design produit</h3><p style={{ "margin": "3px 0 0", "fontSize": "12.5px", "color": "rgba(244,244,245,.5)" }}>UX, UI, systèmes</p></div>
              <div style={{ "background": "#2b2c2e", "padding": "26px 22px" }}><p style={{ "margin": "0", "fontSize": "22px", "fontWeight": "800", "letterSpacing": "-.02em", "lineHeight": "1", "color": "#3845e1" }}>02</p><h3 style={{ "margin": "6px 0 0", "fontWeight": "800", "fontSize": "15px", "letterSpacing": "0", "lineHeight": "1.2" }}>Développement</h3><p style={{ "margin": "3px 0 0", "fontSize": "12.5px", "color": "rgba(244,244,245,.5)" }}>Next.js full-stack</p></div>
              <div style={{ "background": "#2b2c2e", "padding": "26px 22px" }}><p style={{ "margin": "0", "fontSize": "22px", "fontWeight": "800", "letterSpacing": "-.02em", "lineHeight": "1", "color": "#3845e1" }}>03</p><h3 style={{ "margin": "6px 0 0", "fontWeight": "800", "fontSize": "15px", "letterSpacing": "0", "lineHeight": "1.2" }}>Agents IA</h3><p style={{ "margin": "3px 0 0", "fontSize": "12.5px", "color": "rgba(244,244,245,.5)" }}>LLM, RAG, orchestration</p></div>
              <div style={{ "background": "#2b2c2e", "padding": "26px 22px" }}><p style={{ "margin": "0", "fontSize": "22px", "fontWeight": "800", "letterSpacing": "-.02em", "lineHeight": "1", "color": "#3845e1" }}>04</p><h3 style={{ "margin": "6px 0 0", "fontWeight": "800", "fontSize": "15px", "letterSpacing": "0", "lineHeight": "1.2" }}>Mise en production</h3><p style={{ "margin": "3px 0 0", "fontSize": "12.5px", "color": "rgba(244,244,245,.5)" }}>Vercel, Supabase, Stripe</p></div>
            </div>
        </section>

        <section id="approche" style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "110px 28px 0", "boxSizing": "border-box" }}>
          <div data-reveal="" style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "marginBottom": "30px" }}>
            <span style={{ "color": "#3845e1" }}>01 / 05</span><span style={{ "color": "rgba(244,244,245,.45)" }}>L'approche</span>
          </div>
          <h2 data-reveal="" data-reveal-lines="" style={{ "fontSize": "clamp(30px,3.9vw,54px)", "fontWeight": "800", "lineHeight": "1.02", "letterSpacing": "-.03em", "margin": "0", "maxWidth": "24ch" }}>
            Un seul interlocuteur, de la première maquette au <span style={{ "color": "#3845e1" }}>déploiement</span>.
          </h2>
          <p data-reveal="" style={{ "maxWidth": "60ch", "color": "rgba(244,244,245,.62)", "margin": "24px 0 0", "fontSize": "16px" }}>
            Trois métiers réunis au lieu de se relayer. C'est ce qui raccourcit les cycles : pas de cahier des charges à traduire, pas d'allers-retours entre design et développement.
          </p>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(270px,1fr))", "gap": "1px", "marginTop": "56px", "borderTop": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}>
            <div data-reveal="" data-reveal-x="" style={{ "background": "#2b2c2e", "boxShadow": "0 0 0 1px rgba(244,244,245,.14)", "padding": "36px 30px 40px", "transition": "background .3s" }} className="x17">
              <p style={{ "margin": "0", "fontSize": "14px", "fontWeight": "800", "letterSpacing": ".12em", "color": "#3845e1" }}>01 — Design</p>
              <h3 style={{ "margin": "16px 0 0", "fontSize": "24px", "fontWeight": "800", "letterSpacing": "-.02em", "lineHeight": "1.1" }}>Des interfaces qu'on comprend sans notice</h3>
              <p style={{ "margin": "14px 0 0", "color": "rgba(244,244,245,.58)", "fontSize": "14.5px" }}>Parcours, wireframes, design system. Dix-huit ans de Product Design, dont l'UX de plateformes e-learning et d'applications métier multi-rôles.</p>
              <ul style={{ "margin": "20px 0 0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "9px", "fontSize": "13.5px", "color": "rgba(244,244,245,.72)" }}>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Recherche et parcours utilisateurs</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Design system et composants</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Prototypes cliquables avant la ligne de code</li>
              </ul>
            </div>
            <div data-reveal="" data-reveal-x="" style={{ "background": "#2b2c2e", "boxShadow": "0 0 0 1px rgba(244,244,245,.14)", "padding": "36px 30px 40px", "transition": "background .3s" }} className="x18">
              <p style={{ "margin": "0", "fontSize": "14px", "fontWeight": "800", "letterSpacing": ".12em", "color": "#3845e1" }}>02 — Code</p>
              <h3 style={{ "margin": "16px 0 0", "fontSize": "24px", "fontWeight": "800", "letterSpacing": "-.02em", "lineHeight": "1.1" }}>Un produit sur mesure, du front au déploiement</h3>
              <p style={{ "margin": "14px 0 0", "color": "rgba(244,244,245,.58)", "fontSize": "14.5px" }}>Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase. Architecture, API, authentification, intégrations tierces, mise en production.</p>
              <ul style={{ "margin": "20px 0 0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "9px", "fontSize": "13.5px", "color": "rgba(244,244,245,.72)" }}>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Plateformes métier et SaaS</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Paiements, géolocalisation, APIs tierces</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Conception et déploiement de produits digitaux</li>
              </ul>
            </div>
            <div data-reveal="" data-reveal-x="" style={{ "background": "#2b2c2e", "boxShadow": "0 0 0 1px rgba(244,244,245,.14)", "padding": "36px 30px 40px", "transition": "background .3s" }} className="x19">
              <p style={{ "margin": "0", "fontSize": "14px", "fontWeight": "800", "letterSpacing": ".12em", "color": "#3845e1" }}>03 — IA</p>
              <h3 style={{ "margin": "16px 0 0", "fontSize": "24px", "fontWeight": "800", "letterSpacing": "-.02em", "lineHeight": "1.1" }}>Des agents qui travaillent quand vous dormez</h3>
              <p style={{ "margin": "14px 0 0", "color": "rgba(244,244,245,.58)", "fontSize": "14.5px" }}>API Claude, prompts structurés, RAG, function calling. J'intègre les agents au produit et à ses données, pas un chatbot posé à côté.</p>
              <ul style={{ "margin": "20px 0 0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "9px", "fontSize": "13.5px", "color": "rgba(244,244,245,.72)" }}>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Orchestration multi-agents</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>RAG sur vos données métier</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Jusqu'à −30 % sur les délais de production</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "90px 28px 0", "boxSizing": "border-box" }}>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(160px,1fr))", "border": "1px solid rgba(244,244,245,.14)", "borderRight": "0", "borderBottom": "0" }}>
            <div data-reveal="" style={{ "background": "#2b2c2e", "padding": "32px 24px", "borderRight": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}><p data-count="18" style={{ "margin": "0", "fontSize": "clamp(38px,4.4vw,58px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".9", "color": "#3845e1" }}>18</p><p style={{ "margin": "10px 0 0", "fontSize": "12px", "fontWeight": "700", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(244,244,245,.55)" }}>ans d'expérience</p></div>
            <div data-reveal="" style={{ "background": "#2b2c2e", "padding": "32px 24px", "borderRight": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}><p data-count="60" data-suffix="+" style={{ "margin": "0", "fontSize": "clamp(38px,4.4vw,58px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".9", "color": "#3845e1" }}>60+</p><p style={{ "margin": "10px 0 0", "fontSize": "12px", "fontWeight": "700", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(244,244,245,.55)" }}>clients accompagnés</p></div>
            <div data-reveal="" style={{ "background": "#2b2c2e", "padding": "32px 24px", "borderRight": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}><p data-count="15" data-suffix="+" style={{ "margin": "0", "fontSize": "clamp(38px,4.4vw,58px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".9", "color": "#3845e1" }}>15+</p><p style={{ "margin": "10px 0 0", "fontSize": "12px", "fontWeight": "700", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(244,244,245,.55)" }}>produits SaaS livrés</p></div>
            <div data-reveal="" style={{ "background": "#2b2c2e", "padding": "32px 24px", "borderRight": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}><p data-count="60" data-suffix="K" style={{ "margin": "0", "fontSize": "clamp(38px,4.4vw,58px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".9", "color": "#3845e1" }}>60K</p><p style={{ "margin": "10px 0 0", "fontSize": "12px", "fontWeight": "700", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(244,244,245,.55)" }}>produits gérés</p></div>
            <div data-reveal="" style={{ "background": "#2b2c2e", "padding": "32px 24px", "borderRight": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}><p data-count="30" data-prefix="−" data-suffix=" %" style={{ "margin": "0", "fontSize": "clamp(38px,4.4vw,58px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".9", "color": "#3845e1" }}>−30 %</p><p style={{ "margin": "10px 0 0", "fontSize": "12px", "fontWeight": "700", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(244,244,245,.55)" }}>de délais avec l'IA</p></div>
          </div>
        </section>

        <section id="projets" style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "110px 28px 0", "boxSizing": "border-box" }}>
          <div data-reveal="" style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "marginBottom": "30px" }}>
            <span style={{ "color": "#3845e1" }}>02 / 05</span><span style={{ "color": "rgba(244,244,245,.45)" }}>Projets</span>
          </div>
          <h2 data-reveal="" data-reveal-lines="" style={{ "fontSize": "clamp(30px,3.9vw,54px)", "fontWeight": "800", "lineHeight": "1.02", "letterSpacing": "-.03em", "margin": "0", "maxWidth": "22ch" }}>
            3 exemples de plateformes <span style={{ "color": "#3845e1" }}>en production</span>, conçues et codées de zéro.
          </h2>
          <div style={{ "marginTop": "56px", "borderTop": "1px solid rgba(244,244,245,.14)" }}>
            <article data-reveal="" data-reveal-x="" data-project="" style={{ "display": "grid", "gridTemplateColumns": "minmax(0,118px) minmax(0,1fr) minmax(0,1.2fr)", "gap": "28px", "alignItems": "start", "padding": "38px 8px", "borderBottom": "1px solid rgba(244,244,245,.14)", "transition": "background .3s,padding .3s" }} className="x20">
              <p style={{ "margin": "0", "fontSize": "clamp(40px,4.4vw,60px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".85", "color": "rgba(244,244,245,.3)" }}>01</p>
              <div>
                <h3 style={{ "margin": "0", "fontSize": "clamp(20px,2vw,28px)", "fontWeight": "800", "letterSpacing": "-.025em", "lineHeight": "1.1" }}>Plateforme P2P de services à la demande</h3>
                <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "marginTop": "16px" }}>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>Next.js</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>Supabase</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>Stripe</span>
                </div>
              </div>
              <p style={{ "margin": "0", "color": "rgba(244,244,245,.62)", "fontSize": "15px" }}>Réservation, géolocalisation, suivi des prestations, paiements sécurisés en escrow et espace client. Deux faces de marché à équilibrer dans une seule interface.</p>
            </article>
            <article data-reveal="" data-reveal-x="" data-project="" style={{ "display": "grid", "gridTemplateColumns": "minmax(0,118px) minmax(0,1fr) minmax(0,1.2fr)", "gap": "28px", "alignItems": "start", "padding": "38px 8px", "borderBottom": "1px solid rgba(244,244,245,.14)", "transition": "background .3s" }} className="x21">
              <p style={{ "margin": "0", "fontSize": "clamp(40px,4.4vw,60px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".85", "color": "rgba(244,244,245,.3)" }}>02</p>
              <div>
                <h3 style={{ "margin": "0", "fontSize": "clamp(20px,2vw,28px)", "fontWeight": "800", "letterSpacing": "-.025em", "lineHeight": "1.1" }}>Plateforme métier multi-rôles · Secteur social</h3>
                <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "marginTop": "16px" }}>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>React</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>Node.js</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>PostgreSQL</span>
                </div>
              </div>
              <p style={{ "margin": "0", "color": "rgba(244,244,245,.62)", "fontSize": "15px" }}>Application métier multi-rôles : dossiers familles, tableaux de bord, base relationnelle. Des droits d'accès fins sur des données sensibles, sans alourdir le quotidien des équipes.</p>
            </article>
            <article data-reveal="" data-reveal-x="" data-project="" style={{ "display": "grid", "gridTemplateColumns": "minmax(0,118px) minmax(0,1fr) minmax(0,1.2fr)", "gap": "28px", "alignItems": "start", "padding": "38px 8px", "borderBottom": "1px solid rgba(244,244,245,.14)", "transition": "background .3s" }} className="x22">
              <p style={{ "margin": "0", "fontSize": "clamp(40px,4.4vw,60px)", "fontWeight": "800", "letterSpacing": "-.04em", "lineHeight": ".85", "color": "#3845e1" }}>03</p>
              <div>
                <h3 style={{ "margin": "0", "fontSize": "clamp(20px,2vw,28px)", "fontWeight": "800", "letterSpacing": "-.025em", "lineHeight": "1.1" }}>CRM de 8 agents IA</h3>
                <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "marginTop": "16px" }}>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>Next.js</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.25)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "rgba(244,244,245,.75)" }}>PostgreSQL</span>
                  <span style={{ "background": "#3845e1", "border": "1px solid #3845e1", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "5px 11px", "borderRadius": "999px", "color": "#fff" }}>API Claude</span>
                </div>
              </div>
              <p style={{ "margin": "0", "color": "rgba(244,244,245,.62)", "fontSize": "15px" }}>Qualification et enrichissement automatiques des fiches clients, réponses assistées par IA. Huit agents spécialisés orchestrés autour d'une même base, chacun avec son périmètre.</p>
            </article>
          </div>
        </section>

        <section id="expertise" style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "110px 28px 0", "boxSizing": "border-box" }}>
          <div data-reveal="" style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "marginBottom": "30px" }}>
            <span style={{ "color": "#3845e1" }}>03 / 05</span><span style={{ "color": "rgba(244,244,245,.45)" }}>Expertise</span>
          </div>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "56px" }}>
            <div>
              <h2 data-reveal="" style={{ "fontSize": "clamp(30px,3.9vw,50px)", "fontWeight": "800", "lineHeight": "1.02", "letterSpacing": "-.03em", "margin": "0", "maxWidth": "18ch" }}>Une stack choisie pour <span style={{ "color": "#3845e1" }}>durer</span>, pas pour briller.</h2>
              <p data-reveal="" style={{ "color": "rgba(244,244,245,.62)", "margin": "24px 0 0", "fontSize": "16px", "maxWidth": "52ch" }}>Les mêmes technologies utilisées et éprouvées en production depuis plusieurs années. Ce qui évolue vite, modèles, agents, IA, vient se brancher dessus sans qu'il soit nécessaire de tout réécrire.</p>
            </div>
            <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "28px" }}>
              <div>
                <h3 style={{ "margin": "0 0 12px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "#3845e1", "borderBottom": "1px solid rgba(244,244,245,.14)", "paddingBottom": "9px" }}>Stack principale</h3>
                <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px" }}>
                  <span style={{ "border": "1px solid rgba(244,244,245,.3)", "fontSize": "12px", "fontWeight": "700", "padding": "6px 13px", "borderRadius": "999px" }}>Next.js</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.3)", "fontSize": "12px", "fontWeight": "700", "padding": "6px 13px", "borderRadius": "999px" }}>React</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.3)", "fontSize": "12px", "fontWeight": "700", "padding": "6px 13px", "borderRadius": "999px" }}>TypeScript</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.3)", "fontSize": "12px", "fontWeight": "700", "padding": "6px 13px", "borderRadius": "999px" }}>Node.js</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.3)", "fontSize": "12px", "fontWeight": "700", "padding": "6px 13px", "borderRadius": "999px" }}>PostgreSQL</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.3)", "fontSize": "12px", "fontWeight": "700", "padding": "6px 13px", "borderRadius": "999px" }}>Supabase</span>
                  <span style={{ "border": "1px solid rgba(244,244,245,.3)", "fontSize": "12px", "fontWeight": "700", "padding": "6px 13px", "borderRadius": "999px" }}>Claude AI</span>
                </div>
              </div>
              <div>
                <h3 style={{ "margin": "0 0 12px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "#3845e1", "borderBottom": "1px solid rgba(244,244,245,.14)", "paddingBottom": "9px" }}>Outils & intégrations</h3>
                <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "color": "rgba(244,244,245,.7)" }}>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>Tailwind</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>API REST</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>GraphQL</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>JWT / OAuth</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>Stripe</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>Docker</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>Vercel</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>GitHub</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>Figma</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>MongoDB</span>
                  <span style={{ "background": "rgba(244,244,245,.07)", "fontSize": "12px", "fontWeight": "600", "padding": "6px 13px", "borderRadius": "999px" }}>PHP</span>
                </div>
              </div>
              <div>
                <h3 style={{ "margin": "0 0 12px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "#3845e1", "borderBottom": "1px solid rgba(244,244,245,.14)", "paddingBottom": "9px" }}>IA générative & 3D</h3>
                <p style={{ "margin": "0", "fontSize": "14.5px", "color": "rgba(244,244,245,.7)" }}>API Claude · prompts structurés · RAG · function calling · orchestration d'agents</p>
              </div>
            </div>
          </div>
        </section>

        <section id="offres" style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "110px 28px 0", "boxSizing": "border-box" }}>
          <div data-reveal="" style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "marginBottom": "30px" }}>
            <span style={{ "color": "#3845e1" }}>04 / 05</span><span style={{ "color": "rgba(244,244,245,.45)" }}>Les offres</span>
          </div>
          <h2 data-reveal="" data-reveal-lines="" style={{ "fontSize": "clamp(30px,3.9vw,54px)", "fontWeight": "800", "lineHeight": "1.02", "letterSpacing": "-.03em", "margin": "0", "maxWidth": "24ch" }}>Trois façons de <span style={{ "color": "#3845e1" }}>démarrer</span>, selon où vous en êtes.</h2>
          <p data-reveal="" style={{ "maxWidth": "60ch", "color": "rgba(244,244,245,.62)", "margin": "24px 0 0", "fontSize": "16px" }}>Du cadrage d'une idée à la plateforme complète, avec un prix et un périmètre annoncés avant de commencer.</p>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(290px,1fr))", "gap": "1px", "marginTop": "56px", "borderTop": "1px solid rgba(244,244,245,.14)", "borderBottom": "1px solid rgba(244,244,245,.14)" }}>
            <div data-reveal="" data-reveal-x="" style={{ "background": "#2b2c2e", "boxShadow": "0 0 0 1px rgba(244,244,245,.14)", "padding": "38px 32px 42px", "display": "flex", "flexDirection": "column", "transition": "background .3s" }} className="x23">
              <div style={{ "display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "gap": "12px" }}>
                <p style={{ "margin": "0", "fontSize": "14px", "fontWeight": "800", "letterSpacing": ".12em", "color": "#3845e1" }}><span>01 — Cadrage</span></p>
                
              </div>
              <h3 style={{ "margin": "18px 0 0", "fontSize": "27px", "fontWeight": "800", "letterSpacing": "-.025em", "lineHeight": "1.05", "display": "flex", "alignItems": "center", "gap": "12px" }}><svg viewBox="0 0 554 554" style={{ "width": "34px", "height": "34px", "flex": "none", "color": "#fff" }}><path d="M205.32,465.99c-8.24,0-13.99-5.55-16.59-11.18-2.82-6.1-3.31-15.11,1.95-20.39l79.56-79.9-115.01-149.18-10.03,24.13,54.01,62.7c5.41,6.28,2.46,16.32-3.07,20.21-7.34,5.15-15.19,3.05-20.74-3.37l-42.62-49.31-7.68,17.77,36.97,43.73c5.43,6.42,2.13,16.02-3.3,19.89-6.87,4.9-14.96,3.28-20.38-3.08l-25.71-30.14-6.09,14.66c-3.09,7.43-11.35,10.54-18.29,8.02-7.52-2.73-11.95-11.01-8.56-19.17l57.61-138.95c1.35-11.07,9.48-18.25,20.52-18.62l70.9-.03c5.07-10.3,10.27-19.9,14.56-30.15,2.51-5.99-1.64-13.55-6.65-15.68-6.69-2.85-13.13-1.04-18.51,2.79-4.42-14.45,2.03-29.12,16.66-33.39l78.91-1.81c5.46-.13,10.17,3.55,11.77,8.51l22.38,69.75,59.87-.02c11.15,0,19.81,6.83,22.01,17.97l57.44,138.38c3.16,7.62,1.1,15.58-6.04,19.49-6.32,3.46-16.28,1.74-19.53-5.74l-6.97-16.04-25.61,30.06c-5.44,6.38-13.47,8.05-20.34,3.15-5.65-4.03-8.8-13.61-3.41-19.96l36.89-43.47-7.55-18.09-43.03,49.94c-5.61,6.51-14.85,7.73-21.19,2.14-6.8-5.99-6.35-14.97-.43-21.81l52.22-60.39-10.29-24.52-114.03,147.88,81.04,81.54c5.43,5.46,5.06,14.2,2.05,20.69-2.53,5.47-8.6,10.94-16.35,10.94h-159.32ZM288.53,99.54c0-5.85-4.75-10.6-10.6-10.6s-10.6,4.75-10.6,10.6,4.75,10.6,10.6,10.6,10.6-4.75,10.6-10.6ZM358.96,215.54c4.57-5.91,3.22-13.83.05-19.34-2.78-4.83-8.36-9.96-15.29-9.96h-119.91c-8.05.01-14.4,6.58-16.67,12.38-3.1,7.93-.83,14.52,3.97,20.76l56.56,73.42c6.91,8.96,21.86,12.55,29.77,2.31l61.52-79.58ZM308.39,441.11c3.35,0,6.36-2.83,7.32-5.03,1.04-2.37.64-5.9-1.12-8.19l-23.94-31.16c-1.6-2.09-4.9-4.08-7.25-3.89-2.67.21-5.33,2.18-7.03,4.38l-23.54,30.6c-2.05,2.67-2.12,6.38-.73,9.04,1.25,2.4,4.49,4.29,7.57,4.29l48.72-.04Z" fill="currentColor"></path><polygon points="312.71 247.58 254.51 247.59 283.61 198.26 312.71 247.58" fill="currentColor"></polygon></svg><span>Thunderstart</span></h3>
              <p style={{ "margin": "8px 0 0", "fontSize": "13px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "rgba(244,244,245,.5)" }}>Cadrage & prototype</p>
              <p style={{ "margin": "16px 0 0", "color": "rgba(244,244,245,.62)", "fontSize": "14.5px" }}>Transformer une idée en prototype cliquable et en plan de route chiffré, avant d'engager le développement.</p>
              <ul style={{ "margin": "22px 0 0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "9px", "fontSize": "13.5px", "color": "rgba(244,244,245,.72)", "marginBottom": "28px" }}>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Ateliers de cadrage et parcours utilisateurs</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Prototype cliquable des écrans clés</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Architecture technique et estimation</li>
              </ul>
              <a href="#contact" style={{ "marginTop": "auto", "alignSelf": "flex-start", "border": "1px solid rgba(244,244,245,.28)", "color": "#f4f4f5", "fontWeight": "800", "fontSize": "12px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "13px 22px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "9px", "backgroundColor": "rgba(244,244,245,.04)", "backgroundImage": "linear-gradient(112deg,rgba(255,255,255,0) 34%,rgba(255,255,255,.42) 47%,rgba(255,255,255,.62) 50%,rgba(255,255,255,.42) 53%,rgba(255,255,255,0) 66%)", "backgroundSize": "260% 100%", "backgroundRepeat": "no-repeat", "backgroundPosition": "135% 0", "boxShadow": "inset 0 1px 0 rgba(255,255,255,.1)", "transition": "background-position .8s cubic-bezier(.16,1,.3,1),border-color .3s,background-color .3s" }} className="x24">En parler <span>→</span></a>
            </div>
            <div data-reveal="" data-reveal-x="" style={{ "background": "#32333a", "boxShadow": "0 0 0 1px rgba(244,244,245,.14)", "padding": "38px 32px 42px", "display": "flex", "flexDirection": "column", "transition": "background .3s" }} className="x25">
              <div style={{ "display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "gap": "12px" }}>
                <p style={{ "margin": "0", "fontSize": "14px", "fontWeight": "800", "letterSpacing": ".12em", "color": "#3845e1" }}><span>02 — Produit</span></p>
                <span style={{ "fontSize": "10px", "fontWeight": "800", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#fff", "background": "#3845e1", "padding": "5px 11px", "borderRadius": "999px", "whiteSpace": "nowrap" }}>Le plus demandé</span>
              </div>
              <h3 style={{ "margin": "18px 0 0", "fontSize": "27px", "fontWeight": "800", "letterSpacing": "-.025em", "lineHeight": "1.05", "display": "flex", "alignItems": "center", "gap": "12px" }}><svg viewBox="0 0 554 554" style={{ "width": "34px", "height": "34px", "flex": "none", "color": "#fff" }}><path d="M205.32,465.99c-8.24,0-13.99-5.55-16.59-11.18-2.82-6.1-3.31-15.11,1.95-20.39l79.56-79.9-115.01-149.18-10.03,24.13,54.01,62.7c5.41,6.28,2.46,16.32-3.07,20.21-7.34,5.15-15.19,3.05-20.74-3.37l-42.62-49.31-7.68,17.77,36.97,43.73c5.43,6.42,2.13,16.02-3.3,19.89-6.87,4.9-14.96,3.28-20.38-3.08l-25.71-30.14-6.09,14.66c-3.09,7.43-11.35,10.54-18.29,8.02-7.52-2.73-11.95-11.01-8.56-19.17l57.61-138.95c1.35-11.07,9.48-18.25,20.52-18.62l70.9-.03c5.07-10.3,10.27-19.9,14.56-30.15,2.51-5.99-1.64-13.55-6.65-15.68-6.69-2.85-13.13-1.04-18.51,2.79-4.42-14.45,2.03-29.12,16.66-33.39l78.91-1.81c5.46-.13,10.17,3.55,11.77,8.51l22.38,69.75,59.87-.02c11.15,0,19.81,6.83,22.01,17.97l57.44,138.38c3.16,7.62,1.1,15.58-6.04,19.49-6.32,3.46-16.28,1.74-19.53-5.74l-6.97-16.04-25.61,30.06c-5.44,6.38-13.47,8.05-20.34,3.15-5.65-4.03-8.8-13.61-3.41-19.96l36.89-43.47-7.55-18.09-43.03,49.94c-5.61,6.51-14.85,7.73-21.19,2.14-6.8-5.99-6.35-14.97-.43-21.81l52.22-60.39-10.29-24.52-114.03,147.88,81.04,81.54c5.43,5.46,5.06,14.2,2.05,20.69-2.53,5.47-8.6,10.94-16.35,10.94h-159.32ZM288.53,99.54c0-5.85-4.75-10.6-10.6-10.6s-10.6,4.75-10.6,10.6,4.75,10.6,10.6,10.6,10.6-4.75,10.6-10.6ZM358.96,215.54c4.57-5.91,3.22-13.83.05-19.34-2.78-4.83-8.36-9.96-15.29-9.96h-119.91c-8.05.01-14.4,6.58-16.67,12.38-3.1,7.93-.83,14.52,3.97,20.76l56.56,73.42c6.91,8.96,21.86,12.55,29.77,2.31l61.52-79.58ZM308.39,441.11c3.35,0,6.36-2.83,7.32-5.03,1.04-2.37.64-5.9-1.12-8.19l-23.94-31.16c-1.6-2.09-4.9-4.08-7.25-3.89-2.67.21-5.33,2.18-7.03,4.38l-23.54,30.6c-2.05,2.67-2.12,6.38-.73,9.04,1.25,2.4,4.49,4.29,7.57,4.29l48.72-.04Z" fill="currentColor"></path><polygon points="312.71 247.58 254.51 247.59 283.61 198.26 312.71 247.58" fill="currentColor"></polygon></svg><span>Thunderbuild</span></h3>
              <p style={{ "margin": "8px 0 0", "fontSize": "13px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "rgba(244,244,245,.5)" }}>Conception & développement</p>
              <p style={{ "margin": "16px 0 0", "color": "rgba(244,244,245,.62)", "fontSize": "14.5px" }}>Concevoir et développer votre produit digital, du premier écran à la mise en production.</p>
              <ul style={{ "margin": "22px 0 0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "9px", "fontSize": "13.5px", "color": "rgba(244,244,245,.72)", "marginBottom": "28px" }}>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Design produit et design system</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Développement Next.js full-stack</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Paiements, comptes, intégrations tierces</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Déploiement et transfert de connaissances</li>
              </ul>
              <a href="#contact" style={{ "marginTop": "auto", "alignSelf": "flex-start", "border": "1px solid rgba(244,244,245,.28)", "color": "#f4f4f5", "fontWeight": "800", "fontSize": "12px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "13px 22px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "9px", "backgroundColor": "rgba(244,244,245,.04)", "backgroundImage": "linear-gradient(112deg,rgba(255,255,255,0) 34%,rgba(255,255,255,.42) 47%,rgba(255,255,255,.62) 50%,rgba(255,255,255,.42) 53%,rgba(255,255,255,0) 66%)", "backgroundSize": "260% 100%", "backgroundRepeat": "no-repeat", "backgroundPosition": "135% 0", "boxShadow": "inset 0 1px 0 rgba(255,255,255,.1)", "transition": "background-position .8s cubic-bezier(.16,1,.3,1),border-color .3s,background-color .3s" }} className="x26">En parler <span>→</span></a>
            </div>
            <div data-reveal="" data-reveal-x="" style={{ "background": "#2b2c2e", "boxShadow": "0 0 0 1px rgba(244,244,245,.14)", "padding": "38px 32px 42px", "display": "flex", "flexDirection": "column", "transition": "background .3s" }} className="x27">
              <div style={{ "display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "gap": "12px" }}>
                <p style={{ "margin": "0", "fontSize": "14px", "fontWeight": "800", "letterSpacing": ".12em", "color": "#3845e1" }}><span>03 — IA</span></p>
                
              </div>
              <h3 style={{ "margin": "18px 0 0", "fontSize": "27px", "fontWeight": "800", "letterSpacing": "-.025em", "lineHeight": "1.05", "display": "flex", "alignItems": "center", "gap": "12px" }}><svg viewBox="0 0 554 554" style={{ "width": "34px", "height": "34px", "flex": "none", "color": "#fff" }}><path d="M205.32,465.99c-8.24,0-13.99-5.55-16.59-11.18-2.82-6.1-3.31-15.11,1.95-20.39l79.56-79.9-115.01-149.18-10.03,24.13,54.01,62.7c5.41,6.28,2.46,16.32-3.07,20.21-7.34,5.15-15.19,3.05-20.74-3.37l-42.62-49.31-7.68,17.77,36.97,43.73c5.43,6.42,2.13,16.02-3.3,19.89-6.87,4.9-14.96,3.28-20.38-3.08l-25.71-30.14-6.09,14.66c-3.09,7.43-11.35,10.54-18.29,8.02-7.52-2.73-11.95-11.01-8.56-19.17l57.61-138.95c1.35-11.07,9.48-18.25,20.52-18.62l70.9-.03c5.07-10.3,10.27-19.9,14.56-30.15,2.51-5.99-1.64-13.55-6.65-15.68-6.69-2.85-13.13-1.04-18.51,2.79-4.42-14.45,2.03-29.12,16.66-33.39l78.91-1.81c5.46-.13,10.17,3.55,11.77,8.51l22.38,69.75,59.87-.02c11.15,0,19.81,6.83,22.01,17.97l57.44,138.38c3.16,7.62,1.1,15.58-6.04,19.49-6.32,3.46-16.28,1.74-19.53-5.74l-6.97-16.04-25.61,30.06c-5.44,6.38-13.47,8.05-20.34,3.15-5.65-4.03-8.8-13.61-3.41-19.96l36.89-43.47-7.55-18.09-43.03,49.94c-5.61,6.51-14.85,7.73-21.19,2.14-6.8-5.99-6.35-14.97-.43-21.81l52.22-60.39-10.29-24.52-114.03,147.88,81.04,81.54c5.43,5.46,5.06,14.2,2.05,20.69-2.53,5.47-8.6,10.94-16.35,10.94h-159.32ZM288.53,99.54c0-5.85-4.75-10.6-10.6-10.6s-10.6,4.75-10.6,10.6,4.75,10.6,10.6,10.6,10.6-4.75,10.6-10.6ZM358.96,215.54c4.57-5.91,3.22-13.83.05-19.34-2.78-4.83-8.36-9.96-15.29-9.96h-119.91c-8.05.01-14.4,6.58-16.67,12.38-3.1,7.93-.83,14.52,3.97,20.76l56.56,73.42c6.91,8.96,21.86,12.55,29.77,2.31l61.52-79.58ZM308.39,441.11c3.35,0,6.36-2.83,7.32-5.03,1.04-2.37.64-5.9-1.12-8.19l-23.94-31.16c-1.6-2.09-4.9-4.08-7.25-3.89-2.67.21-5.33,2.18-7.03,4.38l-23.54,30.6c-2.05,2.67-2.12,6.38-.73,9.04,1.25,2.4,4.49,4.29,7.57,4.29l48.72-.04Z" fill="currentColor"></path><polygon points="312.71 247.58 254.51 247.59 283.61 198.26 312.71 247.58" fill="currentColor"></polygon></svg><span>Thunderbrain</span></h3>
              <p style={{ "margin": "8px 0 0", "fontSize": "13px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "rgba(244,244,245,.5)" }}>Agents IA & automatisation</p>
              <p style={{ "margin": "16px 0 0", "color": "rgba(244,244,245,.62)", "fontSize": "14.5px" }}>Brancher des agents IA sur votre produit et vos données métier, pour supprimer le travail répétitif.</p>
              <ul style={{ "margin": "22px 0 0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "9px", "fontSize": "13.5px", "color": "rgba(244,244,245,.72)", "marginBottom": "28px" }}>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Audit des tâches automatisables</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Agents connectés à l'API Claude</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>RAG sur vos données métier</li>
                <li style={{ "display": "flex", "gap": "10px" }}><span style={{ "color": "#3845e1" }}>→</span>Mesure des gains de délais</li>
              </ul>
              <a href="#contact" style={{ "marginTop": "auto", "alignSelf": "flex-start", "border": "1px solid rgba(244,244,245,.28)", "color": "#f4f4f5", "fontWeight": "800", "fontSize": "12px", "letterSpacing": ".06em", "textTransform": "uppercase", "padding": "13px 22px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "9px", "backgroundColor": "rgba(244,244,245,.04)", "backgroundImage": "linear-gradient(112deg,rgba(255,255,255,0) 34%,rgba(255,255,255,.42) 47%,rgba(255,255,255,.62) 50%,rgba(255,255,255,.42) 53%,rgba(255,255,255,0) 66%)", "backgroundSize": "260% 100%", "backgroundRepeat": "no-repeat", "backgroundPosition": "135% 0", "boxShadow": "inset 0 1px 0 rgba(255,255,255,.1)", "transition": "background-position .8s cubic-bezier(.16,1,.3,1),border-color .3s,background-color .3s" }} className="x28">En parler <span>→</span></a>
            </div>
          </div>
        </section>

        <section id="studio" style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "110px 28px 0", "boxSizing": "border-box" }}>
          <div data-reveal="" style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "marginBottom": "30px" }}>
            <span style={{ "color": "#3845e1" }}>05 / 05</span><span style={{ "color": "rgba(244,244,245,.45)" }}>Le studio</span>
          </div>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "48px", "alignItems": "start" }}>
            <div style={{ "maxWidth": "140px" }}>
              <div data-float="" style={{ "position": "relative", "width": "100%", "animation": "is-float 6s ease-in-out infinite", "willChange": "transform" }}>
                <canvas data-photo-ions="" aria-hidden="true" style={{ "position": "absolute", "top": "-52px", "left": "-46px", "width": "calc(100% + 92px)", "height": "calc(100% + 104px)", "zIndex": "0", "pointerEvents": "none" }}></canvas>
                <div aria-hidden="true" style={{ "position": "absolute", "top": "11px", "left": "11px", "right": "-11px", "bottom": "-11px", "background": "#3845e1", "opacity": ".5", "borderRadius": "6px", "zIndex": "1" }}></div>
                <div style={{ "position": "relative", "zIndex": "2", "aspectRatio": "4/5", "width": "100%", "overflow": "hidden", "background": "#232428", "border": "1px solid rgba(244,244,245,.14)", "borderRadius": "6px", "boxShadow": "0 20px 40px -14px rgba(0,0,0,.55)" }}>
                  <img src="/assets/photo-stephane.png" alt="Portrait de Stéphane Aboukrat" width="180" height="225" loading="lazy" decoding="async" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "50% 22%", "display": "block" }} />
                </div>
              </div>
              <p style={{ "margin": "28px 0 0", "fontSize": "12.5px", "fontWeight": "800", "letterSpacing": ".01em", "whiteSpace": "nowrap" }}>Stéphane ABOUKRAT</p>
              <p style={{ "margin": "1px 0 0", "fontSize": "9.5px", "fontWeight": "700", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "rgba(244,244,245,.5)" }}>Product Builder</p>
            </div>
            <div style={{ "gridColumn": "span 2", "minWidth": "0" }}>
              <h2 data-reveal="" style={{ "fontSize": "clamp(28px,3.4vw,46px)", "fontWeight": "800", "lineHeight": "1.05", "letterSpacing": "-.03em", "margin": "0", "maxWidth": "26ch" }}>Peu d'intermédiaires, beaucoup d'<span style={{ "color": "#3845e1" }}>exécution</span>.</h2>
              <p data-reveal="" style={{ "color": "rgba(244,244,245,.68)", "fontSize": "16.5px", "margin": "26px 0 0", "maxWidth": "62ch" }}>Pas de chaîne de sous-traitance, pas de brief qui se perd entre trois interlocuteurs. Vous parlez directement à ceux qui dessinent les écrans, écrivent le code et mettent en production. Sur un produit digital, c'est ce qui fait la différence entre six mois et six semaines.</p>
              <p data-reveal="" style={{ "color": "rgba(244,244,245,.68)", "fontSize": "16.5px", "margin": "18px 0 0", "maxWidth": "62ch" }}>Basé à Paris, le studio intervient en régie ou au forfait, en autonomie complète ou intégré à une équipe produit existante. Du cadrage au déploiement, de l'idée au produit en production.</p>
            </div>
          </div>
        </section>

        <section id="contact" style={{ "position": "relative", "zIndex": "1", "marginTop": "110px", "background": "#3845e1", "color": "#fff", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "zIndex": "1", "maxWidth": "1320px", "margin": "0 auto", "padding": "84px 28px", "boxSizing": "border-box", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "48px", "alignItems": "start" }}>
            <div>
              <p style={{ "margin": "0 0 20px", "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(255,255,255,.7)" }}>Contact</p>
              <span style={{ "position": "relative", "display": "block", "width": "104px", "margin": "0 0 26px" }}>
                <img src="/assets/ia-brain.svg" alt="" width="104" height="116" style={{ "display": "block", "width": "104px", "height": "auto", "opacity": ".72" }} />
                <span aria-hidden="true" style={{ "position": "absolute", "inset": "0", "overflow": "hidden", "WebkitMask": "url(/assets/ia-brain.svg) center / 100% 100% no-repeat", "mask": "url(/assets/ia-brain.svg) center / 100% 100% no-repeat" }}>
                  <span data-sheen="" style={{ "position": "absolute", "inset": "-60%", "animation": "is-sheen 3.6s linear infinite", "background": "conic-gradient(from 0deg,rgba(255,255,255,0) 296deg,#fff 320deg,rgba(199,208,255,.95) 336deg,rgba(255,255,255,0) 352deg)" }}></span>
                </span>
              </span>
              <h2 style={{ "fontSize": "clamp(32px,4.4vw,62px)", "fontWeight": "800", "lineHeight": ".98", "letterSpacing": "-.035em", "margin": "0", "maxWidth": "20ch" }}>Parlons de votre prochain projet.</h2>
              <p style={{ "margin": "24px 0 0", "fontSize": "16.5px", "color": "rgba(255,255,255,.82)", "maxWidth": "44ch" }}>Décrivez votre besoin en quelques lignes : vous recevez une réponse construite, avec un premier avis et les prochaines étapes. Audit gratuit et sans engagement.</p>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }}>
              <form data-contact-form="" style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              <input type="text" name="site_web" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ "position": "absolute", "left": "-9999px", "width": "1px", "height": "1px", "opacity": "0" }} />
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px" }}>
                <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "rgba(255,255,255,.72)" }}>Votre besoin</span>
                <select name="offre" style={{ "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "color": "#fff", "backgroundColor": "rgba(255,255,255,.1)", "backgroundImage": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.6 6 6.4 11 1.6' fill='none' stroke='%23ffffff' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")", "backgroundRepeat": "no-repeat", "backgroundPosition": "right 18px center", "backgroundSize": "12px 8px", "border": "1px solid rgba(255,255,255,.28)", "borderRadius": "999px", "padding": "13px 44px 13px 18px", "outline": "none", "appearance": "none", "transition": "border-color .25s,background .25s" }} className="x29">
                  <option style={{ "color": "#1a1b1e" }}>Thundercheck — Audit produit et technique</option>
                  <option style={{ "color": "#1a1b1e" }}>Thunderstart — Cadrage et prototype</option>
                  <option style={{ "color": "#1a1b1e" }}>Thunderbuild — Conception et développement</option>
                  <option style={{ "color": "#1a1b1e" }}>Thunderbrain — Agents IA et automatisation</option>
                  <option style={{ "color": "#1a1b1e" }}>Autre / je ne sais pas encore</option>
                </select>
              </label>
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px" }}>
                <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "rgba(255,255,255,.72)" }}>Nom</span>
                <input name="nom" type="text" required placeholder="Prénom et nom" style={{ "fontFamily": "inherit", "fontSize": "15px", "color": "#fff", "background": "rgba(255,255,255,.1)", "border": "1px solid rgba(255,255,255,.28)", "borderRadius": "999px", "padding": "13px 18px", "outline": "none", "transition": "border-color .25s,background .25s" }} className="x30" />
              </label>
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px" }}>
                <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "rgba(255,255,255,.72)" }}>Email</span>
                <input name="email" type="email" required placeholder="vous@entreprise.fr" style={{ "fontFamily": "inherit", "fontSize": "15px", "color": "#fff", "background": "rgba(255,255,255,.1)", "border": "1px solid rgba(255,255,255,.28)", "borderRadius": "999px", "padding": "13px 18px", "outline": "none", "transition": "border-color .25s,background .25s" }} className="x31" />
              </label>
              <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px" }}>
                <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "rgba(255,255,255,.72)" }}>Projet</span>
                <textarea name="message" rows={4} required placeholder="En deux lignes : ce que vous voulez construire et pour quand." style={{ "fontFamily": "inherit", "fontSize": "15px", "color": "#fff", "background": "rgba(255,255,255,.1)", "border": "1px solid rgba(255,255,255,.28)", "borderRadius": "18px", "padding": "13px 16px", "resize": "vertical", "outline": "none", "transition": "border-color .25s,background .25s" }} className="x32"></textarea>
              </label>
                <button data-contact-submit="" type="submit" style={{ "marginTop": "6px", "alignSelf": "flex-start", "backgroundColor": "#fff", "color": "#2c37c4", "fontWeight": "800", "fontSize": "13px", "letterSpacing": ".06em", "textTransform": "uppercase", "border": "0", "cursor": "pointer", "padding": "16px 30px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "10px", "backgroundImage": "linear-gradient(112deg,rgba(56,69,225,0) 34%,rgba(56,69,225,.16) 50%,rgba(56,69,225,0) 66%)", "backgroundSize": "260% 100%", "backgroundRepeat": "no-repeat", "backgroundPosition": "135% 0", "transition": "background-position .8s cubic-bezier(.16,1,.3,1),transform .25s,box-shadow .3s" }} className="x33">Envoyer ma demande <span>→</span></button>
                <p data-contact-status="" role="status" style={{ "margin": "2px 0 0", "fontSize": "13.5px", "fontWeight": "700", "color": "#fff", "minHeight": "19px" }}></p>
              </form>
              <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255,255,255,.3)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": ".08em", "textTransform": "uppercase" }}>
                <span style={{ "display": "flex", "alignItems": "center", "gap": "8px", "color": "#fff" }}><svg viewBox="0 0 24 21" style={{ "width": "9px", "height": "8px", "flex": "none" }}><path d="M12 0 24 21H0Z" fill="currentColor"></path></svg>Audit gratuit et sans engagement</span>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ "position": "relative", "zIndex": "1", "borderTop": "1px solid rgba(244,244,245,.14)" }}>
          <div style={{ "maxWidth": "1320px", "margin": "0 auto", "padding": "40px 28px", "boxSizing": "border-box", "display": "flex", "flexWrap": "wrap", "gap": "24px", "alignItems": "center", "justifyContent": "space-between", "fontSize": "12.5px", "color": "rgba(244,244,245,.45)" }}>
            <div style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
              <span style={{ "display": "flex", "alignItems": "center", "gap": "9px", "color": "#fff", "background": "linear-gradient(115deg,#ffffff 0%,#ffffff 34%,#ffffff 46%,#8f9bff 51%,#ffffff 58%,#ffffff 100%)", "backgroundSize": "320% 100%", "backgroundPosition": "100% 0", "WebkitBackgroundClip": "text", "backgroundClip": "text", "transition": "background-position .9s cubic-bezier(.16,1,.3,1)" }} className="x34"><svg viewBox="0 0 24 21" style={{ "width": "13px", "height": "11.375px", "flex": "none", "display": "block" }}><path d="M12 0 24 21H0Z" fill="#3845e1" /></svg><span style={{ "fontWeight": "800", "fontSize": "13px", "letterSpacing": ".06em", "textTransform": "uppercase", "whiteSpace": "nowrap", "WebkitTextFillColor": "transparent" }}>Indiana <span style={{ "fontWeight": "300", "letterSpacing": ".1em" }}>Studio</span></span></span>
            </div>
            <span>Design × Code × IA · Paris</span>
            <span>© 2026 Indiana Studio — indianastudio.io</span>
          </div>
        </footer>
      </div>
      <EffectsClient />
      <ChatWidget />
    </>
  );
}
