import Link from "next/link";
import styles from "../login/Login.module.css";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Card */}
        <div className={styles.card}>
          <div className={styles.header}>
            <h2 className={styles.title}>Registrate</h2>
            <p className={styles.subtitle}>Registrate para iniciar sesion</p>
          </div>

          <form className={styles.form}>
            {/* Username */}
            <div>
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <div className={styles.inputWrapper}>
                <FaUser className={styles.icon} />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  required
                  className={styles.input}
                />
              </div>
            </div>
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
            {/* ConfirmPassword */}
            <div>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.inputWrapper}>
                <MdLock className={styles.icon} />
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
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
            </div>

            {/* Sign In Button */}
            <button type="submit" className={styles.button}>
              Registrarse
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

export default RegisterPage;
