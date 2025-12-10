# Barrierefreiheits-Analyse: Tango in Tübingen

**Analysedatum:** 8. Dezember 2025
**Analysierte Dateien:**
- index.html
- contact.html
- css/style.css
- js/teacher-list.js
- js/milonga-cal.js

---

## Executive Summary

Die Website "Tango in Tübingen" weist mehrere kritische und wichtige Barrierefreiheitsprobleme auf, die die Nutzbarkeit für Menschen mit Behinderungen erheblich einschränken. Die Hauptprobleme betreffen:

- **Fehlende semantische Struktur** (keine Landmarks, falsche Sprachdeklaration)
- **Unzureichende Alternativtexte** für Bilder und Icons
- **Tastaturzugänglichkeit** (interaktive Elemente ohne Tastaturunterstützung)
- **Dynamische Inhalte** ohne Screen Reader-Unterstützung
- **Farbkontraste** teilweise nicht ausreichend

**WCAG 2.1 Konformität:** Aktuell wird weder Level A noch AA erreicht.

---

## 1. Kritische Probleme (WCAG Level A)

### 1.1 Falsche Sprachdeklaration

**Problem:**
Beide HTML-Dateien deklarieren `lang="en"`, obwohl der gesamte Inhalt auf Deutsch ist.

**Betroffen:**
- index.html:2
- contact.html:2

**WCAG-Kriterium:** 3.1.1 Language of Page (Level A)

**Auswirkung:**
Screen Reader lesen den deutschen Text mit englischer Aussprache vor, was die Verständlichkeit massiv beeinträchtigt.

**Handlungsempfehlung:**
```html
<!-- Aktuell -->
<html lang="en">

<!-- Korrektur -->
<html lang="de">
```

**Priorität:** 🔴 KRITISCH - Sofort beheben

---

### 1.2 Fehlende Alternativtexte für Bilder

**Problem:**
Das Profilbild in contact.html hat keinen alt-Text.

**Betroffen:**
- contact.html:41

**WCAG-Kriterium:** 1.1.1 Non-text Content (Level A)

**Auswirkung:**
Screen Reader-Nutzer erhalten keine Information über das Bild.

**Handlungsempfehlung:**
```html
<!-- Aktuell -->
<img class="about-me-img" src="assets/images/christian-leroy-3.jpg">

<!-- Korrektur -->
<img class="about-me-img"
     src="assets/images/christian-leroy-3.jpg"
     alt="Christian Leroy, Tango-Tänzer und DJ">
```

**Priorität:** 🔴 KRITISCH - Sofort beheben

---

### 1.3 SVG-Icons ohne Alternativtexte

**Problem:**
Dekorative und informative SVG-Icons haben keine Beschreibungen.

**Betroffen:**
- index.html:90 (Auto-Icon für "Tango Taxi")
- index.html:98 (WhatsApp-Icon für "Youngsters")

**WCAG-Kriterium:** 1.1.1 Non-text Content (Level A)

**Auswirkung:**
Screen Reader können die Bedeutung der Icons nicht vermitteln.

**Handlungsempfehlung:**
```html
<!-- Aktuell -->
<svg class="community-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <g fill="none">...</g>
</svg>

<!-- Korrektur Option 1: Informative Icons -->
<svg class="community-icon"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 48 48"
     role="img"
     aria-label="Auto-Symbol für Mitfahrgelegenheiten">
    <title>Auto-Symbol für Mitfahrgelegenheiten</title>
    <g fill="none">...</g>
</svg>

<!-- Korrektur Option 2: Rein dekorative Icons -->
<svg class="community-icon"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 48 48"
     aria-hidden="true">
    <g fill="none">...</g>
</svg>
```

**Empfehlung:** Da die Icons die Kategorie visuell unterstützen, sollten sie als informativ behandelt werden.

**Priorität:** 🔴 KRITISCH - Sofort beheben

---

### 1.4 Fehlende semantische Landmarks

**Problem:**
Die Website verwendet keine HTML5-Landmarks (`<main>`, `<aside>`, etc.).

**Betroffen:**
- index.html (gesamte Struktur)
- contact.html (gesamte Struktur)

