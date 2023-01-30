//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream
//
const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "JL",
  openInNewTab: true,
  title: "Bento",

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,
  
  // Theme
  theme: "catppuccin-mocha",
  imageBackground: false,
  imageUrl: "bkg3_bkg5", // place in ./src/assets/images/ and provide the file name. Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  themes: [   // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    "arc",
    "bento",
    "catppuccin-frappe",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "conceptdark", // dark mode only
    "monokai",
    "nord",
    "sakura",
    "solarized",
    "summer"
  ],

  // Search Bar
  searchBar: true,
  searchEngine: "brave", // google, ddg, brave
  barStyle: "minimal", // bento, minimal, boxy, rounded
  barPlaceholder: "", // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: "Good morning,",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Sweet dreams,",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "YourOpenWeatherMapAPIKey", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // Autochange theme from OS preferece - The below options are all mutually exclusive. If you've got multiple set to true, the first one will be set and the rest ignored.
  changeThemeByOS: false,

  // Switch theme based on set hours. (24hr format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // Switch dark theme automatically from sunrise to sunset. Pulls from the browsers location, or falls back to the defaults if not.
  // Requires an OpenWeatherMap API key.
  changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1", // entry ID, don't modify.
      name: "Youtube", // set the name of the card
      icon: "fab-youtube", // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
      link: "https://youtube.com/" // provide a link to the page.
    },
    {
      id: "2",
      name: "Twitter",
      icon: "fab-twitter",
      link: "https://twitter.com/"
    },
    {
      id: "3",
      name: "Libreddit",
      icon: "fab-reddit-alien",
      link: "https://libreddit.spike.codes/"
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r"
    },
    {
      id: "5",
      name: "Github",
      icon: "fab-github-alt",
      link: "https://github.com"
    },
    {
      id: "6",
      name: "Netflix",
      icon: "video",
      link: "https://netflix.com/"
    }
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Twitch",
      icon: "fab-twitch",
      link: "https://twitch.tv"
    },
    {
      id: "2",
      name: "Amazon",
      icon: "fab-amazon",
      link: "https://amazon.com/"
    },
    {
      id: "3",
      name: "Kiranico",
      icon: "gamepad-modern",
      link: "https://kiranico.com"
    },
    {
      id: "5",
      name: "ArchWiki",
      icon: "fab-linux",
      link: "https://wiki.archlinux.org/"
    },
    {
      id: "6",
      name: "r/roms Megathread",
      icon: "joystick",
      link: "https://r-roms.github.io/"
    },
  ],

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: true,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: false
  }

};

export const config = CONFIG;
