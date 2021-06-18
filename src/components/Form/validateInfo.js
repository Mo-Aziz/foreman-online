export default function validateInfo(values){
    let errors ={}
    if(!values.firstname.trim()){
        errors.firstname="Firstname required"
    }
    // lastname
    if(!values.lastname.trim()){
        errors.lastname ="Last name required"
    }
    
    // email
    if(!values.email){
        errors.email="Email is required"
    }else if(!/^[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="email address is invalid";
    }
    // password
    if(!values.password){
        errors.password = "Password is required";
    }else if(values.password.lenght<8){
        errors.password="Password needs to be 8 caracters or more";
    }
    // password confirmation
    if(!values.passsword2){
        errors.password2 ="password is required";
    
    }else if (values.passsword2 !== values.password){
        errors.passsword2="passwords do not match"}
    
        return errors;
    
}

