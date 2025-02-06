import { useState } from 'react'
import './App.css'
import Nav from './NavBar'
import Banner from './Banner'
import Warning from './Warning'
import Card from './Card'
import IconCard from './IconCard'
import Button from './Button'
import Footer from './Footer'
import { CartProvider } from './context/CartContext'
import Cart from './Cart/cart'
import Slider from './Slider'

function App() {

  return (
    <>
    <CartProvider>
      <Warning/>
      <Nav/>
      <Banner/>
      <section className='section-title'>
        <h2>Últimas <span>Ofertas</span></h2>
        <Cart></Cart>
        <div className='card-container'>
          <Card img='public/pizza.jpg' nombre='Pepperoni Pizza' precio1='19.99' precio2='24.99'></Card>
          <Card img='public/pancakes.jpg' nombre='Baked Pancakes' precio1='35.99' precio2='44.99'></Card>
          <Card img='public/avocado.jpg' nombre='Avocado' precio1='17.99' precio2='20.99'></Card>
          <Card img='public/orange.jpg' nombre='Bunch of Orange' precio1='24.99' precio2='29.99'></Card>
        </div>
      </section>
      <section className='section-title'>
        <h2>Porqué <span>elegir nuestra tienda</span></h2>
        <div className='icon-container'>
          <IconCard img='public/telescope.png' nombre='Descubrís nuevos sabores y personas' texto='Descubrí nuevos sabores, snacks y recetas de comidas fabulosas. Enterate de dónde viene tu comida y quiénes la producen.'></IconCard>
          <IconCard className='dobleLinea' img='public/wholesale.png' nombre='Comprá al por mayor' texto='Ofrecemos distintos formatos y "cajas sorpresa" para que puedas ahorrar dinero en comidas deliciosas comprando a precios de mayorista.'></IconCard>
          <IconCard img='public/support.png' nombre='Apoyás a tu comunidad' texto='Al comprar al por mayor a productores locales, estás ayudando a hacer crecer nuestro ecosistema alimentario local, creando empleos y apoyando a familias y empresarios en su comunidad.'></IconCard>
          <IconCard img='public/winner.png' nombre='Disfrutás de la mejor calidad' texto='Ofrecemos exclusivamente alimentos de excelente sabor, totalmente naturales y orgánicos que son mejores para tu salud y la de tu familia.'></IconCard>
          <IconCard img='public/heart.png' nombre='Pertencés a nuestro club' texto='Como miembro de nuestro club, podés acceder a las mejores ofertas y descuentos.'></IconCard>
        </div>
       </section>
       <section className='section-title food'>
        <div>
          <h2>Quiénes preducen <span>tu comida</span></h2>
          <p>Nuestra misión es ayudar a hacer crecer el ecosistema alimentario local. ¿Por qué?</p>
          <ul>
            <li><img className='check' src="./public/check.png" alt="check" />Porque nos conecta con la tierra en la que vivimos y con las personas que viven en ella</li>
            <li><img className='check' src="./public/check.png" alt="check" />Porque tiene más sentido cocinar y comer algo hecho por una persona cercana a nosotros</li>
            <li><img className='check' src="./public/check.png" alt="check" />Porque la buena comida local hace de nuestro lugar en el mundo un mejor lugar para vivir</li>
            <li><img className='check' src="./public/check.png" alt="check" />Porque apoyamos el empleo local</li>
            <li><img className='check' src="./public/check.png" alt="check" />Porque es más saludable para el medio ambiente</li>
          </ul>
          <Button nombre='Descubrí Productores Locales'></Button>
        </div>
          <img src="./public/uvas.jpg" alt="uvas" />
       </section>
       <section className='section-title partner'>
          <h2>Nuestro socio y amigo, City Bakery</h2>
          <img src="./public/cityBakeryLogo.png" alt="City Bakery logo" />
          <Button nombre='Conocé más sobre City Bakery'></Button>
       </section>
       <section className='section-title food reverse'>
        <div>
          <h2><span>Sorprendé </span>a domicilio</h2>
          <p>¿Un amigo o familiar trabajando desde casa? Nuestra caja "Trabajo remoto" de snacks y bebidas es la manera perfecta de sorprendelo, enviado directamente a su puerta.</p>
          <p>Si querés comprar para un grupo grande de personas, contactanos y organizamos paquetes y mensajes personalizados.</p>
          <Button nombre='Comprar Ahora'></Button>
        </div>
          <img src="./public/box.jpg" alt="wooden box" />
       </section>
       <section>
       </section>
       <section className='section-title'>
        <h2><span>@PremiumBakeryQuality </span>en Instagram</h2>
        <Slider></Slider>
       </section>
       <section className='section-title social'>
          <h2>Compartí nuestras redes</h2>
          <div>
            <a href="#"><img src="./public/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="./public/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="./public/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="./public/whatsapp.png" alt="Whatsapp" /></a>
            <a href="#"><img src="./public/messenger.png" alt="Messenger" /></a>
            <a href="#"><img src="./public/telegram.png" alt="Telegram" /></a>
          </div>
       </section>
       <Footer></Footer>
       </CartProvider>
    </>
  )
}

export default App
