

const firstName = document.getElementById("nom");

function verification() {
    const firstNameValue = firstName.value;
    // const hasNumber = /[0-9]/.test(firstNameValue);
   
    const gmail = `@gmail.com`.test(firstNameValue);
    if (gmail) {
        // firstName.style.border = 'solid 2px red';
        firstName.style.border = 'solid 2px green';
    }
    
    else {
        firstName.style.color = 'solid 2px red'; 
        
    }
}
 

firstName.addEventListener('input', verification);
