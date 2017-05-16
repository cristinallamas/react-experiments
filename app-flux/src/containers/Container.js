import AppView from '../views/AppView';
import {Container} from 'flux/utils';
// import Actions from '../data/Actions';

import MusicStore from '../data/Store';

function getStores() {
  return [
    MusicStore,
  ];
}

function getState() {
  return {
    musicState: MusicStore.getState(),
  };
}

function getList() {
  return {
    bandItems: MusicStore.getList(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);
