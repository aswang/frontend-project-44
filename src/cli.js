import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');

  if (!name) {
    name = 'noname =(';
  }

  console.log(`Hello, ${name}!`);
  return name;
};

export default greetingUser;
