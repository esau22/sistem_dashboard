import styles from "./Contact.module.css";

const contactInfoData = [
  {
    title: "Technical support",
    email: "support@example.com",
    phone: "+1 234-567-89",
  },
  {
    title: "Sales questions",
    email: "sales@example.com",
    phone: "+1 234-567-89",
  },
  {
    title: "Press",
    email: "press@example.com",
    phone: "+1 234-567-89",
  },
  {
    title: "Bug report",
    email: "bugs@example.com",
    phone: "+1 234-567-89",
  },
];
const Contact = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.headingWrapper}>
          <div className={styles.headingContainer}>
            <h2 className={styles.title}>Contact us</h2>
          </div>
        </div>

        <div className={styles.flexWrap}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea id="message" className={styles.textarea}></textarea>
            </div>

            <button type="button" className={styles.button}>
              Send
            </button>
          </form>

          <div className={styles.contactInfo}>
            {contactInfoData.map((item, idx) => (
              <div key={idx} className={styles.contactBlock}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className={styles.icon}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.infoText}>
                  <p className={styles.contactTitle}>{item.title}</p>
                  <p className={styles.contactDetail}>{item.email}</p>
                  <p className={styles.contactDetail}>{item.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
