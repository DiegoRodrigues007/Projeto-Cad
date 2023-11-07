import styles from "./Menu.module.scss";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from"public/Assets/img/logo.png";
function Menu() {
  const rotas = [
    { title: "Serviços", href: "./Servicos" },
    { title: "Sobre Nós", href: "./Sobre" },
    { title: "Planos", href: "./planos" },
    { title: "Contato", href: "./contato" },
  ];

  const [menu, setMenu] = useState(false);

  const aoClicar = (e) => {
    setMenu(true);
  };

  const close = (e) => {
    setMenu(false);
  };

  return (
    <header className={styles.container}>
      <nav className={styles.menu}>
        <div className={styles.logo}>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div onClick={aoClicar} className={styles.menuButton}>
          <AiOutlineMenu />
        </div>
        <ul className={menu ? styles.menuOpen : ""}>
          <span onClick={close} className={styles.close}>
            <MdClose />
          </span>

          {rotas.map((rota) => (
            <li key={rota.title}>
              <a href={rota.href}>{rota.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Menu;