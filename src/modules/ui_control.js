/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
import { getCurrentUser, loadLeaderboard, saveScorer } from './app';
import Element, {
  username_div,
  option_btns,
  leaderboard,
  welcome_content,
  game_container,
  leaderboard_data,
  save_loading,
  game_btns_c,
} from '../helpers/element';

const lb_item = ({ user, score }) => {
  const tr = new Element().create('tr');

  const nameTd = new Element().create('td');
  nameTd.get().appendChild(document.createTextNode(user));
  const scoreTd = new Element().create('td');
  scoreTd.get().appendChild(document.createTextNode(score));

  tr.get().appendChild(nameTd.get());
  tr.get().appendChild(scoreTd.get());

  return tr.get();
};

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
      loadLeaderboard().then((result) => {
        leaderboard_data.get().innerHTML = '';
        result.forEach(item => {
          leaderboard_data.get().appendChild(lb_item(item));
        });
      });
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

export const saveScoreInfo = (score) => {
  game_btns_c.hide();
  save_loading.show('block');
  saveScorer({ user: getCurrentUser(), score }).then((data) => {
    game_btns_c.show('flex');
    save_loading.hide();
  });
};
