function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");
    var skillsPattern = /^[a-zA-Z0-9 ]{2,30}$/;
    if (skills == "") {
        skillsError.innerHTML = "Skills is required";
        return false;
    } else if (!skillsPattern.test(skills)) {
        skillsError.innerHTML = "Skills must be 2-30 characters";
        return false;
    } else {
        skillsError.innerHTML = "";
        return true;
    }
}