export function getDecksInfo (deck) {
  info = {
    HTML: {
      title: 'HTML',
      questions: [
        {
          question: 'What is HTML?',
          answer: 'Hypertext Markup Language'
        },
        {
          question: 'What is a marquee?',
          answer: 'A marquee allows you to put a scrolling text in a web page'
        },
      ]
    },
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A JavaScript library for building user interfaces'
        },
        {
          question: 'What is JSX?',
          answer: 'JSX is a shorthand for JavaScript XML'
        },
        {
          question: 'How can you update the state of a component?',
          answer: 'State of a component can be updated using this.setState()'
        },
      ]
    }
  }

  return typeof deck === 'undefined' ? info : info[deck]
}