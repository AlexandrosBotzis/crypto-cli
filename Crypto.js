/*
* Here is a node.js Command Line Tool in which you can provide
* a phrase and a encryption key
* and you receive the cipher using Ceasar encryption
*
* */

var inquirer = require('inquirer'),
    chalk = require('chalk')

console.log(chalk.bgGreen.underline.bold('Welcome to encryption app'))

let cryptoAlgorithm = [

    {
        type: 'rawlist',
        name: 'algorithm',
        message: 'Please choose the type of encryption',
        choices: ['Ceasar Cipher', 'Something else - Not implemented yet'],
        filter: str => 'You selected: ' + str
    }
];

let ceasarQuestions = [

    {
        type: 'input',
        name: 'phrase',
        message: 'Please type the message you want to encrypt'
    },

    {
        type: 'input',
        name: 'key',
        message: 'Please select the encryption key (only integer)',
        validate: function (value) {
            let insertedValue = parseInt(value, 10);
            if ( isNaN(insertedValue) ) {
                return 'Please insert an integer for encryption key'
            }
            else return true;
        }
    }

];

inquirer.prompt(cryptoAlgorithm).then(answers => {
    if (answers.algorithm.includes('Ceasar Cipher')) {

        inquirer.prompt(ceasarQuestions).then(answers => {
            let key = answers.key
            console.log('\n' + 'Your input phrase ' + chalk.yellow.underline(answers.phrase) + ' encrypted to: ' + chalk.red.underline(CeasarCipher(answers.phrase, key)))
        })
    }
    else {
        console.log('\n' + 'Not implemented yet...Be patient')
    }
})


function CeasarCipher(message, key) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz',
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        arrayOfLetters = message.split(''),
        regExp = /[a-zA-Z]/;

    let encryptionKey = parseInt(key, 10);

    return arrayOfLetters.map(function (i) {
        return i.match(regExp) ? (i.charCodeAt(0) < 90) ? upper[(upper.indexOf(i) + encryptionKey) % upper.length] : alpha[(alpha.indexOf(i) + encryptionKey) % alpha.length] : i;
    }).join('');
}