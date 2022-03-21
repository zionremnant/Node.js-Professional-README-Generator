const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
        {type: "input",
        name: "description",
        message: "What is the description?",
        },
        {type: "list",
        name: "license",
        message: "What license are you using?",
        choice: ["MIT", "Apache 2.0", "Hippocratice", "IBM"],
        },
        {type: "input",
        name: "installation",
        message: "What is the description?",
        },
        {type: "input",
        name: "contributing",
        message: "What is the description?",
        },
        {type: "input",
        name: "usage",
        message: "What is the description?",
        },
        {type: "input",
        name: "test",
        message: "What is the description?",
        },
        {type: "input",
        name: "contact",
        message: "What is your GitHub username?",
        },
    ]);
    .then((data) => {
// create readme
const readme = 

`# ${data.title}

## Table of Contents
* [Description] (#description)
* [License](#license)
* [Installation](#installation)
* [Contributing](#contributing)
* [Usage](#usage)
* [Test](#test)
* [Contact](#contact)

## Description
${data.decription}

## License
${data.license}

## Installation
${data.installation}

## Contributing
${data.contributing}

## Usage
${data.usage}

## Test
${data.test}

## Contact
${data.contact}
`
        fs.writeFile("readme.md", readme)
    
})
}