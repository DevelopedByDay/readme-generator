const inquirer = require('inquirer');

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type:'input',
        name: 'title',
        message: "What is your project's name? (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter the project name!');
             return false;
             }
         } 
        
    },
    {
        type:'input',
        name: 'descirption',
        message: "Describe your project. (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter a short description!');
             return false;
             }
         } 
        
    },
    {
        type:'input',
        name: 'installation',
        message: "Guide users on how to set up and install your program/project (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter installation instructions!');
             return false;
             }
         } 
        
    },
    {
        type:'input',
        name: 'usage',
        message: "Guide a user through using your project. (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter usage instructions!');
             return false;
             }
         } 
        
    },
    {
        type:'input',
        name: 'credits',
        message: "List any contributors for this project including yourself. (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter the contributors!');
             return false;
             }
         } 
        
    },
    {
        type:'checkbox',
        name: 'license',
        choices: ['MIT', 'Apache', 'CPAN', 'GPL', 'BSD' ]
    },
    {
        type:'input',
        name: 'contributing',
        message: "Please give contribution instructions. ie... How do you want people to contribute to your project if at all? (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter contribution guidelines!');
             return false;
             }
         } 
    },
    {
        type:'input',
        name: 'tests',
        message: "What are known good test runs of your program? Describe steps here. Leave blank to add later."
    },
    {
        type:'input',
        name: 'name',
        message: "What is your name? (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter your name!');
             return false;
             }
         } 
        
    },
    {
        type:'input',
        name: 'email',
        message: "What is your email address? (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter your email!');
             return false;
             }
         } 
        
    },
    {
        type:'input',
        name: 'github',
        message: "What is your github username? (Required)",
        validate: nameInput => {
            if(nameInput) {
             return true;
            } 
            else {
             console.log('Please enter your github username!');
             return false;
             }
         } 
        
    },


];

// function to write README file
const writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                refject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README generated!'
            })
        })
    })
}

// function to initialize program
const promptUser = data => {
    if (!data) {
        data = [];
    }
    return inquirer
    .prompt(questions)
}

// function call to initialize program
promptUser()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(readme => {
        return writeFile(readme);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
