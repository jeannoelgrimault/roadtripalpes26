
const BASE_TRIP = [{"day": 1, "date": "Vendredi 31 juillet 2026", "title": "Laval → Lucerne", "arrival": "Lucerne", "country": "France / Suisse", "hotel": "Hotel Central Luzern", "drive": "≈ 10h00, longue liaison", "start": "06h00", "gps": ["Dijon", "Mulhouse", "Bâle"], "program": "Trajet d’approche. Installation à Lucerne. Petite promenade du soir dans la vieille ville et au bord de la Reuss.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Route", "Suisse", "Ville"]}, {"day": 2, "date": "Samedi 1 août 2026", "title": "Lucerne", "arrival": "Lucerne", "country": "Suisse", "hotel": "Hotel Central Luzern", "drive": "Local", "start": "08h30", "gps": ["Kapellbrücke", "Église des Jésuites", "Vieille ville", "Quais du lac", "Pilatus si météo favorable"], "program": "Journée unique à Lucerne. Priorité à la ville, aux monuments et aux panoramas. Pas de randonnée prévue.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Ville", "Panorama", "Patrimoine"]}, {"day": 3, "date": "Dimanche 2 août 2026", "title": "Lucerne → Stresa", "arrival": "Stresa", "country": "Suisse / Italie", "hotel": "Hotel Astoria", "drive": "≈ 5h00 hors pauses", "start": "07h30", "gps": ["Altdorf", "Andermatt", "Hospental", "Col du Saint-Gothard", "Airolo", "Bellinzona"], "program": "Grosse journée de route alpine. Objectif : éviter le tunnel du Gothard si météo favorable et profiter de la route historique. Arrivée à Stresa en fin d’après-midi.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Route panoramique", "Col", "Lac Majeur"]}, {"day": 4, "date": "Lundi 3 août 2026", "title": "Stresa → Bellagio", "arrival": "Bellagio", "country": "Italie", "hotel": "Il Perlo Panorama", "drive": "≈ 3h30 à 4h00", "start": "08h30", "gps": ["Arona", "Como", "Lecco"], "program": "Promenade rapide à Stresa puis route vers Bellagio. Après-midi dans le village, lac de Côme, ruelles et éventuellement jardins de la Villa Melzi.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Lac", "Village", "Italie"]}, {"day": 5, "date": "Mardi 4 août 2026", "title": "Bellagio → Sirmione", "arrival": "Sirmione", "country": "Italie", "hotel": "Hotel Marolda", "drive": "≈ 3h30 à 4h30 selon ferry et trafic", "start": "08h00", "gps": ["Varenna", "Brescia ou Desenzano", "Sirmione"], "program": "Départ de Bellagio, éventuellement ferry vers Varenna. Arrivée à Sirmione. Profiter de la vieille ville en fin de journée, quand l’affluence baisse.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Lac de Garde", "Village", "Soirée"]}, {"day": 6, "date": "Mercredi 5 août 2026", "title": "Sirmione → Vérone", "arrival": "Vérone", "country": "Italie", "hotel": "Hotel Milano & Spa Verona", "drive": "≈ 1h00 à 1h30", "start": "10h00", "gps": ["Sirmione centre historique", "Vérone"], "program": "Matinée douce à Sirmione : château scaligère, promenade au bord du lac. Route courte vers Vérone. Visite du centre historique en fin de journée.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Patrimoine", "Ville", "Lac"]}, {"day": 7, "date": "Jeudi 6 août 2026", "title": "Vérone → Ortisei", "arrival": "Ortisei", "country": "Italie", "hotel": "Garni Snaltnerhof", "drive": "≈ 2h00 à 2h30", "start": "08h30", "gps": ["A22", "Chiusa / Klausen", "Val Gardena"], "program": "Matin à Vérone si besoin, puis montée vers les Dolomites. Installation à Ortisei et balade tranquille dans le village.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Dolomites", "Village", "Transition"]}, {"day": 8, "date": "Vendredi 7 août 2026", "title": "Ortisei / Seceda", "arrival": "Ortisei", "country": "Italie", "hotel": "Garni Snaltnerhof", "drive": "Local", "start": "08h30", "gps": ["Téléphérique Seceda", "Panorama Odle", "Ortisei"], "program": "Montée à Seceda si météo favorable. Marche courte, panorama, déjeuner simple ou pique-nique. Pas de randonnée longue obligatoire.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Panorama", "Dolomites", "Marche facile"]}, {"day": 9, "date": "Samedi 8 août 2026", "title": "Alpe di Siusi", "arrival": "Ortisei", "country": "Italie", "hotel": "Garni Snaltnerhof", "drive": "≈ 1h00 à 2h00 local", "start": "08h30", "gps": ["Castelrotto", "Compatsch", "Alpe di Siusi"], "program": "Journée douce sur le plateau de l’Alpe di Siusi. Balade facile, paysages ouverts, déjeuner ou pique-nique. Retour tranquille.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Panorama", "Balade", "Plateau"]}, {"day": 10, "date": "Dimanche 9 août 2026", "title": "Lago di Carezza et routes panoramiques", "arrival": "Ortisei", "country": "Italie", "hotel": "Garni Snaltnerhof", "drive": "≈ 3h30 à 4h30 avec arrêts", "start": "08h00", "gps": ["Canazei", "Passo Costalunga", "Lago di Carezza"], "program": "Journée voiture panoramique. Lac de Carezza, petites marches faciles, pauses photo. Programme ajustable selon météo et forme.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Lac", "Route panoramique", "Photos"]}, {"day": 11, "date": "Lundi 10 août 2026", "title": "Tre Cime de Lavaredo, version légère", "arrival": "Ortisei", "country": "Italie", "hotel": "Garni Snaltnerhof", "drive": "≈ 5h00 à 6h00 avec arrêts", "start": "07h00", "gps": ["Passo Gardena", "Corvara", "Cortina d’Ampezzo", "Lago di Misurina", "Rifugio Auronzo"], "program": "Grande journée Dolomites. Objectif : voir les Tre Cime sans s’imposer la boucle complète. Marche courte vers Rifugio Lavaredo si les conditions sont bonnes.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Dolomites", "Site majeur", "Marche modérée"]}, {"day": 12, "date": "Mardi 11 août 2026", "title": "Ortisei → Innsbruck", "arrival": "Innsbruck", "country": "Italie / Autriche", "hotel": "The Penz Hotel", "drive": "≈ 2h30 à 3h00", "start": "08h30", "gps": ["Brennero", "Matrei am Brenner", "Innsbruck"], "program": "Route par le Brenner. Après-midi à Innsbruck : vieille ville, Petit Toit d’Or, promenade. Nordkette seulement si envie et météo dégagée.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Autriche", "Ville", "Patrimoine"]}, {"day": 13, "date": "Mercredi 12 août 2026", "title": "Innsbruck → Appenzell", "arrival": "Appenzell", "country": "Autriche / Liechtenstein / Suisse", "hotel": "Hotel Säntis", "drive": "≈ 3h30", "start": "08h30", "gps": ["Feldkirch", "Vaduz", "Buchs", "Appenzell"], "program": "Transition vers la Suisse orientale. Halte courte à Vaduz possible. Arrivée à Appenzell, village, dîner calme.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Suisse", "Liechtenstein", "Village"]}, {"day": 14, "date": "Jeudi 13 août 2026", "title": "Appenzell → Berne", "arrival": "Berne", "country": "Suisse", "hotel": "Prize by Radisson Bern City", "drive": "≈ 2h30 à 3h00", "start": "09h00", "gps": ["Saint-Gall optionnel", "Lucerne optionnel", "Berne"], "program": "Matinée courte à Appenzell si envie. Route vers Berne. Visite de la vieille ville, Zytglogge, promenade sur les rives de l’Aar.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Ville", "Patrimoine", "Suisse"]}, {"day": 15, "date": "Vendredi 14 août 2026", "title": "Berne → Morzine", "arrival": "Morzine", "country": "Suisse / France", "hotel": "Hotel Névé", "drive": "≈ 2h30 à 4h00 selon détour", "start": "09h00", "gps": ["Fribourg", "Gruyères", "Bulle", "Col des Mosses", "Aigle", "Morzine"], "program": "Route courte mais agréable. Détour conseillé par Gruyères si vous voulez une belle pause patrimoine et déjeuner. Arrivée à Morzine pour ralentir.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Montagne", "Village", "Pause"]}, {"day": 16, "date": "Samedi 15 août 2026", "title": "Morzine", "arrival": "Morzine", "country": "France", "hotel": "Hotel Névé", "drive": "Local", "start": "Libre", "gps": ["Village", "Promenade facile", "Shopping", "Restaurant"], "program": "Journée de repos assumée : lecture, balade dans le village, petite randonnée facile si envie, restaurant. Pas de programme touristique imposé.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Repos", "Station", "Balade"]}, {"day": 17, "date": "Dimanche 16 août 2026", "title": "Morzine → Laval", "arrival": "Laval", "country": "France", "hotel": "Retour maison", "drive": "≈ 8h00 à 9h00", "start": "Fin de matinée", "gps": ["Mâcon ou Bourg-en-Bresse", "Tours ou Orléans selon GPS", "Laval"], "program": "Retour en fin de matinée. Trajet direct avec pauses régulières. Fin du roadtrip.", "hotelPrice": "", "payOnSite": "", "cancellation": "", "themes": ["Retour", "Route"]}];
const BASE_FAVORITES = [{"name": "Hotel Central Luzern", "category": "Hôtel", "day": "J1 J2", "note": "Lucerne"}, {"name": "Hotel Astoria Stresa", "category": "Hôtel", "day": "J3", "note": "Lac Majeur"}, {"name": "Il Perlo Panorama Bellagio", "category": "Hôtel", "day": "J4", "note": "Lac de Côme"}, {"name": "Hotel Marolda Sirmione", "category": "Hôtel", "day": "J5", "note": "Lac de Garde"}, {"name": "Hotel Milano & Spa Verona", "category": "Hôtel", "day": "J6", "note": "Vérone"}, {"name": "Garni Snaltnerhof Ortisei", "category": "Hôtel", "day": "J7 à J11", "note": "Base Dolomites"}, {"name": "The Penz Hotel Innsbruck", "category": "Hôtel", "day": "J12", "note": "Innsbruck"}, {"name": "Hotel Säntis Appenzell", "category": "Hôtel", "day": "J13", "note": "Appenzell"}, {"name": "Prize by Radisson Bern City", "category": "Hôtel", "day": "J14", "note": "Berne"}, {"name": "Hotel Névé Morzine", "category": "Hôtel", "day": "J15 J16", "note": "Fin de voyage"}, {"name": "Col du Saint-Gothard", "category": "Route", "day": "J3", "note": "À utiliser pour éviter le tunnel"}, {"name": "Andermatt", "category": "Pause", "day": "J3", "note": "Café, route alpine"}, {"name": "Airolo", "category": "Pause", "day": "J3", "note": "Déjeuner ou pause après Gothard"}, {"name": "Bellinzona", "category": "Pause", "day": "J3", "note": "Pause ou visite courte"}, {"name": "Como", "category": "Passage", "day": "J4", "note": "Forcer la route vers Lecco"}, {"name": "Lecco", "category": "Passage", "day": "J4", "note": "Belle approche vers Bellagio"}, {"name": "Sirmione", "category": "Visite", "day": "J5 J6", "note": "Château, vieille ville, lac"}, {"name": "Chiusa Klausen", "category": "Pause", "day": "J7", "note": "Joli village avant Ortisei"}, {"name": "Seceda", "category": "Panorama", "day": "J8", "note": "Téléphérique, marche courte"}, {"name": "Alpe di Siusi Compatsch", "category": "Panorama", "day": "J9", "note": "Plateau panoramique"}, {"name": "Lago di Carezza", "category": "Panorama", "day": "J10", "note": "Lac et photos"}, {"name": "Rifugio Auronzo Tre Cime", "category": "Panorama", "day": "J11", "note": "Accès Tre Cime"}, {"name": "Lago di Misurina", "category": "Pause", "day": "J11", "note": "Pause avant ou après Tre Cime"}, {"name": "Vaduz", "category": "Pause", "day": "J13", "note": "Halte courte Liechtenstein"}, {"name": "Gruyères", "category": "Visite", "day": "J15", "note": "Village et déjeuner possible"}];
const STORAGE_KEY = "roadtrip_alpes_2026_pwa_v4";
let mapLoaded = false;
const COORDS = {"1": [47.0502, 8.3093], "2": [47.0502, 8.3093], "3": [45.8846, 8.5327], "4": [45.9876, 9.2615], "5": [45.4926, 10.6087], "6": [45.4384, 10.9916], "7": [46.5752, 11.6721], "8": [46.5752, 11.6721], "9": [46.5752, 11.6721], "10": [46.5752, 11.6721], "11": [46.5752, 11.6721], "12": [47.2692, 11.4041], "13": [47.331, 9.4099], "14": [46.948, 7.4474], "15": [46.1792, 6.7088], "16": [46.1792, 6.7088], "17": [48.0707, -0.7706]};

let state = loadState();

function defaultState() {
  return {
    days: {},
    expenses: [],
    favorites: BASE_FAVORITES,
    settings: { currency: "EUR" }
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return { ...defaultState(), ...saved };
  } catch {}
  return defaultState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderCurrent();
}

function dayData(day) {
  return { ...day, ...(state.days[day.day] || {}) };
}

function setDay(day, field, value) {
  state.days[day] = state.days[day] || {};
  state.days[day][field] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateStatsOnly();
}

function parseAmount(v) {
  if (v === undefined || v === null) return 0;
  const s = String(v).replace(",", ".").replace(/[^0-9.\-]/g, "");
  return Number(s) || 0;
}

function hotelTotal() {
  return BASE_TRIP.reduce((sum, d) => sum + parseAmount(dayData(d).hotelPrice), 0);
}

function expenseTotal() {
  return state.expenses.reduce((sum, e) => sum + parseAmount(e.amount), 0);
}

function updateStatsOnly() {
  const el = document.getElementById("stats");
  if (!el) return;
  el.innerHTML = `
    <div><strong>Durée</strong><span>17 jours</span></div>
    <div><strong>Étapes</strong><span>${BASE_TRIP.length}</span></div>
    <div><strong>Hôtels saisis</strong><span>${BASE_TRIP.filter(d => dayData(d).hotelPrice).length}</span></div>
    <div><strong>Budget hôtels saisi</strong><span>${hotelTotal().toFixed(0)} €</span></div>
    <div><strong>Dépenses ajoutées</strong><span>${expenseTotal().toFixed(0)} €</span></div>
  `;
}

