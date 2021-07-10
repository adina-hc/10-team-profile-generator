
// Function to create the html template
function templateCreator(arr) {
  // Declare an array to populate the html document
  const htmlPage =[];
  // Loop to go over responses
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i].getRole());
    if (arr[i] == "Manager") {
      // Manager html template
      const htmlMgr = (manager) => {
        return `<!-- Manager's card -->
        <div class="card d-inline-block" style="width: 18rem">
            <img src="../Assets/purple-mgr.png" class="card-img-top" alt="Manager image" />
            <div id="manager" class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class"card-title">Manager</h6>
            <p class="card-text">
            </p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()} </li>
            <li class="list-group-item">eMail: <a href="mailto:${manager.getEmail()}">${
          manager.getEmail
        }</a> </li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>`;
      };
      htmlPage.push();
    }
    if (arr[i] == "Engineer") {
      // Engineer html template
      const htmlEng = (engineer) => {
        return `<!-- Engineer's card -->  
        <div class="card d-inline-block" style="width: 18rem">
            <img src="../Assets/lilac-engineer.png" class="card-img-top" alt="Manager image" />
            <div id="engineer" class="card-body">
            <h5 class="card-title">${engineer.getName}</h5>
            <h6 class"card-title">Engineer</h6>
            <p class="card-text">
            </p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()} </li>
            <li class="list-group-item">eMail: <a href="mailto:${
              engineer.getEmail
            }">${engineer.getEmail}</a> </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${
              engineer.gitHub
            }" target="_blank" rel="noopener noreferrer">${
          engineer.getGitHub
        }</a></li>
            </ul>
        </div>`;
      };
      htmlPage.push(engineer);
    }
    if (arr[i] == "Intern") {
      const htmlInt = (intern) => {
        return `<!-- Intern's card -->  
        <div id="intern" class="card d-inline-block" style="width: 18rem">
            <img src="../Assets/pink-intern.png" class="card-img-top" alt="Manager image" />
            <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class"card-title">Intern</h6>
            <p class="card-text">   
            </p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">eMail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
            <li class="list-group-item">School: ${intern.school()}</li>
            </ul>
        </div>`;
      };
      htmlPage.push(intern);
    }
  }
};

// create html website
module.exports = function htmlCreate() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Bootstrap -->
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
        />
        <!-- My style sheet -->
        <link rel="stylesheet" href="./style.css" />

        <title>Team Profile Generator</title>
    </head>

    <header class="bg-secondary">
        <h1 class="title">My Team</h1>
    </header>
    <body>
        <section class="container-fluid">
        ${templateCreator(teamArr)}
        </section>
    </body>
    <!-- Bootstrap script-->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
    />
    </html>`
};