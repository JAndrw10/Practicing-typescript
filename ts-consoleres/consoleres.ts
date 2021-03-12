//change myName to uppercase
// Change myName to uppercase
let myName = "Joseph Oliver";
console.log("Name: " + myName.toUpperCase());

console.log("Career: Full Stack Web Developer");
console.log("Description: I like Soccer ");
console.log("");

console.log("My Interests:");
console.log("* Coding");
console.log("* Soccer");
console.log("* Festivals");
console.log("* Outdoor activities");

console.log("");

// Function to display previous work experience
function displayPosition(job_title:string, company_name:string, description:string) {
    console.log("* " + job_title + " at " + company_name + " - " + description)
}

displayPosition("Parts Advisor", " Voyles CDJR of Birmingham", "Responsible for delivering various auto parts to Wholesale and Retail customers in a timely manner");
displayPosition("Shipping and Receiving Assistant", "The University of Alabama", "Maintained and sorted logs of all incoming material such as: textbooks, clothing and general merchandise");
displayPosition("Car Detail Specialist", "Benchmark CDJR", "Verified  new vehicle shipments upon delivery");

console.log("");

// Display skills and if it's "cool" put "BAM" in front
function displaySkill(skill_name:string, isCool:boolean) {
    if (isCool) {
        console.log("BAM: " + skill_name)
    }
    else {
        console.log(skill_name);
    }
}

console.log("My Skills:")

displaySkill("Boostrap", true);
displaySkill("MySQl", true);
displaySkill("Analyst", true);
displaySkill("React", false);
displaySkill("C#", false);
displaySkill("Java",false )