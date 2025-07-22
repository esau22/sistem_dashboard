import Link from "next/link";
import styles from "../login/Login.module.css";
import { MdEmail } from "react-icons/md";

const ForgetPassword = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Card */}
        <div className={styles.card}>
          <div className={styles.header}>
            <h2 className={styles.title}>Olvide mi contraseña</h2>
            <p className={styles.subtitle}>
              Recupere su contraseña para acceder a su cuenta.
            </p>
          </div>

          <form className={styles.form}>
            {/* Email */}
            <div>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <div className={styles.inputWrapper}>
                <MdEmail className={styles.icon} />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className={styles.input}
                />
              </div>
            </div>

            {/* Sign In Button */}
            <button type="submit" className={styles.button}>
              Enviar codigo confirmacion
            </button>

            {/* Divider */}
            <div className={styles.dividerWrapper}>
              <div className={styles.divider}></div>
              <span className={styles.dividerText}>O continuar con</span>
              <div className={styles.divider}></div>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className={styles.signUpPrompt}>
            Ya tengo una cuenta?{" "}
            <Link href={"/auth/login"} className={styles.signUpLink}>
              Iniciar sesion
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
