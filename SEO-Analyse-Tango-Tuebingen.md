# SEO-Analyse: tangotübingen.de
**Ziel:** Platz 1 bei Google für "Tango Tübingen"
**Analysedatum:** 11. Dezember 2025

---

## Executive Summary

Die Website hat bereits eine solide technische SEO-Grundlage und liegt besser als die meisten Konkurrenten. Um für "Tango Tübingen" auf Platz 1 zu ranken, fokussieren wir uns auf **technische SEO-Optimierung ohne Content-Änderungen**.

**USP der Website:** Absolute Klarheit und Reduzierung - dieser minimalistische Ansatz wird beibehalten
**Status:** Gute technische Basis vorhanden, Optimierungspotenzial bei Meta-Tags, strukturierten Daten und Off-Page-SEO
**Geschätzte Wettbewerbsintensität:** Mittel (mehrere lokale Anbieter, aber schwache SEO-Implementierung)

**Constraint:** Keine Content-Erweiterungen - die Klarheit der Website ist ihr Alleinstellungsmerkmal

---

## 1. Konkurrenzanalyse

### Top-Konkurrenten für "Tango Tübingen"

| Website | Title-Tag | Meta Description | H1-Strategie | Schema.org | Bewertung |
|---------|-----------|------------------|--------------|------------|-----------|
| **tangoparatu.de** | Nicht erkennbar | Fehlt | Keine klare H1 | Fehlt | Sehr schwach |
| **tango-emocion-tue.de** | - | - | - | - | Server-Probleme |
| **fratotango.com** | "Home - FraTo Tango Tübingen" | Zu lang, unfokussiert | "WELCOME TO" | Unklar | Mittelmäßig |

**Erkenntnisse:**
- Konkurrenz hat überwiegend schwache SEO-Implementierung
- Wenig bis keine strukturierten Daten (Schema.org)
- Generische oder fehlende Meta-Informationen
- **Deine Website hat bereits einen technischen Vorsprung**

---

## 2. Aktuelle Stärken deiner Website ✓

### Technisches SEO

- **Sitemap.xml vorhanden:** Gut strukturiert mit 2 URLs, aktuelle lastmod-Dates
- **Meta-Tags korrekt implementiert:** Title, Description, Open Graph, Twitter Cards
- **Schema.org Markup:**
  - WebSite-Schema (index.html:32-46) mit Author
  - DanceEvent-Schema für alle Milongas (dynamisch generiert via JS) - **hervorragend!**
- **Canonical Tags:** Korrekt gesetzt
- **Mobile-friendly:** Viewport Meta-Tag vorhanden
- **HTTPS:** Sichere Verbindung
- **Strukturierte Navigation:** Klare Anchor-Links (Tanzen, Lernen, Mitwirken)
- **Analytics:** GoatCounter implementiert (datenschutzfreundlich)

### Inhaltliche Stärken

- **Einzigartiger USP:** Vollständiger Milonga-Kalender für Tübingen
- **Minimalistische Klarheit:** Keine überflüssigen Informationen
- **Community-Fokus:** Signal-Gruppe, WhatsApp, praktische Tools
- **Vollständige Lehrer-Übersicht:** Alle Anbieter neutral gelistet
- **Transparenz:** Open Source, klarer Datenschutz, Impressum

---

## 3. Optimierungspotenziale (ohne Content-Änderungen)

### Meta-Tags Optimierung 🟡

#### 1. Title-Tag
**Aktuell:** `Tango Tübingen | Der Milonga-Kalender für Tübingen.`

**Beobachtung:**
- Keyword-Wiederholung ("Tübingen" 2x)
- Punkt am Ende unnötig
- Etwas lang (56 Zeichen)

**Optimiert:**
```html
<title>Tango Tübingen | Milonga-Kalender & Community</title>
```
*(49 Zeichen, prägnant, keine Redundanz)*

**Oder noch fokussierter:**
```html
<title>Tango Tübingen – Milongas, Lehrer, Community</title>
```
*(50 Zeichen)*

