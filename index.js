let bolatitoSubjects = "Government, Economics, Literature, History";

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

if (bolatitoSubjects === scienceSubjects) {
    console.log(`Bolatito subject are ${generalSubjects} ${scienceSubjects}`) 
} else if (bolatitoSubjects === socialScienceSubjects) {
    console.log(`Bolatito subject are ${generalSubjects} ${socialScienceSubjects}`)
} else if (bolatitoSubjects === artSubjects) {
    console.log(`Bolatito subject are ${generalSubjects}, ${artSubjects}`)
} else {
    console.log(generalSubjects)
}

