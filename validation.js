// validation script here
//Two ways to write regular expressions
const reg = /[a-z]/gi;
const reg2 = new RegExp(/[a-z]/, 'gi');

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(\w|@|-){8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/
}

//validation using Javascript only. It's better to do this with HTML instead using pattern attribute.

function validate (field, regex) {
    if(regex.test(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
    }
    else {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.name]);
    });
});