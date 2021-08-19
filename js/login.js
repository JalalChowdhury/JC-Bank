document.getElementById('login-button').addEventListener('click',function (){
    
    //get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    //cheak user email and Password
   
     window.location.href = 'banking.html';
    
        
    
   
}) 