useBulma = (teamMembers) => {
    const bulma =
        `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Builder Results</title>
        </head>

        <body>
            <section class="hero is-info">
                <div class="hero-body">
                    <p class="title">
                        Meet your new team!
                    </p>
                </div>
            </section>
                    

        ${createCards(teamMembers)}


        </body>

        </html>`;

        return bulma;
}


createCards = (teamMembers) => {
    let member = '';
    teamMembers.forEach(person => {
        `< div class="columns is centered" >
        <div class="column is-one-third">
            <div class="card">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <div class="media-content">
                                    <p class="title is-3">${person.getName}</p>
                                    <p class="subtitle is-6">Title: ${person.getRole}</p>
                                    <p class="subtitle is-6">Employee ID: ${person.getId}</p>
                                    <p class="subtitle is-6">Email: ${person.getEmail}</p>
                                    ${createTeamVariable(person)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>` 
    });
    
    return member;
}



    createTeamVariable = person => {
        let list = '';
        switch(person.getRole()) {
            case 'Manager':
                list += `<p class="subtitle is-6">Office Number: ${person.getOfficeNumber}</p>`
                break;
            case 'Engineer':
                list += `<p class="subtitle is-6">Github: ${person.getGithub}</p>`
                break;
            case 'Intern':
                list += `<p class="subtitle is-6">University: ${person.getUni}</p>`
                break;
            default:
                break;
        }
        return list;
    }

    module.exports = useBulma;