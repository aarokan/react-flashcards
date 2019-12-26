import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from '../actions/index'

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {...state, ...action.decks};

        case ADD_NEW_DECK:
            return {...state, ...action.deck};

            case ADD_NEW_CARD:
            const {title, questions, question, answer} = action.card;
            const newQuestions = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);

            return {
                ...state,
                [title]: {...state[title], questions: newQuestions},
            };

        default:
            return state;
    }
}

export default decks;