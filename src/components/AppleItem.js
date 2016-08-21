/**
 * Created by yini on 2016/8/16.
 */
import React from 'react';
class AppleItem extends React.Component{

  render() {

    let{state,actions}=this.props;
    //actions=this.props;
    let mockState={
      id:1,
      weight:256,
      isEaten:false
    };
    let mockActions={
      eatApple:id=>console.log('eatApple',id)
    };

    if(state==undefined)
    state=mockState;


    if(state.isEaten)
      return null;
    return (
      <div className="appleItem">
        <div className="apple">
          <img src="../images/yeoman.png" alt="苹果图"/>
        </div>

        <div className="info">
          <div className="name">红苹果-{state.id}号</div>
          <div className="weight">{state.weight}克</div>
        </div>
        <div className="btn-div">
          <button className="btn" onClick={()=>actions.eatApple(state.id)}>吃掉</button>
        </div>
      </div>
    );

  }
}
export default AppleItem;
