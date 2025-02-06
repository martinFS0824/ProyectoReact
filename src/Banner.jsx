import './banner.css'
import Button from './Button';
const Banner = () => {
  return (
    <>
      <div className="container-banner">
        <div>
        <h2>Encontrá Productos Artesanales</h2>
        <h3>Descubrí nuestras marcas y sus historias</h3>
        <Button nombre="Buscar marcas" />
        </div>
      </div>
    </>
  );
};

export default Banner;
