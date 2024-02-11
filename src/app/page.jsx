import Gallery from "../app/components/gallery"
import Imagenes from '../app/components/jsons/imagenes.json';

export default function Home() {
  return (
    <>
      <div className="m-14 flex flex-col">
        <Gallery imagenes={Imagenes} /> 
      </div>
    </>
  );
}
    