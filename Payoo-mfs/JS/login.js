document.getElementById('login-button').addEventListener('click', function(){
    const PhoneNumber = document.getElementById('contact').value;
    const pin = document.getElementById('pin').value;
    
    if(PhoneNumber === '01764' && pin === '123') {
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Password!!')
    }
})

// jodi form use kori taile page reload howa prevent korar jonne use korbo event.preventDefault()

