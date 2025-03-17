
const Inicio = () => {
  return (
    <header class="main-header">
    <input type="checkbox" id="menu">
    
    
    <div class="search-bar">
      <div class="search-bar__logo-container">
        <span class="texto-largo">Luxury Paradise</span>
        <span class="texto-corto">LP</span>
      </div>
      <form action="#" class="search-bar__form-container">
        <label for="busqueda" class="search-bar__form-label">Buscar Productos</label>
        <input type="search" id="busqueda" class="search-bar__form-search">
        <button type="submit" class="search-bar__form-submit">Buscar</button>
      </form>
      <div class="search-bar__carrito-container">
        <span class="iconamoon--shopping-bag"></span>
      </div>
      <div class="menu-toogle">
        <label for="menu" class="menu-toogle__label">
          <span class="menu-toogle__top-bread"></span>
          <span class="menu-toogle__meat"></span>
          <span class="menu-toogle__bottom-bread"></span>
        </label>
      </div> 
    </div> 
    
  
    <nav class="nav-bar">
      <ul class="nav-bar__nav-list">
  
        <li class="nav-bar__nav-item">
          <a href="/index.html" class="nav-bar__nav-link">Inicio</a>
        </li>
        <li class="nav-bar__nav-item">
          <a href="" class="nav-bar__nav-link">Alta</a>
            </li>
            <li class="nav-bar__nav-item">
              <a href="/src/pages/nosotros/nosotros.html" class="nav-bar__nav-link">Nosotros</a>
            </li>
            <li class="nav-bar__nav-item">
              <a href="src/pages/contacto/contacto.html" class="nav-bar__nav-link">Contacto</a>
            </li>
          </ul>
        </nav> 
      </header> 

  <main>
    <section class="section-cards">
      <header class="section-cards__header">
        <h1>Remera Type Logo Paradise</h1>
        <p>Se encontraron 5 productos</p>
      </header>
    </section>

    <div class="cards-container" id="container-productos"></div>

  </main>
  )
}

export default Inicio