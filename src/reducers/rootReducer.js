const initState = {
  posts: [
    {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ],
  totalOrder: 0
}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'PLUS_ORDER':
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
    case 'MINUS_ORDER':
      if(state.totalOrder > 0) {
        return {
          ...state,
          totalOrder: state.totalOrder - 1
        }
      }
      
    default:
      return state;
  }
}

export default rootReducer;