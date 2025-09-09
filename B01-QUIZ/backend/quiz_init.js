// the functions here are used to populate the quiz app.

/**
 * @dev the types of aniem used for initial population
 * @jjk jujutsu-kaisen
 * @nr naruto
 * @sg steins;gate
 * @ds demon-slayer
 */

import quiz from "./models/quiz.js";

async function populateJJKQuestions() {
  const questions = [
    {
      animeName: "jjk",
      question: "Why did Gojo go berserk on Toji in the flashback?",
      options: [
        { symbol: "gojo", text: "He had achieved enlightenment (Honored One)" },
        { symbol: "geto", text: "He was avenging Riko's death" },
        { symbol: "itadori", text: "Suguru Geto told him to" },
        { symbol: "sukuna", text: "He feared Toji's Heavenly Restriction" },
      ],
      answer: "gojo",
    },
    {
      animeName: "jjk",
      question: "What is the name of Megumi Fushiguro's Domain Expansion?",
      options: [
        { symbol: "gojo", text: "Unlimited Void" },
        { symbol: "geto", text: "Self-Embodiment of Perfection" },
        { symbol: "itadori", text: "Chimera Shadow Garden" },
        { symbol: "sukuna", text: "Malevolent Shrine" },
      ],
      answer: "itadori",
    },
    {
      animeName: "jjk",
      question: "Which one of these has Yuji not watched?",
      options: [
        { symbol: "gojo", text: "Lord of the Rings" },
        { symbol: "geto", text: "Castaway" },
        { symbol: "itadori", text: "Naruto" },
        { symbol: "sukuna", text: "Hunter x Hunter" },
      ],
      answer: "geto", // Note: This is based on popular fan interpretations.
    },
    {
      animeName: "jjk",
      question: "What is the name of Gojo’s Domain Expansion?",
      options: [
        { symbol: "gojo", text: "Malevolent Shrine" },
        { symbol: "geto", text: "Hollow Purple" },
        { symbol: "itadori", text: "Unlimited Void" },
        { symbol: "sukuna", text: "Six Eyes" },
      ],
      answer: "itadori",
    },
    {
      animeName: "jjk",
      question: "What species are Choso, Kechizu, and Eso?",
      options: [
        { symbol: "gojo", text: "Spirits" },
        { symbol: "geto", text: "Curses" },
        { symbol: "itadori", text: "Humans" },
        { symbol: "sukuna", text: "Death Painting Wombs" },
      ],
      answer: "sukuna",
    },
    {
      animeName: "jjk",
      question: "How many Sukuna fingers are there?",
      options: [
        { symbol: "gojo", text: "20" },
        { symbol: "geto", text: "15" },
        { symbol: "itadori", text: "23" },
        { symbol: "sukuna", text: "10" },
      ],
      answer: "gojo",
    },
    {
      animeName: "jjk",
      question:
        "Gojo lent Yuji the cursed tool Slaughter Demon. Who did Gojo take that tool from?",
      options: [
        { symbol: "gojo", text: "Panda" },
        { symbol: "geto", text: "Maki" },
        { symbol: "itadori", text: "Megumi" },
        { symbol: "sukuna", text: "Nishimiya" },
      ],
      answer: "geto",
    },
    {
      animeName: "jjk",
      question: "How much does Black Flash amplify the user’s physical hit by?",
      options: [
        { symbol: "gojo", text: "2.5" },
        { symbol: "geto", text: "3" },
        { symbol: "itadori", text: "6" },
        { symbol: "sukuna", text: "8.5" },
      ],
      answer: "gojo",
    },
    {
      animeName: "jjk",
      question: "Who is not a Kyoto School second year student?",
      options: [
        { symbol: "gojo", text: "Mai Zen’in" },
        { symbol: "geto", text: "Kokichi Muta" },
        { symbol: "itadori", text: "Kasumi Miwa" },
        { symbol: "sukuna", text: "Aoi Todo" },
      ],
      answer: "sukuna",
    },
    {
      animeName: "jjk",
      question:
        "Which Tokyo School second year does not participate in the goodwill event?",
      options: [
        { symbol: "gojo", text: "Maki Zen’in" },
        { symbol: "geto", text: "Toge Inumaki" },
        { symbol: "itadori", text: "Panda" },
        { symbol: "sukuna", text: "Yuta Okkotsu" },
      ],
      answer: "sukuna",
    },
    {
      animeName: "jjk",
      question: "Who uses Mechamaru as their proxy?",
      options: [
        { symbol: "gojo", text: "Toji Fushiguro" },
        { symbol: "geto", text: "Mai Zen’in" },
        { symbol: "itadori", text: "Kokichi Muta" },
        { symbol: "sukuna", text: "Panda" },
      ],
      answer: "itadori",
    },
    {
      animeName: "jjk",
      question:
        "Which of these is not a cursed corpse created by Masamichi Yaga?",
      options: [
        { symbol: "gojo", text: "Ultimate Mechamaru" },
        { symbol: "geto", text: "Cathy" },
        { symbol: "itadori", text: "Takeru" },
        { symbol: "sukuna", text: "Panda" },
      ],
      answer: "gojo",
    },
    {
      animeName: "jjk",
      question:
        "What is the name of Megumi’s technique that summons shikigami?",
      options: [
        { symbol: "gojo", text: "Chimera Shadow Garden" },
        { symbol: "geto", text: "Ten Shadows Technique" },
        { symbol: "itadori", text: "Limitless" },
        { symbol: "sukuna", text: "Blood Manipulation" },
      ],
      answer: "geto",
    },
    {
      animeName: "jjk",
      question: "Who is Gojo’s best friend?",
      options: [
        { symbol: "gojo", text: "Nanami" },
        { symbol: "geto", text: "Geto" },
        { symbol: "itadori", text: "Utahime" },
        { symbol: "sukuna", text: "Shoko" },
      ],
      answer: "geto",
    },
    {
      animeName: "jjk",
      question: "Which of these is not a technique that Kugisaki uses?",
      options: [
        { symbol: "gojo", text: "Straw Doll Technique" },
        { symbol: "geto", text: "Resonance" },
        { symbol: "itadori", text: "Hairpin" },
        { symbol: "sukuna", text: "Divergent Fist" },
      ],
      answer: "sukuna",
    },
    {
      animeName: "jjk",
      question: "What's the name of the shikigami that Junpei can summon?",
      options: [
        { symbol: "gojo", text: "Moon Dregs" },
        { symbol: "geto", text: "Divine Dog" },
        { symbol: "itadori", text: "Nue" },
        { symbol: "sukuna", text: "Max Elephant" },
      ],
      answer: "gojo",
    },
    {
      animeName: "jjk",
      question: "Which of these curses does not work with Suguru Geto?",
      options: [
        { symbol: "gojo", text: "Jogo" },
        { symbol: "geto", text: "Mahito" },
        { symbol: "itadori", text: "Hanami" },
        { symbol: "sukuna", text: "Sukuna" },
      ],
      answer: "sukuna",
    },
  ];

  try {
    // remove duplicate questions for the anime on server restart
    console.log("Clearing old jjk questions ...");
    await quiz.deleteMany({ animeName: "jjk" });
    console.log("Cleared.");

    console.log("Domain expansion in the server ...");
    // Insert the new questions into the database
    await quiz.insertMany(questions);
    console.log("✅ Successfully populated JJK questions into the database.");
  } catch (error) {
    console.error("❌ Error populating database:", error);
  }
}

