function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    if (memberValue == "member") {
        memberSkills.style.display = "none";
    } else {
        memberSkills.style.display = "block";
    }
    if (memberSkillsValue == "memberSkills") {
        memberSkills.style.display = "none";
    } else {
        memberSkills.style.display = "block";
    }
}
