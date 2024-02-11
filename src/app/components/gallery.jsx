import React from 'react';


const Galeria = ({ imagenes }) => {
 
  return (
    <div className="grid grid-cols-4 gap-4 justify-center mt-4 mx-20 border-4">
      {imagenes.map((imagen, index) => (
        <div key={index} className="relative h-72 w-60 border-4 m-8 flex flex-col">
          <img src={imagen.imagen} className="w-52 h-52 m-3  object-cover " />
          <div className="absolute mt-48 ml-8 inset-0  items-center justify-center opacity-20 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mx-4">Info</button>
            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2">Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
}; 

export default Galeria;
    