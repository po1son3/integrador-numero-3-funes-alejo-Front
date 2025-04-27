import Card from "../components/Card"

const Inicio = () => {
  return (
  <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h1>Remera Type Logo Paradise</h1>
        <p>Se encontraron 5 productos</p>
      </header>
    </section>
    <div className="cards-container" id="container-productos">
    <Card />  
    </div>
  </main>

  )
}

export default Inicio