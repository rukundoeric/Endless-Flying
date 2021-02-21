/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import axios from 'axios';
import api from '../helpers/api';
import { leaderboard_data } from '../helpers/element';
import { switchComponents } from './ui_control';

export const saveUser = (e) => {
  e.preventDefault();
  localStorage.setItem('endless_frying_current_user', new FormData(e.target).get('username'));
  if (leaderboard_data.get() != null) { switchComponents('options'); }
  return true;
};

export const getCurrentUser = () => localStorage.getItem('endless_frying_current_user');

export const loadLeaderboard = async () => {
  const { data: { result } } = await axios.get(api);
  return result.sort((a, b) => b.score - a.score);
};

export const saveScore = async (obj) => {
  const { data } = await axios.post(api, obj);
  return data;
};