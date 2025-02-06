import './NavResponsive.css'
const NavResponsive = () => {
    return (
        <>
            <nav>
        <a href="#">
          <img className="nav-logo" src="./public/logo.png" alt="logo Bakery" />
        </a>
        <button className="menu-btn" popoverTarget="menu">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#212121"
          >
            <path
              d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
            />
          </svg>
        </button>
        <div popover="auto" role="menu" id="menu">
        <button
            className="close-btn"
            popoverTarget="menu"
            popoverTargetAction="hide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#212121"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </button>
          <ul>
          <li><a href="#">Ofertas</a></li>
            <li><a href="#">Todas las Categorías</a></li>
            <li><a href="#">Regalos y Paquetes</a></li>
            <li><a href="#">Nuestras Marcas</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            </ul>
        </div>
      </nav>
        </>
    )
}
export default NavResponsive