let datos = [
    {
            nombre:"ismael",
            mail:"ismael@gmail.com"
        },
        {
            nombre:"estela",
            mail:"estela@gmail.com"
        },
        {
            nombre:"ale",
            mail:"ale@gmail.com"
        },
        {
            nombre:"jimmy",
            mail:"jimmy@gmail.com"
        },
        {
            nombre:"diana",
            mail:"diana@gmail.com"
        },
        {
            nombre:"ivan",
            mail:"ivan@gmail.com"
        }
    ]
    const obtenerInfo = function(id){
        return new Promise((resolve,reject)=>{
            if(id=="") reject("No se enviaron datos, por favor ingrese un ID");
            if(datos[id]==undefined) reject("Los datos ingresados no existen");
            else resolve(datos[id]);
        })
    }

    let id="";
    let inputSearch = document.querySelector("#search-input");
    let buttonSearch = document.querySelector("#search-button");
    
    inputSearch.addEventListener("keyup",()=>{
        let id=inputSearch.value;
        obtenerInfo(id).then((respuesta)=>{
        let htmlinfo=`
            <p>Nombre: ${respuesta.nombre[0].toUpperCase()}${respuesta.nombre.substring(1)}</p> <br>
            <p>Mail: ${respuesta.mail}</p>
        `;
        document.querySelector(".respuesta").innerHTML=(htmlinfo);
        }).catch((error)=>{
            let htmlinfo=`<p>${error}</p>`
            document.querySelector(".respuesta").innerHTML=(htmlinfo);
        })
    });