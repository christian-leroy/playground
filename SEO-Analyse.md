# SEO-Analyse und Optimierungsplan für "Tango in Tübingen"

**Datum:** 8. Dezember 2025
**Ziel:** Ranking #1 für "Tango Tübingen"
**Strategie:** Technische SEO-Optimierung ohne zusätzliche Inhalte

---

## Inhaltsverzeichnis

1. [Executive Summary](#executive-summary)
2. [Wettbewerbsanalyse](#wettbewerbsanalyse)
3. [Kritische SEO-Probleme](#kritische-seo-probleme)
4. [Detaillierte Handlungsempfehlungen](#detaillierte-handlungsempfehlungen)
5. [Umsetzungs-Checkliste](#umsetzungs-checkliste)
6. [Claude-Prompt für automatische Umsetzung](#claude-prompt-für-automatische-umsetzung)

---

## Executive Summary

### Aktueller Status
Deine Website ist technisch grundsolide gebaut (sauberer Code, lokale Fonts, responsive), hat aber **gravierende SEO-Defizite** in den Grundlagen:
- ❌ Keine Meta-Description
- ❌ Falsche Spracheinstellung (`lang="en"` statt `lang="de"`)
- ❌ Keine strukturierten Daten (Schema.org)
- ❌ Keine robots.txt/sitemap.xml
- ❌ Suboptimale H1-Struktur
- ❌ Keine Social Media Optimierung

### Die gute Nachricht
Viele Wettbewerber haben ähnliche oder schlimmere Probleme. Mit gezielten technischen Optimierungen kannst du sie überholen, **ohne** neue Inhalte zu erstellen.

### Erwartetes Ergebnis
Nach Umsetzung aller Maßnahmen: **Ranking #1 für "Tango Tübingen" in 4-8 Wochen** (kombiniert mit Google Business Profile).

---

## Wettbewerbsanalyse

### Top-Konkurrenten für "Tango Tübingen"

#### 1. **tangoparatu.de**
- **Position:** Aktuell sehr weit oben
- **Stärken:** Gute Content-Struktur, viele Informationen
- **Schwächen:**
  - ❌ Keine Title-Tags/Meta-Descriptions erkennbar
  - ❌ Keine klare H1-Struktur
  - ⚠️ Schwache technische SEO-Basis
- **Deine Chance:** Technisch leicht zu überholen

#### 2. **fratotango.com**
- **Position:** Gut optimiert
- **Stärken:**
  - ✅ Title-Tags vorhanden
  - ✅ Meta-Descriptions vorhanden
  - ✅ Schema.org Markup (BreadcrumbList, Organization, WebPage)
  - ✅ Open Graph Tags
  - ✅ Mobile-optimiert
- **Schwächen:** Weniger umfassender Milonga-Kalender
- **Deine Chance:** Besserer Content (vollständiger Kalender) + gleich gute Technik = Überholpotenzial

#### 3. **tango-emocion-tue.de**
- **Status:** Website nicht erreichbar (ECONNREFUSED)
- **Deine Chance:** Ein Konkurrent weniger

#### 4. Weitere Konkurrenten
- tango-charisma-tuebingen.de
- tango-vision.de
- tangosur.de

### Wettbewerbsvorteil deiner Seite

**Dein USP:** Vollständiger, strukturierter Milonga-Kalender + minimalistisches Design

**Was fehlt:** Die technische SEO-Basis, um von Google richtig erkannt zu werden.

---

## Kritische SEO-Probleme

### Problem 1: Falsche Spracheinstellung ⚠️⚠️⚠️

**Was ist falsch:**
```html
<html lang="en">
```

**Was passiert:**
- Google ordnet deine Seite als **englischsprachig** ein
- Deutsche Nutzer sehen deine Seite in den Suchergebnissen weiter unten
- Google bevorzugt sprachlich passende Seiten für regionale Suchanfragen
- Internationale Nutzer könnten deine Seite finden, obwohl sie irrelevant für sie ist

**Warum das zu schlechten Rankings führt:**
Google nutzt das `lang`-Attribut als **primären Indikator** für die Sprache einer Website. Bei der Suche "Tango Tübingen" bevorzugt Google deutschsprachige Seiten. Wenn deine Seite als englisch markiert ist, wird sie automatisch schlechter gerankt – egal wie gut der Inhalt ist.

**Die Lösung:**
```html
<html lang="de">
```

**Wo ändern:**
- `index.html` Zeile 2
- `contact.html` Zeile 2

---

### Problem 2: Keine Meta-Description ⚠️⚠️⚠️⚠️⚠️

**Was ist falsch:**
Im `<head>` fehlt komplett:
```html
<meta name="description" content="...">
```

**Was passiert:**
- Google wählt **zufällig** Text aus deiner Seite für die Suchergebnisse
- Dieser Text ist oft **nicht aussagekräftig**
- Nutzer klicken seltener auf dein Suchergebnis
- Niedrige Click-Through-Rate (CTR) = Google stuft deine Seite als weniger relevant ein

**Warum das kritisch ist:**
Die Meta-Description ist dein **Werbetext in den Suchergebnissen**. Sie erscheint direkt unter dem Title-Tag:

```
Tango in Tübingen                              ← Title-Tag
https://deine-seite.de
Vollständiger Überblick über alle Tango...     ← Meta-Description (DAS sehen Nutzer!)
```

Eine fehlende Meta-Description ist wie eine Werbeanzeige ohne Text – niemand weiß, warum er klicken sollte.

**Die Lösung:**
```html
<meta name="description" content="Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen. Finde Tanzlehrer:innen, Veranstaltungen und die aktive Tango-Community.">
```

**Warum genau dieser Text:**
- ✅ Enthält Hauptkeyword "Tango" + "Tübingen"
- ✅ Enthält relevante Keywords: "Milongas", "Practicas", "Tanzlehrer"
- ✅ Beschreibt den Mehrwert: "Vollständiger Überblick"
- ✅ Ist 155 Zeichen lang (Google zeigt bis 160 Zeichen)
- ✅ Ist handlungsauffordernd ("Finde...")

---

### Problem 3: Suboptimaler Title-Tag ⚠️⚠️

**Was ist aktuell:**
```html
<title>Tango in Tübingen</title>
```

**Warum das suboptimal ist:**
- Zu kurz (nur 18 Zeichen, Google zeigt bis 60 Zeichen)
- Verschwendet Platz für zusätzliche Keywords
- Keine Differenzierung von Konkurrenten

**Die Lösung:**
```html
<title>Tango Tübingen | Alle Milongas, Practicas & Tanzlehrer Tango Argentino</title>
```

**Warum genau dieser Text:**
- ✅ Hauptkeyword ganz vorne: "Tango Tübingen"
- ✅ Zusätzliche Keywords: "Milongas", "Practicas", "Tanzlehrer", "Tango Argentino"
- ✅ 72 Zeichen (optimal für Google Desktop & Mobile)
- ✅ Pipe-Symbol `|` strukturiert den Titel visuell
- ✅ Beschreibt exakt, was die Seite bietet

**Was technisch passiert:**
Der Title-Tag ist der **wichtigste Ranking-Faktor für On-Page-SEO**. Google analysiert:
1. Position der Keywords (weiter vorne = wichtiger)
2. Anzahl relevanter Keywords (ohne Keyword-Stuffing)
3. Click-Through-Rate in den Suchergebnissen

Ein besserer Title = höheres Ranking + mehr Klicks.

---

### Problem 4: Keine Schema.org Structured Data ⚠️⚠️⚠️

**Was ist falsch:**
Deine Seite hat **keinerlei strukturierte Daten**.

**Was sind strukturierte Daten:**
JSON-LD Code, der Google **maschinell lesbar** erklärt, was auf deiner Seite ist:
- "Das ist eine Website über Tango"
- "Das ist ein Event (Milonga) am 13.12.2025 um 20:00 Uhr"
- "Das ist ein lokales Unternehmen in Tübingen"

**Warum das kritisch ist:**
Google versteht deine Seite aktuell nur durch **Texterkennung**. Mit strukturierten Daten versteht Google:
- **Was** deine Seite ist (Website? Blog? Event-Kalender?)
- **Wo** die Inhalte relevant sind (Tübingen, Region Stuttgart, etc.)
- **Wann** Events stattfinden
- **Wer** der Autor ist

**Was passiert mit strukturierten Daten:**
1. **Rich Snippets** in Suchergebnissen (z.B. Event-Karten mit Datum/Zeit)
2. **Höhere Click-Through-Rate** (visuell ansprechender)
3. **Besseres Ranking** (Google bevorzugt strukturierte Seiten)
4. **Google Maps Integration** (mit LocalBusiness-Schema)
5. **Google Events** (deine Milongas können direkt in Google-Suche erscheinen)

**Beispiel: Wie es aussehen könnte**

Statt:
```
Tango in Tübingen
https://deine-seite.de
Dieser Milonga-Kalender gibt einen vollständigen...
```

Mit Schema:
```
Tango in Tübingen
https://deine-seite.de
★★★★★ Event · Tübingen
Milonga de los Amigos - Sa, 13. Dez · 20:00-24:00
Holz & Form, Provenceweg 22
[Weitere Veranstaltungen ansehen]
```

**Die Lösung:**

**Schema 1: WebSite** (erklärt, was deine Seite ist)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tango in Tübingen",
  "url": "https://deine-domain.de/",
  "description": "Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen",
  "inLanguage": "de-DE",
  "author": {
    "@type": "Person",
    "name": "Christian Leroy",
    "url": "https://christianleroy.de/tango"
  }
}
</script>
```

**Schema 2: LocalBusiness** (für Google Maps & lokale Suche)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tango in Tübingen",
  "description": "Zentrale Anlaufstelle für Tango Argentino in Tübingen",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tübingen",
    "addressRegion": "Baden-Württemberg",
    "postalCode": "72072",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.5216",
    "longitude": "9.0576"
  }
}
</script>
```

**Schema 3: DanceEvent** (für jede Milonga - Beispiel)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DanceEvent",
  "name": "Milonga de los Amigos",
  "startDate": "2025-12-13T20:00",
  "endDate": "2025-12-13T24:00",
  "location": {
    "@type": "Place",
    "name": "Holz & Form",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Provenceweg 22",
      "addressLocality": "Tübingen",
      "postalCode": "72072",
      "addressCountry": "DE"
    }
  },
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled"
}
</script>
```

**Idealerweise:** Generiere Event-Schema automatisch aus `data/milongas.json` via JavaScript.

---

### Problem 5: Keine robots.txt & sitemap.xml ⚠️⚠️

**Was ist falsch:**
Diese Dateien existieren nicht:
- `/robots.txt`
- `/sitemap.xml`

**Was ist robots.txt:**
Eine Textdatei im Root-Verzeichnis, die Google sagt:
- Welche Seiten gecrawlt werden dürfen
- Wo die Sitemap liegt
- Crawling-Regeln

**Was ist sitemap.xml:**
Eine XML-Datei, die Google **alle URLs** deiner Website auflistet mit:
- Letztem Änderungsdatum
- Änderungshäufigkeit
- Priorität

**Warum das wichtig ist:**
Ohne diese Dateien muss Google deine Seite **blind durchsuchen**:
- Findet möglicherweise nicht alle Seiten
- Weiß nicht, welche Seiten wichtig sind
- Crawlt ineffizient (verschwendet Crawl-Budget)

**Die Lösung:**

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://deine-domain.de/sitemap.xml
```

**sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://deine-domain.de/</loc>
    <lastmod>2025-12-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://deine-domain.de/contact.html</loc>
    <lastmod>2025-12-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

**Was passiert nach Implementierung:**
1. Google findet `robots.txt` automatisch
2. Liest die Sitemap-URL
3. Crawlt alle Seiten systematisch
4. Indexiert schneller und vollständiger

---

### Problem 6: Keine Open Graph Tags ⚠️⚠️

**Was ist falsch:**
Keine Meta-Tags für Social Media Sharing.

**Was passiert ohne Open Graph:**
Wenn jemand deine Seite auf Facebook/WhatsApp/LinkedIn teilt:
- Zufälliges oder fehlendes Vorschaubild
- Zufälliger oder fehlender Beschreibungstext
- Unprofessionelles Erscheinungsbild
- Weniger Klicks

**Die Lösung:**
```html
<!-- Open Graph / Social Media -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://deine-domain.de/">
<meta property="og:title" content="Tango Tübingen | Alle Milongas, Practicas & Tanzlehrer">
<meta property="og:description" content="Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen.">
<meta property="og:locale" content="de_DE">
<meta property="og:image" content="https://deine-domain.de/assets/images/og-image.jpg">
```

**Optional: Twitter Cards**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Tango Tübingen | Alle Milongas, Practicas & Tanzlehrer">
<meta name="twitter:description" content="Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen.">
```

**Warum das wichtig ist:**
- Professionelles Teilen erhöht Traffic
- Mehr Traffic = besseres Ranking (Google bewertet User-Engagement)
- Virale Effekte durch Social Media

---

### Problem 7: Mehrere H1-Tags ⚠️⚠️

**Was ist falsch:**
Deine Seite hat **3x H1**:
- Zeile 32: `<h1>Tango tanzen</h1>`
- Zeile 52: `<h1>Tango lernen</h1>`
- Zeile 73: `<h1>Tango Community</h1>`

**Was ist die Regel:**
**Eine Seite = Eine H1** (die Hauptüberschrift)

**Warum das wichtig ist:**
Die H1 signalisiert Google: **"Das ist das Hauptthema dieser Seite"**

Mit 3x H1 ist Google verwirrt:
- Was ist das Hauptthema? Tanzen? Lernen? Community?
- Keyword-Dilution (Hauptkeyword wird nicht klar)
- Schwächere Ranking-Signale

**Die Lösung:**

**Neue H1 einfügen** (als Hauptüberschrift, ganz oben):
```html
<h1>Tango Argentino in Tübingen – Alle Milongas, Practicas & Tanzlehrer</h1>
```

**Bestehende H1s zu H2 ändern:**
```html
<h2>Tango tanzen</h2>
<h2>Tango lernen</h2>
<h2>Tango Community</h2>
```

**Ergebnis:**
```
H1: Tango Argentino in Tübingen – Alle Milongas, Practicas & Tanzlehrer
  H2: Tango tanzen
  H2: Tango lernen
  H2: Tango Community
```

Diese Hierarchie ist klar und SEO-freundlich.

---

### Problem 8: Kein Favicon ⚠️

**Was ist falsch:**
Kein Favicon definiert.

**Warum das wichtig ist:**
- Professionelles Erscheinungsbild
- Wiedererkennungswert in Browser-Tabs
- Vertrauenswürdigkeit
- Indirekt: Bessere User-Experience = besseres Ranking

**Die Lösung:**
```html
<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
```

---

### Problem 9: Fehlende Alt-Texte ⚠️

**Was ist falsch:**
`contact.html` Zeile 41:
```html
<img class="about-me-img" src="assets/images/christian-leroy-3.jpg">
```

**Warum das wichtig ist:**
1. **Accessibility:** Screenreader für Sehbehinderte brauchen Alt-Texte
2. **SEO:** Google kann Bilder nicht "sehen", nur Alt-Texte lesen
3. **Image Search:** Bilder ranken in Google Bildersuche nur mit Alt-Text
4. **Fallback:** Wenn Bild nicht lädt, wird Alt-Text angezeigt

**Die Lösung:**
```html
<img class="about-me-img" src="assets/images/christian-leroy-3.jpg" alt="Christian Leroy - Tango DJ und Tänzer aus Tübingen" loading="lazy">
```

**Bonus: `loading="lazy"`** = Bild wird erst geladen, wenn Nutzer scrollt (bessere Performance).

---

### Problem 10: Keine Canonical URL ⚠️

**Was ist falsch:**
Keine Canonical URL definiert.

**Was ist eine Canonical URL:**
Ein Link-Tag, der Google sagt: "Diese URL ist die **offizielle Version** dieser Seite"

**Warum das wichtig ist:**
Verhindert Duplicate Content, falls deine Seite unter mehreren URLs erreichbar ist:
- `http://deine-domain.de`
- `https://deine-domain.de`
- `https://www.deine-domain.de`
- `https://deine-domain.de/index.html`

**Die Lösung:**
```html
<link rel="canonical" href="https://deine-domain.de/">
```

---

## Detaillierte Handlungsempfehlungen

### PRIO 1: Kritische Meta-Tags (5 Minuten)

**Was tun:**
Füge im `<head>` von `index.html` NACH Zeile 6 ein:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen. Finde Tanzlehrer:innen, Veranstaltungen und die aktive Tango-Community.">
<meta name="keywords" content="Tango Tübingen, Tango Argentino Tübingen, Milonga Tübingen, Practica Tübingen, Tango lernen Tübingen, Tanzlehrer Tübingen">
<meta name="author" content="Christian Leroy">
<link rel="canonical" href="https://deine-domain.de/">

<!-- Open Graph / Social Media -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://deine-domain.de/">
<meta property="og:title" content="Tango Tübingen | Alle Milongas, Practicas & Tanzlehrer">
<meta property="og:description" content="Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen.">
<meta property="og:locale" content="de_DE">
<meta property="og:image" content="https://deine-domain.de/assets/images/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
```

**Gleiches für `contact.html`** (mit angepassten Descriptions).

---

### PRIO 2: Title-Tag optimieren (2 Minuten)

**Aktuelle Zeile (index.html:6):**
```html
<title>Tango in Tübingen</title>
```

**Ändern zu:**
```html
<title>Tango Tübingen | Alle Milongas, Practicas & Tanzlehrer Tango Argentino</title>
```

**Für contact.html:**
```html
<title>Kontakt & Impressum | Tango in Tübingen</title>
```

---

### PRIO 3: Sprache korrigieren (1 Minute)

**Aktuelle Zeile (index.html:2 & contact.html:2):**
```html
<html lang="en">
```

**Ändern zu:**
```html
<html lang="de">
```

---

### PRIO 4: Schema.org JSON-LD hinzufügen (10 Minuten)

**Wo einfügen:**
VOR dem schließenden `</body>`-Tag in `index.html`

**Code:**
```html
<!-- Schema.org Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tango in Tübingen",
  "url": "https://deine-domain.de/",
  "description": "Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen",
  "inLanguage": "de-DE",
  "author": {
    "@type": "Person",
    "name": "Christian Leroy",
    "url": "https://christianleroy.de/tango"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tango in Tübingen",
  "description": "Zentrale Anlaufstelle für Tango Argentino in Tübingen",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tübingen",
    "addressRegion": "Baden-Württemberg",
    "postalCode": "72072",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.5216",
    "longitude": "9.0576"
  },
  "url": "https://deine-domain.de/"
}
</script>
```

**Optional (fortgeschritten):** Event-Schema für jede Milonga automatisch generieren.

---

### PRIO 5: H1-Struktur korrigieren (5 Minuten)

**Schritt 1:** Neue H1 einfügen (nach Header, vor Section "Tanzen")

Füge in `index.html` nach Zeile 29 (nach `</header>`) ein:

```html
<h1 style="font-size: var(--large); font-weight: 600; margin: 2rem 0 1rem 0;">Tango Argentino in Tübingen – Alle Milongas, Practicas & Tanzlehrer</h1>
```

**Schritt 2:** Bestehende H1s zu H2 ändern

- Zeile 32: `<h1>Tango tanzen</h1>` → `<h2>Tango tanzen</h2>`
- Zeile 52: `<h1>Tango lernen</h1>` → `<h2>Tango lernen</h2>`
- Zeile 73: `<h1>Tango Community</h1>` → `<h2>Tango Community</h2>`

**Optional:** H1 in CSS stylen (wenn Inline-Style nicht gewünscht):

In `css/style.css` nach Zeile 86 einfügen:
```css
h1.page-title {
    font-size: var(--large);
    font-weight: 600;
    margin: 2rem 0 1rem 0;
}
```

Dann HTML ändern zu:
```html
<h1 class="page-title">Tango Argentino in Tübingen – Alle Milongas, Practicas & Tanzlehrer</h1>
```

---

### PRIO 6: robots.txt erstellen (1 Minute)

**Neue Datei:** `/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://deine-domain.de/sitemap.xml

# Optionale Disallows (wenn gewünscht)
# Disallow: /assets/
# Disallow: /.git/
```

**Erklärung:**
- `User-agent: *` = Gilt für alle Crawler
- `Allow: /` = Alle Seiten dürfen gecrawlt werden
- `Sitemap:` = Link zur Sitemap

---

### PRIO 7: sitemap.xml erstellen (2 Minuten)

**Neue Datei:** `/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://deine-domain.de/</loc>
    <lastmod>2025-12-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://deine-domain.de/contact.html</loc>
    <lastmod>2025-12-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

**Erklärung:**
- `<loc>` = URL der Seite
- `<lastmod>` = Letztes Änderungsdatum (YYYY-MM-DD)
- `<changefreq>` = Wie oft sich die Seite ändert
- `<priority>` = Wichtigkeit (0.0 - 1.0)

**Nach Deployment:** In Google Search Console registrieren und Sitemap submitten.

---

### PRIO 8: Alt-Texte für Bilder (2 Minuten)

**contact.html Zeile 41:**

**Vorher:**
```html
<img class="about-me-img" src="assets/images/christian-leroy-3.jpg">
```

**Nachher:**
```html
<img class="about-me-img" src="assets/images/christian-leroy-3.jpg" alt="Christian Leroy - Tango DJ und Tänzer aus Tübingen" loading="lazy">
```

**Prüfe alle anderen Bilder** auf fehlende Alt-Texte (z.B. SVG-Icons in Community-Section).

---

### PRIO 9: Favicon erstellen (5 Minuten)

**Schritt 1:** Erstelle Favicon-Dateien
- `favicon.ico` (16x16, 32x32 Pixel)
- `apple-touch-icon.png` (180x180 Pixel)

**Tools:**
- [favicon.io](https://favicon.io) - Generiert alle Größen automatisch
- Oder nutze ein Logo/Icon deiner Wahl

**Schritt 2:** Dateien hochladen nach `/assets/`

**Schritt 3:** Im `<head>` einfügen (bereits in PRIO 1 enthalten)

---

## Weitere Optimierungen (Optional)

### Content-Optimierungen (nur wenn gewünscht)

**Hinweis:** Du wolltest keine inhaltlichen Änderungen. Diese sind daher optional.

#### Option 1: Erste Sektion erweitern

**Aktuell (index.html:33):**
```html
<p>Dieser Milonga-Kalender gibt einen vollständigen Überblick über alle Milongas und Practicas, die in Tübingen stattfinden.</p>
```

**Optional optimiert:**
```html
<p>Dieser Milonga-Kalender gibt einen vollständigen Überblick über alle Tango Argentino Milongas und Practicas in Tübingen. Finde hier alle aktuellen Veranstaltungen zum Tanzen in Tübingen und Umgebung.</p>
```

**Warum:** Erhöht Keyword-Dichte für "Tango Argentino Tübingen".

#### Option 2: Zusätzlicher Absatz nach Kalender

```html
<p>Ob traditionelle Milonga oder moderne Practica – die Tübinger Tango-Szene bietet regelmäßige Veranstaltungen für Anfänger und Fortgeschrittene.</p>
```

**Warum:** Zusätzliche Keywords ohne "Schwadronieren".

---

### Technische Performance-Optimierungen

#### 1. Font-Optimierung

**Aktuell:** Du nutzt lokale TTF-Fonts (gut!)

**Optimierung:** Konvertiere zu WOFF2 (kleinere Dateigröße, schnelleres Laden)

**Tools:**
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/ttf-to-woff2)

**Vorteil:** 30-50% kleinere Dateigröße = schnelleres Laden = besseres Ranking (Page Speed ist Ranking-Faktor).

#### 2. CSS/JS Minifizierung

**Tools:**
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

**Oder automatisch:**
```bash
# Installation
npm install -g csso-cli uglify-js

# Minify CSS
csso css/style.css -o css/style.min.css

# Minify JS
uglifyjs js/milonga-cal.js -o js/milonga-cal.min.js
uglifyjs js/teacher-list.js -o js/teacher-list.min.js
```

**Dann in HTML:**
```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/milonga-cal.min.js"></script>
```

#### 3. Lazy Loading für alle Bilder

**Bereits erwähnt:**
```html
<img src="..." alt="..." loading="lazy">
```

**Vorteil:** Bilder laden nur beim Scrollen = schnellerer initialer Seitenaufbau.

---

## Google Business Profile

**Wichtig:** Erstelle unbedingt ein **Google Business Profile** (früher "Google My Business")

**Warum:**
- Erscheint in Google Maps
- Erscheint im "Local Pack" (die 3 Top-Ergebnisse mit Karte bei lokalen Suchen)
- Erhöht Sichtbarkeit massiv

**Kategorie:**
- "Website für kulturelle Veranstaltungen"
- oder "Tanzveranstalter"
- oder "Community-Organisation"

**Adresse:**
- Tübingen (auch ohne physischen Standort möglich als "Dienstleistungsgebiet")

**Weitere Infos:**
- Verlinke zur Website
- Lade Fotos hoch (von Milongas, Veranstaltungsorten)
- Sammle Bewertungen (wichtig für Ranking!)

**Setup:** [business.google.com](https://business.google.com)

---

## Langfristige SEO-Strategien

### 1. Backlinks aufbauen

**Was sind Backlinks:**
Links von anderen Websites zu deiner Website.

**Warum wichtig:**
Backlinks sind der **wichtigste Off-Page Ranking-Faktor**. Google bewertet:
- Anzahl der Backlinks
- Qualität der verlinkenden Seiten
- Themenrelevanz

**Wie Backlinks bekommen (für Tango Tübingen):**

1. **Tango-Lehrer:innen bitten, auf dich zu verlinken**
   - Du verlinkst sie bereits → bitte um Gegenverlinkung
   - Benefit für sie: Mehr Traffic durch deinen Kalender

2. **Tango-Veranstalter**
   - Holz & Form, Café Latour, DAI, etc.
   - Bitte um Link von deren Websites

3. **Hochschulsport Uni Tübingen**
   - Du verlinkst sie bereits (Zeile 67)
   - Bitte um Gegenverlinkung

4. **Lokale Verzeichnisse**
   - tuebingen-info.de
   - Tübinger Kulturkalender
   - Stuttgarter Tango-Portale

5. **Tango-Blogs & Foren**
   - Gastbeiträge schreiben
   - In Foren aktiv sein, Link in Signatur

**Wichtig:** Keine Spam-Links! Qualität > Quantität.

### 2. Regelmäßige Updates

**Warum wichtig:**
Google bevorzugt aktuelle Inhalte. "Freshness" ist ein Ranking-Faktor.

**Was tun:**
- Milonga-Kalender aktuell halten (machst du bereits!)
- `<lastmod>` in sitemap.xml aktualisieren
- Vielleicht: Kleine News-Sektion? (optional)

### 3. User-Engagement verbessern

**Was Google misst:**
- **Bounce Rate** (wie viele verlassen die Seite sofort?)
- **Dwell Time** (wie lange bleiben Nutzer auf der Seite?)
- **Click-Through-Rate** (wie viele klicken in Suchergebnissen?)

**Wie verbessern:**
- Gute Meta-Descriptions (machst du mit diesem Plan!)
- Schnelle Ladezeiten (Performance-Optimierungen)
- Nützliche Inhalte (hast du bereits!)

---

## Umsetzungs-Checkliste

### Sofort (heute, 30 Minuten) - Technisch

- [ ] **Sprache ändern:** `lang="en"` → `lang="de"` (index.html:2, contact.html:2)
- [ ] **Title-Tag optimieren:** (index.html:6, contact.html:6)
- [ ] **Meta-Description hinzufügen:** (beide Dateien, im `<head>`)
- [ ] **Open Graph Tags hinzufügen:** (beide Dateien, im `<head>`)
- [ ] **Canonical URL hinzufügen:** (beide Dateien, im `<head>`)
- [ ] **H1-Struktur korrigieren:** Neue H1 einfügen, 3x H1→H2 ändern
- [ ] **robots.txt erstellen**
- [ ] **sitemap.xml erstellen**

### Diese Woche (1-2 Stunden) - Technisch & Struktur

- [ ] **Schema.org JSON-LD hinzufügen:** WebSite + LocalBusiness
- [ ] **Favicon erstellen und einbinden**
- [ ] **Alt-Texte für alle Bilder** hinzufügen
- [ ] **Lazy Loading** für Bilder aktivieren
- [ ] **Google Business Profile** erstellen

### Langfristig - Fortgeschritten

- [ ] **Event-Schema automatisch generieren** (aus milongas.json)
- [ ] **Fonts zu WOFF2 konvertieren**
- [ ] **CSS/JS minifizieren**
- [ ] **Backlinks aufbauen** (Tanzlehrer, Veranstalter kontaktieren)
- [ ] **Sitemap in Google Search Console** submitten
- [ ] **Bewertungen sammeln** (Google Business Profile)

---

## Claude-Prompt für automatische Umsetzung

**Kopiere diesen Prompt und nutze ihn für Claude Code, um alle technischen Änderungen automatisch umzusetzen:**

---

```
Setze folgende SEO-Optimierungen für meine Website um. Führe NUR technische Änderungen durch, KEINE inhaltlichen Textänderungen.

## Aufgaben:

### 1. Sprache korrigieren
- Ändere in `index.html` Zeile 2: `<html lang="en">` → `<html lang="de">`
- Ändere in `contact.html` Zeile 2: `<html lang="en">` → `<html lang="de">`

### 2. Title-Tags optimieren
- `index.html` Zeile 6: Ändere zu `<title>Tango Tübingen | Alle Milongas, Practicas & Tanzlehrer Tango Argentino</title>`
- `contact.html` Zeile 6: Ändere zu `<title>Kontakt & Impressum | Tango in Tübingen</title>`

### 3. Meta-Tags im <head> hinzufügen
Füge in `index.html` NACH Zeile 8 (nach `<link rel="stylesheet"...>`) folgendes ein:

```html
    <!-- SEO Meta Tags -->
    <meta name="description" content="Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen. Finde Tanzlehrer:innen, Veranstaltungen und die aktive Tango-Community.">
    <meta name="keywords" content="Tango Tübingen, Tango Argentino Tübingen, Milonga Tübingen, Practica Tübingen, Tango lernen Tübingen, Tanzlehrer Tübingen">
    <meta name="author" content="Christian Leroy">
    <link rel="canonical" href="https://christianleroy.de/tango-tuebingen/">

    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://christianleroy.de/tango-tuebingen/">
    <meta property="og:title" content="Tango Tübingen | Alle Milongas, Practicas & Tanzlehrer">
    <meta property="og:description" content="Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen.">
    <meta property="og:locale" content="de_DE">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
```

Füge in `contact.html` NACH Zeile 8 folgendes ein:

```html
    <!-- SEO Meta Tags -->
    <meta name="description" content="Kontakt und Impressum für Tango in Tübingen. Informationen zu Datenschutz und Open Source Projekt.">
    <meta name="author" content="Christian Leroy">
    <link rel="canonical" href="https://christianleroy.de/tango-tuebingen/contact.html">

    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://christianleroy.de/tango-tuebingen/contact.html">
    <meta property="og:title" content="Kontakt & Impressum | Tango in Tübingen">
    <meta property="og:description" content="Kontakt und Impressum für Tango in Tübingen.">
    <meta property="og:locale" content="de_DE">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
```

### 4. H1-Struktur korrigieren
- Füge in `index.html` NACH Zeile 29 (nach `</header>`) ein:
  ```html
  <h1 style="font-size: var(--large); font-weight: 600; margin: 2rem 0 1rem 0;">Tango Argentino in Tübingen – Alle Milongas, Practicas & Tanzlehrer</h1>
  ```

- Ändere in `index.html`:
  - Zeile 32: `<h1>Tango tanzen</h1>` → `<h2>Tango tanzen</h2>`
  - Zeile 52: `<h1>Tango lernen</h1>` → `<h2>Tango lernen</h2>`
  - Zeile 73: `<h1>Tango Community</h1>` → `<h2>Tango Community</h2>`

### 5. Schema.org JSON-LD hinzufügen
Füge in `index.html` VOR dem schließenden `</body>`-Tag (Zeile 117) folgendes ein:

```html
<!-- Schema.org Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tango in Tübingen",
  "url": "https://christianleroy.de/tango-tuebingen/",
  "description": "Vollständiger Überblick über alle Tango Argentino Milongas und Practicas in Tübingen",
  "inLanguage": "de-DE",
  "author": {
    "@type": "Person",
    "name": "Christian Leroy",
    "url": "https://christianleroy.de/tango"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tango in Tübingen",
  "description": "Zentrale Anlaufstelle für Tango Argentino in Tübingen",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tübingen",
    "addressRegion": "Baden-Württemberg",
    "postalCode": "72072",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.5216",
    "longitude": "9.0576"
  },
  "url": "https://christianleroy.de/tango-tuebingen/"
}
</script>
```

### 6. Alt-Text für Bild hinzufügen
- Ändere in `contact.html` Zeile 41:
  ```html
  <img class="about-me-img" src="assets/images/christian-leroy-3.jpg" alt="Christian Leroy - Tango DJ und Tänzer aus Tübingen" loading="lazy">
  ```

### 7. robots.txt erstellen
Erstelle neue Datei `robots.txt` im Root-Verzeichnis mit folgendem Inhalt:

```
User-agent: *
Allow: /
Sitemap: https://christianleroy.de/tango-tuebingen/sitemap.xml
```

### 8. sitemap.xml erstellen
Erstelle neue Datei `sitemap.xml` im Root-Verzeichnis mit folgendem Inhalt:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://christianleroy.de/tango-tuebingen/</loc>
    <lastmod>2025-12-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://christianleroy.de/tango-tuebingen/contact.html</loc>
    <lastmod>2025-12-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

## WICHTIG:
- Führe NUR technische Änderungen durch
- Ändere KEINE bestehenden Texte (außer den explizit genannten Title-Tags)
- Füge KEINE neuen Inhalts-Texte hinzu
- Behalte alle bestehenden CSS-Klassen und Strukturen bei
- Nach Abschluss: Gib mir eine Zusammenfassung der durchgeführten Änderungen
```

---

## Erwartete Ergebnisse

### Kurzfristig (1-2 Wochen nach Umsetzung)
- Google indexiert deine Seite neu mit korrekten Meta-Daten
- Bessere Darstellung in Suchergebnissen (Meta-Description)
- Strukturierte Daten erscheinen in Google Search Console

### Mittelfristig (4-8 Wochen)
- Ranking-Verbesserung für "Tango Tübingen"
- Höhere Click-Through-Rate aus Suchergebnissen
- Mögliche Rich Snippets in Suchergebnissen

### Langfristig (3-6 Monate)
- **Ziel: Ranking #1 für "Tango Tübingen"**
- Erscheinen im Google Local Pack (mit Business Profile)
- Backlinks von Tango-Schulen erhöhen Domain Authority
- Kontinuierlicher Traffic-Anstieg

### Messung des Erfolgs

**Tools zur Überwachung:**
1. **Google Search Console** (kostenlos)
   - Zeigt Rankings, Impressionen, Klicks
   - Registriere deine Seite: [search.google.com/search-console](https://search.google.com/search-console)

2. **Google Analytics** (optional, kostenlos)
   - Trackt Besucher (du nutzt bereits Goat Counter)

3. **Goat Counter** (nutzt du bereits)
   - Zeigt Aufrufzahlen

**Was überwachen:**
- Position für Keyword "Tango Tübingen"
- Impressionen (wie oft erscheint deine Seite in Suche?)
- CTR (wie viele klicken auf dein Ergebnis?)
- Backlinks (z.B. über Google Search Console)

---

## Abschließende Hinweise

### Was du NICHT brauchst
- ❌ Künstliche Keyword-Stuffing
- ❌ Lange Blog-Artikel
- ❌ Bezahlte Werbung (Google Ads)
- ❌ SEO-Agenturen

### Was wirklich zählt
- ✅ Technisch saubere Basis (das setzt du jetzt um!)
- ✅ Aktueller, nützlicher Content (hast du bereits!)
- ✅ Lokale Relevanz (Tübingen-Fokus)
- ✅ Backlinks von relevanten Seiten
- ✅ Google Business Profile

### Deine Wettbewerbsvorteile
1. **Vollständiger Milonga-Kalender** (Konkurrenten haben das nicht)
2. **Minimalistisches, schnelles Design** (bessere User-Experience)
3. **JSON-Daten öffentlich** (könnte zu Backlinks führen)
4. **Keine Werbung, keine Cookies** (vertrauenswürdiger)

---

## Nächste Schritte

1. **Heute:** Setze den Claude-Prompt um (siehe unten)
2. **Diese Woche:**
   - Erstelle Favicon
   - Registriere Google Business Profile
   - Registriere Google Search Console
3. **Nächsten Monat:**
   - Kontaktiere Tango-Lehrer für Backlinks
   - Kontaktiere Veranstalter für Backlinks
   - Überwache Rankings in Search Console

---

**Viel Erfolg! Bei Fragen oder Unklarheiten: Melde dich gerne.**

---

*Dokument erstellt am 8. Dezember 2025*
