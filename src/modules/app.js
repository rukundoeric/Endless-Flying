/* eslint-disable import/no-cycle */

import { switchComponents } from './ui_control';

export const saveUser = (e) => {
  e.preventDefault();
  localStorage.setItem('endless_frying_current_user', new FormData(e.target).get('username'));
  switchComponents('options');
  return true;
};

export const getCurrentUser = () => localStorage.getItem('endless_frying_current_user');

export const loadLeaderboard = () => {

};

export const saveScorer = () => {

};