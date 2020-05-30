class team_member {
    name = "";
    email = "";
    image = "";
    jobPosition = "";

    constructor(name, email, image, jobPosition) {
        this.name = name;
        this.email = email;
        this.image = image;
        this.jobPosition = jobPosition;

    }

    info() {
        return "<h2>Name:</h2>" + "<h2>" + this.name + "</h2>" + "<br>" + "<h3> E-mail:</h3> " + "<h3>" + this.email + "</h3>" + " <img src=" + this.image + "><br>" + "<h2>" + this.jobPosition + "</h2>"

    }

}
var member1 = new team_member("Ben", "ben@gmail.com", "img/ben.jpg", "Boss")
var member2 = new team_member("Lucy", "lucy@gmail.com", "img/lucy.jpg", "HR")
var member3 = new team_member("Sara", "sara@gmail.com", "img/sara.jpg", "Client Advisor")
var member4 = new team_member("Dan", "dan@gmail.com", "img/dan.jpg", "Intern")
var team = [member1, member2, member3, member4]

document.getElementById("ben").addEventListener("click", show);
document.getElementById("lucy").addEventListener("click", show1);
document.getElementById("sara").addEventListener("click", show2);
document.getElementById("dan").addEventListener("click", show3);

function show() {
    document.getElementById("result1").innerHTML = team[0].info()
}

function show1() {
    document.getElementById("result2").innerHTML = team[1].info()
}

function show2() {
    document.getElementById("result3").innerHTML = team[2].info()
}

function show3() {
    document.getElementById("result4").innerHTML = team[3].info()
}