export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':

      return action.payload
    case 'CREATE':

      return [...action, action.pyload]
    default:
      return posts
  }
}