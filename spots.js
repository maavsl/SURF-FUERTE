const spots = [
  {
    id: "rocky-point",
    type: "surf-spot",
    name: { es: "Rocky Point", en: "Rocky Point" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Corralejo",
      coordinates: { lat: 28.7416, lng: -13.8632 }
    },
    sports: ["Surf", "Bodyboard", "Longboard"],
    media: { hero: "assets/rocky-point.jpg", gallery: [], video: "" },
    conditions: { score: 9.2, status: "Muy buenas", wave: "1.5 m", period: "12 s", wind: "NE 16 kn", air: "23ºC", water: "21ºC" },
    scoring: {
  wave: {
    idealMin: 1.0,
    idealMax: 2.0,
    tooSmall: 0.5,
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
},
    info: {
      level: "Intermedio / avanzado",
      waveType: "Reef / Point Break",
      bottom: "Roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media / alta",
      description: "",
      risks: ["Fondo de roca", "Corrientes", "Erizos"],
      services: ["Parking cerca", "Bares en Corralejo", "Alquiler en Corralejo"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Rocky+Point+Corralejo",
      webcam: "https://www.fuerteventuraplayas.com/en/webcams/corralejo-rocky-point/",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: true, completed: 70 }
  },

  {
    id: "el-cotillo",
    type: "surf-spot",
    name: { es: "El Cotillo", en: "El Cotillo" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Piedra Playa",
      coordinates: { lat: 28.684, lng: -14.009 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/el-cotillo.jpg", gallery: [], video: "" },
    conditions: { score: 8.1, status: "Muy buenas", wave: "1.3 m", period: "11 s", wind: "N 12 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Principiante / intermedio",
      waveType: "Beach Break",
      bottom: "Arena",
      bestSeason: "Todo el año",
      bestTime: "Mañana",
      bestTide: "Media / baja",
      description: "",
      risks: ["Corrientes", "Orillera fuerte", "Series desordenadas"],
      services: ["Parking", "Escuelas", "Alquiler", "Bares en El Cotillo"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Piedra+Playa+El+Cotillo",
      webcam: "https://www.fuerteventuraplayas.com/en/webcams/el-cotillo-piedra-playa/",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: true, completed: 70 }
  },

  {
    id: "la-pared",
    type: "surf-spot",
    name: { es: "La Pared", en: "La Pared" },
    location: {
      island: "Fuerteventura",
      municipality: "Pájara",
      zone: "Costa Oeste",
      coordinates: { lat: 28.214, lng: -14.221 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/la-pared.jpg", gallery: [], video: "" },
    conditions: { score: 6.8, status: "Aceptables", wave: "0.9 m", period: "9 s", wind: "NE 18 kn", air: "24ºC", water: "21ºC" },
    info: {
      level: "Intermedio / avanzado",
      waveType: "Beach Break potente",
      bottom: "Arena / roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana / tarde",
      bestTide: "Media",
      description: "",
      risks: ["Corrientes fuertes", "Rompiente potente", "Baño complicado"],
      services: ["Parking", "Mirador", "Bares cerca"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=La+Pared+Fuerteventura",
      webcam: "https://flowsurfproject-fuerteventura.com/webcam-fuerteventura-surf/",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: true, completed: 70 }
  },

  {
    id: "flag-beach",
    type: "surf-spot",
    name: { es: "Flag Beach", en: "Flag Beach" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Corralejo",
      coordinates: { lat: 28.719, lng: -13.835 }
    },
    sports: ["Surf", "Kitesurf", "Windsurf", "Wingfoil"],
    media: { hero: "assets/flag-beach.jpg", gallery: [], video: "" },
    conditions: { score: 4.2, status: "Malas", wave: "0.6 m", period: "8 s", wind: "NE 25 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Principiante / intermedio",
      waveType: "Beach / Reef",
      bottom: "Arena / roca",
      bestSeason: "Primavera / verano",
      bestTime: "Mediodía / tarde",
      bestTide: "Media / alta",
      description: "",
      risks: ["Viento fuerte", "Rocas", "Mucho tráfico de cometas"],
      services: ["Parking", "Escuelas", "Alquiler"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Flag+Beach+Fuerteventura",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: true, completed: 70 }
  },

  {
    id: "sotavento",
    type: "surf-spot",
    name: { es: "Sotavento", en: "Sotavento" },
    location: {
      island: "Fuerteventura",
      municipality: "Pájara",
      zone: "Costa Calma",
      coordinates: { lat: 28.106, lng: -14.264 }
    },
    sports: ["Kitesurf", "Windsurf", "Wingfoil"],
    media: { hero: "assets/sotavento.jpg", gallery: [], video: "" },
    conditions: { score: 7.4, status: "Buenas", wave: "1.0 m", period: "10 s", wind: "NE 20 kn", air: "24ºC", water: "21ºC" },
    info: {
      level: "Todos los niveles",
      waveType: "Laguna / playa abierta",
      bottom: "Arena",
      bestSeason: "Primavera / verano",
      bestTime: "Tarde",
      bestTide: "Alta",
      description: "",
      risks: ["Viento fuerte", "Marea cambiante", "Zona muy expuesta"],
      services: ["Parking", "Escuelas", "Alquiler", "Hotel cercano"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Sotavento+Fuerteventura",
      webcam: "https://www.rene-egli.com/de/webcam",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: true, completed: 70 }
  },

  {
    id: "el-hierro",
    type: "surf-spot",
    name: { es: "El Hierro", en: "El Hierro" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Majanicho",
      coordinates: { lat: 28.749, lng: -13.961 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/rocky-point.jpg", gallery: [], video: "" },
    conditions: { score: 7.8, status: "Buenas", wave: "1.4 m", period: "12 s", wind: "NE 14 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Avanzado",
      waveType: "Reef Break",
      bottom: "Roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media",
      description: "",
      risks: ["Fondo de roca", "Erizos", "Corrientes"],
      services: ["Parking cerca"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=El+Hierro+Fuerteventura+surf",
      webcam: "https://www.fuerteventuraplayas.com/en/webcams/",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 45 }
  },

  {
    id: "majanicho",
    type: "surf-spot",
    name: { es: "Majanicho", en: "Majanicho" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Majanicho",
      coordinates: { lat: 28.750, lng: -13.939 }
    },
    sports: ["Surf", "Bodyboard", "Longboard"],
    media: { hero: "assets/el-cotillo.jpg", gallery: [], video: "" },
    conditions: { score: 6.9, status: "Aceptables", wave: "1.1 m", period: "10 s", wind: "NE 15 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Intermedio / avanzado",
      waveType: "Reef / Point Break",
      bottom: "Roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media / alta",
      description: "",
      risks: ["Rocas", "Fondo irregular", "Corrientes"],
      services: ["Parking"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Majanicho+Fuerteventura",
webcam: "https://www.fuerteventuraplayas.com/en/webcams/",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 45 }
  },

  {
    id: "punta-blanca",
    type: "surf-spot",
    name: { es: "Punta Blanca", en: "Punta Blanca" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Costa Norte",
      coordinates: { lat: 28.728, lng: -13.986 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/la-pared.jpg", gallery: [], video: "" },
    conditions: { score: 7.1, status: "Buenas", wave: "1.2 m", period: "11 s", wind: "NE 13 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Intermedio",
      waveType: "Reef Break",
      bottom: "Roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media",
      description: "",
      risks: ["Rocas", "Entrada delicada"],
      services: ["Parking"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Punta+Blanca+Fuerteventura",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 45 }
  },

  {
    id: "glass-beach",
    type: "surf-spot",
    name: { es: "Glass Beach", en: "Glass Beach" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Corralejo",
      coordinates: { lat: 28.733, lng: -13.867 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/flag-beach.jpg", gallery: [], video: "" },
    conditions: { score: 6.3, status: "Aceptables", wave: "0.8 m", period: "9 s", wind: "NE 16 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Intermedio",
      waveType: "Reef Break",
      bottom: "Roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media",
      description: "",
      risks: ["Rocas", "Erizos"],
      services: ["Servicios en Corralejo"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Glass+Beach+Corralejo",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 40 }
  },

  {
    id: "bristol",
    type: "surf-spot",
    name: { es: "Bristol", en: "Bristol" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Corralejo",
      coordinates: { lat: 28.743, lng: -13.872 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/rocky-point.jpg", gallery: [], video: "" },
    conditions: { score: 5.8, status: "Regulares", wave: "0.8 m", period: "8 s", wind: "NE 17 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Intermedio",
      waveType: "Reef Break",
      bottom: "Roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media",
      description: "",
      risks: ["Rocas", "Poca profundidad"],
      services: ["Servicios en Corralejo"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Bristol+Corralejo+surf",
      webcam: "https://www.fuerteventuraplayas.com/en/webcams/",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 40 }
  },

  {
    id: "el-burro",
    type: "surf-spot",
    name: { es: "El Burro", en: "El Burro" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Dunas de Corralejo",
      coordinates: { lat: 28.704, lng: -13.828 }
    },
    sports: ["Surf", "Kitesurf", "Windsurf", "Wingfoil"],
    media: { hero: "assets/flag-beach.jpg", gallery: [], video: "" },
    conditions: { score: 6.5, status: "Aceptables", wave: "1.0 m", period: "9 s", wind: "NE 20 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Intermedio",
      waveType: "Beach / Reef",
      bottom: "Arena / roca",
      bestSeason: "Todo el año",
      bestTime: "Mañana / tarde",
      bestTide: "Media",
      description: "",
      risks: ["Viento fuerte", "Rocas", "Corrientes"],
      services: ["Parking"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=El+Burro+Fuerteventura",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 45 }
  },

  {
    id: "esquinzo",
    type: "surf-spot",
    name: { es: "Esquinzo", en: "Esquinzo" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "Costa Norte",
      coordinates: { lat: 28.670, lng: -14.015 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/el-cotillo.jpg", gallery: [], video: "" },
    conditions: { score: 7.0, status: "Buenas", wave: "1.2 m", period: "11 s", wind: "NE 12 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Intermedio / avanzado",
      waveType: "Beach Break",
      bottom: "Arena / roca",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media",
      description: "",
      risks: ["Corrientes", "Acceso por pista", "Baño expuesto"],
      services: ["Parking no urbanizado"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Esquinzo+Fuerteventura+surf",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 45 }
  },

  {
    id: "los-lagos",
    type: "surf-spot",
    name: { es: "Los Lagos", en: "Los Lagos" },
    location: {
      island: "Fuerteventura",
      municipality: "La Oliva",
      zone: "El Cotillo",
      coordinates: { lat: 28.690, lng: -14.012 }
    },
    sports: ["Surf", "Bodyboard", "Longboard"],
    media: { hero: "assets/el-cotillo.jpg", gallery: [], video: "" },
    conditions: { score: 6.1, status: "Aceptables", wave: "0.7 m", period: "8 s", wind: "N 11 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Principiante / intermedio",
      waveType: "Beach Break suave",
      bottom: "Arena / roca",
      bestSeason: "Todo el año",
      bestTime: "Mañana",
      bestTide: "Media / alta",
      description: "",
      risks: ["Rocas", "Bañistas", "Zonas poco profundas"],
      services: ["Parking", "Restaurantes cerca", "Servicios en El Cotillo"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Los+Lagos+El+Cotillo",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 45 }
  },

  {
    id: "playitas",
    type: "surf-spot",
    name: { es: "Las Playitas", en: "Las Playitas" },
    location: {
      island: "Fuerteventura",
      municipality: "Tuineje",
      zone: "Las Playitas",
      coordinates: { lat: 28.230, lng: -13.985 }
    },
    sports: ["Surf", "Bodyboard", "SUP"],
    media: { hero: "assets/la-pared.jpg", gallery: [], video: "" },
    conditions: { score: 5.9, status: "Regulares", wave: "0.8 m", period: "8 s", wind: "NE 15 kn", air: "24ºC", water: "21ºC" },
    info: {
      level: "Principiante / intermedio",
      waveType: "Beach Break",
      bottom: "Arena / piedra",
      bestSeason: "Invierno",
      bestTime: "Mañana",
      bestTide: "Media",
      description: "",
      risks: ["Piedras", "Condiciones variables"],
      services: ["Parking", "Restaurantes cerca", "Servicios en el pueblo"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Las+Playitas+Fuerteventura",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 40 }
  },

  {
    id: "puertito",
    type: "surf-spot",
    name: { es: "Puertito de Lobos", en: "Puertito de Lobos" },
    location: {
      island: "Lobos",
      municipality: "La Oliva",
      zone: "Isla de Lobos",
      coordinates: { lat: 28.747, lng: -13.818 }
    },
    sports: ["Surf", "Bodyboard"],
    media: { hero: "assets/rocky-point.jpg", gallery: [], video: "" },
    conditions: { score: 8.4, status: "Muy buenas", wave: "1.5 m", period: "13 s", wind: "NE 10 kn", air: "23ºC", water: "21ºC" },
    info: {
      level: "Avanzado",
      waveType: "Point Break",
      bottom: "Roca volcánica",
      bestSeason: "Otoño / invierno",
      bestTime: "Mañana",
      bestTide: "Media",
      description: "",
      risks: ["Roca", "Corrientes", "Acceso limitado por barco"],
      services: ["Acceso en barco", "Servicios limitados"]
    },
    links: {
      maps: "https://www.google.com/maps/search/?api=1&query=Puertito+de+Lobos+Fuerteventura",
      webcam: "",
      forecast: "",
      windy: "",
      tides: ""
    },
    meta: { published: true, featured: false, completed: 45 }
},

  {

    id: "punta-elena",

    type: "surf-spot",

    name: { es: "Punta Elena", en: "Punta Elena" },

    location: {

      island: "Fuerteventura",

      municipality: "La Oliva",

      zone: "Corralejo",

      coordinates: { lat: 28.7394, lng: -13.8638 }

    },

    sports: ["Surf", "Bodyboard"],

    media: { hero: "assets/punta-elena.jpg", gallery: [], video: "" },

    conditions: {

      score: 5,

      status: "Cargando...",

      wave: "-",

      period: "-",

      wind: "NE 16 kn",

      air: "23ºC",

      water: "21ºC"

    },

    scoring: {

      wave: { idealMin: 0.8, idealMax: 1.8, tooSmall: 0.4, tooBig: 2.8 },

      period: { good: 10, excellent: 13 },

      wind: { maxGoodKnots: 14, maxOkKnots: 20 },

      swellDirection: { idealMin: 300, idealMax: 360 }

    },

    info: {

      level: "Intermedio",

      waveType: "Reef / Point Break",

      bottom: "Roca",

      bestSeason: "Todo el año",

      bestTime: "Mañana",

      bestTide: "Media",

      description: "",

      risks: ["Fondo de roca", "Corrientes", "Picos concurridos"],

      services: ["Parking", "Supermercados", "Escuelas de surf", "Corralejo"]

    },

    links: {

      maps: "https://www.google.com/maps/search/?api=1&query=Punta+Elena+Corralejo",

      webcam: "https://www.fuerteventuraplayas.com/en/webcams/corralejo-rocky-point/",

      forecast: "",

      windy: "",

      tides: ""

    },

    meta: { published: true, featured: false, completed: 60 }

  }

];
spots.forEach((spot) => {
  if (!spot.conditions.tide) {
    spot.conditions.tide = spot.info.bestTide || "Consultar";
  }
});
