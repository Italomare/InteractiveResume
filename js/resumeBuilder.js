var bio = {
	"name": "Nishad Shah",
	"role": "Software Developer",
	"contacts": {
		"email": "nishad3245@gmail.com",
		"github": "ZetaX9",
		"twitter": "@NishadShah2",
		"location": "Acworth, Georgia, United States"
	},
	"picture": "images/profilepic.png",
	"welcomeMessage": "Currently a Software Developer at AT&T here in Atlanta, Georgia.",
	"skills": ["Java", "C/C++", "HTML5", "CSS3", "Javascript", "Web Development", "Software Development"]
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Associate Applications Developer",
			"location": "Atlanta, Georgia, United States",
			"datesWorked": "June 2013 - Present",
			"description": "I worked on many different applications in different organizations at AT&T from small to large " +
				"scale of teams. The languages and frameworks that I've used are Java, HTML, CSS, Javascript, UNIX, MySQL, " +
				"AngularJS, Bootstrap, Spring, and Hibernate. Most of my work are mainly full-stack work where I develop" +
				"features and improvements on both front-end and backend as well as some database work. Another is" +
			"I've been involved with several leadership activities such as providing guidance for submitting employee referrals " +
			"for purchasing AT&T products and the Service Ambassador program to engage and establish relationships with small to " +
            "mid-sized businesses."
		},
		{
			"employer": "Elemica",
			"title": "Junior Analyst and Developer",
			"location": "Atlanta, Georgia, United States",
			"datesWorked": "March 2013 - May 2013",
			"description": "I worked with a tool called webMethods to convert various of the partnered companies' XML " +
			"schemas to another companies' format based on EDI standards when they are sending or requesting orders " +
			"from one place to another. Another is I created Excel reports to keep track of the companies' booking and order " +
			"confirmations for manager to keep track of whether or not they have received that order or not."
		},
		{
			"employer": "Digital Cloud Innovations",
			"title": "PHP and MySQL Web Developer Intern",
			"location": "Covington, Georgia, United States",
			"datesWorked": "July 2011 - December 2011",
			"description": "I was responsible for creating and redesigning both a chiropractic and financial website using " +
			"PHP, MySQL, and Wordpress as well as designing logos, banners, and other images using Photoshop. Another is " +
            "I optimized SEO by submitting backlinks, articles, use necessary keywords using Google Adwords and keeping track " +
            "of the pages performances using Google Analytics. As a result, both websites increased their impressions by 1000 per " +
             "day."
		}
	]
};

var education = {
	"schools": [
		{ "name": "Georgia Institute of Technology",
			"datesAttended": "2014 - Present",
			"location": "Atlanta, Georgia, United States",
			"degree": "M.S",
			"major": "Computer Science",
			"url": "https://www.gatech.edu"
		},
        { "name": "Georgia State University",
            "datesAttended": "2008 - 2012",
            "location": "Atlanta, Georgia, United States",
            "degree": "B.S",
            "major": "Computer Science",
            "url": "https://www.gsu.edu"
        }
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Software Development Process",
			"completed": "December 2014",
			"url": "https://www.udacity.com/course/ud805"
		},
		{ "school": "Udacity",
			"title": "Computer Networks",
			"completed": "December 2014",
			"url": "https://www.udacity.com/course/ud436"
		},
		{ "school": "Udacity",
			"title": "AI In Robotics",
			"completed": "April 2015",
			"url": "https://www.udacity.com/course/cs373"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "April 2015",
			"url": "https://www.udacity.com/course/ud809"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"datesWorked": "March 2015",
			"description": "Created an online game using HTML5 and CSS3.",
			"images": ["images/portfolio.png"],
			"url": "https://github.com/ZetaX9/SimplePortfolio"
		},
		{
			"title": "Sudoku",
			"datesWorked": "March 2015",
			"description": "Created a sudoku game made of HTML5, CSS3, AngularJS, jQuery, and Bootstrap.",
			"images": ["images/Sudoku - AngularJS.png"],
			"url": "https://http://shahnishad.com/Sudoku/app/index.html/"
		},
		{
			"title": "Personal Website",
			"datesWorked": "February 2015",
			"description": "Created a personal website using AngularJS, Bootstrap, and Node.js",
			"images": ["images/personalwebsite.png"],
			"url": "http://shahnishad.com/"
		}
	]
};


var nameAppend = HTMLheaderName.replace("%data%", bio.name);
var roleAppend = HTMLheaderRole.replace("%data%", bio.role);
var biopicAppend = HTMLbioPic.replace("%data%", bio.picture);
var welcomeAppend = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var contactAppend = [];
contactAppend.push(HTMLemail.replace("%data%", bio.contacts.email));
contactAppend.push(HTMLgithub.replace("%data%", bio.contacts.github));
contactAppend.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
contactAppend.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(roleAppend);
$("#header").prepend(nameAppend);
$("#header").append(biopicAppend);
$("#header").append(welcomeAppend);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in contactAppend) {
	$("#topContacts").append(contactAppend[i]);
	$("#footerContacts").append(contactAppend[i]);
}


function showWorkInfo() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var employerAppend = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var worktitleAppend = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var worklocationAppend = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var datesworkedAppend = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var workdescAppend = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var empworktitleAppend = employerAppend + worktitleAppend;

			$(".work-entry:last").append(empworktitleAppend);
			$(".work-entry:last").append(worklocationAppend);
			$(".work-entry:last").append(datesworkedAppend);
			$(".work-entry:last").append(workdescAppend);
		}

	}

}

showWorkInfo();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var projtitleAppend = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var projdatesAppend = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var projdescAppend = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(projtitleAppend);
			$(".project-entry:last").append(projdatesAppend);
			$(".project-entry:last").append(projdescAppend);

			for(img in projects.projects[i].images) {
				var projimageAppend = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(projimageAppend);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var schoolnameAppend = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var schooldegreeAppend = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var schooldatesAppend = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var schoollocationAppend = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var schoolmajorAppend = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(schoolnameAppend + schooldegreeAppend);
			$(".education-entry:last").append(schooldatesAppend);
			$(".education-entry:last").append(schoollocationAppend);
			$(".education-entry:last").append(schoolmajorAppend);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var onlinetitleAppend = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var onlineschoolAppend = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var onlinedatesAppend = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var onlineurlAppend = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(onlinetitleAppend + onlineschoolAppend);
				$(".education-entry:last").append(onlinedatesAppend);
				$(".education-entry:last").append(onlineurlAppend);
			}
		}
		
	}
}

education.display();

$("#mapDiv").append(googleMap);


