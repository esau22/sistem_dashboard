import Link from "next/link";
import styles from "./Login.module.css";
import { MdEmail, MdLock } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Card */}
        <div className={styles.card}>
          <div className={styles.header}>
            <h2 className={styles.title}>Bienvenido</h2>
            <p className={styles.subtitle}>Inicie sesion para continuar</p>
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

            {/* Password */}
            <div>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.inputWrapper}>
                <MdLock className={styles.icon} />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className={styles.input}
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className={styles.options}>
              <div className={styles.rememberMe}>
                <input
                  type="checkbox"
                  id="remember"
                  className={styles.checkbox}
                />
                <label htmlFor="remember" className={styles.rememberLabel}>
                  Recuérdame
                </label>
              </div>
              <Link href={"/auth/forget-password"} className={styles.forgot}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Sign In Button */}
            <button type="submit" className={styles.button}>
              Iniciar sesion
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
            No tengo una cuenta?{" "}
            <Link href={"/auth/register"} className={styles.signUpLink}>
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
