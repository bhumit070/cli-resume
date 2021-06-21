const { personalInfo, socialLinks, studyInfo, projects, technicalSkills, industryExperience } = require('./data');

const printToTheConsole = (givenInfo) => {
  console.log('----------------------------------------------------------------------------------');
  console.log();
  console.table(givenInfo)
  console.log();
  console.log('----------------------------------------------------------------------------------');
  console.log();
};

const showPersonalInfo = () => printToTheConsole(personalInfo);

const showSocialLinks = () => printToTheConsole(socialLinks);

const showStudyInfo = () => printToTheConsole(studyInfo);

const showProjectsInfo = () => printToTheConsole(projects)

const showTechnicalSkills = () => printToTheConsole(technicalSkills)

const showIndustryExperience = () => printToTheConsole(industryExperience)

module.exports = {
  showPersonalInfo,
  showSocialLinks,
  showStudyInfo,
  showProjectsInfo,
  showTechnicalSkills,
  showIndustryExperience
};
