let json = {
  "words" :
  {
    "patterns" :
    [
      "{genre} where you {action} {things}",
      "{genre} where you {adverb} {action} {things}",
      "{genre} where you can {action} {things}",
      "{genre} where you can {adverb} {action} {things}",
      "{genre} which forces you to {action} {things}",
      "{genre} which forces you to {adverb} {action} {things}",
      "{genre} which invites you to {action} {things}",
      "{genre} which invites you to {adverb} {action} {things}",
      "{genre} which questions the nature of {things}",
      "{genre} which makes you {emotion} {things}",
      "a cross between {genre} and {genre} in which you {action} {things}",
      "a cross between {genre} and {genre} in which you {adverb} {action} {things}",
      "{genre} that's also {genre} that sees you {action} {things}",
      "{genre} that's also {genre} that sees you {adverb} {action} {things}"
    ],
    "grammar" : {
      "genre" : [
        "a first person shooter",
        "a third person shooter",
        "a JRPG",
        "a god game",
        "an RPG",
        "an action game",
        "an action adventure",
        "a collectathon",
        "a racing game",
        "a mobile game",
        "a browser game",
        "a casual game",
        "a fighting game",
        "a beat-em up",
        "a shoot-em up",
        "an open-world game",
        "a board game",
        "a roguelike",
        "a souls-like",
        "a student project",
        "a clicker game",
        "a game by Hideo Kojima",
        "a game by Peter Molyneaux",
        "an indie game"
      ],
      "action" : [
        "gamify",
        "procedurally generate",
        "control",
        "implement",
        "exploit",
        "protect",
        "destroy",
        "tame",
        "hijack",
        "embrace",
        "disregard",
        "kill",
        "evade",
        "simulate",
        "observe",
        "micro-manage",
        "ruin",
        "improve",
        "rebel against",
        "fight with",
        "wrestle with",
        "investigate",
        "uncover",
        "discover",
        "explore",
        "invest in",
        "debate",
        "construct",
        "research",
        "become haunted by",
        "become angry about",
        "customise",
        "modify",
        "generate",
        "defeat",
        "manage",
        "wage war against",
        "weaponise",
        "reinvent",
        "create",
        "undermine",
        "break down",
        "regulate",
        "contemplate",
        "resurrect",
        "defy",
        "question",
        "interrogate",
        "plagiarise",
        "steal"
      ],
      "things" : [
        "communism",
        "capitalism",
        "post-modernism",
        "politics",
        "telemarketers",
        "people",
        "the masses",
        "schools",
        "the economy",
        "disappointment",
        "the free market",
        "yourself",
        "marketing",
        "Tuesday",
        "Christianity",
        "the environment",
        "climate change",
        "agriculture",
        "history",
        "authority",
        "cats",
        "dogs",
        "horses",
        "birds",
        "serial killers",
        "trains",
        "cars",
        "civilisation",
        "clothing",
        "the flat earth movement",
        "Scientology",
        "terrorism",
        "the Titanic",
        "the Earth",
        "the Moon",
        "the Sun",
        "Mars",
        "heaven",
        "hell",
        "the underworld",
        "the United States",
        "Europe",
        "Africa",
        "Asia",
        "Japan",
        "China",
        "France",
        "Italy",
        "Russia",
        "employment",
        "mathematics",
        "physics",
        "philosophy",
        "video games",
        "progress",
        "the President of the United States of America",
        "the Prime Minister of Great Britain",
        "scissors",
        "spaghetti",
        "guns",
        "robots",
        "the mafia",
        "plague",
        "witchcraft",
        "magic",
        "Hideo Kojima",
        "Todd Howard",
        "Nazi Germany",
        "Soviet Russia",
        "the government",
        "puns",
        "anything",
        "everything",
        "the entirety of western civilisation",
        "your house",
        "your family",
        "God",
        "aliens",
        "zombies",
        "vampires",
        "werewolves"
      ],
      "adjective" : [
        "excellent",
        "good",
        "bad",
        "terrible",
        "interesting",
        "curious",
        "questionable",
        "irrational",
        "outrageous",
        "commendable",
        "hard",
        "boring",
        "dull",
        "invigorating",
        "exciting",
        "harrowing",
        "existential",
        "dreadful"
      ],
      "emotion" : [
        "love",
        "hate",
        "loathe",
        "enjoy",
        "detest",
        "hallucinate",
        "imagine",
        "question"
      ],
      "adverb" : [
        "quickly",
        "beautifully",
        "easily",
        "cruelly",
        "badly",
        "poorly",
        "silently",
        "quietly",
        "horrifically",
        "cautiously",
        "ironically",
        "unironically",
        "accidentally",
        "deliberately",
        "competitively",
        "indifferently",
        "angrily"
      ],
      "inspiration" : [
        "The Lord of the Rings",
        "Star Wars",
        "The Matrix",
        "eastern philosophy",
        "eastern religion",
        "the wild west",
        "capitalist excess",
        "the Sengoku period",
        "The Iliad",
        "Dante's Inferno",
        "Greek mythology",
        "World War 1",
        "World War 2",
        "the war on drugs",
        "a true story",
        "historical events"
      ],
      "mechanic" : [
        "loot boxes",
        "a dynamic weather system",
        "a day/night cycle",
        "quick time events",
        "stealth mechanics",
        "a crafting system",
        "dynamic quests",
        "precision platforming",
        "wall running",
        "perma-death",
        "RPG mechanics",
        "online leaderboards",
        "a complex story",
        "difficult decisions with lasting consequences"
      ],
      "addendum" : [
        ".",
        " {adverb}.",
        " but no-one cares.",
        " for no real point.",
        " to make money.",
        ", {things} not included.",
        " with {things}.",
        " thanks to {things}.",
        " for {things}.",
        " to {action} {things}.",
        " to {adverb} {action} {things}.",
        " {adverb}.",
        " and make {adjective} decisions.",
        " for your personal gain.",
        " but it gets weirder.",
        " but it's a metaphor about {things}.",
        " and it's really {adjective}.",
        ", but it's {adjective}.",
        ", or so you think.",
        ", but there's a shocking twist.",
        " in virtual reality",
        " but it's all in your head.",
        " and you {emotion} every minute of it.",
        " and you can't help but {emotion} it.",
        " and there are microtransactions.",
        " but it's secretly controlled by {things}.",
        " and you can {action} your house.",
        " and you can {adverb} {action} your house.",
        " and you can {action} your life.",
        " and you can {adverb} {action} your life.",
        " in an alternate universe.",
        ", inspired by {inspiration}.",
        ", based on {inspiration}.",
        " and borrows elements from {inspiration}.",
        ", featuring Dante from the Devil May Cry series!",
        " and it's grindy as hell.",
        " and it's an MMO.",
        " and later introduces elements of {things}.",
        " and early on you're given {things} that you can {action}.",
        " with the addition of {things}.",
        " and there's a day/night cycle.",
        " with the power of {things}.",
        " and it includes {mechanic}.",
        " with {mechanic}.",
        " and it makes use of {mechanic}.",
        " in 3D.",
        " in 2D.",
        " in the future.",
        " in the past.",
        " in another world.",
        " in a fantasy world.",
        " in a dystopian world.",
        " in a post-apocalyptic world.",
        " in the modern world."
      ]
    }
  }
};

