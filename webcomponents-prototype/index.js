import { users } from './data.js';

import './components/app-user.js';

window.addEventListener('load', () => {
  setUsers();
  registerServiceWorker();
})

function setUsers() {
  const root = document.getElementById('root');
  users.forEach(user => {
    const el = document.createElement('app-user');
    el.user = user;
    root.appendChild(el);
  })
}

async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log('SW registration failed');
    }
  }
}