/* eslint-disable camelcase */
export default class Element {
  find(value) {
    this.elm = document.querySelector(value);
    return this;
  }

  get() {
    return this.elm;
  }

  setText(text) {
    this.elm.innerHTML = text;
    return this;
  }

  hide() {
    this.elm.style.display = 'none';
    return this;
  }

  show(d) {
    this.elm.style.display = d;
    return this;
  }
}

export const welcome_content = new Element().find('#welcome-content');
export const game_container = new Element().find('#game-container');

export const username_div = new Element().find('#username-div');
export const option_btns = new Element().find('#option-btns');
export const leaderboard = new Element().find('#leaderboard');


export const username_form = new Element().find('#username-form');
export const start_btn = new Element().find('#start-btn');
export const leaderboard_btn = new Element().find('#leaderboard-btn');
export const l_back_btn = new Element().find('#l-back-btn');

export const play_btn = new Element().find('#play-btn');
export const pause_btn = new Element().find('#pause-btn');
export const menu_btn = new Element().find('#menu-btn');