**WCAG-Kriterium:** 1.3.1 Info and Relationships (Level A)

**Auswirkung:**
Screen Reader-Nutzer können nicht effizient zwischen Hauptbereichen navigieren.

**Handlungsempfehlung:**
```html
<!-- Aktuell -->
<body>
    <div class="site-container">
        <header>
            <nav>...</nav>
        </header>

        <div class="section" id="tanzen">...</div>
        <div class="section" id="lernen">...</div>
        <div class="section" id="mitwirken">...</div>

        <footer>...</footer>
    </div>
</body>

<!-- Korrektur -->
<body>
    <div class="site-container">
        <header>
            <nav aria-label="Hauptnavigation">...</nav>
        </header>

        <main>
            <section id="tanzen" aria-labelledby="heading-tanzen">
                <h1 id="heading-tanzen">Tango tanzen</h1>
                ...
            </section>

            <section id="lernen" aria-labelledby="heading-lernen">
                <h1 id="heading-lernen">Tango lernen</h1>
                ...
            </section>

            <section id="mitwirken" aria-labelledby="heading-mitwirken">
                <h1 id="heading-mitwirken">Tango Community</h1>
                ...
            </section>
        </main>

        <footer>
            <nav aria-label="Fußnavigation">...</nav>
        </footer>
    </div>
</body>
```

**Priorität:** 🔴 KRITISCH - Sofort beheben

---

### 1.5 Links als Buttons verwendet

**Problem:**
Die "Mehr anzeigen" und "Einklappen" Schaltflächen sind als `<a>` ohne href implementiert.

**Betroffen:**
- index.html:40-41

**WCAG-Kriterium:** 4.1.2 Name, Role, Value (Level A)

**Auswirkung:**
Screen Reader kündigen diese als Links an, obwohl sie Buttons sind. Keine Tastaturunterstützung (Leertaste).

**Handlungsempfehlung:**
```html
<!-- Aktuell -->
<a id="show-more">Mehr anzeigen</a>
<a id="show-less">Einklappen</a>

<!-- Korrektur -->
<button type="button" id="show-more">Mehr anzeigen</button>
<button type="button" id="show-less">Einklappen</button>
```

Entsprechende CSS-Anpassungen erforderlich:
```css
/* In style.css hinzufügen */
#show-more,
#show-less {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    text-decoration: none;
    color: #E75821;
    font-family: var(--secondary-font);
    font-weight: 300;
}

#show-more:hover,
#show-less:hover {
    color: grey;
}

#show-less {
    color: grey;
}

#show-less:hover {
    color: var(--accent-color);
}
```

**Priorität:** 🔴 KRITISCH - Sofort beheben

---

### 1.6 Fehlende Hauptüberschrift auf Kontaktseite

**Problem:**
Die contact.html hat keine `<h1>` Überschrift.

**Betroffen:**
- contact.html (gesamte Seite)

**WCAG-Kriterium:** 1.3.1 Info and Relationships (Level A)

**Auswirkung:**
Screen Reader-Nutzer können nicht schnell den Hauptinhalt der Seite identifizieren.

**Handlungsempfehlung:**
```html
<!-- In contact.html nach dem Header einfügen -->
<main>
    <h1>Kontakt & Impressum</h1>

    <div class="about-me-grid">
        <!-- Existierender Inhalt -->
    </div>
</main>
```

Alle `<h2>` in den Unterabschnitten bleiben erhalten, da sie korrekt als Unterüberschriften strukturiert sind.

**Priorität:** 🔴 KRITISCH - Sofort beheben

---

### 1.7 Dynamisch geladene Inhalte ohne Ankündigung

**Problem:**
Wenn neue Milongas geladen werden, wird dies Screen Reader-Nutzern nicht mitgeteilt.

**Betroffen:**
- js/milonga-cal.js:65 (displayNextMilongas Funktion)
- index.html:37 (Kalender-Container)

**WCAG-Kriterium:** 4.1.3 Status Messages (Level AA, aber kritisch für Nutzbarkeit)

**Auswirkung:**
Nutzer wissen nicht, dass neue Inhalte geladen wurden.

