const Paciente = ({ paciente, setPaciente, eliminarCliente }) => {
    const { id, nombre, propietario, tipo, email, numero, fecha, sintomas } = paciente;
    const handleEliminar = () => {
        const respuesta = confirm("¿Desea eliminar el paciente?");
        if (respuesta) {
            eliminarCliente(id);
        }
    }
    const obtenerTipo = (tipo) => {
        if (tipo === "perro") {
            return "Perro 🐶"
        }
        if (tipo === "gato") {
            return "Gato 🐱"
        }
        if (tipo === "hamster") {
            return "Hámster 🐹"
        }
        return tipo.toUpperCase();
    }

    return (
        <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">
                    {propietario}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">
                    {nombre}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Tipo de Mascota: {""}
                <span className="font-normal normal-case">
                    {obtenerTipo(tipo)}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Número de contacto: {""}
                <span className="font-normal normal-case">
                    {numero}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {""}
                <span className="font-normal normal-case">
                    {fecha}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>
            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700  text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-8 bg-red-600 hover:bg-red-700  text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente