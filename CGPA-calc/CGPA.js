// Javascipt external file / logic

function fn1() {
    var num1 = document.getElementById("entered-marks").value
    var num2 = document.getElementById("Total-marks").value
    var percentage = (num1 / num2) * 100
    percentage = percentage.toFixed(2);
    //For Percentage field
    var per = document.getElementById("percentage-got").placeholder = percentage + "%";
    var Cgpa = percentage / 9.5;
    Cgpa = Cgpa.toFixed(1);
    //For CGPA field
    var GPA = document.getElementById("Cgpa-got").placeholder = Cgpa;
    //For GRADE field
    var grade;

    if (percentage >= 95) {
        GPA = document.getElementById("Cgpa-got").placeholder = "10";;
        grade = document.getElementById("grade").placeholder = " 'A+'";

    } else if (percentage >= 90) {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'A+'";
    } else if (percentage > 80) {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'A'";
    } else if (percentage > 75) {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'B+'";
    } else if (percentage > 70) {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'B'";
    } else if (percentage > 60) {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'C'";
    } else if (percentage > 50) {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'D'";
    } else if (percentage > 40) {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'E'";
    } else {
        Cgpa = GPA
        grade = document.getElementById("grade").placeholder = " 'F'";
    }

}
