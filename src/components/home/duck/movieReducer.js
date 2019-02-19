
const initialState = [
  {
    name: 'eee',
    image: 'https://encrypted-tbn0.gstc.com/images?q=tbn:ANd9GcRpWMF7YpJrl4IyMDAivRFNbenzWjOxj2Pik-aqHCv5TV9AWnBG',
    year: 1998,
    rating: 4,
  },
]

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return state.concat([...action.data]);
    default:
      return state;
  }
}
export default { movieReducer };
