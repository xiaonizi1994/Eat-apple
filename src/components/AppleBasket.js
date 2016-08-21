/**
 * Created by yini on 2016/8/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import AppleItem from './AppleItem';
import {eatApple,addApple} from '../actions/appleAction';
//import {bindActionCreators} from 'redux';

//let eatApple=actions.eatApple();
class AppleBusket extends React.Component{
  /*weight:100,
  isEaten:false,*/

  render(){
    let {state,store} =this.props;
    function handleClick(){
      return dispatch(addApple(100));
    }

    let stats={
      appleNow:{
        quantity:0,
        weight:0
      },
      appleEaten:{
        quantity:0,
        weight:0
      }
    };
    state.apples.map(apple=>{
      let selector=apple.isEaten? 'appleEaten':'appleNow';
      stats[selector].quantity++;
      stats[selector].weight+=apple.weight;

    })
    const {dispatch} =this.props;

   //console.log(store.getState());
    return(
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {stats.appleNow.quantity}个苹果，
              {stats.appleNow.weight}克</div>
          </div>


          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">
              {stats.appleEaten.quantity}个苹果，
              {stats.appleEaten.weight}克</div>
          </div>
        </div>

        <div className="appleList">
          <div className="empty-tip">
            {state.apples.map(apple=>
              <AppleItem
                state={apple}
                actions={{eatApple: id => dispatch(eatApple(id))}}
                key={apple.id}
               />
            )}
          </div>
        </div>
        <div className="btn-div" onClick={()=>handleClick()}>
          <button>摘苹果</button>
        </div>
      </div>
        );
  }

}

function select(state){
  return {
    state:state
  }
}
export  default connect(select)(AppleBusket);
