const searchInput = document.getElementById("searchInput");
const levelFilters = document.querySelectorAll(".level-filter");
const spotsTitle = document.getElementById("spotsTitle");
const sportButtons = document.querySelectorAll(".sport");
const spotCards = document.getElementById("spotCards");
const spotDetail = document.getElementById("spotDetail");
const topWeather = document.getElementById("topWeather");

let searchText = "";
let activeSport = "all";
let selectedSpot = spots[0];

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true,
  dragging: true,
  touchZoom: true,
  doubleClickZoom: true
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

const markersLayer = L.layerGroup().addTo(map);

function c(spot) { return spot.conditions; }
function i(spot) { return spot.info; }
function m(spot) { return spot.media; }
function l(spot) { return spot.location; }
function spotName(spot) { return spot.name[lang] || spot.name.es; }

function getScoreClass(score) {
  if (score >= 8) return "good";
  if (score >= 6) return "ok";
  return "bad";
}

function getScoreColor(score) {
  if (score >= 8) return "#1fb15f";
  if (score >= 6) return "#f1bd36";
  return "#d64545";
}

function getSelectedLevels() {
  return Array.from(levelFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value.toLowerCase());
}

function getFilteredSpots() {
  const levels = getSelectedLevels();

  return spots
    .filter(spot => spot.meta?.published !== false)
    .filter(spot => {
      const sportOK =
        activeSport === "all" ||
        spot.sports.includes(activeSport) ||
        spot.sports.some(sport =>
          sport.toLowerCase().includes(activeSport.toLowerCase())
        );

      const levelOK =
        levels.length === 0 ||
        levels.some(level => i(spot).level.toLowerCase().includes(level));

      const textOK =
        spotName(spot).toLowerCase().includes(searchText) ||
        l(spot).zone.toLowerCase().includes(searchText) ||
        l(spot).municipality.toLowerCase().includes(searchText);

      return sportOK && levelOK && textOK;
    });
}

function fitMapToSpots(filteredSpots) {
  const points = filteredSpots
    .filter(spot => l(spot).coordinates?.lat && l(spot).coordinates?.lng)
    .map(spot => [l(spot).coordinates.lat, l(spot).coordinates.lng]);

  if (!points.length) {
    map.setView([28.35, -14.0], 9);
    return;
  }

  map.fitBounds(L.latLngBounds(points), {
    padding: [50, 50],
    maxZoom: 11
  });
}

function renderMarkers() {
  markersLayer.clearLayers();

  getFilteredSpots().forEach(spot => {
    if (!l(spot).coordinates?.lat || !l(spot).coordinates?.lng) return;

    const markerHtml = `
      <button class="leaflet-spot-marker ${selectedSpot.id === spot.id ? "selected" : ""}"
        style="background:${getScoreColor(c(spot).score)}">
        ${c(spot).score ?? "-"}
      </button>
    `;

    const icon = L.divIcon({
      html: markerHtml,
      className: "custom-leaflet-icon",
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });

    const marker = L.marker(
      [l(spot).coordinates.lat, l(spot).coordinates.lng],
      { icon }
    );

    marker.on("click", () => {
      selectedSpot = spot;
      renderApp(false);
    });

    marker.bindTooltip(spotName(spot), {
      direction: "top",
      offset: [0, -18],
      opacity: 0.95
    });

    markersLayer.addLayer(marker);
  });
}

