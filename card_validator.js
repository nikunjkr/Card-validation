const Luhn=require('./Luhn_algorithm')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function take_input (user_input) {
    console.log(Luhn(user_input));
    readline.close();
}
readline.question('Enter Credit card number for validation-', take_input);
