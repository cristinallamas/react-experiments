import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
// import Band from './Band';
// import React from 'react';

class MusicStore extends ReduceStore{

  constructor() {
  super(Dispatcher);

   this.state = {
    list:[],
    favorites:[]
  };
 }

/*
getInitialState(): T Constructs the initial state for this store.
This is called once during construction of the store.
*/
//https://github.com/facebook/flux/issues/355#issuecomment-267507087
 getInitialState() {
   return [];
  }

 getState(){
   return this.state;
 }

 getList() {
   return this.state.list;
 }

  reduce(state,action){
    switch (action.type) {
      case ActionTypes.ADD_FAV:
      break;
      default: return state;
    }
  }


}
export default new MusicStore();
