
class Usuario {
    
    obtener(){    
        var getCorreo = document.getElementById("correo").value;
        var getPass = document.getElementById("pass").value;
        
        this.p(getCorreo, getPass);        
    }   
    
    p = function (getCorreo, getPass) {

        let secretEmail = "correo@example.com";
        let secretPassword = 1;

        const promesa = new Promise((resolve, reject)=>{                       

                if (secretEmail == getCorreo  && secretPassword == getPass) { // Aqui validan los parametros obtenidos 
                        resolve("Procesamiento correcto");                  
                    
                        this.getTodos();
            
                } else {
                        reject("Algo estuvo mal");
                    
                }
            });

            promesa.then((mensaje) => {
                    alert("Bienvenido nuevamente: " + secretEmail);
                    location.replace("../pages/logged.html");
                
                    // llamar funcion asincrona
                    getTodos();
                
            }).catch((error)=>{
                alert("Usuario no valido, compruebe sus credenciales e intente de nuevo");             
                document.getElementById("correo").value = "";  
                document.getElementById("pass").value = "";  
            });
        }        
    }

    //Función asíncrona.
    getTodos = async () => {
        var datos = await axios.get("https://randomuser.me/api/?results=5")
        .then(result =>{
            var correo = result.data.results[0].email;
            
            console.log("Correo con función asíncrona: " + correo); //mostrar correo obtenido mediante la función asíncrona.
            alert("Correo con función asíncrona: " + correo); 
        })
        .catch(error =>{
            console.log(error);        
        }); 
    };

//Creando la 
var datosUser = new Usuario;



