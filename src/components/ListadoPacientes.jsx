import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarCliente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 mx-5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado de Mascotas
                    </h2>
                    <p className="text-xl mt-5 mb-6 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">
                            Mascotas y Citas
                        </span>
                    </p>
                    {pacientes.map(paciente => {
                        return (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarCliente={eliminarCliente}
                            />
                        )
                    })}
                </>
            ) :
                (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            No hay pacientes
                        </h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando mascotas {""}
                            <span className="text-indigo-600 font-bold">
                                y aparecerán aquí
                            </span>
                        </p>
                    </>
                )}
        </div>
    )
}

export default ListadoPacientes