function nav(section) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(section).classList.add("active");
  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-tab="${section}"]`).classList.add("active");
  renderCurrent();
}

function renderCurrent() {
  const active = document.querySelector(".view.active")?.id || "roadbook";
  updateStatsOnly();
  if (active === "roadbook") renderRoadbook();
  if (active === "mapview") renderMap();
  if (active === "budget") renderBudget();
  if (active === "favorites") renderFavorites();
  if (active === "export") renderExport();
}

function renderRoadbook() {
  const root = document.getElementById("roadbook-list");
  const q = document.getElementById("search")?.value?.toLowerCase() || "";
  root.innerHTML = "";
  BASE_TRIP.filter(base => JSON.stringify(dayData(base)).toLowerCase().includes(q)).forEach(base => {
    const d = dayData(base);
    const card = document.createElement("section");
    card.className = "day-card";
    card.innerHTML = `
      <div class="day-head">
        <div>
          <p class="eyebrow">Jour ${d.day} · ${d.country}</p>
          <h2>${d.date}</h2>
          <h3>${d.title}</h3>
        </div>
        <div class="badge">${d.arrival}</div>
      </div>

      <div class="edit-grid">
        <label>Départ conseillé<input value="${esc(d.start)}" data-day="${d.day}" data-field="start"></label>
        <label>Durée de route<input value="${esc(d.drive)}" data-day="${d.day}" data-field="drive"></label>
        <label>Hôtel<input value="${esc(d.hotel)}" data-day="${d.day}" data-field="hotel"></label>
        <label>Prix hôtel pour la nuit<input value="${esc(d.hotelPrice)}" data-day="${d.day}" data-field="hotelPrice" placeholder="Ex : 218 €"></label>
        <label>Reste à payer sur place<input value="${esc(d.payOnSite)}" data-day="${d.day}" data-field="payOnSite" placeholder="Taxe, parking, repas..."></label>
        <label>Annulation possible jusqu’au<input value="${esc(d.cancellation)}" data-day="${d.day}" data-field="cancellation" placeholder="Ex : non annulable"></label>
      </div>

      <div class="block">
        <strong>Points GPS à ajouter dans le Kodiaq</strong>
        <div class="chips">${d.gps.map(x => `<span>${esc(x)}</span>`).join("")}</div>
      </div>

      <div class="block">
        <label>Programme synthétique<textarea data-day="${d.day}" data-field="program">${esc(d.program)}</textarea></label>
      </div>

      <details open>
        <summary>Notes complémentaires</summary>
        <label>Notes du jour<textarea data-day="${d.day}" data-field="notes" placeholder="Météo, remarque, ajustement...">${esc(d.notes || "")}</textarea></label>
        <div class="edit-grid small">
          <label>Restaurant<input value="${esc(d.restaurant || "")}" data-day="${d.day}" data-field="restaurant"></label>
          <label>Pique-nique<input value="${esc(d.picnic || "")}" data-day="${d.day}" data-field="picnic"></label>
          <label>Budget prévu<input value="${esc(d.budget || "")}" data-day="${d.day}" data-field="budget"></label>
        </div>
      </details>
    `;
    root.appendChild(card);
  });
  root.querySelectorAll("input,textarea").forEach(el => {
    el.addEventListener("input", e => setDay(e.target.dataset.day, e.target.dataset.field, e.target.value));
  });
}


function renderMap() {
  const info = document.getElementById("map-info");
  if (info) info.innerHTML = "Carte interactive basée sur OpenStreetMap. Une connexion Internet est nécessaire pour charger la carte.";
  if (mapLoaded) return;
  if (typeof L === "undefined") {
    if (info) info.innerHTML = "Carte indisponible : connexion Internet nécessaire.";
    return;
  }
  mapLoaded = true;
  const map = L.map("map").setView([46.5, 8.5], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);
  const line = [];
  BASE_TRIP.forEach(d => {
    const c = COORDS[d.day];
    if (!c) return;
    line.push(c);
    L.marker(c).addTo(map).bindPopup(`<strong>J${d.day} · ${esc(d.arrival)}</strong><br>${esc(d.title)}<br>${esc(dayData(d).hotel || "")}`);
  });
  L.polyline(line, {color:"#2f6f73", weight:4, opacity:.8}).addTo(map);
  map.fitBounds(line, {padding:[30,30]});
}

function renderBudget() {
  const root = document.getElementById("budget-content");
  const rows = BASE_TRIP.map(base => {
    const d = dayData(base);
    return `<tr><td>J${d.day}</td><td>${esc(d.title)}</td><td><input value="${esc(d.hotelPrice)}" data-day="${d.day}" data-field="hotelPrice" placeholder="€"></td><td><input value="${esc(d.payOnSite)}" data-day="${d.day}" data-field="payOnSite"></td></tr>`;
  }).join("");
  root.innerHTML = `
    <div class="panel">
      <h2>Budget hôtels</h2>
      <p class="muted">Total saisi : <strong>${hotelTotal().toFixed(0)} €</strong></p>
      <div class="table-wrap"><table><thead><tr><th>Jour</th><th>Étape</th><th>Prix hôtel</th><th>Reste à payer</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
    <div class="panel">
      <h2>Dépenses pendant le voyage</h2>
      <div class="expense-form">
        <input id="exp-date" placeholder="Date ou jour">
        <input id="exp-label" placeholder="Libellé">
        <input id="exp-cat" placeholder="Catégorie">
        <input id="exp-amount" placeholder="Montant">
        <button id="add-exp">Ajouter</button>
      </div>
      <p class="muted">Total dépenses ajoutées : <strong>${expenseTotal().toFixed(0)} €</strong></p>
      <div id="expense-list"></div>
    </div>
  `;
  root.querySelectorAll("input[data-day]").forEach(el => {
    el.addEventListener("input", e => setDay(e.target.dataset.day, e.target.dataset.field, e.target.value));
  });
  document.getElementById("add-exp").addEventListener("click", () => {
    state.expenses.push({
      date: document.getElementById("exp-date").value,
      label: document.getElementById("exp-label").value,
      category: document.getElementById("exp-cat").value,
      amount: document.getElementById("exp-amount").value
    });
    saveState();
  });
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById("expense-list");
  if (!list) return;
  if (!state.expenses.length) {
    list.innerHTML = `<p class="muted">Aucune dépense ajoutée.</p>`;
    return;
  }
  list.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Date</th><th>Libellé</th><th>Catégorie</th><th>Montant</th><th></th></tr></thead><tbody>${state.expenses.map((e,i)=>`
    <tr><td>${esc(e.date)}</td><td>${esc(e.label)}</td><td>${esc(e.category)}</td><td>${esc(e.amount)}</td><td><button class="mini" onclick="deleteExpense(${i})">Supprimer</button></td></tr>
  `).join("")}</tbody></table></div>`;
}

