createTeam = (teamMembers) => {
    const model = `
    <!DOCTYPE html>    
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel='stylesheet' href="./style.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <header>
            <div class="container-xxl" id="head">
                <h1>Team Profile</h1>
            </div>
        </header>

        <nav>
            <div class="container d-flex justify-content-center flex-wrap">
            ${createCard(teamMembers)}
            </div>
    
        </nav>
    <div id="container1">
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
    crossorigin="anonymous"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>
    
    </body>
    </html>
    `;
    
    return model 
}

createCard = (teamMembers) => {
    let str = '';
    team.forEach(teanmember => {
        str += 
        `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-header text-center">
                    <h4 class="card-title">${teamMember.getName()}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">${member.getRole()}</h5>
                </div>
                <div class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamMember.getId()}</li>
                    <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
                    ${getInfo(teamMember)}
                </div>
            </div>
        `
    })
    return str;
}

// gets the last list item from the members constructor
getInfo = (teamMember) => {
    let li = '';
    switch (teamMember.getRole()) {
        case 'Manager':
            li += `<li class="list-group-item">Office: ${member.officeNumber}</li>`;
            break;
        case 'Engineer':
            li += `<li class="list-group-item">Github: <a href="${member.github}" target="_blank" rel="noopener">${member.github}</a></li>`;
            break;
        case 'Intern':
            li += `<li class="list-group-item">School: ${member.university}</li>`    
        default:
            break;
    }

    return li;
}

module.exports = createTeam    