**Handlungsempfehlung:**

HTML:
```html
<!-- Aktuell -->
<div id="cal" class="milonga-cal-grid"></div>

<!-- Korrektur -->
<div id="cal" class="milonga-cal-grid" aria-live="polite" aria-atomic="false"></div>

<!-- Status-Nachricht hinzufügen -->
<div class="milonga-cal-wrapper">
    <div id="cal" class="milonga-cal-grid" aria-live="polite"></div>
    <div id="status-message" class="sr-only" role="status" aria-live="polite"></div>
    <div class="milonga-cal-buttons">
        <button type="button" id="show-more">Mehr anzeigen</button>
        <button type="button" id="show-less">Einklappen</button>
    </div>
</div>
```

CSS (sr-only Klasse hinzufügen):
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

JavaScript in milonga-cal.js:
```javascript
// Nach displayNextMilongas am Ende hinzufügen
function announceUpdate(count) {
    const statusElement = document.getElementById('status-message');
    if (statusElement) {
        statusElement.textContent = `${count} weitere Milongas geladen`;
        // Nachricht nach 3 Sekunden löschen
        setTimeout(() => {
            statusElement.textContent = '';
        }, 3000);
    }
}

// In displayNextMilongas nach Zeile 65 aufrufen
milongaCalendar.insertAdjacentHTML('beforeend', html_buffer);
announceUpdate(k); // Hier hinzufügen
```

**Priorität:** 🟠 HOCH - Zeitnah beheben

---

## 2. Wichtige Probleme (WCAG Level AA)

### 2.1 Unzureichende Farbkontraste

**Problem:**
Mehrere Text-Farbkombinationen erfüllen möglicherweise nicht das Kontrastverhältnis von 4.5:1.

**Betroffen:**
- css/style.css:123 - Grauer Hover-Zustand für Links
- css/style.css:293 - Grauer Text für "Einklappen" Button

**WCAG-Kriterium:** 1.4.3 Contrast (Minimum) (Level AA)

**Auswirkung:**
Nutzer mit Sehbeeinträchtigungen können Text schwer lesen.

**Handlungsempfehlung:**

