import { defineStore } from 'pinia';

const state = () => ({
  testVariable: 'piniaOK'
});

const actions = {

};

export const useDashboardStore = defineStore('dashboard', {
  state,
  actions,
});
