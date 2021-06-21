#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  showPersonalInfo,
  showSocialLinks,
  showStudyInfo,
  showProjectsInfo,
  showTechnicalSkills,
  showIndustryExperience
} = require('./index');
program.version('1.0.0').description("Bhoomit's Resume Using Command Line");

const options = [
  {
    type: 'list',
    name: 'choice',
    message: 'Select Information You want to see.',
    choices: [
      'Personal Info',
      'Study Info',
      'Technical Skills',
      'Projects',
      'Industry Experience',
      'Social Links',
      'Exit',
    ],
  },
];

const direction = async () => {
  const { direction } = await prompt({
    type: 'list',
    name: 'direction',
    message: 'Go back or Exit?',
    choices: ['Go Back', 'Exit'],
  });
  if (direction === 'Go Back') {
    console.clear();
    return showMenu();
  } else {
    console.log('Ok Bye!');
    process.exit();
  }
};

const showMenu = async () => {
  const { choice } = await prompt(options);
  switch (choice) {
    case 'Personal Info':
      showPersonalInfo();
      return direction();
    case 'Social Links':
      showSocialLinks();
      return direction();
    case 'Study Info':
      showStudyInfo();
      return direction();
    case 'Projects':
      showProjectsInfo();
      return direction();
    case 'Technical Skills':
      showTechnicalSkills()
      return direction();
    case 'Industry Experience':
      showIndustryExperience()
      return direction()
    default: {
      console.log('Ok Bye!');
      return process.exit();
    }
  }
};

program
  .action(() => showMenu());

program.parse(process.argv);
