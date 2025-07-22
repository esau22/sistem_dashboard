import Image from "next/image";
import styles from "./Textimonial.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const clients = [
  {
    name: "Hugo Pakula",
    img: "/customers/customer_1.png",
    testimony:
      "Siempre encuentro lo que necesito, y si algo falta, me lo traen al día siguiente. La atención es excelente y los precios muy buenos.",
  },
  {
    name: "Ajmaine Bhuiyan",
    img: "/customers/customer_2.png",
    testimony:
      "Me encanta comprar aquí porque todo está limpio, ordenado y siempre hay productos frescos. Además, me conocen por mi nombre, eso no tiene precio.",
  },
  {
    name: "Josh Gardner",
    img: "/customers/customer_1.png",
    testimony:
      "Gracias al minimarket puedo hacer mis compras rápido antes de ir al trabajo. Ahorro tiempo y siempre salgo con una sonrisa.",
  },
];

const Testimonial = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Clientes que confían en nosotros</h2>
        <p className={styles.subtitle}>
          Trabajamos para que encuentres todo lo que necesitas en un solo lugar,
          rápido y confiable.
        </p>
      </div>
      <div className={styles.grid}>
        {clients.map((client) => (
          <div className={styles.card} key={client.name}>
            <Image
              src={client.img}
              alt={client.name}
              className={styles.avatar}
              width={64}
              height={64}
            />
            <div className={styles.cardContent}>
              <h4 className={styles.name}>{client.name}</h4>
              <p className={styles.testimony}>{client.testimony}</p>
            </div>
            <div className={styles.quoteIcon}>
              <FaQuoteLeft />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
