/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Giovanni HoSang",
    "role": "Software Developer",
    "contacts": {
        "mobile": "604-862-3795",
        "email": "giovanni.hosang@gmail.com",
        "github": "realgio95",
        "twitter": "dappastar1995",
        "location": "Vancouver, BC, Canada",
        "linkedin": "ghosang"
    },
    "welcomeMessage": "Where personality meets tech!",
    "skills": ["Javascript", "ReactJS", "Java", "C++", "C", "Java", "Python"] ,
    "interests": ["Soccer", "Cricket", "Reggae", "Soca", "Cricket"],
    "biopic": "https://scontent.fcxh3-1.fna.fbcdn.net/v/t1.0-9/30652642_10204563817451903_7451400214222471168_n.jpg?_nc_cat=0&oh=a7ebafb6772c6220d6510ad51ecada88&oe=5B54F9DF"
};

var work = {
    "jobs": [{
    		"employer": "SAP Labs",
    		"title": "Agile Developer Intern",
    		"location": "Vancouver, Canada",
    		"dates": "2017",
    		"description": "Worked in teh Charting Team on the SAP Analytics Cloud Business Intelligence Solution" 
    	},{
    		"employer": "GraceKennedy Financial Group",
    		"title": "Social Media Manager",
    		"location": "Kingston, Jamaica",
    		"dates": "2015",
    		"description": "Managed the Facebook Marketing Strategy for the SchoolBoy Cricket competitions" 
    	},{
    		"employer": "Intcomex",
    		"title": "Computer Technician Intern",
    		"location": "Kingston, Jamaica",
    		"dates": "2013",
    		"description": "Worked to fix various computer issues ranging from hardware to software issues" 
    	}]
};
var projects = {
    "projects": [{
    		"title": "Giovanni HoSang's Website ",
    		"dates": "2018",
    		"description": "This is an online Resume highlighting my skills and technical experience. Visit www.giovannihosang.com",
    		"images": [""]
    	}, {
    		"title": "SmartStrument",
    		"dates": "2017",
    		"description": "SmartStrument is an IOT application where Arduino was used to scare musical notes and render them to an LED that's used to teach people how to play a pianio",
    		"images": [""]
    	}, {
    		"title": "EndItNow",
    		"dates": "2017",
    		"description": "EndItNow was created at the Nwhacks 2017 at University of British Columbia. Enditnow  is a platform for Activism against cyber bullyism to fight harrasment using positive campaigns and trends around the world.",
    		"images": [""]
    	}, {
    		"title": "StartNow",
    		"dates": "2016",
    		"description": "StartNow is a web-application targeting Simon Fraser University students who want to work on projects outside of the classroom. Users of our application will be able to log in, create profiles, create project profiles, seek other people with the appropriate skillsets, join existing project groups, post on a project discussion board, create meeting locations, and communicate with fellow users using the chat feature to begin their collaborative process. These features will be discussed further in a latter section.",
    		"images": ""
    	}
    ]
};

var education = {
    "schools": [
      {
        "name": "Simon Fraser University",
        "location": "Vancouver, Canada",
        "degree": "BSc. in Computer Science Candidate",
        "majors": "Computer Science",
        "dates": 2019,
        "url": "https://www.sfu.ca"

      },{
        "name": "University of the West Indies, Mona Campus",
        "location": "Kingston, Jamaica",
        "degree": "BSc. in Computer Science (Transferred)",
        "majors": "Computer Science",
        "dates": 2015,
        "url": "https://www.uwimona.edu.jm"
      },
      {
        "name": "Ardenne High School",
        "location": "Kingston, Jamaica",
        "degree": "CAPE Associate Degree in Computing",
        "majors": "Physics, Computer Science, Math",
        "dates": 2014,
        "url": "https://www.ardennehighschool.edu.jm"
      }
    ],
    "onlineCourses": [
      {
        "title": "Harvard CS50",
        "school": "Harvard University Online",
        "date" : 2015,
        "url": "https://cs50.harvard.edu/"
      },
      {
        "title": "Harvard CS50",
        "school": "Harvard University Online",
        "date" : 2015,
        "url": "https://cs50.harvard.edu/"
      }
    ]
};

bio.display = function(){

};

work.display = function(){

};

projects.display = function(){

};

education.display = function(){

};

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);


$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin) ;
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLinkedIn);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

var formattedSkillsStart = HTMLskillsStart.replace("%data%", bio.skills);

var numberOfSkills = bio.skills.length;

var formattedSkill;
for (var i=0; i < numberOfSkills ; i++){
    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(formattedSkill);
}

var numOfJobs = work.jobs.length;

for (var i=0;i < numOfJobs; i++){
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

    $("#workExperience").append(formattedWorkEmployer);
    $("#workExperience").append(formattedWorkTitle);
    $("#workExperience").append(formattedWorkDates);
    $("#workExperience").append(formattedWorkLocation);
    $("#workExperience").append(formattedWorkDescription);
}

var numOfProjects = projects.projects.length;

for (var i=0;i < numOfProjects; i++){
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    
    $("#projects").append(formattedProjectTitle);
    $("#projects").append(formattedProjectDates);
    $("#projects").append(formattedProjectDescription);
    for (var y =0 ; y < projects.projects[y].length; y++){
        var formattedProjectPic = HTMLprojectImage.replace("%data%", projects.projects[i].images[y]);
        $("#projects").append(formattedProjectPic);    
    }
}

var numOfSchoolsLength = education.schools.length;

for (var i=0;i < numOfSchoolsLength; i++){
    var formattedSchoolName =  HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree) ;
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates) ;
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location) ;
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major) ;

    $("#education").append(formattedSchoolName);
    $("#education").append(formattedSchoolDegree);
    $("#education").append(formattedSchoolDates);
    $("#education").append(formattedSchoolLocation);
    $("#education").append(formattedSchoolMajor);
}


var numOfOnlineSchools = education.schools.onlineCourses;
if ( numOfOnlineSchools > 0 ){
    $("#projects").append(HTMLonlineClasses);    
} 

for (var i=0;i < numOfOnlineSchools; i++){
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

    $("#education").append(formattedOnlineTitle);
    $("#education").append(formattedOnlineSchool);
    $("#education").append(formattedOnlineDates);
    $("#education").append(formattedOnlineURL);
}

//Adding the Google Maps script element to the index.html
$("#mapDiv").append(googleMap);