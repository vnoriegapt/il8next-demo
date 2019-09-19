import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      navMenu: {
        homePage: "Home",
        aboutPage: "About",
        language: "Language",
        en: "English",
        es: "Spanish"
      },
      homePage: {
        listOfPoems: [
          {
            title: "As autumn falls",
            paragraph: "Shrouded in golden leaves, we wait. The world doesn’t end at sunset and only dreams limit themselves to  things. Through a labyrinth of blank hours time leads us on as autumn falls over our house, our patio. Shrouded in a  relentless fog we wait, we wait: nostalgia means to live without remembering the word we are made of."
          },
          {
            title: "To become one with music",
            paragraph: "You are in need of everything: grey roads, deep glooms, birds that sing even in silence; the sky, an autumn leaf, hands empty, love unreturning, snow’s whiteness; dawn lights, you are in need of everything the dream  requires, to become one with the music of the most faraway blues so that eventually your soul will have confidence in death."
          }
        ]
      },
      aboutPage: {
        title: "Five poems in English and Spanish by Giovanni Quessep",
        description: "This year, Felipe Botero, friend of the house and in charge of our ARCADIA Traduce section, published ‘A Greek Verse for Ophelia & Other Poems’, a bilingual anthology of poems by Giovanni Quessep."
      },
      footer: {
        "cpy": "Copyright ©"
      }
    },
    es: {
      navMenu: {
        homePage: "Inicio",
        aboutPage: "Acerca",
        language: "Idioma",
        en: "Ingles",
        es: "Español"
      },
      homePage: {
        listOfPoems: [
          {
            title: "Mientras cae el otoño",
            paragraph: "Nosotros esperamos envueltos por los hojas doradas. El mundo no acaba en el atardecer, y solamente los  sueños tienen su límite en las cosas. El tiempo nos conduce por su laberinto de horas en blanco mientras cae el otoño al patio de nuestra casa. Envueltos por la niebla incesante seguimos esperando: La nostalgia es vivir sin recordar de qué palabra fuimos inventados."
          },
          {
            title: "Para hacerte a la música",
            paragraph: "Necesitas de todo, de los caminos grises, de las hondas penumbras o las luces del alba, de pájaros que cantan aún en el silencio; necesitas del cielo y la hoja de otoño, de unas manos vacías o el amor que no vuelve, de la blancura de la nieve; necesitas de todo para el sueño, para hacerte a la música de los azules más distantes, para que  al fin tu alma tenga confianza en la muerte."
          }
        ]
      },
      aboutPage: {
        title: "Cinco poemas en inglés y español de Giovanni Quessep",
        description: "Este año, Felipe Botero, amigo de la casa y encargado de nuestra sección ARCADIA Traduce, publicó ‘A Greek Verse for Ophelia & Other Poems’, una antología bilingüe de poemas de Giovanni Quessep."
      },
      footer: {
        "cpy": "Copyright ©"
      }
    }
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;