**Dateien:** index.html:7, contact.html:23

---

#### 2. Meta Description (optional)
**Aktuell:** `Alle Milongas, alle Lehrer, alle Community-Angebote. Die Tübinger Tango-Szene auf einen Blick.`

**Bewertung:** Bereits gut! Optional anpassen für mehr Präzision:

```html
<meta name="description" content="Milonga-Kalender für Tübingen. Alle Tanzveranstaltungen, Lehrer und Community-Angebote der Tübinger Tango-Szene.">
```
*(128 Zeichen, kein Marketing-Sprech)*

**Dateien:** index.html:8, contact.html:6

---

### Technische SEO-Optimierungen 🔴

#### 3. robots.txt fehlt (kritisch)
**Problem:** Keine robots.txt-Datei vorhanden

**Empfehlung:** robots.txt im Root-Verzeichnis erstellen:

```txt
User-agent: *
Allow: /

Sitemap: https://tangotübingen.de/sitemap.xml
```

**Aufwand:** 2 Minuten
**Impact:** Mittel (hilft Crawlern, Sitemap zu finden)

---

#### 4. Open Graph Image fehlt
**Problem:** `og:image` ist nicht gesetzt

**Impact:** Bei Social Shares (Facebook, LinkedIn, WhatsApp) wird kein Vorschaubild angezeigt

**Empfehlung:**
```html
<meta property="og:image" content="https://tangotübingen.de/assets/og-tango-tuebingen.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Tango in Tübingen - Milonga-Kalender">
```

**Bildanforderungen:**
- Größe: 1200x630px (Facebook-Standard)
- Format: JPG oder PNG
- Inhalt: Minimalistisch, evtl. Logo + "Tango Tübingen"

**Dateien:** index.html, contact.html
**Aufwand:** 10 Min (+ Bilderstellung)
**Impact:** Hoch (Social Signals, Klickrate bei Shares)

---

#### 5. Schema.org erweitern (optional)

**Vorhanden (sehr gut!):**
- WebSite-Schema
- DanceEvent-Schema für jede Milonga

**Optional hinzufügen:**

