import name from './components/game';

import '../styles/main.scss';

const init = () => {
  name.name();
  name.addLetter();
  name.randomWord();
};

init();
