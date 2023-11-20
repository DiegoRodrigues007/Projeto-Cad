import styles from "./Menu.module.scss";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";


function Menu() {
  const rotas = [
    { title: "Nossa História", href: "./Servicos" },
    { title: "Quem Somos", href: "./Sobre" },
    { title: "Nossos Projetos", href: "./planos" },
    { title: "Como ajudar", href: "./contato" },
    { title: "Parceiros", href: "./contato" },
    { title: "Contato", href: "./contato" },
    { title: "Doe agora", href: "./contato" },
    
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
            <img src="/Assets/img/logo.png" alt="Logo" />
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