Zu prüfende Kombinationen:
1. Grauer Text (#808080 oder rgb(128,128,128)) auf weißem Hintergrund
2. Accent-Color (#E75821) auf weißem Hintergrund (wahrscheinlich ok)

Empfohlene Anpassung:
```css
/* Aktuell */
a:hover {
    color: grey;
}

#show-less {
    display: none;
    color: grey;
}

/* Korrektur - dunkleres Grau verwenden */
a:hover {
    color: #595959; /* Kontrast 7:1 auf Weiß */
}

#show-less {
    display: none;
    color: #595959;
}
```

**Tool zur Überprüfung:** WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

**Priorität:** 🟠 HOCH - Zeitnah beheben

---

### 2.2 Fehlende sichtbare Fokus-Indikatoren

**Problem:**
Keine benutzerdefinierten :focus Stile definiert. Browser-Standard kann unzureichend sein.

**Betroffen:**
- css/style.css (alle interaktiven Elemente)

**WCAG-Kriterium:** 2.4.7 Focus Visible (Level AA)

**Auswirkung:**
Tastaturnutzer können nicht erkennen, welches Element fokussiert ist.

**Handlungsempfehlung:**
```css
/* In style.css hinzufügen */

/* Fokus-Indikatoren für alle interaktiven Elemente */
a:focus,
button:focus {
    outline: 3px solid #E75821;
    outline-offset: 2px;
}

/* Fokus für Header-Links */
.header-link:focus {
    outline: 3px solid #E75821;
    outline-offset: 4px;
    border-radius: 2px;
}

/* Fokus für Buttons im Kalender */
#show-more:focus,
#show-less:focus {
    outline: 3px solid #E75821;
    outline-offset: 3px;
}

/* Nutzer, die :focus-visible unterstützen (moderne Browser) */
@supports selector(:focus-visible) {
    a:focus:not(:focus-visible),
    button:focus:not(:focus-visible) {
        outline: none;
    }

    a:focus-visible,
    button:focus-visible {
        outline: 3px solid #E75821;
        outline-offset: 2px;
    }
}
```

**Priorität:** 🟠 HOCH - Zeitnah beheben

---

### 2.3 Skip-Link fehlt

**Problem:**
Kein "Skip to main content" Link für Tastaturnutzer.

**Betroffen:**
- index.html, contact.html

**WCAG-Kriterium:** 2.4.1 Bypass Blocks (Level A)

**Auswirkung:**
Tastaturnutzer müssen bei jedem Seitenaufruf durch die Navigation tabben.

**Handlungsempfehlung:**
```html
<!-- Am Anfang von <body>, vor allem anderen -->
<body>
    <a href="#main-content" class="skip-link">
        Zum Hauptinhalt springen
    </a>

    <div class="site-container">
        <header>...</header>

        <main id="main-content">
            <!-- Hauptinhalt -->
        </main>
    </div>
</body>
```

CSS:
```css
/* Skip-Link: versteckt, aber sichtbar bei Fokus */
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #E75821;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: 600;
    z-index: 100;
    border-radius: 0 0 4px 0;
}

.skip-link:focus {
    top: 0;
}
```

**Priorität:** 🟠 HOCH - Zeitnah beheben

---

### 2.4 Unzureichende Link-Beschreibungen

**Problem:**
Einige Links haben keine aussagekräftigen Texte im Kontext.

**Betroffen:**
- contact.html:56 - "auf Github" (Link existiert, aber href="#")

**WCAG-Kriterium:** 2.4.4 Link Purpose (In Context) (Level A)

**Auswirkung:**
Screen Reader-Nutzer verstehen nicht, wohin der Link führt.

**Handlungsempfehlung:**
```html
<!-- Aktuell -->
<p>... sind <a href="#">auf Github</a> einsehbar ...</p>

<!-- Korrektur -->
<p>... sind <a href="https://github.com/[username]/[repo]" target="_blank" rel="noopener noreferrer">
    auf Github
    <span class="sr-only"> (öffnet in neuem Tab)</span>
</a> einsehbar ...</p>
```

**Generelle Regel:** Alle Links mit `target="_blank"` sollten einen Hinweis enthalten:
```html
<a href="..." target="_blank" rel="noopener noreferrer">
    Linktext
    <span class="sr-only"> (öffnet in neuem Tab)</span>
</a>
```

**Priorität:** 🟡 MITTEL - In nächster Iteration beheben

---

### 2.5 Scroll-Behavior kann Probleme verursachen

**Problem:**
`scroll-behavior: smooth` kann bei Menschen mit vestibulären Störungen Schwindel auslösen.

**Betroffen:**
- css/style.css:92

**WCAG-Kriterium:** 2.3.3 Animation from Interactions (Level AAA, aber wichtig)

**Auswirkung:**
Nutzer mit Motion Sensitivity können Übelkeit erfahren.

**Handlungsempfehlung:**
```css
/* Aktuell */
html {
    scroll-behavior: smooth;
    background-color: whitesmoke;
}

/* Korrektur - respektiert Benutzereinstellungen */
@media (prefers-reduced-motion: no-preference) {
    html {
        scroll-behavior: smooth;
    }
}

html {
    background-color: whitesmoke;
}
```

**Priorität:** 🟡 MITTEL - In nächster Iteration beheben

---

### 2.6 Fehlerbehandlung ohne Nutzer-Feedback

**Problem:**
Wenn das Laden der JSON-Daten fehlschlägt, gibt es keine Benutzerbenachrichtigung.

**Betroffen:**
- js/teacher-list.js:21 (nur console.error)
- js/milonga-cal.js:30 (nur console.error)

**WCAG-Kriterium:** 3.3.1 Error Identification (Level A)

**Auswirkung:**
Nutzer sehen leere Bereiche ohne zu wissen, dass ein Fehler aufgetreten ist.

**Handlungsempfehlung:**

In milonga-cal.js:
```javascript
async function getMilongas(){
  const url = "./data/milongas.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);

    // Benutzer informieren
    const calContainer = document.getElementById('cal');
    calContainer.innerHTML = `
      <div role="alert" class="error-message">
        <p>
          <strong>Fehler beim Laden der Milongas.</strong><br>
          Bitte versuchen Sie es später erneut oder kontaktieren Sie uns.
        </p>
      </div>
    `;
    return [];
  }
}
```

CSS:
```css
.error-message {
    background-color: #fef2f2;
    border: 2px solid #dc2626;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem 0;
}

.error-message p {
    color: #991b1b;
    margin: 0;
}
```

Analog für teacher-list.js anpassen.

**Priorität:** 🟡 MITTEL - In nächster Iteration beheben

---

### 2.7 Fehlende ARIA-Labels für Navigation

**Problem:**
Beide `<nav>` Elemente (Header und Footer) haben keine unterscheidbaren Labels.

**Betroffen:**
- index.html:16, 108
- contact.html:16, 73

**WCAG-Kriterium:** 4.1.2 Name, Role, Value (Level A)

**Auswirkung:**
Screen Reader kündigen beide nur als "Navigation" an, ohne Unterscheidung.

**Handlungsempfehlung:**
```html
<!-- Header -->
<nav aria-label="Hauptnavigation">
    <div class="header-container">
        <!-- ... -->
    </div>
</nav>

<!-- Footer -->
<footer>
    <nav aria-label="Fußnavigation">
        <div class="footer-container">
            <!-- ... -->
        </div>
    </nav>
</footer>
```

**Priorität:** 🟡 MITTEL - In nächster Iteration beheben

---

## 3. Empfohlene Verbesserungen (Best Practices)

### 3.1 Meta-Beschreibungen hinzufügen

**Empfehlung:**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Vollständiger Überblick über Milongas und Practicas in Tübingen. Finde Tanzlehrer und werde Teil der Tango-Community.">
    <title>Tango in Tübingen - Milongas, Kurse und Community</title>
    <!-- ... -->
</head>
```

Bessere Titel:
- index.html: `<title>Tango in Tübingen - Milongas, Kurse und Community</title>`
- contact.html: `<title>Kontakt & Impressum - Tango in Tübingen</title>`

**Vorteil:** Bessere SEO und Orientierung bei Browser-Tabs.

---

### 3.2 Lade-Indikatoren für asynchrone Operationen

**Empfehlung:**

HTML:
```html
<div class="milonga-cal-wrapper">
    <div id="loading-indicator" class="loading" aria-live="polite" role="status">
        <p>Lade Milongas...</p>
    </div>
    <div id="cal" class="milonga-cal-grid"></div>
    <!-- ... -->
</div>
```

CSS:
```css
.loading {
    text-align: center;
    padding: 2rem;
    color: #595959;
}

.loading.hidden {
    display: none;
}
```

JavaScript (in milonga-cal.js):
```javascript
async function initMilongaCal(){
    const loadingIndicator = document.getElementById('loading-indicator');

    console.log("Fetching milonga data from JSON.")
    loadingIndicator.classList.remove('hidden');

    milongas = await getMilongas()
    milongas = processMilongas(milongas)

    loadingIndicator.classList.add('hidden');
    console.log("Fetched and processed milonga data from JSON.")

    displayNextMilongas(defaultAmount)
}
```

**Vorteil:** Nutzer wissen, dass etwas passiert.

---

### 3.3 Optimale Zeilenlänge für bessere Lesbarkeit

**Empfehlung:**
```css
/* Für bessere Lesbarkeit Textzeilen begrenzen */
.section p,
.community-content,
.about-me-intro p,
.about-me-outro p {
    max-width: 70ch; /* Optimal: 45-75 Zeichen pro Zeile */
}
```

**Vorteil:** Verbessert Lesbarkeit für alle Nutzer, besonders für Menschen mit Dyslexie.

---

### 3.4 Breadcrumbs für bessere Navigation

Auf contact.html könnte eine Breadcrumb-Navigation hilfreich sein:

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
        <li><a href="index.html">Startseite</a></li>
        <li aria-current="page">Kontakt & Impressum</li>
    </ol>
</nav>
```

CSS:
```css
.breadcrumb ol {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    padding: 0;
    margin: 1rem 0;
    font-size: var(--small);
}

.breadcrumb li:not(:last-child)::after {
    content: "›";
    margin-left: 0.5rem;
    color: #595959;
}

.breadcrumb a {
    text-decoration: underline;
}

.breadcrumb [aria-current="page"] {
    color: #595959;
}
```

---

### 3.5 Verbesserte Formular-Zugänglichkeit (falls zukünftig Formulare hinzugefügt werden)

Wenn Kontaktformulare hinzugefügt werden, sollten diese Richtlinien befolgt werden:

```html
<form>
    <div class="form-group">
        <label for="name">
            Name <span aria-label="erforderlich">*</span>
        </label>
        <input type="text"
               id="name"
               name="name"
               required
               aria-required="true"
               aria-describedby="name-hint">
        <span id="name-hint" class="hint">Bitte geben Sie Ihren vollständigen Namen ein.</span>
    </div>

    <div class="form-group">
        <label for="email">
            E-Mail <span aria-label="erforderlich">*</span>
        </label>
        <input type="email"
               id="email"
               name="email"
               required
               aria-required="true"
               aria-describedby="email-hint"
               aria-invalid="false">
        <span id="email-hint" class="hint">Wir werden Ihre E-Mail nicht weitergeben.</span>
        <span id="email-error" class="error" role="alert" hidden>
            Bitte geben Sie eine gültige E-Mail-Adresse ein.
        </span>
    </div>
</form>
```

---

### 3.6 Sprachauszeichnung für fremdsprachige Begriffe

Manche Begriffe sind auf Spanisch (Milonga, Practica). Diese sollten ausgezeichnet werden:

```html
<!-- Aktuell -->
<p>...alle Milongas und Practicas...</p>

<!-- Korrektur -->
<p>...alle <span lang="es">Milongas</span> und <span lang="es">Practicas</span>...</p>
```

**Vorteil:** Screen Reader können die korrekte Aussprache verwenden.

---

## 4. Zusammenfassung der Handlungsempfehlungen nach Priorität

### 🔴 KRITISCH (Sofort beheben)

1. **Sprachdeklaration ändern** (`lang="de"` in beiden HTML-Dateien)
2. **Alt-Text für Bild hinzufügen** (contact.html:41)
3. **SVG-Icons mit Alternativtexten versehen** (index.html:90, 98)
4. **Semantische Landmarks hinzufügen** (`<main>`, `<section>`)
5. **Links als Buttons korrigieren** (show-more, show-less)
6. **H1 auf contact.html hinzufügen**

**Zeitaufwand:** Ca. 2-3 Stunden

---

### 🟠 HOCH (Zeitnah beheben)

1. **Dynamische Inhalte ankündigen** (aria-live regions)
2. **Farbkontraste verbessern** (graue Texte)
3. **Fokus-Indikatoren hinzufügen**
4. **Skip-Link implementieren**

**Zeitaufwand:** Ca. 3-4 Stunden

---

### 🟡 MITTEL (Nächste Iteration)

1. **Link-Beschreibungen verbessern** (Hinweise auf neue Tabs)
2. **Scroll-Behavior anpassen** (prefers-reduced-motion)
3. **Fehlerbehandlung mit Nutzer-Feedback**
4. **ARIA-Labels für Navigationen**

**Zeitaufwand:** Ca. 2-3 Stunden

---

### 🟢 NIEDRIG (Nice to have)

1. **Meta-Beschreibungen und bessere Titel**
2. **Lade-Indikatoren**
3. **Optimale Zeilenlänge**
4. **Breadcrumbs**
5. **Sprachauszeichnung für Fremdwörter**

**Zeitaufwand:** Ca. 2 Stunden

---

## 5. Allgemeine Best Practices der barrierearmen Web-Entwicklung

### 5.1 Semantisches HTML

**Prinzip:** Verwende HTML-Elemente entsprechend ihrer semantischen Bedeutung.

**Beispiele:**
- `<button>` für Buttons, nicht `<div>` oder `<a>` ohne href
- `<nav>` für Navigationen
- `<main>` für Hauptinhalt
- `<article>` für eigenständige Inhalte
- `<section>` für thematische Gruppierungen
- `<aside>` für ergänzende Inhalte

**Warum wichtig:** Screen Reader nutzen diese Struktur für effiziente Navigation.

---

### 5.2 Tastaturzugänglichkeit

**Prinzip:** Alle Funktionen müssen mit der Tastatur bedienbar sein.

**Regeln:**
- Tab-Reihenfolge logisch (DOM-Reihenfolge)
- Sichtbare Fokus-Indikatoren
- Enter aktiviert Links
- Leertaste aktiviert Buttons
- Escape schließt Modals/Overlays
- Pfeiltasten für Gruppen (z.B. Radio Buttons)

**Testen:** Ziehe den Mausstecker raus und navigiere die gesamte Website.

---

### 5.3 Ausreichende Farbkontraste

**Mindestanforderungen WCAG AA:**
- Normaler Text (< 18pt): 4.5:1
- Großer Text (≥ 18pt oder ≥ 14pt fett): 3:1
- UI-Komponenten und grafische Objekte: 3:1

**WCAG AAA (empfohlen):**
- Normaler Text: 7:1
- Großer Text: 4.5:1

**Tools:**
- WebAIM Contrast Checker
- Chrome DevTools Accessibility Panel
- Contrast Ratio by Lea Verou

---

### 5.4 Flexible Textgrößen

**Prinzip:** Text muss auf 200% vergrößerbar sein ohne Informationsverlust.

**Best Practices:**
- Verwende `rem` oder `em` statt `px`
- Verwende `clamp()` für responsive Schriftgrößen (bereits gut umgesetzt!)
- Vermeide feste Container-Höhen
- Teste mit Browser-Zoom auf 200%

**Bereits gut auf dieser Website:** Die Verwendung von `clamp()` in CSS-Variablen ist vorbildlich!

---

### 5.5 ARIA - Mit Bedacht verwenden

**Grundregeln:**
1. **Kein ARIA ist besser als schlechtes ARIA**
2. **Bevorzuge semantisches HTML**
3. **Verstecke dekorative Elemente:** `aria-hidden="true"`
4. **Verwende ARIA-Labels für Kontext:** `aria-label`, `aria-labelledby`
5. **Ankündige dynamische Änderungen:** `aria-live`

**Die 5 ARIA-Regeln:**
1. Nutze natives HTML wenn möglich
2. Ändere keine nativen Semantiken (außer du musst wirklich)
3. Alle interaktiven ARIA-Elemente müssen tastaturbedienbar sein
4. Verstecke Elemente nicht, wenn sie fokussierbar sind
5. Alle interaktiven Elemente müssen einen zugänglichen Namen haben

---

### 5.6 Formulare zugänglich gestalten

**Checkliste:**
- Jedes Input hat ein `<label>` mit `for`-Attribut
- Pflichtfelder markiert: `required` + visueller Indikator
- Fehlermeldungen mit `role="alert"` oder `aria-live="assertive"`
- Hilfetext mit `aria-describedby` verknüpfen
- Gruppiere verwandte Felder mit `<fieldset>` und `<legend>`
- Inline-Validierung mit klaren Fehlermeldungen

---

### 5.7 Bilder und Medien

**Alt-Text Richtlinien:**
- **Informative Bilder:** Beschreibe den Inhalt/die Funktion
- **Dekorative Bilder:** `alt=""` oder `aria-hidden="true"`
- **Komplexe Grafiken:** Kurzer alt-Text + Langbeschreibung
- **Funktionale Bilder (Links/Buttons):** Beschreibe die Aktion

**Videos/Audio:**
- Untertitel für Videos (nicht automatisch generiert)
- Transkripte für Audio
- Audiodeskription für wichtige visuelle Informationen

---

### 5.8 Responsive Design und Mobile Zugänglichkeit

**Best Practices:**
- Touch-Targets mindestens 44x44px (WCAG 2.1 Level AAA)
- Ausreichend Abstand zwischen interaktiven Elementen
- Keine Orientierungssperre (Portrait/Landscape beide unterstützen)
- Zoom nicht deaktivieren (`user-scalable=yes`)

---

### 5.9 Testing-Strategien

**Automatisierte Tools (finden ~30% der Probleme):**
- axe DevTools (Browser-Extension)
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse (in Chrome DevTools)
- pa11y (Command Line)

**Manuelle Tests (unverzichtbar):**
1. **Tastatur-Navigation:** Tab durch die gesamte Seite
2. **Screen Reader:** NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
3. **Zoom:** Teste bei 200% Vergrößerung
4. **Farbblindheit:** Simulatoren in DevTools
5. **Dark Mode:** Teste deine Kontraste

**Mit echten Nutzern:**
- Nichts ersetzt Tests mit Menschen mit Behinderungen
- User Testing mit diversen Nutzergruppen

---

### 5.10 Barrierefreiheit im Entwicklungsprozess

**Shift Left Ansatz:**
- Berücksichtige Accessibility von Anfang an
- Inkludiere in Wireframes und Designs
- Code Reviews sollten Accessibility prüfen
- Automatisierte Tests in CI/CD Pipeline

**Dokumentation:**
- Dokumentiere ARIA-Patterns
- Erstelle Accessibility-Richtlinien für das Team
- Führe ein VPAT (Voluntary Product Accessibility Template)

**Fortlaufende Verbesserung:**
- Regelmäßige Audits
- Nutzerfeedback sammeln
- Auf dem Laufenden bleiben (WCAG entwickelt sich weiter)

---

## 6. Nützliche Ressourcen

### Offizielle Standards
- **WCAG 2.1 Guideline:** https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA Authoring Practices:** https://www.w3.org/WAI/ARIA/apg/

### Deutsche Ressourcen
- **BIK BITV-Test:** https://www.bitvtest.de/
- **Aktion Mensch:** https://www.aktion-mensch.de/inklusion/barrierefreiheit/
- **BITV 2.0 (deutsche Verordnung):** https://www.gesetze-im-internet.de/bitv_2_0/

### Testing-Tools
- **axe DevTools:** https://www.deque.com/axe/devtools/
- **WAVE:** https://wave.webaim.org/
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Color Blind Simulator:** https://www.color-blindness.com/coblis-color-blindness-simulator/

### Lern-Ressourcen
- **MDN Web Docs - Accessibility:** https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **WebAIM:** https://webaim.org/
- **A11ycasts (YouTube):** https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g
- **The A11Y Project:** https://www.a11yproject.com/

### Communities
- **IAAP (International Association of Accessibility Professionals):** https://www.accessibilityassociation.org/
- **A11y Slack Community:** https://web-a11y.slack.com/

---

## 7. Fazit

Die Website "Tango in Tübingen" hat ein solides Fundament, benötigt aber wichtige Barrierefreiheitsverbesserungen, um WCAG 2.1 Level AA zu erreichen. Die größten Hebel sind:

1. **Semantische HTML-Struktur** - Relativ einfach umzusetzen, große Wirkung
2. **ARIA für dynamische Inhalte** - Wichtig für die JavaScript-basierten Features
3. **Tastaturzugänglichkeit** - Button-Elemente statt Links
4. **Visuelle Kontraste** - Einfache CSS-Anpassungen

**Positiv hervorzuheben:**
- Responsive Typografie mit `clamp()` ist vorbildlich
- Klare visuelle Hierarchie
- Gut strukturierter CSS-Code
- Schlanke, performante Codebasis

Mit den kritischen und hohen Prioritätsänderungen (ca. 6-7 Stunden Arbeit) kann die Website ein gutes Niveau an Barrierefreiheit erreichen. Die Website wird dann nicht nur rechtlich compliant, sondern auch für alle Nutzer besser bedienbar.

**Empfohlener Zeitplan:**
- **Woche 1:** Kritische Probleme (🔴)
- **Woche 2-3:** Hohe Priorität (🟠)
- **Monat 2:** Mittlere Priorität (🟡)
- **Laufend:** Best Practices und Optimierungen (🟢)

Bei Fragen oder Unklarheiten zu den Empfehlungen stehe ich gerne zur Verfügung!
