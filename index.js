const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const number = document.getElementById("number")
const bio = document.getElementById("bio")
const submit = document.getElementById("submit")
const button = document.getElementById("button")




const firstnamepara = document.getElementById("firstnamepara")
const lastnamepara = document.getElementById("lastnamepara")
const emailpara = document.getElementById("emailpara")
const passwordpara = document.getElementById("passwordpara")
const numberpara = document.getElementById("numberpara")
const biopara = document.getElementById("biopara")

const error = {
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    number: false,
    bio: false
}
function firstnamecheck() {
    if (firstname.value === "" || firstname.value.length < 3 || firstname.value.length > 17 || /^[a-zA-Z\-]+$/.test(firstname.value) == false) {
        error.firstname = false
        firstnamepara.innerText = "First name must be alphanumeric and contain 3-16 characters"
        firstname.style.border = "3px solid red"
    }
    else {
        error.firstname = true
        firstnamepara.innerText = ""
        firstname.style.border = "3px solid green"
    }
    if (error.firstname == true && error.lastname == true && error.email == true && error.password == true && error.number == true && error.bio == true) {
        submit.innerHTML = `<button style="background-color:green" onclick="alertme()"  >${"Submit"}</button>`
    }
    else {
        submit.innerHTML = `<button style="background-color:grey" >${"Submit"}</button>`
    }
}
function lastnamecheck() {
    if (lastname.value === "" || lastname.value.length < 3 || lastname.value.length > 17 || /^[a-zA-Z\-]+$/.test(lastname.value) == false) {
        error.lastname = false
        lastnamepara.innerText = "Last name must be alphanumeric and contain 3-16 characters"
        lastname.style.border = "3px solid red"
    }
    else {
        error.lastname = true
        lastnamepara.innerText = ""
        lastname.style.border = "3px solid green"
    }
    if (error.firstname == true && error.lastname == true && error.email == true && error.password == true && error.number == true && error.bio == true) {
        submit.innerHTML = `<button style="background-color:green"  onclick="alertme()" >${"Submit"}</button>`
    }
    else {
        submit.innerHTML = `<button style="background-color:grey" >${"Submit"}</button>`
    }
}
function emailcheck() {
    if (email.value =="" || /^\s*[\w\-\+_]+(\.[\w\-\+_]+)\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s$/.test(email.value) == false) {
        error.email = false
        emailpara.innerText = "Email must be a valid address, e.g. example@example.com"
        email.style.border = "3px solid red"
    }
    else {
        error.email = true
        emailpara.innerText = ""
        email.style.border = "3px solid green"
    }
    if (error.firstname == true && error.lastname == true && error.email == true && error.password == true && error.number == true && error.bio == true) {
        submit.innerHTML = `<button style="background-color:green"  onclick="alertme()" >${"Submit"}</button>`
    }
    else {
        submit.innerHTML = `<button style="background-color:grey" >${"Submit"}</button>`
    }
}
function passwordcheck() {
    if (password.value === "" || password.value.length < 6 || password.value.length > 20 || [/[a-z]/, /[A-Z]/, /\d/, /\W/].filter(function (t) { return t.test(password.value); }).length > 2 == false) {
        error.password = false
        passwordpara.innerText = "Password must be alphanumeric (@,_and - are also allowed) and between 6-20 characters"
        password.style.border = "3px solid red"
    }
    else {
        error.password = true
        passwordpara.innerText = ""
        password.style.border = "3px solid green"
    }
    if (error.firstname == true && error.lastname == true && error.email == true && error.password == true && error.number == true && error.bio == true) {
        submit.innerHTML = `<button style="background-color:green"  onclick="alertme()" >${"Submit"}</button>`
    }
    else {
        submit.innerHTML = `<button style="background-color:grey" >${"Submit"}</button>`
    }
}
function numbercheck() {
    if (number.value === "" || /^(0|[+91]{3})?[6-9][0-9]{9}$/.test(number.value) == false) {
        error.number = false
        numberpara.innerText = "A valid Telephone number(11 digits and 333-333-3334)"
        number.style.border = "3px solid red"
    }
    else {
        error.number = true
        numberpara.innerText = ""
        number.style.border = "3px solid green"
    }
    if (error.firstname == true && error.lastname == true && error.email == true && error.password == true && error.number == true && error.bio == true) {
        submit.innerHTML = `<button style="background-color:green"  onclick="alertme()" >${"Submit"}</button>`
    } else {
        submit.innerHTML = `<button style="background-color:grey" >${"Submit"}</button>`
    }
}
function biocheck() {
    if (bio.value === "" || /^[a-z0-9\_]+$/.test(bio.value) == false) {
        error.bio = false
        biopara.innerText = "Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters"
        bio.style.border = "3px solid red"
    }
    else {
        error.bio = true
        biopara.innerText = ""
        bio.style.border = "3px solid green"
    }
    if (error.firstname == true && error.lastname == true && error.email == true && error.password == true && error.number == true && error.bio == true) {
        submit.innerHTML = `<button style="background-color:green"  onclick="alertme()" >${"Submit"}</button>`
    }
    else {
        submit.innerHTML = `<button style="background-color:grey" >${"Submit"}</button>`
    }
}

function alertme() {
    alert("Your application is submitted successfully")
    firstname.value = ""
    firstname.removeAttribute("style")
    lastname.value = ""
    lastname.removeAttribute("style")
    email.value = ""
    email.removeAttribute("style")
    password.value = ""
    password.removeAttribute("style")
    number.value = ""
    number.removeAttribute("style")
    bio.value = ""
    bio.removeAttribute("style")
    submit.innerHTML = `<button style="background-color:black" >${"Submit"}</button>`
}