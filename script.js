$(document).ready(function(){
	$("#submit").click(function(){
	    var gradenum = parseInt(document.getElementById("gradenum"));
	    var grade;
			if(gradenum >= 90 && gradenum <= 100) {
				grade = 'A';
			}
			else if(gradenum >= 80 && gradenum < 90) {
				grade = 'B';
			}
			else if(gradenum >= 70 && gradenum < 80){
				grade = 'C';
			}
			else if(gradenum >= 60 && gradenum < 70){
				grade = 'D';
			}
			else if (gradenum <= 59) {
				grade = 'F';
			}

		// Display changed information
		$("#ans").html("Congratulations you have an " + (grade));
	});
});