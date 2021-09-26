const submit = document.getElementById('btn');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementsByClassName('done-msg')[0]){}
    else{
        if (formValidation()){
            let parent = document.getElementsByClassName('registration')[0];
            const doneMsg = document.createElement('p');
            doneMsg.className = 'done-msg';
            const text = document.createTextNode('Well done! Sign up complete!');
            doneMsg.appendChild(text);
            parent.appendChild(doneMsg);
            let input = parent.querySelectorAll('input');
        
            for (let i=0; i < input.length; i++) {
                input[i].value = '';
            }

            window.setTimeout( ()=> {location.reload()}, 2500);
        }
    }
})


const formValidation = () => {
    let firstName = document.getElementsByClassName('first-name')[0];
    let lastName = document.getElementsByClassName('last-name')[0];
    let email = document.getElementsByClassName('email')[0];
    let password = document.getElementsByClassName('password')[0];
    let parent = document.getElementsByClassName('input-section');
    let formIsValid = true;


    for (let i=0; i < parent.length; i++) {
        if (parent[i].getElementsByClassName('error-msg')[0]) {
            let errorMsg = parent[i].querySelector('.error-msg');
            errorMsg.remove();
            parent[i].querySelector('.error-svg-inactive').classList.remove('error-svg-active');

        }
    }

    if (firstName.value == '') {
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-msg';
        const text = document.createTextNode('First Name cannot be empty');
        errorMsg.appendChild(text); 
        const parent = firstName.parentElement; 
        parent.appendChild(errorMsg);
        parent.querySelector('.error-svg-inactive').classList.add('error-svg-active');
        formIsValid = false;
    } 

    if (lastName.value == '') {
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-msg';
        const text = document.createTextNode('Last Name cannot be empty');
        errorMsg.appendChild(text); 
        const parent = lastName.parentElement; 
        parent.appendChild(errorMsg);
        parent.querySelector('.error-svg-inactive').classList.add('error-svg-active');
        formIsValid = false;
    } 

    if (email.value == '') {
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-msg';
        const text = document.createTextNode('Email cannot be empty');
        errorMsg.appendChild(text); 
        const parent = email.parentElement; 
        parent.appendChild(errorMsg);
        parent.querySelector('.error-svg-inactive').classList.add('error-svg-active');
        formIsValid = false;
    } 

    if (email.value != '') {
        let lastAtPos = email.value.lastIndexOf('@');
        let lastDotPos = email.value.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.value.indexOf('@@') === -1 && lastDotPos > 2 && (email.value.length - lastDotPos) > 2)) {
            const errorMsg = document.createElement('p');
            errorMsg.className = 'error-msg';
            const text = document.createTextNode('Oops! Please check your email');
            errorMsg.appendChild(text); 
            const parent = email.parentElement; 
            parent.appendChild(errorMsg);
            parent.querySelector('.error-svg-inactive').classList.add('error-svg-active');
            formIsValid = false;
        }   
        
    }

    if(password.value == ''){
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-msg';
        const text = document.createTextNode('Password cannot be empty');
        errorMsg.appendChild(text); 
        const parent = password.parentElement; 
        parent.appendChild(errorMsg);
        parent.querySelector('.error-svg-inactive').classList.add('error-svg-active');
        formIsValid = false;
    }

    if(password.value != '') {
        if (password.value.length < 5) {
            const errorMsg = document.createElement('p');
            errorMsg.className = 'error-msg';
            const text = document.createTextNode('Password must contain at least 5 characters');
            errorMsg.appendChild(text); 
            const parent = password.parentElement; 
            parent.appendChild(errorMsg);
            parent.querySelector('.error-svg-inactive').classList.add('error-svg-active');
            formIsValid = false;
        }
    }

    return formIsValid;
}
