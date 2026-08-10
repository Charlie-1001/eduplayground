// phonics 2
import phonics2Img from '../assets/images/phonics2.png';
import flashcardImg from '../assets/images/flashcards.png';
import soundSpellingImg from '../assets/images/grammar.png';
import pictureSpellingImg from '../assets/images/vocabulary.png';
import rhymingWordsImg from '../assets/images/rhyming-words.png';
// footprints 1
import footprints1Img from '../assets/images/footprints1.png';
// ICT lessons
import ictLessonsImg from '../assets/images/ict-lessons.png';
import ictFlashcardsImg from '../assets/images/ict-flashcards.png';
// ICT games
import ictGamesImg from '../assets/images/ict-games.png';
// motivation meter
import motivationMeterImg from '../assets/images/motivation-meter.png';
import myCollectionImg from '../assets/images/my-collection.png';
// fun games
import funGamesImg from '../assets/images/fun-games.png';
import npsGeniusImg from '../assets/images/nps-genius.png';
import lowerQuizImg from '../assets/images/lower-quiz.png';
import higherQuizImg from '../assets/images/higher-quiz.png';
import starCollectorImg from '../assets/images/star-collector.png';
import mouseTrainingImg from '../assets/images/mouse-training-game.png';
import powerOnOffImg from '../assets/images/power-on-off-thumbnail.png';
// grid reveal
import gridRevealImg from '../assets/images/grid-reveal.png';