function deleteExpense(i) {
  state.expenses.splice(i,1);
  saveState();
}

function renderFavorites() {
  const root = document.getElementById("favorites-content");
  root.innerHTML = `
    <div class="panel">
      <h2>Favoris GPS Kodiaq</h2>
      <p class="muted">À saisir avant le départ. Le matin, choisis l’hôtel d’arrivée puis ajoute les points utiles.</p>
      <div class="table-wrap"><table><thead><tr><th>Nom à rechercher</th><th>Type</th><th>Jour</th><th>Note</th></tr></thead><tbody>
      ${state.favorites.map(f => `<tr><td>${esc(f.name)}</td><td>${esc(f.category)}</td><td>${esc(f.day)}</td><td>${esc(f.note)}</td></tr>`).join("")}
      </tbody></table></div>
    </div>
  `;
}

function renderExport() {
  const root = document.getElementById("export-content");
  root.innerHTML = `
    <div class="panel">
      <h2>Sauvegarde et installation</h2>
      <p>Les données sont stockées dans le navigateur. Pour ne rien perdre, exporte régulièrement un fichier JSON.</p>
      <div class="actions">
        <button onclick="exportData()">Exporter mes données</button>
        <label class="import-label">Importer des données<input id="import-json" type="file" accept="application/json"></label>
        <button class="secondary" onclick="resetAll()">Réinitialiser</button>
      </div>
      <h3>Installation iPhone</h3>
      <ol>
        <li>Ouvrir l’adresse du site dans Safari.</li>
        <li>Toucher le bouton Partager.</li>
        <li>Choisir Ajouter à l’écran d’accueil.</li>
        <li>Valider le nom Roadtrip Alpes 2026.</li>
      </ol>
    </div>
  `;
  document.getElementById("import-json").addEventListener("change", e => {
    if (e.target.files[0]) importData(e.target.files[0]);
  });
}

function exportData() {
  const data = { exportedAt: new Date().toISOString(), state };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "roadtrip-alpes-2026-sauvegarde.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data.state) state = { ...defaultState(), ...data.state };
      else throw new Error();
      saveState();
      alert("Données importées.");
    } catch {
      alert("Fichier non reconnu.");
    }
  };
  reader.readAsText(file);
}

function resetAll() {
  if (confirm("Effacer toutes les données ajoutées ?")) {
    state = defaultState();
    saveState();
  }
}

function esc(v) {
  return String(v ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => nav(b.dataset.tab)));
  document.getElementById("search").addEventListener("input", renderRoadbook);
  document.getElementById("print").addEventListener("click", () => window.print());
  renderCurrent();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
});
