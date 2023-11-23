function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsBtn = document.getElementById("member-skills-btn");
    var memberSkillsBtnIcon = document.getElementById("member-skills-btn-icon");

    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsBtnIcon.classList.remove("fa-chevron-down");
        memberSkillsBtnIcon.classList.add("fa-chevron-up");
    } else {
        memberSkills.style.display = "none";
        memberSkillsBtnIcon.classList.remove("fa-chevron-up");
        memberSkillsBtnIcon.classList.add("fa-chevron-down");
    }
}