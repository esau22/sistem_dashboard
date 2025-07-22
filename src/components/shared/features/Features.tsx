import styles from "./Features.module.css";
import {
  FiCalendar,
  FiCreditCard,
  FiMessageCircle,
  FiShoppingCart,
  FiTag,
  FiTruck,
} from "react-icons/fi";

const features = [
  {
    icon: <FiShoppingCart size={48} />,
    title: "Compra en línea fácil",
    description:
      "Permite a los clientes comprar productos desde su casa con unos pocos clics.",
  },
  {
    icon: <FiMessageCircle size={48} />,
    title: "Atención personalizada vía WhatsApp",
    description: "Soporte rápido para dudas, pedidos y cambios.",
  },
  {
    icon: <FiCreditCard size={48} />,
    title: "Pagos seguros",
    description: "Aceptamos tarjetas, Yape, Plin y pagos contra entrega.",
  },
  {
    icon: <FiTag size={48} />,
    title: "Promociones y descuentos diarios",
    description:
      "Aprovecha nuestras ofertas exclusivas para clientes frecuentes.",
  },
  {
    icon: <FiTruck size={48} />,
    title: "Entrega rápida a domicilio",
    description:
      "Servicio de delivery rápido en tu zona, incluso en menos de 1 hora.",
  },
  {
    icon: <FiCalendar size={48} />,
    title: "Pedidos por suscripción",
    description: "¿Necesitas lo mismo cada semana? Programa tus pedidos.",
  },
];
const Features = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Características de Nuestro Minimarket</h2>
        <p className={styles.description}>
          Descubre cómo nuestro minimarket hace tus compras más rápidas, cómodas
          y económicas.
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              {item.icon}
              <div className={styles.text}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
