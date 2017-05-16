import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  addFav(text) {

    Dispatcher.dispatch({
      type: ActionTypes.ADD_FAV,
      text,
    });

  },
};

export default Actions;
/* eslint-disable */
