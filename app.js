// Online Course Admission System

let age = 20;

let hasCNIC = true;

let hasEducation = true;

let hasTestPassed = false;

let isSpecialCase = false;


 if (age >= 18) {

    if (hasCNIC && hasEducation) {

        if (hasTestPassed || isSpecialCase) {
            console.log("Admission Approved");
        } else {
            console.log("Test Required");
        }

    } else {
        console.log("Required Documents/Education Missing");
    }

} else {
    console.log("Age Requirement Not Fulfilled");
}