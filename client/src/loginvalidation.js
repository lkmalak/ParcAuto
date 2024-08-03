function validation(values){
let error ={}

if(!values.email){
    error.email = "Email is required"
}
else if(!/\S+@\S+\.\S+/.test(values.email)){
    error.email = "Email is invalid"
}
else {
    error.email = ""
}

if(!values.password){
    error.password = "Password is required"
}
if(!/^.{8,}$/.test(values.password)){
    error.password = "Password must be more than 8 characters"
}
else {
    error.password = ""
}
return error;
}

export default validation;