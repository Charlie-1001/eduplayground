// phonics 2
import phonics2Img from '../assets/images/phonics2.png';
import flashcardImg from '../assets/images/flashcards.png';
import soundSpellingImg from '../assets/images/grammar.png';
import pictureSpellingImg from '../assets/images/vocabulary.png';
// footprints 1
import footprints1Img from '../assets/images/footprints1.png';
// motivation meter
import gradingImg from '../assets/images/grading-activities.png';
import myCollectionImg from '../assets/images/my-collection.png';
// mini games
import miniGameImg from '../assets/images/mini-games.png';
import npsGeniusImg from '../assets/images/nps-genius.png';
import lowerQuizImg from '../assets/images/lower-quiz.png';
import higherQuizImg from '../assets/images/higher-quiz.png';
import starCollectorImg from '../assets/images/star-collector.png';
import mouseTrainingImg from '../assets/images/mouse-training-game.png';

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
        link: "/gameSources/phonics2/flashcards/index.html",
      },
      {
        id: "soundSpelling",
        name: "Sound Spelling",
        image: soundSpellingImg,
        link: "/gameSources/phonics2/sound-spelling/index.html",
      },
      {
        id: "pictureSpelling",
        name: "Picture Spelling",
        image: pictureSpellingImg,
        link: "/gameSources/phonics2/picture-spelling/index.html",
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
        link: "/gameSources/footprints1/flashcards/index.html",
      },
      {
        id: "vocabGame",
        name: "Vocabulary Game",
        image: pictureSpellingImg,
        link: "/gameSources/footprints1/vocabulary/index.html",
      },
      {
        id: "gramarGame",
        name: "Grammar Game",
        image: soundSpellingImg,
        link: "/gameSources/footprints1/grammar/index.html",
      },
    ]
  },

  // Grading Activities
  {
    id: 'motivationMeter',
    name: 'Motivation Meter',
    coverImg: gradingImg,
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
        link: "/gameSources/my-collection/index.html",
      }
    ]
  },

  // Mini games
  {
    id: 'miniGames',
    name: 'Mini Games',
    coverImg: miniGameImg,
    description: `Mini Educational Games are short, focused activities designed to reinforce key
    learning concepts in a quick and engaging way. Each game targets a specific skill such as
    vocabulary, spelling, reading comprehension, or basic problem-solving, allowing learners to
    practice without long setup or instructions. These activities are meant to be lightweight but
    meaningful, helping students strengthen understanding through repetition, interaction, and play.
    The goal is to make learning feel natural and enjoyable while supporting steady skill development
    over time.`,
    games: [
      {
        id: "npsGenius",
        name: "NPS Genius",
        image: npsGeniusImg,
        link: "/gameSources/nps-genius/index.html",
      },
      {
        id: "lowerQuiz",
        name: "Lower Level Quiz",
        image: lowerQuizImg,
        link: "/gameSources/quiz-games/lowerLevel.html",
      },
      {
        id: "higherQuiz",
        name: "Higher Level Quiz",
        image: higherQuizImg,
        link: "/gameSources/quiz-games/higherLevel.html",
      },
      {
        id: "starCollector",
        name: "Star Collector Game",
        image: starCollectorImg,
        link: "/gameSources/star-collector-game/index.html",
      },
      {
        id: "mouseTraining",
        name: "Mouse Training Game",
        image: mouseTrainingImg,
        link: "/gameSources/mouse-training-game/index.html",
      }
    ]
  },
]