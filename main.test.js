import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search()).toStrictEqual([
    "What films should an aspiring journalist watch?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "What books should an aspiring journalist read?",
    "Marie Colvin shined a light on war-torn corners of the world",
  ]);
});


test("Search function testing if it has specific element", () => {
  expect(search()).toContain(
    "What films should an aspiring journalist watch?"
  );
});


test("Array newsList testing", () => {
  expect(newsList).toEqual([
    "What films should an aspiring journalist watch?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "What books should an aspiring journalist read?",
    "Marie Colvin shined a light on war-torn corners of the world",
  ]);
});


test("Test if newslist.length is == 8", () => {
  expect(newsList).toHaveLength(8);
});


test("sort function testing ascending", () => {
  expect(sort("ascending")).toEqual([
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?",
  ]);
});


test("sort function testing decending", () => {
  expect(sort("decending")).toEqual([
    "What films should an aspiring journalist watch?",
    "What books should an aspiring journalist read?",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Media glare can enrich tennis pros yet imperil mental health",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Buried underpants and tea bags help scientists evaluate soil",
  ]);
});
