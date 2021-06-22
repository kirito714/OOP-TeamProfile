
const pageRenderhtml = (Team) => {
  let employees = "";
  for (let i = 0; i < Team.length; i++) {
    if (Team[i].getRole() === "Manager") {
      employees += `
        <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${Team[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Team[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${Team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${Team[i].email}">${Team[i].email}</a></li>
                        <li class="list-group-item">Office number: ${Team[i].officeNumber}</li>
                    </ul>
                </div>
            </div>

        `;
    } else if (Team[i].getRole() === "Engineer") {
      employees += `
             <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${Team[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${Team[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${Team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${Team[i].email}">${Team[i].email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${Team[i].github}" target="_blank" rel="noopener noreferrer">${Team[i].github}</a></li>
                    </ul>
                </div>
            </div>

        `;
    } else {
      employees += `
      <div class="card employee-card">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title">${Team[i].name}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${Team[i].getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${Team[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${Team[i].email}">${Team[i].email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${Team[i].github}" target="_blank" rel="noopener noreferrer">${Team[i].github}</a></li>
          </ul>
      </div>
  </div>
        `;
    }
  }
  let page = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-primary text-white">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                ${employees}
                </div>
            </div>
        </div>
    </body>
    </html>

`;
  return page;
};

module.exports = pageRenderhtml;
