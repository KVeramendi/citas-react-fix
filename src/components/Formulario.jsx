import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [error, setError] = useState(false);
    const [propietario, setPropietario] = useState("");
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [email, setEmail] = useState("");
    const [numero, setNumero] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setPropietario(paciente.propietario);
            setNombre(paciente.nombre);
            setTipo(paciente.tipo);
            setEmail(paciente.email);
            setNumero(paciente.numero);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const generarId = (id) => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación del Formulario
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true);
            console.log("¡Al menos un campo es vacío!");
            return;
        }
        setError(false)
        // Objeto de Paciente
        const objetoPaciente = {
            id: generarId(),
            propietario,
            nombre,
            tipo,
            email,
            numero,
            fecha,
            sintomas
        }
        setPacientes([...pacientes, objetoPaciente]);
        if (paciente.id) {
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => {
                return pacienteState.id === paciente.id ? objetoPaciente : pacienteState;
            });
            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }
        // Reiniciar el Formulario
        setPropietario("");
        setNombre("");
        setTipo("");
        setEmail("");
        setNumero("");
        setFecha("");
        setSintomas("");
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Mascotas</h2>
            <p className="text-lg mt-5 text-center mb-6">
                Añade mascotas y {""}
                <span className="text-indigo-600 font-bold">
                    Administración
                </span>
            </p>
            <form
                className="bg-white shadow-md rounded-xl p-5 mb-10"
                onSubmit={handleSubmit}
            >
                {error &&
                    <Error>
                        <p>¡Todos los campos son obligatorios!</p>
                    </Error>
                }
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Ingrese el nombre del propietario"
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Ingrese el nombre de la mascota"
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Tipo de mascota
                    </label>
                    <select
                        id="tipo"
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                        value={tipo}
                        onChange={option => setTipo(option.target.value)}
                    >
                        <option value="" disabled>Seleccione</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="hamster">Hámster</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Número de contacto
                    </label>
                    <input
                        id="numero"
                        type="tel"
                        placeholder="Ingrese el ´numero de contacto"
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha de Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario
