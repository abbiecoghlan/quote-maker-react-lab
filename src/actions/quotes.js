// TODO: Create action creators as defined in tests
const ADD_QUOTE = 'ADD_QUOTE'
const REMOVE_QUOTE = "REMOVE_QUOTE"
const UPVOTE_QUOTE = "UPVOTE_QUOTE"
const DOWNVOTE_QUOTE = "DOWNVOTE_QUOTE"

export function addQuote(quote) {
    return { type: ADD_QUOTE, quote: { ...quote, votes: 0 } }
  }
  export function removeQuote(id) {
    return { type: REMOVE_QUOTE, quoteId: id};
  }
  export function upvoteQuote(id) {
    return { type: UPVOTE_QUOTE, quoteId: id};
  }
  export function downvoteQuote(id) {
    return { type: DOWNVOTE_QUOTE, quoteId: id};
  }
  