export default function validateInfo(values) {
    let errors={}

    //First set of logic here

    if (!values.firstname.trim()) {
        errors.firstname = "First Name is Required"
    }

    if (!values.lastname.trim()) {
        errors.lastname = "Last Name is Required"
    }

    if (!values.dob.trim()) {
        errors.dob = "Date of Birth is Required"
    }

    if (!values.email) {
        errors.email = "Email is Required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }

    if (!values.password2) {
        errors.password2 = "Password is Required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match!"
    }

    return errors;
}
