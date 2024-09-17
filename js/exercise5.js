let studentName = "Milo"
let SCORE = 91

if (SCORE >= 80) {
    console.log(`${studentName}, your grade is A`)
}

else {
    if (SCORE >= 60) {
        console.log(`${studentName}, your grade is B`)
    }
    
    else{
        if (SCORE >= 40) {
            console.log(`${studentName}, your grade is C`)
        }
        
        else {
                console.log(`${studentName} has NO GRADE`)
        }
    }
}
