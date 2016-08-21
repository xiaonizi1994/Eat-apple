/**
 * Created by yini on 2016/8/16.
 */
import action from '../actions/appleAction'

// {
//   isPicking:false,
//     newAppleId:1,
//   apples:[]
// }
let id=3;
let initialstate={
  isPicking: false,
  newAppleId: 1,
  apples: [
    {
      id: 0,
      weight: 235,
      isEaten: false
    },
    {
      id:1,
      weight:235,
      isEaten:true
    },
    {
      id:2,
      weight:256,
      isEaten:false
    }
  ]
}
export default function todos(state=initialstate,action){
  switch(action.type){
    case 'apple/BEGIN_PICK_APPLE':
      return state;
    case 'apple/DONE_PICK_APPLE':
      return state;
    case 'apple/FAIL_PICK_APPLE':
      return state;
    case 'apple/ADD_APPLE':
      state=Object.assign({},state,{
        apples:[
          ...state.apples,
          {
            id:id,
            weight:action.weight,
            isEaten:false
          }]

      })
      id++;
      return state;
    case 'apple/EAT_APPLE':

    state=Object.assign({},state,{
        apples:[
          ...state.apples.slice(0,action.payload),
          Object.assign({},state.apples[action.payload],{isEaten:true}),
          ...state.apples.slice(action.payload+1)
          ]
          })
      return state;


    default:
      return state;
  }
}