let patterns = json['words']['patterns'];
// genre, things, action, adjective, emotion, adverb, addendum
let grammar = json['words']['grammar'];
let idea = document.getElementById('idea');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max)) + min;
}

function generate() {
  let chosenPattern = getRandomInt(0, patterns.length);
  let addendum = getRandomInt(0, grammar['addendum'].length);
  let regex = /[{][a-z]+[}]/gm;
  let lastGenre = '';

  // Built sentence structure
  let currentIdea = patterns[chosenPattern] + grammar['addendum'][addendum];

  // Place all matches in an array
  let placeholders = [...currentIdea.matchAll(regex)];

  // Replace each match one at a time
  for (const p of placeholders) {
    var block = p[0].substr(1, p[0].length - 2);

    var r = new RegExp("[{][" + block + "]+[}]");
    var replace = replaceStr(grammar[block], currentIdea);

    if (block === 'genre') {
      // Try to find a new genre that doesn't match the last
      while(replace === lastGenre) {
        replace = replaceStr(grammar[block], currentIdea);
      }
      lastGenre = replace;
    }
    currentIdea = currentIdea.replace(r, replace);
  }
  idea.innerHTML = currentIdea;
  console.log(currentIdea);
}

function replaceStr(arr, str) {
  let rno = getRandomInt(0, arr.length);
  return arr[rno];
}
