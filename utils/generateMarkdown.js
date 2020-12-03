// function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.Title}
   

  # Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage) 
  * [Contributing](#contributing)
  * [Test](#test)
  * [License](#license) 
  * [Questions](#questions)
  
  # Description :
  ${data.Description}
 
  # Installation :
  The necessary dependencies that need to be installed: ${data.Installation}
      
  # Usage :
  This app is used for ${data.Usage}
      
  # Contributing ${data.Contributing}
     
  # Test :
  To test this app you need to ${data.Test}
      
  # License :
  ![License](https://img.shields.io/badge/License-${data.License}-blue.svg "License Badge")
    For more information about the License, click on the link below.
      - [License](https://opensource.org/licenses/${data.License})

  # Questions:
      For questions about the Generator you can go to my 
      GitHub page at the following Link: - [GitHub Profile](https://github.com/${data.username})
  For additional questions please reach out to my email at: ${data.Email}.
  
`
}

module.exports = generateMarkdown;
