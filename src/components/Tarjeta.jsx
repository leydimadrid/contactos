export const Tarjeta = ({imagen, nombre, correo, celular}) => {
  return (
    <div className="bg-white py-8 px-10 text-center rounded-lg shadow-lg m-auto w-96 mt-16">
      <img
        className="w-36 -mt-16 shadow-xl rounded-full mx-auto mb-4 border-gray-200 border-4"
        src={imagen}
      />
      <h1 className="mb-2 text-2xl font-bold">🙎{nombre}</h1>
      <h2 className="mb-2">📧{correo}</h2>
      <h2 className="text-md">📱{celular}</h2>
    </div>
  )
}
