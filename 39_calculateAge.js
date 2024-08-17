//  Calculate Age

const CalculateAge = (birthDate) =>{

    let birthdate = new Date(birthDate)

    let todayDate = new Date()
 
    let age =todayDate.getFullYear() - birthdate.getFullYear()

    let monthDiff = todayDate.getMonth() - birthdate.getMonth()



    if(monthDiff < 0 || monthDiff === 0 && todayDate.getDate() < birthdate.getDate()){
        age--;
    } 
    return age;
}

console.log(CalculateAge("2001-10-11"))