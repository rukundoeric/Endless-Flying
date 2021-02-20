/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import { getCurrentUser } from './app';
import {
  username_div,
  option_btns,
  leaderboard,
  welcome_content,
  game_container,
} from '../helpers/element';

export const switchComponents = (value) => {
  switch (value) {
    case 'options': {
      option_btns.show('flex');
      username_div.hide();
      leaderboard.hide();
      break;
    }
    case 'username-c': {
      username_div.show('flex');
      option_btns.hide();
      leaderboard.hide();
      break;
    }
    case 'leaderboard': {
      leaderboard.show('block');
      option_btns.hide();
      username_div.hide();
      break;
    }
    default:
      break;
  }
};

export const switchSections = (value) => {
  switch (value) {
    case 'welcome-s': {
      welcome_content.show('block');
      game_container.hide();
      break;
    }
    case 'game-s': {
      welcome_content.hide();
      game_container.show('block');
      break;
    }
    default:
      break;
  }
};


export const Start = () => {
  if (!getCurrentUser()) {
    switchComponents('username-c');
  } else {
    switchComponents('options');
  }
};
