function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
        'ValidarNombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre('Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque distinctio eaque blanditiis. Totam aut et nulla quisquam, sint qui eum voluptatem facilis repellat quam asperiores at minima impedit! In non dicta debitis. Quos, blanditiis distinctio illum tenetur deleniti nulla maxime sapiente ipsa voluptate cupiditate quisquam repellat ducimus unde culpa et quod placeat quasi ullam dolor.') === 'El campo nombre debe tener menos de 50 caracteres',
        'ValidarNombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre('87390') === "El campo nombre solo acepta letras",
        'ValidarNombre no validó que el nombre solo contenga letras'
    );

    console.assert(
        validarNombre('Fulano') === "",
        'ValidarNombre falló con un nombre válido'
    );
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacío',
        'ValidarCiudad no validó que el campo no esté vacío'
    );

    console.assert(
        validarCiudad('Buenos Aires') === '',
        'ValidarCiudad falló con una ciudad válida'
    );
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium libero corrupti, cumque quibusdam aut animi minus tempore quasi! Et voluptates nam tenetur eveniet alias sit, voluptate, debitis possimus optio a aliquid quaerat eaque magni est delectus aspernatur similique hic recusandae, odio minus quos ea dignissimos? Magni minima sunt id in neque enim pariatur totam odio quo dignissimos placeat, hic fuga error laudantium repellendus sit tempore minus quis voluptas? Ducimus laudantium facere minus. Consequatur beatae tenetur voluptatibus libero soluta laborum consectetur voluptatem odit! Sit excepturi, cum consequatur ducimus velit pariatur distinctio incidunt possimus nesciunt, natus rerum temporibus dolores. At dolores aut dolor?') === 'La descripción no puede excederse de los 100 caracteres',
        'ValidarDescripcionRegalo no validó que el campo no se exceda de 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('') === 'La descripcion no debe estar vacía',
        'ValidarDescripcionRegalo no validó que el campo no esté vacío'
    );

    console.assert(
        validarDescripcionRegalo('%$#"#".,rjfs') === 'La descripción contiene caracteres extraños',
        'ValidarDescripcionRegalo no validó que contenga solo letras y numeros'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
