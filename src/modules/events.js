/* eslint-disable camelcase */
import {
  username_form,
  leaderboard_btn,
  l_back_btn,
  start_btn,
  play_btn,
  pause_btn,
  menu_btn,
} from '../helpers/element';
import { saveUser } from './app';
import { switchComponents, switchSections } from './ui_control';
import { play, pause } from './game';

username_form.get().addEventListener('submit', saveUser);
leaderboard_btn.get().addEventListener('click', () => {
  switchComponents('leaderboard');
});
l_back_btn.get().addEventListener('click', () => {
  switchComponents('options');
});
start_btn.get().addEventListener('click', () => {
  switchSections('game-s');
});
play_btn.get().addEventListener('click', () => {
  play();
});
pause_btn.get().addEventListener('click', () => {
  pause();
});
menu_btn.get().addEventListener('click', () => {
  switchSections('welcome-s');
});
