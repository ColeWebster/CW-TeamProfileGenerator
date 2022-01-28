createTeam = (teamMembers) => {

`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel='stylesheet' href="./dist/style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <div class="container-xxl" id="head">
        <h1>Team Profile</h1>
    </div>

    <div id="container1">
<!-- Manager Card -->
        <div class="card" style="width: 18rem;">
            <i class="fab fa-black-tie"></i>
            <div class="card-body">
                <h5 class="card-title">Manager</h5>
                <p class="card-text"> ID: </p>
                <p class="card-text"> Office Number: </p>
                <a href="#" class="btn btn-primary">Contact Here:</a>
            </div>
        </div>
<!-- Engineer Card -->
        <div class="card" style="width: 18rem;">
            <i class="fas fa-toolbox"></i>
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text"> ID: </p>
                <p class="card-text"> GitHub: </p>
                <a href="#" class="btn btn-primary">Contact Here:</a>
            </div>
        </div>
<!-- Intern Card -->
        <div class="card" style="width: 18rem;">
            <i class="fas fa-university"></i>
            <div class="card-body">
                <h5 class="card-title">Intern</h5>
                <p class="card-text"> ID: </p>
                <p class="card-text"> University: </p>
                <a href="#" class="btn btn-primary">Contact Here:</a>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>

</body>

</html>`}

module.exports = createTeam