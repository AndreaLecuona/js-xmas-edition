// PRUEBAS CON CONSOLE.ASSERT()



// FUNCION ORIGINAL

// function validarNombre(nombre){
//     if(nombre.length === 0){
//         return "Este campo debe tener al menos 1 caracter";
//     }
//     if(nombre.length >= 50){
//         return "Este campo debe tener menos de 50 caracteres";
//     }
//     if( /^[a-z]+$/i.test(nombre) ){                              ->regex: solo nombre        /^[a-z]+ [a-z]+$/i  regex: nombre y apellido (que haya un conjunto de caracteres, luego un espacio y luego otro conjunto de caracteres)
//         return "El campo nombre solo acepta letras"
//     }
//     return "";
//     
// }


// PRUEBA

// function probarValidarNombre() {   //Engloba todas las pruebas con distintos criterios sobre un mismo campo

//     console.assert(
//         validarNombre('') === 'Este campo debe tener al menos 1 caracter',   -> si esto no se cumple / si esa función con un parametro vacio no devuelve ese mensaje... (prueba)
//         'Validar nombre no validó que el nombre no sea vacío',               -> retorna este mensaje. Si no, pasó.
//     );
  
//     console.assert(
//         validarNombre('Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure alias eum nam ipsum ab cum? Dicta eveniet nesciunt consequuntur voluptatem odit aperiam labore, ullam vel enim atque eum mollitia quibusdam omnis perferendis, porro odio, recusandae veritatis tempore repellendus! Omnis, deserunt provident? Officiis recusandae, fuga corrupti totam ducimus ipsa cupiditate inventore? Voluptate alias dolorem voluptatem?') === 'Este campo debe tener menos de 50 caracteres',
//         'Validar nombre no validó que el nombre sea menor a 50 caracteres',
//     );

//     console.assert(
//         validarNombre('111111111111111') === 'El campo nombre solo acepta letras',
//         'Validar nombre no validó que el nombre solo tenga letras',
//     );

//     console.assert(
//         validarNombre('Fulano') === '',                  -> test de caso positivo (happy pass)
//         'Validar nombre falló con un nombre válido',
//     );

//   }
  


// FUNCION ORIGINAL (ESTA EN EL ARCHIVO JS PRINCIPAL)

// function validarCiudad(ciudad){
//     if(ciudad.length !== 0){
//         return "";
//     }
//     return "el campo ciudad no puede estar vacío"
// }


// PRUEBA (DEBE COLOCARSE EN UN ARCHIVO DISTINTO AL JS ORIGINAL)

// function probarValidarCiudad(){
//     console.assert(
//         validarCiudad('Buenos Aires') === "",
//         "Validar ciudad no funcionó con un nombre de ciudad válido"      -> caso positivo
//     )
//     console.assert(
//         validarCiudad('') === "El campo ciudad no puede estar vacío",
//         "Validar ciudad no mostró error cuando la ciudad está vacía"      -> caso negativo
//     )
// }



// FUNCION ORIGINAL

// function validarDescripcionRegalo(descripcionRegalo){
//     if(descripcionRegalo.length >= 100){
//         return "El campo es muy largo";
//     } else if (descripcionRegalo.length === 0){
//         return "El campo no puede estar vacío"
//     } else {
//         return "";
//     }
// }


// PRUEBA

//function probarValidarDescripcionRegalo(){
//     console.assert(
//         validarDescripcionRegalo('') === "El campo no puede estar vacío",
//         "La función no validó que el campo estaba vacío"
//     )
//     console.assert(
//         validarDescripcionRegalo('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut necessitatibus dolores placeat accusamus rem, cum nobis pariatur inventore? Totam quo iste quaerat voluptates impedit eligendi natus esse, repellendus modi. Ipsam illum voluptas rem, ducimus ipsum minus praesentium sit animi, earum a quo? Tenetur autem perspiciatis dignissimos facilis explicabo aspernatur ipsum? Modi, suscipit nulla? Suscipit aperiam saepe repellendus dolores repudiandae ab, maxime consectetur, deleniti eveniet neque enim voluptas quod ad. Autem quae amet voluptatem dolore magnam modi labore consequuntur iure vel sunt assumenda voluptate possimus, aut delectus cumque iste! Maxime aperiam, dolores deserunt eligendi tempora facilis quia a obcaecati quae dolorem placeat?') === "El campo es muy largo",    -> 101 caracteres
//         "La función no validó que el campo no sea muy largo"
//     )
//     console.assert(
//         validarDescripcionRegalo('Lorem, ipsum dolor sit amet consectetur adipisicing elit.') === "",        -> caso positivo
//         "La función no funcionó con una descripcion correcta"
//     )
//}



//LLAMO FUNCIONES DE PRUEBA

// probarValidarNombre();
// probarValidarCiudad();
// probarValidarDescripcionRegalo();