async function populateNaruto() {
  // symbols: naruto, sasuke, sakura, sai
  const questions = [
    {
      animeName: "naruto",
      question: "Naruto's first successful jutsu?",
      options: [
        { symbol: "naruto", text: "Shadow Clone Jutsu" },
        { symbol: "sasuke", text: "Rasengan" },
        { symbol: "sakura", text: "Walking on Water (Chakra Control)" },
        { symbol: "sai", text: "Thousand Years of Pain" },
      ],

      answer: "naruto",
    },
    {
      animeName: "naruto",
      question: "Who is the new member of team 7?",
      options: [
        { symbol: "naruto", text: "Rocklee" },
        { symbol: "sasuke", text: "Hinata" },
        { symbol: "sakura", text: "Hanzo" },
        { symbol: "sai", text: "Sai" },
      ],
      answer: "sai",
    },
    {
      animeName: "naruto",
      question:
        "What is summoned when Itachi Mangekyo and Amaratsu are awakened?",
      options: [
        { symbol: "naruto", text: "A snake" },
        { symbol: "sasuke", text: "A toad" },
        { symbol: "sakura", text: "A susano" },
        { symbol: "sai", text: "A fox" },
      ],
      answer: "sakura",
    },
    {
      animeName: "naruto",
      question:
        "What is the real name of Pain that Naruto fought in the leaf village?",
      options: [
        { symbol: "naruto", text: "Kakuzu" },
        { symbol: "sasuke", text: "Nagato" },
        { symbol: "sakura", text: "Kabuto" },
        { symbol: "sai", text: "Hiraku" },
      ],
      answer: "sasuke",
    },
    {
      animeName: "naruto",
      question: "Can Kakashi perform Rasengan?",
      options: [
        { symbol: "naruto", text: "Yes" },
        { symbol: "sasuke", text: "No" },
        { symbol: "sakura", text: "Only with Sharingan" },
        { symbol: "sai", text: "Only as a child" },
      ],
      answer: "naruto",
    },
    {
      animeName: "naruto",
      question:
        "Who stopped Naruto from going to all nine tails while fighting Pain?",
      options: [
        { symbol: "naruto", text: "Kakashi" },
        { symbol: "sasuke", text: "Jiraya" },
        { symbol: "sakura", text: "4th Hokage" },
        { symbol: "sai", text: "Sasuke" },
      ],
      answer: "sakura",
    },
    {
      animeName: "naruto",
      question: "Who is the creator of Akatsuki?",
      options: [
        { symbol: "naruto", text: "Itachi" },
        { symbol: "sasuke", text: "Kisame" },
        { symbol: "sakura", text: "Madara" },
        { symbol: "sai", text: "Yahiko" },
      ],
      answer: "sai",
    },
    {
      animeName: "naruto",
      question: "Who gave Yamato his element of wood?",
      options: [
        { symbol: "naruto", text: "Kabuto" },
        { symbol: "sasuke", text: "Orochimaru" },
        { symbol: "sakura", text: "Zabuza" },
        { symbol: "sai", text: "Danzo" },
      ],
      answer: "sasuke",
    },
    {
      animeName: "naruto",
      question: "Who created the poison that Kankuro's puppets use?",
      options: [
        { symbol: "naruto", text: "Kankuro" },
        { symbol: "sasuke", text: "Chiyo" },
        { symbol: "sakura", text: "Naruto" },
        { symbol: "sai", text: "Sasori" },
      ],
      answer: "sai",
    },
    {
      animeName: "naruto",
      question: "Who took the cursed mark off Sasuke?",
      options: [
        { symbol: "naruto", text: "Naruto" },
        { symbol: "sasuke", text: "Itachi" },
        { symbol: "sakura", text: "Sakura" },
        { symbol: "sai", text: "Kakashi" },
      ],
      answer: "sasuke",
    },
    {
      animeName: "naruto",
      question: "How many elements are there in Naruto Shippuden?",
      options: [
        { symbol: "naruto", text: "5" },
        { symbol: "sasuke", text: "4" },
        { symbol: "sakura", text: "8" },
        { symbol: "sai", text: "9" },
      ],
      answer: "naruto",
    },
    {
      animeName: "naruto",
      question:
        "How many gates did Might Guy open while fighting Kisame for the second time?",
      options: [
        { symbol: "naruto", text: "8" },
        { symbol: "sasuke", text: "5" },
        { symbol: "sakura", text: "6" },
        { symbol: "sai", text: "3" },
      ],
      answer: "sakura",
    },
    {
      animeName: "naruto",
      question: "What position did Gaara become?",
      options: [
        { symbol: "naruto", text: "2nd Kazekage" },
        { symbol: "sasuke", text: "5th Kazekage" },
        { symbol: "sakura", text: "4th Kazekage" },
        { symbol: "sai", text: "3rd Kazekage" },
      ],
      answer: "sasuke",
    },
    {
      animeName: "naruto",
      question: "Who has the original cursed mark?",
      options: [
        { symbol: "naruto", text: "Sasuke" },
        { symbol: "sasuke", text: "Kimimaro" },
        { symbol: "sakura", text: "Jugo" },
        { symbol: "sai", text: "Sakon" },
      ],
      answer: "sakura",
    },
    {
      animeName: "naruto",
      question: "Who was the strongest Kazekage of the sand village?",
      options: [
        { symbol: "naruto", text: "2nd" },
        { symbol: "sasuke", text: "1st" },
        { symbol: "sakura", text: "4th" },
        { symbol: "sai", text: "3rd" },
      ],
      answer: "sai",
    },
    {
      animeName: "naruto",
      question: "How many Uchiha survived their clan's downfall?",
      options: [
        { symbol: "naruto", text: "5" },
        { symbol: "sasuke", text: "2" },
        { symbol: "sakura", text: "3" },
        { symbol: "sai", text: "1" },
      ],
      answer: "sakura",
    },
  ];

  try {
    // remove duplicate questions for the anime on server restart
    console.log("Clearing old naruto questions ...");
    await quiz.deleteMany({ animeName: "naruto" });
    console.log("Cleared.");

    console.log("Server-Start-No-Jutsuuu ...");
    // Insert the new questions into the database
    await quiz.insertMany(questions);
    console.log(
      "✅ Successfully populated Naruto questions into the database."
    );
  } catch (error) {
    console.error("❌ Error populating database:", error);
  }
}
async function populateSteinsGate() {
  const questions = [
    {
      animeName: "steins;gate",
      question: "Which one of these events happens first chronologically?",
      options: [
        { symbol: "kyoma", text: "Tennouji Nae is born" },
        {
          symbol: "kurisu",
          text: "SERN's prototype machine and LHC is finished",
        },
        { symbol: "mayuri", text: "Hashida Suzu dies in the Alpha worldline" },
        { symbol: "daru", text: "Mayuri's grandmother dies" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question:
        "Who was the first person to request to use the D-Mail system to change something?",
      options: [
        { symbol: "kyoma", text: "Faris" },
        { symbol: "kurisu", text: "Suzuha" },
        { symbol: "mayuri", text: "Moeka" },
        { symbol: "daru", text: "Luka" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question: "What size shirt does Daru wear?",
      options: [
        { symbol: "kyoma", text: "XXXL" },
        { symbol: "kurisu", text: "XXL" },
        { symbol: "mayuri", text: "XXXXL" },
        { symbol: "daru", text: "XL" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question:
        "Who is the last person to officialy join the Future Gadget Lab?",
      options: [
        { symbol: "kyoma", text: "Suzuha" },
        { symbol: "kurisu", text: "Moeka" },
        { symbol: "mayuri", text: "Luka" },
        { symbol: "daru", text: "Faris" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question:
        "What number is after nyan in superscript on the May Queen nyan sign?",
      options: [
        { symbol: "kyoma", text: "1" },
        { symbol: "kurisu", text: "3" },
        { symbol: "mayuri", text: "2" },
        { symbol: "daru", text: "4" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question:
        "What does Okabe bring to the lab that Suzuha remarks she has never seen before?",
      options: [
        { symbol: "kyoma", text: "Bananas" },
        { symbol: "kurisu", text: "Cabbage" },
        { symbol: "mayuri", text: "Apple" },
        { symbol: "daru", text: "Corn" },
      ],
      answer: "daru",
    },
    {
      animeName: "steins;gate",
      question:
        "Which of the following was not a location of Jellymans Report?",
      options: [
        { symbol: "kyoma", text: "Mountain" },
        { symbol: "kurisu", text: "Road" },
        { symbol: "mayuri", text: "Forest" },
        { symbol: "daru", text: "Wall" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question: "At which university does Okabe research the gel-bananas?",
      options: [
        { symbol: "kyoma", text: "Denki" },
        { symbol: "kurisu", text: "Hosei" },
        { symbol: "mayuri", text: "Chuo" },
        { symbol: "daru", text: "Keio" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question: "What platform did Steins;Gate first debut on?",
      options: [
        { symbol: "kyoma", text: "Xbox 360" },
        { symbol: "kurisu", text: "Windows PC" },
        { symbol: "mayuri", text: "PSP" },
        { symbol: "daru", text: "PS3" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question: "In the show, what was the 2nd way Mayuri died?",
      options: [
        { symbol: "kyoma", text: "Hit by a car" },
        { symbol: "kurisu", text: "Taken by SERN and experimented on" },
        { symbol: "mayuri", text: "Hit by a train" },
        { symbol: "daru", text: "Shot by Moeka" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question:
        "Which of the following is NOT a message Shining Finger sent to Okabe?",
      options: [
        { symbol: "kyoma", text: "Are you asleep?" },
        { symbol: "kurisu", text: "Message me now" },
        { symbol: "mayuri", text: "When are you going to answer?" },
        { symbol: "daru", text: "How long are you going to sleep?" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question:
        "Which of the female characters in Steins;Gate has the largest chest?",
      options: [
        { symbol: "kyoma", text: "Faris" },
        { symbol: "kurisu", text: "Suzuha" },
        { symbol: "mayuri", text: "Mayuri" },
        { symbol: "daru", text: "Moeka" },
      ],
      answer: "daru",
    },
    {
      animeName: "steins;gate",
      question: "What does the 'D' in 'D-Mail' stand for?",
      options: [
        { symbol: "kyoma", text: "Delayed" },
        { symbol: "kurisu", text: "It doesn't have a meaning" },
        { symbol: "mayuri", text: "Divergence" },
        { symbol: "daru", text: "DeLorean" },
      ],
      answer: "daru",
    },
    {
      animeName: "steins;gate",
      question: "According to Okabe, what is his IQ?",
      options: [
        { symbol: "kyoma", text: "190" },
        { symbol: "kurisu", text: "170" },
        { symbol: "mayuri", text: "180" },
        { symbol: "daru", text: "160" },
      ],
      answer: "kurisu",
    },
    {
      animeName: "steins;gate",
      question:
        "How big is Mr. Braun's CRT TV that is used to activate the PhoneWave?",
      options: [
        { symbol: "kyoma", text: "38'" },
        { symbol: "kurisu", text: "40'" },
        { symbol: "mayuri", text: "44'" },
        { symbol: "daru", text: "42'" },
      ],
      answer: "daru",
    },
    {
      animeName: "steins;gate",
      question: "How many Jellymans Reports are there?",
      options: [
        { symbol: "kyoma", text: "14" },
        { symbol: "kurisu", text: "18" },
        { symbol: "mayuri", text: "11" },
        { symbol: "daru", text: "5" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question:
        "In the show, which of these characters makes their first appearance the latest?",
      options: [
        { symbol: "kyoma", text: "Faris" },
        { symbol: "kurisu", text: "Yugo Tennouji" },
        { symbol: "mayuri", text: "Suzuha" },
        { symbol: "daru", text: "Moeka" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question: "Who does the episode/chapter 'Made in Complex' center around?",
      options: [
        { symbol: "kyoma", text: "Suzuha" },
        { symbol: "kurisu", text: "Moeka" },
        { symbol: "mayuri", text: "Luka" },
        { symbol: "daru", text: "Faris" },
      ],
      answer: "daru",
    },
    {
      animeName: "steins;gate",
      question:
        "Which one of these Alpha worldlines is NOT featured in Steins;Gate?",
      options: [
        { symbol: "kyoma", text: "0.456903" },
        { symbol: "kurisu", text: "0.256527" },
        { symbol: "mayuri", text: "0.571024" },
        { symbol: "daru", text: "0.337187" },
      ],
      answer: "kurisu",
    },
    {
      animeName: "steins;gate",
      question: "Which one of these Steins;Gate episodes have multiple parts?",
      options: [
        { symbol: "kyoma", text: "Chaos Theory Homeostasis" },
        { symbol: "kurisu", text: "Endless Apoptosis" },
        { symbol: "mayuri", text: "Metaphysics Necrosis" },
        { symbol: "daru", text: "Time Travel Paranoia" },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question: "What does FB stand for?",
      options: [
        { symbol: "kyoma", text: "Father Braun" },
        { symbol: "kurisu", text: "Ferdinand Braun" },
        { symbol: "mayuri", text: "Frederick Braun" },
        { symbol: "daru", text: "Franz Braun" },
      ],
      answer: "kurisu",
    },
    {
      animeName: "steins;gate",
      question: "Why does Suzuha dislike Kurisu initially?",
      options: [
        {
          symbol: "kyoma",
          text: "In the future, Kurisu develops the time machine",
        },
        {
          symbol: "kurisu",
          text: "In the future, Kurisu is responsible for the death of her parents",
        },
        {
          symbol: "mayuri",
          text: "She thinks that Kurisu is involved with SERN",
        },
        { symbol: "daru", text: "She is put off by Kurisu's cold personality" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question: "When was the first D-Mail sent?",
      options: [
        { symbol: "kyoma", text: "July 24th" },
        { symbol: "kurisu", text: "Aug 1st" },
        { symbol: "mayuri", text: "July 28th" },
        { symbol: "daru", text: "Aug 3rd" },
      ],
      answer: "kurisu",
    },
    {
      animeName: "steins;gate",
      question: "Which of these future gadgets is never seen in use?",
      options: [
        { symbol: "kyoma", text: "Cyalume Saber" },
        { symbol: "kurisu", text: "Bit Particle Gun" },
        { symbol: "mayuri", text: "Bamboo Helicam" },
        { symbol: "daru", text: "FG204" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question: "What was Kurisu's initial reason for showing up at the lab?",
      options: [
        {
          symbol: "kyoma",
          text: "She wants to know whether Okabe's claims of seeing her dead were real",
        },
        {
          symbol: "kurisu",
          text: "She is angry at Okabe for groping her earlier and wants to confront him about it",
        },
        {
          symbol: "mayuri",
          text: "She is invited by Daru to help improve the PhoneWave",
        },
        {
          symbol: "daru",
          text: "She wants to investigate the PhoneWave after seeing the gelled banana",
        },
      ],
      answer: "kyoma",
    },
    {
      animeName: "steins;gate",
      question: "What is Luka's sword called?",
      options: [
        { symbol: "kyoma", text: "Elucidator" },
        { symbol: "kurisu", text: "Kanshou" },
        { symbol: "mayuri", text: "Samidare" },
        { symbol: "daru", text: "Durandal" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question: "What month does Kurisu return to America?",
      options: [
        { symbol: "kyoma", text: "October" },
        { symbol: "kurisu", text: "July" },
        { symbol: "mayuri", text: "August" },
        { symbol: "daru", text: "September" },
      ],
      answer: "mayuri",
    },
    {
      animeName: "steins;gate",
      question: "What dating advice does Kurisu NOT give Okabe?",
      options: [
        { symbol: "kyoma", text: "What to wear" },
        { symbol: "kurisu", text: "Smooth conversation" },
        { symbol: "mayuri", text: "Offer handkerchief if she sneezes" },
        { symbol: "daru", text: "Don't be late" },
      ],
      answer: "mayuri",
    },
  ];
  try {
    // remove duplicate questions for the anime on server restart
    console.log("Clearing old steins;gate questions ...");
    await quiz.deleteMany({ animeName: "steins;gate" });
    console.log("Cleared.");

    console.log("Stein's Gate Opens ... !!");
    // Insert the new questions into the database
    await quiz.insertMany(questions);
    console.log(
      "✅ Successfully populated steins;gate questions into the database."
    );
  } catch (error) {
    console.error("❌ Error populating database:", error);
  }
}
async function populateDemonSlayer() {
  const questions = [
    {
      animeName: "demon_slayer",
      question: 'What is a demon\'s weakness in "Demon Slayer"?',
      options: [
        { symbol: "tanjiro", text: "Stones" },
        { symbol: "nezuko", text: "Water" },
        { symbol: "zenitsu", text: "Fire" },
        { symbol: "inosuke", text: "Sunlight" },
      ],
      answer: "inosuke",
    },
    {
      animeName: "demon_slayer",
      question:
        'Who is considered the god and creator of all demons in "Demon Slayer"?',
      options: [
        { symbol: "tanjiro", text: "Akaza" },
        { symbol: "nezuko", text: "Gyokko" },
        { symbol: "zenitsu", text: "Muzan" },
        { symbol: "inosuke", text: "Kyogai" },
      ],
      answer: "zenitsu",
    },
    {
      animeName: "demon_slayer",
      question: 'Who is the Love Hashira in "Demon Slayer"?',
      options: [
        { symbol: "tanjiro", text: "Obanai Iguro" },
        { symbol: "nezuko", text: "Mitsuri Kanroji" },
        { symbol: "zenitsu", text: "Muichiro Tokito" },
        { symbol: "inosuke", text: "Gyomei Himejima" },
      ],
      answer: "nezuko",
    },
    {
      animeName: "demon_slayer",
      question:
        "Which of the following characters is NOT a Hashira in Demon Slayer?",
      options: [
        { symbol: "tanjiro", text: "Giyu Tomioka" },
        { symbol: "nezuko", text: "Zenitsu Agatsuma" },
        { symbol: "zenitsu", text: "Kyojuro Rengoku" },
        { symbol: "inosuke", text: "Mitsuri Kanroji" },
      ],
      answer: "nezuko",
    },
    {
      animeName: "demon_slayer",
      question:
        "What is the special type of sword that Demon Slayers wield to kill demons?",
      options: [
        { symbol: "tanjiro", text: "Nichirin Sword" },
        { symbol: "nezuko", text: "Lighting blades" },
        { symbol: "zenitsu", text: "Cursed katanas" },
        { symbol: "inosuke", text: "Fire katanas" },
      ],
      answer: "tanjiro",
    },
    {
      animeName: "demon_slayer",
      question: 'How many Hashiras are there in "Demon Slayer"?',
      options: [
        { symbol: "tanjiro", text: "15" },
        { symbol: "nezuko", text: "18" },
        { symbol: "zenitsu", text: "20" },
        { symbol: "inosuke", text: "9" },
      ],
      answer: "inosuke",
    },
    {
      animeName: "demon_slayer",
      question: "What did Tanjiro use to do before becoming a demon slayer?",
      options: [
        { symbol: "tanjiro", text: "He was a cobbler." },
        { symbol: "nezuko", text: "He used to sell fruits." },
        { symbol: "zenitsu", text: "He used to sell charcoal." },
        { symbol: "inosuke", text: "He was a barber." },
      ],
      answer: "zenitsu",
    },
    {
      animeName: "demon_slayer",
      question: "Who is The Serpent Hashira?",
      options: [
        { symbol: "tanjiro", text: "Giyu Tomioka" },
        { symbol: "nezuko", text: "Muichiro Tokito" },
        { symbol: "zenitsu", text: "Obanai Iguro" },
        { symbol: "inosuke", text: "Sanemi Shinazugawa" },
      ],
      answer: "zenitsu",
    },
    {
      animeName: "demon_slayer",
      question: "Who taught Tanjiro the water-breathing technique?",
      options: [
        { symbol: "tanjiro", text: "Giyu Tomioka" },
        { symbol: "nezuko", text: "Kyojuro Rengoku" },
        { symbol: "zenitsu", text: "Shinobu Kocho" },
        { symbol: "inosuke", text: "Sakonji Urokodaki" },
      ],
      answer: "inosuke",
    },
    {
      animeName: "demon_slayer",
      question: "What is Tanjiro's greatest natural strength?",
      options: [
        { symbol: "tanjiro", text: "His speed and reflexes" },
        { symbol: "nezuko", text: "His sense of smell" },
        { symbol: "zenitsu", text: "His physical strength" },
        { symbol: "inosuke", text: "All of the above" },
      ],
      answer: "nezuko",
    },
  ];
  try {
    // remove duplicate questions for the anime on server restart
    console.log("Clearing old demon slayer questions ...");
    await quiz.deleteMany({ animeName: "demon_slayer" });
    console.log("Cleared.");

    console.log("Server Breathing! First form ... !!");
    // Insert the new questions into the database
    await quiz.insertMany(questions);
    console.log(
      "✅ Successfully populated Demon Slayer questions into the database."
    );
  } catch (error) {
    console.error("❌ Error populating database:", error);
  }
}

export {
  populateJJKQuestions,
  populateNaruto,
  populateSteinsGate,
  populateDemonSlayer,
};
