import {initBackend} from './modules/backend';
import {initCard} from './modules/card';
import {initDebounce} from './modules/debounce';
import {initFilter} from './modules/filter';
import {initForm} from './modules/form';
import {initMap} from './modules/map';
import {initPin} from './modules/pin';
import {initUtils} from './modules/utils';


window.addEventListener('DOMContentLoaded', () => {
  initUtils();
  initDebounce();
  initBackend();
  initPin();
  initForm();
  initMap();
  initFilter();
  initCard();
});