**Organization-Schema** für die Tübinger Tango-Community:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tango in Tübingen",
  "url": "https://tangotübingen.de/",
  "logo": "https://tangotübingen.de/assets/logo.png",
  "description": "Milonga-Kalender und Community-Portal für Tango Argentino in Tübingen",
  "areaServed": {
    "@type": "City",
    "name": "Tübingen"
  }
}
```

**Aufwand:** 15 Minuten
**Impact:** Niedrig-Mittel (hilft Google, Site als Authority zu erkennen)

---

#### 6. Internationalisierte Domain (IDN)
**Beobachtung:** Domain nutzt Umlaut (`tangotübingen.de` → Punycode: `xn--tangotbingen-ocb.de`)

**Bewertung:**
- Für lokales SEO in Deutschland: **vollkommen okay**
- Einprägsamkeit überwiegt potenzielle Nachteile
- Keine Änderung nötig

---

### Performance & Mobile 🟢

#### 7. Performance-Check empfohlen

**Tools:**
- Google PageSpeed Insights
- WebPageTest.org

**Zu prüfen:**
- JavaScript-Bundle-Größe (milonga-cal.js, teacher-list.js)
- CSS-Minimierung
- Bild-Optimierung (christian-leroy-3.jpg)
- Core Web Vitals (LCP, FID, CLS)

**Aufwand:** 1 Stunde
**Impact:** Mittel (Page Speed ist Ranking-Faktor)

---

#### 8. Mobile Usability

**Test:** Google Mobile-Friendly Test durchführen

**Zu prüfen:**
- Touch-Targets (Mindestgröße 48x48px)
- Lesbarkeit ohne Zoom
- Navigation auf Mobile

**Aufwand:** 30 Minuten
**Impact:** Hoch (Mobile-First-Indexing)

---

## 4. Handlungsempfehlungen (Priorisiert)

### Priorität 1: Sofort umsetzen ⚡ (High Impact, Low Effort)

| # | Aufgabe | Dateien | Aufwand | Impact |
|---|---------|---------|---------|--------|
| 1 | **robots.txt erstellen** | `/robots.txt` | 2 Min | Mittel |
| 2 | **Title-Tag optimieren** | index.html:7, contact.html:23 | 5 Min | Hoch |
| 3 | **Open Graph Image hinzufügen** | index.html, contact.html + Bild | 15 Min | Hoch |

**Quick-Win-Checkliste:**
- [ ] robots.txt im Root anlegen
- [ ] Title-Tag auf "Tango Tübingen | Milonga-Kalender & Community" ändern
- [ ] OG-Image erstellen (1200x630px) und Meta-Tag hinzufügen

**Erwarteter Effekt:** Bessere Social Shares, klarere Kommunikation an Suchmaschinen

---

### Priorität 2: Kurzfristig 🎯 (High Impact, Medium Effort)

#### 4. Backlink-Strategie starten

**Ziel:** Hochwertige lokale Backlinks von Tanzlehrern

**Vorgehen:**
1. **Kontakt mit allen verlinkten Tanzlehrern** (tangoparatu.de, fratotango.com, etc.)
2. **Win-Win kommunizieren:** "Ich aggregiere kostenlos eure Milongas im Kalender → Könnt ihr zu tangotübingen.de verlinken?"
3. **Link-Platzierung:** "Weitere Milongas findest du auf [tangotübingen.de](https://tangotübingen.de)"

**Potenzial:** 5-8 hochwertige lokale Backlinks
**Aufwand:** 2-3 Stunden (E-Mails schreiben)
**Impact:** Sehr hoch (lokale Authority steigt massiv)

---

#### 5. Lokale Verzeichnisse

**Eintragen in:**
- [ ] **tuebingen-info.de** (Veranstaltungskalender)
- [ ] **meinestadt.de** (Tübingen)
- [ ] **Tübinger Kulturkalender** (falls vorhanden)
- [ ] **tango.info** (Tango-Verzeichnis, international)

**Aufwand:** 1-2 Stunden
**Impact:** Mittel (Backlinks + lokale Sichtbarkeit)

---

#### 6. Performance-Optimierung

**Maßnahmen:**
- JavaScript minimieren/bundlen
- CSS minimieren
- Bilder komprimieren (christian-leroy-3.jpg)
- Lazy Loading prüfen

**Tools:**
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)

**Aufwand:** 2-3 Stunden
**Impact:** Mittel (Ranking-Faktor + UX)

---

### Priorität 3: Mittelfristig 📊 (Medium Impact)

#### 7. Schema.org Organization hinzufügen

Siehe Punkt 5 oben - Organization-Schema implementieren

**Aufwand:** 15 Minuten
**Impact:** Niedrig-Mittel

---

#### 8. Monitoring einrichten

**Tools einrichten:**
- **Google Search Console** (kostenlos, essenziell)
  - Keyword-Tracking für "Tango Tübingen"
  - Crawling-Fehler überwachen
  - Click-Through-Rate analysieren

- **Ranking-Tracking** (optional):
  - Ahrefs (kostenpflichtig)
  - Semrush (kostenpflichtig)
  - Serpstat (günstiger)
  - Oder manuell: Google inkognito, wöchentlich checken

**Aufwand:** 1 Stunde Setup
**Impact:** Hoch (Erfolgsmessung)

---

#### 9. Social Media Präsenz

**Strategie:**
- Instagram/Facebook für Tübinger Tango-Community
- Regelmäßige Posts mit Link zu tangotübingen.de
- Hashtags: #tangotübingen #tangointuebingen #milongatübingen

**Aufwand:** Laufend, 30 Min/Woche
**Impact:** Mittel (Social Signals + Traffic)

---

## 5. Off-Page-SEO Strategie

### Backlink-Potenziale (priorisiert)

| Quelle | Typ | Aufwand | Impact | Status |
|--------|-----|---------|--------|--------|
| Lehrer-Websites (tangoparatu.de, etc.) | Backlink | Mittel | Sehr hoch | To Do |
| tuebingen-info.de | Verzeichnis | Niedrig | Hoch | To Do |
| Hochschulsport Uni Tübingen | Backlink | Mittel | Hoch | Bereits erwähnt auf Site |
| meinestadt.de | Verzeichnis | Niedrig | Mittel | To Do |
| Tango-Foren/Communities | Link in Signatur | Niedrig | Niedrig | Optional |

### Social Signals

**Wichtig:** Auch wenn nicht direkter Ranking-Faktor, helfen Social Shares bei:
- Traffic-Generierung
- Brand Awareness
- Indirekte Backlinks (Leute finden deine Seite via Social → verlinken)

**Maßnahmen:**
- Open Graph Image (siehe Prio 1) - macht Shares attraktiver
- Regelmäßige Posts mit Link

---

## 6. Monitoring & KPIs

### Wichtigste Metriken

**Google Search Console:**
- Impressionen für "Tango Tübingen"
- Klicks auf deine Seite
- Durchschnittliche Position
- Click-Through-Rate (CTR)

**Ziel-Keywords:**

| Keyword | Aktuelles Potenzial | Ziel-Position |
|---------|---------------------|---------------|
| Tango Tübingen | Sehr hoch | 1 |
| Milonga Tübingen | Sehr hoch | 1 |
| Tango Argentino Tübingen | Hoch | 1-3 |
| Tango lernen Tübingen | Mittel | 1-5 |
| Tanzlehrer Tango Tübingen | Mittel | 3-5 |

**GoatCounter (bereits implementiert):**
- Traffic-Entwicklung
- Verweildauer
- Bounce Rate

---

## 7. Was NICHT zu tun ist

### Häufige SEO-Fehler vermeiden

- ❌ **Kein Keyword-Stuffing:** "Tango Tübingen" nicht unnatürlich oft wiederholen
- ❌ **Keine versteckten Texte:** Kein weißer Text auf weißem Hintergrund
- ❌ **Keine gekauften Backlinks:** Google-Penalty-Risiko
- ❌ **Kein Duplicate Content:** Jede Seite einzigartiger Content
- ❌ **Keine Cloaking-Techniken:** Suchmaschinen/User unterschiedlichen Content zeigen
- ❌ **Keine unnötigen Content-Erweiterungen:** Dein USP ist Klarheit - beibehalten!

### Best Practices

- ✅ **Fokus auf Nutzererfahrung:** SEO folgt guter UX
- ✅ **Einzigartiger USP ausbauen:** Kalender-Aggregation ist dein Alleinstellungsmerkmal
- ✅ **Lokaler Fokus:** "Tübingen" immer im Kontext
- ✅ **Regelmäßige Updates:** Milonga-Daten aktuell halten signalisiert Relevanz
- ✅ **Mobile-First:** Immer auf Mobile testen

---

## 8. Zeitplan & Erwartungen

### Woche 1: Quick Wins
- [ ] robots.txt erstellen
- [ ] Title-Tag optimieren
- [ ] OG-Image hinzufügen

**Erwartung:** Keine direkten Ranking-Änderungen, aber technische Basis verbessert

---

### Woche 2-3: Backlinks
- [ ] Kontakt mit Tanzlehrern aufnehmen
- [ ] Lokale Verzeichnisse eintragen
- [ ] Google Search Console einrichten

**Erwartung:** Erste Backlinks generiert, Monitoring läuft

---

### Woche 4-8: Monitoring & Optimierung
- [ ] Wöchentliche Ranking-Checks
- [ ] Performance-Optimierung falls nötig
- [ ] Weitere Backlink-Opportunities identifizieren

**Erwartung:** Erste Ranking-Verbesserungen sichtbar (Position 3-5 für "Tango Tübingen")

---

### Monat 3+: Konsolidierung
- [ ] Top-3-Ranking halten/verbessern
- [ ] Neue Backlink-Quellen erschließen
- [ ] Ggf. weitere technische Optimierungen

**Erwartung:** Position 1-2 für "Tango Tübingen" erreichbar

---

## 9. Technische Details

### Aktuelle Sitemap-Struktur

```xml
<url>
  <loc>https://tangotübingen.de/</loc>
  <lastmod>2025-12-08</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://tangotübingen.de/contact.html</loc>
  <lastmod>2025-12-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>
