
//funcion de logueo.

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
     }else{
    let user = [] ;

    for(x of email.value) { 
        user.push(x)
    }
    let contieneArroba = user.find(e => e=== `@`) ; 

    let contieneNumero = user.map((n) => {
return !isNaN(parseFloat(n)) ? parseFloat(n) : null 
    })
        
    const tieneNumeroYarroba = ()=> {
        if((contieneArroba && contieneNumero) && password.value.length > 6 ) { 
            for(let i=0 ; i< contieneNumero.length ; i++ ){ 
                if(contieneNumero[0]!=null){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'el email no puede contener numeros al inicio',
                      })
                }else{
                    Swal.fire({
                        icon: 'success',
                        title: 'OK',
                        text: 'Te damos la Bienvenida',
                      })
                }
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar los campos',
              })
        }
    }
tieneNumeroYarroba()

     }
    })
   
}

login()