export const galleryData = [
  // Oxford Phonics World 2
  {
    id: 'opw2',
    name: 'Oxford Phonics World 2',
    coverImg: phonics2Img,
    description: `Oxford Phonics World 2 continues the development of essential phonics skills by
    introducing more advanced sound patterns, word building, and early reading practice.
    In this section, the topic is supported through a set of interactive learning games designed
    to make practice more engaging and hands-on. Each game focuses on specific skills such as
    blending sounds, recognizing word patterns, and improving reading confidence. This approach
    turns traditional phonics learning into an active and enjoyable experience, helping learners
    understand and apply what they study through play.`,
    games: [
      {
        id: "flashcards",
        name: "Flashcards",
        image: flashcardImg,
        link: "https://charlie-1001.github.io/phonics-2/flashcards/index.html",
      },
      {
        id: "soundSpelling",
        name: "Sound Spelling",
        image: soundSpellingImg,
        link: "https://charlie-1001.github.io/phonics-2/sound-spelling/index.html",
      },
      {
        id: "pictureSpelling",
        name: "Picture Spelling",
        image: pictureSpellingImg,
        link: "https://charlie-1001.github.io/phonics-2/picture-spelling/index.html",
      },
      {
        id: "rhymingWords",
        name: "Rhyming Words",
        image: rhymingWordsImg,
        link: "https://charlie-1001.github.io/phonics-2/rhyming-sounds/index.html",
      },
    ]
  },

  // Footprints 1
  {
    id: 'footprints1',
    name: 'Footprints 1',
    coverImg: footprints1Img,
    description: `Footprints 1 introduces young learners to the basics of English through simple
    vocabulary, everyday expressions, and foundational language structures. In this section of
    EduPlayground, the topic is brought to life through interactive learning games designed to
    reinforce understanding through practice and play. Each activity focuses on key skills such
    as listening, word recognition, basic sentence building, and comprehension in a fun and
    engaging way. This approach helps learners build confidence in English step by step, while
    actively applying what they learn through interactive experiences.`,
    games: [
      {
        id: "flashcards",
        name: "Flashcards",
        image: flashcardImg,
        link: "https://charlie-1001.github.io/footprints1/flashcards/index.html",
      },
      {
        id: "vocabGame",
        name: "Vocabulary Game",
        image: pictureSpellingImg,
        link: "https://charlie-1001.github.io/footprints1/vocabulary/index.html",
      },
      {
        id: "gramarGame",
        name: "Grammar Game",
        image: soundSpellingImg,
        link: "https://charlie-1001.github.io/footprints1/grammar/index.html",
      },
    ]
  },

  // ICT lessons
  {
    id: 'ictLessons',
    name: 'ICT Lessons',
    coverImg: ictLessonsImg,
    description: `ICT Lessons is a collection of educational resources designed to help learners build
    essential computer and digital skills through structured lessons and interactive activities.
    It covers fundamental ICT topics such as computer hardware, software, file management, internet
    skills, and basic digital concepts. Each lesson is created to support classroom learning by
    providing clear explanations, visual materials, and practical activities that make technology
    easier to understand. New lessons and resources will be added over time to support learners as
    they develop their ICT knowledge step by step.`,
    games: [
      {
        id: "ictFlashcards",
        name: "ICT Flashcards",
        image: ictFlashcardsImg,
        link: "https://charlie-1001.github.io/ict-lessons/flashcards/index.html",
      },
    ]
  },

  // ICT games
  {
    id: 'ictGames',
    name: 'ICT Games',
    coverImg: ictGamesImg,
    description: `ICT Games is a set of interactive mini-games designed to help learners practice basic
    computer skills in a simple, hands-on way. It focuses on foundational ICT lessons such as using
    a mouse, navigating a computer, and understanding how to properly start up and shut down a system.
    Each game is built as a guided simulation or practice activity, allowing learners to develop
    confidence with everyday computer operations before moving on to more advanced digital skills.
    New activities will be added over time to match classroom lessons and expand practical ICT
    understanding step by step.`,
    games: [
      {
        id: "mouseTraining",
        name: "Mouse Training Game",
        image: mouseTrainingImg,
        link: "https://charlie-1001.github.io/mouse-training-game/",
      },
      {
        id: "powerOnOff",
        name: "Power On/Off",
        image: powerOnOffImg,
        link: "https://charlie-1001.github.io/power-on-off/",
      },
    ]
  },

  // Grading Activities
  {
    id: 'motivationMeter',
    name: 'Motivation Meter',
    coverImg: motivationMeterImg,
    description: `Motivation Meter is a grading activity designed to help track learning progress in
    a simple and engaging way. Instead of traditional scoring methods, it uses interactive game-based
    activities to reflect a learner’s effort, participation, and understanding. Each task contributes
    to a visual “meter” that shows progress over time, helping students stay motivated and aware of
    their improvement. This approach turns assessment into an encouraging experience, where learning
    progress is recognized continuously rather than only at the end.`,
    games: [
      {
        id: "myCollection",
        name: "My Collection",
        image: myCollectionImg,
        link: "https://charlie-1001.github.io/motivation-meter/my-collection/",
      }
    ]
  },

  // Fun games
  {
    id: 'funGames',
    name: 'Fun Games',
    coverImg: funGamesImg,
    description: `Mini Educational Games are short, focused activities designed to reinforce key
    learning concepts in a quick and engaging way. Each game targets a specific skill such as
    vocabulary, spelling, reading comprehension, or basic problem-solving, allowing learners to
    practice without long setup or instructions. These activities are meant to be lightweight but
    meaningful, helping students strengthen understanding through repetition, interaction, and play.
    The goal is to make learning feel natural and enjoyable while supporting steady skill development
    over time.`,
    games: [
      {
        id: "gridReveal",
        name: "Grid Reveal",
        image: gridRevealImg,
        link: "https://charlie-1001.github.io/gridReveal/",
      },
      {
        id: "npsGenius",
        name: "NPS Genius",
        image: npsGeniusImg,
        link: "https://charlie-1001.github.io/fun-games/nps-genius/",
      },
      {
        id: "lowerQuiz",
        name: "Lower Level Quiz",
        image: lowerQuizImg,
        link: "https://charlie-1001.github.io/fun-games/quiz-games/lowerLevel.html",
      },
      {
        id: "higherQuiz",
        name: "Higher Level Quiz",
        image: higherQuizImg,
        link: "https://charlie-1001.github.io/fun-games/quiz-games/higherLevel.html",
      },
      {
        id: "starCollector",
        name: "Star Collector Game",
        image: starCollectorImg,
        link: "https://charlie-1001.github.io/star-collector-game/",
      },
    ]
  },

]
