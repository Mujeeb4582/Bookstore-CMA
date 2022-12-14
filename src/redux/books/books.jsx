const ADD_BOOK = 'book-store/Book/ADD_BOOK';
const REMOVE_BOOK = 'book-store/Book/REMOVE_BOOK';
const idCounter = 0;
const initialState = [{
  id: 1,
  bookTitle: 'The Forty Rules of Love',
  bookAuthor: 'Elif Shafak',
},
{
  id: 2,
  bookTitle: 'The Hunger Games',
  bookAuthor: 'Suzanne Collins',
}];

const remove = (state, bookID) => {
  state.filter((book) => book.id !== bookID);
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: idCounter + 1,
          title: action.title,
          author: action.author,
        }];
    case REMOVE_BOOK:
      return remove(state, action.id);
    default: return state;
  }
};

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