```

**Bewertung:** Gut! `changefreq` und `priority` korrekt gesetzt.

**Tipp:** `lastmod` regelmäßig aktualisieren wenn Milonga-Daten geändert werden (Build-Script).

---

### Schema.org - Aktueller Stand

**Implementiert:**
1. **WebSite-Schema** (index.html:32-46)
   ```json
   {
     "@type": "WebSite",
     "name": "Tango in Tübingen",
     "url": "https://tangotübingen.de/",
     "author": { "@type": "Person", "name": "Christian Leroy" }
   }
   ```

2. **DanceEvent-Schema** (dynamisch via JS, milonga-cal.js:181-258)
   - Für jede einzelne Milonga
   - Inkl. Location, Performer (DJ), Preis, Organizer
   - **Sehr gut implementiert!** 🎉

**Optional erweiterbar:**
- Organization-Schema (siehe Punkt 5 in Optimierungen)

---

## 10. Zusammenfassung & Erfolgschancen

### Aktuelle Situation
- ✅ Solide technische SEO-Basis
- ✅ Bessere Implementierung als Konkurrenz
- ✅ Einzigartiger USP (Kalender-Aggregation)
- 🟡 Optimierungspotenzial bei Meta-Tags
- 🟡 Kaum Backlinks (Vermutung)

### Größte Hebel (ohne Content-Änderungen)

1. **Backlinks von Tanzlehrern** → Sehr hoher Impact
2. **Title-Tag optimieren** → Mittlerer Impact, 5 Min Aufwand
3. **Open Graph Image** → Hoher Impact für Social Shares
4. **robots.txt** → Mittlerer Impact, 2 Min Aufwand
5. **Performance-Optimierung** → Mittlerer Impact

### Erfolgschancen für Position 1

**Wahrscheinlichkeit:** Hoch (75-85%)

**Begründung:**
- Konkurrenz hat deutlich schwächere SEO
- Deine Website hat bereits technischen Vorsprung
- Einzigartiger Content (Kalender-Aggregation)
- Lokaler Fokus (Google bevorzugt lokale Relevanz)

**Zeitrahmen:**
- Erste Verbesserungen: 2-4 Wochen
- Top-3-Ranking: 4-8 Wochen
- Position 1: 8-12 Wochen (bei konsequenter Backlink-Strategie)

### Kritische Erfolgsfaktoren

1. **Backlinks generieren** (wichtigster Faktor!)
2. **Technische Quick Wins umsetzen** (robots.txt, Title, OG-Image)
3. **Regelmäßig Milonga-Daten aktualisieren** (Freshness-Signal)
4. **Mobile Performance sicherstellen**

---

## 11. Nächste Schritte

### Diese Woche
1. ✅ robots.txt erstellen
2. ✅ Title-Tag optimieren
3. ✅ OG-Image erstellen und einbinden

### Nächste Woche
4. E-Mails an Tanzlehrer vorbereiten
5. Lokale Verzeichnisse recherchieren
6. Google Search Console einrichten

### Bei Fragen
Diese Analyse im Repository behalten und als Roadmap nutzen.

---

**Viel Erfolg! Die Basis ist hervorragend - mit den empfohlenen Maßnahmen ist Position 1 für "Tango Tübingen" realistisch erreichbar, ohne die minimalistische Klarheit der Website zu kompromittieren.** 🎯
