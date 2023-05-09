function login (){
    let btn = document.getElementById('access') ;
    let email = document.getElementById('email') ; 
    let password = document.getElementById('password') ;

 btn.addEventListener(('click'), (e)=>{
    e.preventDefault()
     if(email.value==='' || password.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes completar los campos',
          })
     }
    })

}

login()
