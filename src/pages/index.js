import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>
              Sistema integrado para gestão inteligente de transporte de passageiros
            </p>
            <p className={styles.heroDescription}>
              Gerencie viagens, passageiros e motoristas com tecnologia de ponta
            </p>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              to="/docs/intro">
              Começar Agora
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.secondaryButton)}
              to="/docs/Introdução/empresa">
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo ao ${siteConfig.title}`}
      description="Sistema integrado para gestão inteligente de transporte de passageiros. Gerencie viagens, passageiros e motoristas com tecnologia de ponta.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
