// ============================================================
// birthdayData.js
// ------------------------------------------------------------
// This is the ONLY file you should need to edit to personalize
// the site further. Every section of the website pulls its
// text and photos from here.
// ============================================================

const birthdayData = {
  // Basic info
  name: 'Nitika',
  birthday: '19 September',
  from: 'Aman',

  // ----------------------------------------------------------
  // PHOTOS
  // Drop your real photos into /public/images/ using these exact
  // filenames (photo1.jpg ... photo8.jpg). If a file is missing,
  // the gallery automatically shows an elegant placeholder instead
  // of breaking — so you don't need all 8 right away.
  // You can freely rewrite each caption below.
  // ----------------------------------------------------------
  photos: [
    { src: '/images/photo1.jpeg', caption: 'One of my favourite memories ❤️' },
    { src: '/images/photo2.jpeg', caption: 'That smile... always gets me.' },
    { src: '/images/photo3.jpeg', caption: 'Somehow you make ordinary moments feel special.' },
    { src: '/images/photo4.jpeg', caption: 'I wish I could pause this moment forever.' },
    { src: '/images/photo5.jpeg', caption: 'Another memory I want to keep forever.' },
    { src: '/images/photo6.jpeg', caption: 'Us. ❤️' },
    { src: '/images/photo7.jpeg', caption: 'One of those moments that makes me smile.' },
    { src: '/images/photo8.jpeg', caption: 'My favourite person.' },
  ],

  // ----------------------------------------------------------
  // INTRO — the very first lines she sees, one after another
  // ----------------------------------------------------------
  introLines: [
    'Hey Nitika... ❤️',
    "Today isn't just another day.",
    'Today is the day the world got a little more beautiful.',
    'Because you were born. ✨',
    'Happy Birthday, Nitika ❤️',
  ],

  // ----------------------------------------------------------
  // OUR STORY — vertical timeline, edit freely, add more chapters
  // ----------------------------------------------------------
  story: [
    {
      chapter: 'Chapter 01',
      title: 'The Beginning',
      text: 'Somewhere between two ordinary people, something became very special.',
    },
    {
      chapter: 'Chapter 02',
      title: 'Getting To Know You',
      text: 'Slowly, conversations became my favourite part of the day.',
    },
    {
      chapter: 'Chapter 03',
      title: 'The Memories',
      text: 'Random calls. Random jokes. Random moments. And somehow... my favourite memories.',
    },
    {
      chapter: 'Chapter 04',
      title: 'You',
      text: "And then I realized... you're not just a part of my life. You're one of the reasons it feels beautiful.",
    },
  ],

  // ----------------------------------------------------------
  // THINGS I LOVE ABOUT YOU — reveal-on-scroll cards
  // ----------------------------------------------------------
  loveThings: [
    { title: 'Your Smile', text: 'Because somehow it makes my worst days better.' },
    { title: 'Your Voice', text: 'I could listen to you talk about absolutely nothing.' },
    { title: 'Your Heart', text: "You're kinder than you realize." },
    { title: 'Your Little Habits', text: "Even the tiny things you probably don't notice... I notice." },
    { title: 'Your Presence', text: "Sometimes I don't need anything. Just knowing you're there is enough." },
    { title: 'Just You', text: "Honestly... I don't need a reason. I just love you for being you." },
  ],

  // ----------------------------------------------------------
  // RANDOM REASONS — shown one at a time on button click
  // ----------------------------------------------------------
  randomReasons: [
    'Because your smile feels like home.',
    'Because you make ordinary days special.',
    'Because talking to you never feels boring.',
    'Because you somehow make me want to become better.',
    "Because you're my favourite notification.",
    'Because even your smallest habits are adorable.',
    'Because you are you. ❤️',
  ],

  // ----------------------------------------------------------
  // LOVE LETTER — revealed gradually as she scrolls
  // Each entry in the array is one paragraph.
  // ----------------------------------------------------------
  loveLetter: {
    salutation: 'Dear Nitika, ❤️',
    paragraphs: [
      "I don't know if words can ever properly explain what you mean to me.",
      "But if I had to try... I'd say that meeting you added a different kind of happiness to my life.",
      "You're someone I can laugh with, someone I can annoy, someone I can miss, someone I can talk to for hours, and somehow still want to talk to again.",
      'I hope you always remember how special you are.',
      'I hope you keep smiling. I hope you keep dreaming. I hope life gives you everything your heart quietly wishes for.',
      "And on the days when things aren't perfect, I hope you remember that somewhere in this world, there is someone who is genuinely rooting for you.",
      'Happy Birthday, Nitika. ❤️',
      "And if I get to be a small part of your future memories, I'll consider myself lucky.",
    ],
    signature: '— Aman ❤️',
  },

  // ----------------------------------------------------------
  // IF I COULD GIVE YOU THE WORLD — dreamy reveal lines
  // ----------------------------------------------------------
  worldLines: [
    'If I could give you the world...',
    "I'd give you every sunrise that makes you smile.",
    'Every sunset that makes you stop and look.',
    'Every song that reminds you of happiness.',
    'Every dream you are brave enough to chase.',
    'And every reason to believe that you are loved.',
    "But since I can't fit the whole world into this little website...",
    'I made you this instead. ❤️',
  ],

  // ----------------------------------------------------------
  // SECRET SURPRISE — final mysterious cinematic reveal
  // ----------------------------------------------------------
  secretSurprise: [
    'Nitika...',
    'You know what my favourite thing about you is?',
    "That you're YOU. ❤️",
    "And I wouldn't change that for the world.",
  ],

  // ----------------------------------------------------------
  // FINAL SCREEN
  // ----------------------------------------------------------
  finalMessage: {
    heading: 'Happy Birthday, Nitika ❤️',
    date: '19 September',
    wishLines: [
      'May this year bring you',
      'more smiles,',
      'more adventures,',
      'more dreams,',
      'more beautiful memories,',
      "and everything you've been wishing for.",
    ],
    closingLine: 'Keep shining, birthday girl. ✨',
    signOff: 'With love,\nAman ❤️',
  },
};

export default birthdayData;
