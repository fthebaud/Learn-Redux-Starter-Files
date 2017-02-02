// reducer, it needs 2 things: an ation and the current state

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;