function renderCards() {
  spotCards.innerHTML = "";

  getFilteredSpots().forEach(spot => {
    const card = document.createElement("article");
    card.className = `spot-card ${selectedSpot.id === spot.id ? "active" : ""}`;

    card.innerHTML = `
      <div class="card-image">
        <img src="${m(spot).hero}" alt="${spotName(spot)}">
        <span class="score ${getScoreClass(c(spot).score)}">${c(spot).score ?? "-"}</span>
      </div>

      <div class="card-body">
        <h3>${spotName(spot)}</h3>
        <p>${l(spot).zone}</p>

        <div class="mini-data">
          <span>Olas<br><strong>${c(spot).wave || "-"}</strong></span>
          <span>Swell<br><strong>${c(spot).swellDirectionText || "-"}</strong></span>
        </div>

        <p class="status ${getScoreClass(c(spot).score)}">🌊 ${c(spot).status || "Sin datos"}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      selectedSpot = spot;
      renderApp(false);
    });

    spotCards.appendChild(card);
  });
}

function renderDetail() {
  spotDetail.innerHTML = `
    <div class="hero detail-hero">
      <img src="${m(selectedSpot).hero}" alt="${spotName(selectedSpot)}">
      <div class="hero-content">
        <p class="eyebrow">📍 ${l(selectedSpot).zone}</p>
        <h1>${spotName(selectedSpot)}</h1>

        <div class="hero-score-row">
          <span class="score big ${getScoreClass(c(selectedSpot).score)}">${c(selectedSpot).score ?? "-"}</span>
          <div>
            <strong>${c(selectedSpot).status || "Sin datos"}</strong>
            <span>${c(selectedSpot).summary || "condiciones ahora"}</span>
          </div>
        </div>
      </div>
    </div>

    <section class="quick-summary">
      <div><span>🌊 Ola</span><strong>${c(selectedSpot).wave || "-"}</strong></div>
      <div><span>🌀 Periodo</span><strong>${c(selectedSpot).period || "-"}</strong></div>
      <div><span>🧭 Swell</span><strong>${c(selectedSpot).swellDirectionText || "-"}</strong></div>
      <div><span>💨 Viento</span><strong>${c(selectedSpot).wind || "-"}</strong></div>
      <div><span>🌡️ Agua</span><strong>${c(selectedSpot).water || "-"}</strong></div>
      <div><span>🌗 Marea</span><strong>${c(selectedSpot).tide || "-"}</strong></div>
    </section>

    <section class="panel-section">
     <h2>${t("quickRead")}</h2>
      <div class="info-grid">
        <div><strong>🏄 Mejor para</strong><br>${selectedSpot.sports.join(" · ")}</div>
        <div><strong>🎯 Nivel</strong><br>${i(selectedSpot).level || "-"}</div>
        <div><strong>🌊 Tipo de ola</strong><br>${i(selectedSpot).waveType || "-"}</div>
        <div><strong>🪨 Fondo</strong><br>${i(selectedSpot).bottom || "-"}</div>
        <div><strong>📅 Mejor época</strong><br>${i(selectedSpot).bestSeason || "-"}</div>
        <div><strong>⏰ Mejor hora</strong><br>${i(selectedSpot).bestTime || "-"}</div>
        <div><strong>🌘 Mejor marea</strong><br>${i(selectedSpot).bestTide || "-"}</div>
      </div>
    </section>

    <section class="panel-section">
      <h2>Riesgos</h2>
      <div class="chips danger">
        ${i(selectedSpot).risks.map(risk => `<span>⚠️ ${risk}</span>`).join("") || "<span>Sin riesgos destacados</span>"}
      </div>
    </section>

    <section class="panel-section">
      <h2>Servicios</h2>
      <div class="chips">
        ${i(selectedSpot).services.map(service => `<span>${service}</span>`).join("") || "<span>Sin servicios indicados</span>"}
      </div>
    </section>

<div class="action-grid">
  <a class="maps-button" href="${selectedSpot.links.maps}" target="_blank">📍 Google Maps</a>
  ${
    selectedSpot.links.webcam
      ? `<a class="ghost-button" href="${selectedSpot.links.webcam}" target="_blank">📹 Cámara</a>`
      : ""
  }
</div>
  `;
}

async function loadMarineForSpot(spot) {

  const lat = l(spot).coordinates.lat;
  const lng = l(spot).coordinates.lng;

  // DATOS DEL MAR
  const marineUrl =
    `https://marine-api.open-meteo.com/v1/marine` +
    `?latitude=${lat}` +
    `&longitude=${lng}` +
    `&current=sea_surface_temperature` +
    `&hourly=wave_height,wave_period,wave_direction,swell_wave_height,swell_wave_period,swell_wave_direction` +
    `&timezone=auto`;

  // DATOS METEO
  const weatherUrl =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}` +
    `&longitude=${lng}` +
    `&current=temperature_2m,wind_speed_10m,wind_direction_10m` +
    `&timezone=auto`;

  const [marineResponse, weatherResponse] = await Promise.all([
    fetch(marineUrl),
    fetch(weatherUrl)
  ]);

  const marine = await marineResponse.json();
  const weather = await weatherResponse.json();

  const nowIndex = new Date().getHours();

  const wave = marine.hourly.wave_height[nowIndex];
  const period = marine.hourly.wave_period[nowIndex];
const swellDirection = marine.hourly.swell_wave_direction[nowIndex];
  const water = marine.current.sea_surface_temperature;

  const air = weather.current.temperature_2m;
  const wind = weather.current.wind_speed_10m;
  const windDir = weather.current.wind_direction_10m;

  spot.conditions.wave = `${wave} m`;
  spot.conditions.period = `${period} s`;
 spot.conditions.swellDirection = swellDirection;
spot.conditions.swellDirectionText = `${Math.round(swellDirection)}°`;
  spot.conditions.water = `${water}ºC`;
  spot.conditions.air = `${air}ºC`;
  if (spot.id === selectedSpot.id && topWeather) {
  topWeather.textContent = `☀️ ${Math.round(air)}ºC · 🌊 ${Math.round(water)}ºC`;
}

  spot.conditions.waveHeight = wave;
  spot.conditions.periodSeconds = period;
  spot.conditions.windKnots = wind * 0.54;
spot.conditions.wind = `${degreesToCompass(windDir)} ${Math.round(wind * 0.54)} kn`;

  spot.conditions.status = "Datos reales";

  spot.conditions.score = calculateSurfScore(
    spot.conditions,
    spot.scoring
  );
  spot.conditions.summary = getSurfSummary(
  spot.conditions,
  spot.scoring || DEFAULT_SCORING
);
}
function degreesToCompass(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

async function loadMarineForAllSpots() {
  const publishedSpots = spots.filter(s => s.meta?.published !== false);

  for (const spot of publishedSpots) {
    await loadMarineForSpot(spot);
  }

  renderApp(false);
}
const DEFAULT_SCORING = {
  wave: {
    idealMin: 0.8,
    idealMax: 1.8,
    tooSmall: 0.4,
    tooBig: 3.0
  },

  period: {
    good: 10,
    excellent: 14
  },

  wind: {
    maxGoodKnots: 15,
    maxOkKnots: 22
  },

  swellDirection: {
    idealMin: 300,
    idealMax: 360
  }
};

function calculateSurfScore(conditions, scoring) {
  scoring = scoring || DEFAULT_SCORING;

  const waveScore = scoreWave(conditions.waveHeight, scoring.wave);
  const periodScore = scorePeriod(conditions.periodSeconds, scoring.period);
  const windScore = scoreWind(conditions.windKnots, scoring.wind);
  const swellScore = scoreSwellDirection(
    conditions.swellDirection,
    scoring.swellDirection
  );

  const finalScore =
    waveScore * 0.35 +
    periodScore * 0.25 +
    windScore * 0.25 +
    swellScore * 0.15;

  return Math.min(10, Math.max(0, Math.round(finalScore * 10) / 10));
}

function scoreWave(waveHeight, config) {
  if (!waveHeight || !config) return 5;
  if (waveHeight < config.tooSmall) return 3;
  if (waveHeight > config.tooBig) return 2;
  if (waveHeight >= config.idealMin && waveHeight <= config.idealMax) return 10;
  return 6;
}

function scorePeriod(period, config) {
  if (!period || !config) return 5;
  if (period >= config.excellent) return 10;
  if (period >= config.good) return 8;
  return 4;
}

function scoreWind(windKnots, config) {
  if (!windKnots || !config) return 5;
  if (windKnots <= config.maxGoodKnots) return 10;
  if (windKnots <= config.maxOkKnots) return 6;
  return 3;
}

function scoreSwellDirection(direction, config) {
  if (!direction || !config) return 5;

  if (direction >= config.idealMin && direction <= config.idealMax) {
    return 10;
  }

  return 4;
}

function getSurfSummary(conditions, scoring) {
  if (!scoring) return "Datos básicos disponibles";

  const notes = [];

  if (conditions.waveHeight < scoring.wave.tooSmall) {
    notes.push("poca ola");
  } else if (conditions.waveHeight > scoring.wave.tooBig) {
    notes.push("demasiado grande");
  } else if (
    conditions.waveHeight >= scoring.wave.idealMin &&
    conditions.waveHeight <= scoring.wave.idealMax
  ) {
    notes.push("tamaño en rango");
  }

  if (conditions.periodSeconds >= scoring.period.excellent) {
    notes.push("periodo excelente");
  } else if (conditions.periodSeconds < scoring.period.good) {
    notes.push("periodo bajo");
  }

  if (
    scoring.swellDirection &&
    conditions.swellDirection >= scoring.swellDirection.idealMin &&
    conditions.swellDirection <= scoring.swellDirection.idealMax
  ) {
    notes.push("swell bien orientado");
  } else {
    notes.push("swell fuera del rango ideal");
  }

  return notes.join(" · ");
}

function renderApp(shouldFitMap = true) {
  spotsTitle.textContent =
    activeSport === "all"
? t("bestSpotsToday")
: `${t("bestSpotsFor")} ${activeSport}`;

  const filtered = getFilteredSpots();

  if (!filtered.includes(selectedSpot) && filtered.length) {
    selectedSpot = filtered[0];
  }

  renderMarkers();
  renderCards();

  if (filtered.length) {
    renderDetail();
  } else {
    spotDetail.innerHTML = `
      <div style="padding:40px;text-align:center">
        <h2>😕 No hay spots</h2>
        <p>No existen spots con esos filtros.</p>
      </div>
    `;
  }

  if (shouldFitMap) {
    fitMapToSpots(filtered);
  }
}

sportButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sportButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    activeSport = button.dataset.sport;
    renderApp(true);
  });
});

levelFilters.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    renderApp(true);
  });
});

searchInput.addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase().trim();
  renderApp(true);
});

renderApp(true);
loadMarineForAllSpots();