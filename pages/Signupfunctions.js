export function generatesingupfunctions(){
    const usernamesignup = document.getElementById("usernamesignup");
    const submit = document.getElementById("submit-btn");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const email=document.getElementById("email")
    const acceptTerms = document.getElementById("acceptTerms");
    const region=document.getElementById("region");
    function verifregion(region){
        const veirferror = region.nextElementSibling;
            if(region.value===""){
            veirferror.textContent='SELECT SOMETHING'
                return false;}
            else{veirferror.textContent='';}

            }
        
        

    function verifuser(usernameInput, usererrorElement) {
        let a = "AZERTYUIOPQSDFGHJKLMWXCVBN0123456789";
        const user = usernameInput.toUpperCase();
        let usererrorMsg = "";
        let c = true;
        let i = 0;
        let nbrint = 0;
        if (user.length < 8) {
            usererrorElement.textContent = 'Username must be at least 8 characters long';
                return false;}
        if (!user[0].match(/[A-Z]/) || !user[1].match(/[A-Z]/)) {
                c = false;}
        else {
            while (i < user.length && c) {
                if (a.includes(user.charAt(i))) {
                        if (!isNaN(Number(user.charAt(i)))) {
                            nbrint++;}
                        i++;} 
                else {
                    c = false;}
                }
            }
            
            if (c === false && nbrint === 0) {
                usererrorMsg = 'Username should start with 2 alphabetic characters';
            } else if (c === false) {
                usererrorMsg = 'Username should be alphanumeric';
            } else if (c && nbrint < 2) {
                usererrorMsg = 'Username should at least have 2 numbers';
            } else {
                usererrorMsg = '';
            }

            usererrorElement.textContent = usererrorMsg;
            return c && nbrint >= 2;
        }

    function verifpassword(passwordInput, passwordErrorElement) {
        let nbrint = 0;
        let nbrspecial = 0;
        let nbramphamin = 0;
        let nbralphaup = 0;
        for (let i = 0; i < passwordInput.length; i++) {
            if (passwordInput[i].match(/[0-9]/)) {
                nbrint++;}
            else if (passwordInput[i].match(/[a-z]/)) {
                    nbramphamin++;}
            else if (passwordInput[i].match(/[A-Z]/)) {
                    nbralphaup++;}
            else {
                    nbrspecial++;}
        }
        let errorMessage = '';
        let result = true;
        if (passwordInput.length < 8) {
            errorMessage = 'Password must be at least 8 characters long';
            result = false;}
            else if (nbrspecial === 0) {
                errorMessage = 'Password must contain at least one special character';
                result = false;}
            else if (nbrint === 0) {
                errorMessage = 'Password must contain at least one number';
                result = false;}
            else if (nbramphamin === 0) {
                errorMessage = 'Password must contain at least one lowercase letter';
                result = false;}
            else if (nbralphaup === 0) {
                errorMessage = 'Password must contain at least one uppercase letter';
                result = false;
            }

            passwordErrorElement.textContent = errorMessage;
            return result;}

    function reverifpass(pass, repass) {
        return pass === repass && pass.length > 0;}

    
    function verifemail(emailInput) {
    const emailError = emailInput.nextElementSibling;
    const emailValue = emailInput.value.trim();

        if (emailValue === "") {
        emailError.textContent = "Email is required";
        return false;
            } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
            emailError.textContent = "Invalid email address";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
}
    region.addEventListener("input",overallverify)
    email.addEventListener("input", overallverify );
    usernamesignup.addEventListener("input", overallverify);
    password.addEventListener("input", overallverify);
    confirmPassword.addEventListener("input", overallverify);
    acceptTerms.addEventListener("change", overallverify);

    function overallverify() {
        const usernameError = usernamesignup.nextElementSibling;
        const passwordError = password.nextElementSibling;
        const confirmPasswordError = confirmPassword.nextElementSibling;
        const isValidEmail = verifemail(email);
        const selectres=verifregion(region);
        const isUsernameValid = verifuser(usernamesignup.value, usernameError);
        const isPasswordValid = verifpassword(password.value, passwordError);
        const isConfirmPasswordValid = reverifpass(password.value, confirmPassword.value);
        
        if(!isConfirmPasswordValid){
            confirmPasswordError.textContent='PASSWORD DOSENT MATCH';
                }
        else{
            confirmPasswordError.textContent='';}
        const areTermsAccepted = acceptTerms.checked;
        if (isUsernameValid && isValidEmail &&  isPasswordValid && isConfirmPasswordValid && areTermsAccepted&&region) {
            submit.removeAttribute('disabled');
            submit.style.cursor = 'pointer';}}
        }