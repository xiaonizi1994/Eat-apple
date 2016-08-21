/**
 * Created by yini on 2016/8/16.
 */

const prefix='apple/';
// let actions= {
  // pickApple:()=>(dispatch,getState)=>{
  //   if(getState().isPicking){
  //     return ;
  //   }
  //   dispatch(actions.beginPickApple());
  //   ajax.
  // }

  // beginPickApple: ()=>({
  //   type: 'apple/BEGIN_PICK_APPLE'
  // }),
  // donePickApple:appleWeight=>({
  //   type:'apple/DONE_PICK_APPLE',
  //   payload:appleWeight
  // }),
  // failPickApple: error=>({
  //   type: 'apple/FALE_PICK_APPLE',
  //   payload: error,
  //   error: true
  // }
  // ),

export function eatApple(appleId){
  return({
    type: 'apple/EAT_APPLE',
    payload:appleId});
  }
export function addApple(weigth) {
  return({
    type:'apple/ADD_APPLE',
    weigth

  })
}
//}
//export default actions;


