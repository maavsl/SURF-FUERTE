let lang = localStorage.getItem("surfLang") || "es";

const TEXT = {
  es: {
    bestSpotsToday: "Mejores spots hoy",
    bestSpotsFor: "Mejores spots para",
    searchPlaceholder: "🔍 Buscar spot...",

    sport: "Deporte",
    levelFilter: "Nivel",

    wave: "🌊 Ola",
    period: "🌀 Periodo",
    swell: "🧭 Swell",
    wind: "💨 Viento",
    water: "🌡️ Agua",
    air: "☀️ Aire",
    tide: "🌗 Marea",

    quickRead: "Lectura rápida",
    bestFor: "🏄 Mejor para",
    level: "🎯 Nivel",
    waveType: "🌊 Tipo de ola",
    bottom: "🪨 Fondo",
    bestSeason: "📅 Mejor época",
    bestTime: "⏰ Mejor hora",
    bestTide: "🌘 Mejor marea",

    risks: "Riesgos",
    services: "Servicios",

    noSpotsTitle: "😕 No hay spots",
    noSpotsText: "No existen spots con esos filtros.",

    maps: "📍 Google Maps",
    webcam: "📹 Cámara",
    realData: "Datos reales",
    loading: "Cargando..."
  },

  en: {
    bestSpotsToday: "Best spots today",
    bestSpotsFor: "Best spots for",
    searchPlaceholder: "🔍 Search spot...",

    sport: "Sport",
    levelFilter: "Level",

    wave: "🌊 Wave",
    period: "🌀 Period",
    swell: "🧭 Swell",
    wind: "💨 Wind",
    water: "🌡️ Water",
    air: "☀️ Air",
    tide: "🌗 Tide",

    quickRead: "Quick read",
    bestFor: "🏄 Best for",
    level: "🎯 Level",
    waveType: "🌊 Wave type",
    bottom: "🪨 Bottom",
    bestSeason: "📅 Best season",
    bestTime: "⏰ Best time",
    bestTide: "🌘 Best tide",

    risks: "Risks",
    services: "Services",

    noSpotsTitle: "😕 No spots found",
    noSpotsText: "There are no spots matching those filters.",

    maps: "📍 Google Maps",
    webcam: "📹 Webcam",
    realData: "Live data",
    loading: "Loading..."
  }
};

function t(key) {
  return TEXT[lang][key] || key;
}

function setLang(newLang) {
  lang = newLang;
  localStorage.setItem("surfLang", lang);
  renderApp(false);
  updateStaticTexts();
}