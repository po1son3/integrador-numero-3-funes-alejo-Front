import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'
const Contacto = () => {
  useTitulo('Contacto')
  return (
    <main className="main-form">
      <fieldset className="main-form__field">
        <legend className="main-form__legend">Información Personal</legend>
        <p>Recibirás más información sobre nuestros productos al completar el formulario:</p>

        <form className="main-form__form" action="#">
          <div className="main-form__name">
            <label htmlFor="Nombre">Nombre</label>
            <input type="text" id="Nombre" placeholder="nombre y apellido" required />
          </div>

          <div className="main-form__mail">
            <label htmlFor="email">Mail</label>
            <input type="email" id="email" placeholder="email" required />
          </div>

          <div className="main-form__phone">
            <label htmlFor="Numero">Número</label>
            <input type="number" id="Numero" placeholder="número de teléfono" required />
          </div>

          <div className="main-form__description">
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              placeholder="Añade una descripción (opcional)"
            ></textarea>
          </div>

          <div className="main-form__send">
            <label htmlFor="send"></label>
            <button id="send" className="main-form__send__button" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </fieldset>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2368.8948135830583!2d-68.84098890026857!3d-32.89491149207318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1739828786420!5m2!1ses!2sar"
        width="500"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </main>
  );
};
export default Contacto