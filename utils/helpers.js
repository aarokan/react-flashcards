export function getDecksInfo (deck) {
  info = {
    HTML: {
      questions: {
        "What is HTML": 'Hypertext Markup Language',
        "What is a marquee?": 'A marquee allows you to put a scrolling text in a web page'
      }
    },
    React: {
      questions: {
        "What is React?": 'A JavaScript library for building user interfaces',
        "What is JSX??": 'JSX is a shorthand for JavaScript XML',
        "How can you update the state of a component?": 'How can you update the state of a component?'
      }
    }
  }

  return typeof deck === 'undefined' ? info : info[deck]
}