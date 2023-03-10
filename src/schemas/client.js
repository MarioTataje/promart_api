const clientSchema = {
    nombre: {
        notEmpty: true,
        errorMessage: "El nombre no puede estar vacio"
    },
    apellido: {
        notEmpty: true,
        errorMessage: "El apellido no puede estar vacio"
    },
    edad: {
        notEmpty: true,
        errorMessage: "La edad no puede estar vacia"
    },
    fecha_nacimiento: {
        notEmpty: true,
        errorMessage: "La fecha de nacimiento no puede estar vacia"
    }
}

module.exports = { clientSchema }
