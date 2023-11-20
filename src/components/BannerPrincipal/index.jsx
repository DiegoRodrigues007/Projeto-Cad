import styles from './BannerPrincipal.module.scss';

const BannerPrincipal = () => {

    return(
    <section className={styles.container}>
      <img src='/Assets/img/banner-principal.svg' alt='Logo' />
     </section>
    );
}

export default BannerPrincipal;