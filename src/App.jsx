import { useState, useEffect } from "react";
import { Tarjeta } from "./components/Tarjeta";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    contactos();
  }, []);

  const contactos = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    setUsuarios(data.results);
    console.log(data.results);
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <input
        type="text"
        className="bg-white border-2 border-gray-400 rounded-lg py-2 px-4 mb-4 "
        placeholder="Buscar contacto"
        onChange={(e) => setBuscar(e.target.value)}
      />

      {usuarios
        .filter((val) => {
          if (buscar === "") {
            return val;
          } else if (val.name.first.toLowerCase().includes(buscar.toLowerCase()) ||
          val.email.toLowerCase().includes(buscar.toLowerCase()) ||
          val.phone.includes(buscar)
           
          ) {
            return val;
          }
        })
        .map((usuario) => {
          return (
          <Tarjeta 
          key={usuario.email}
          imagen={usuario.picture.large}
          nombre={usuario.name.first}
          correo={usuario.email}
          celular= {usuario.phone}
          />
          );
        })}

    </div>
  );
}

export default App;
