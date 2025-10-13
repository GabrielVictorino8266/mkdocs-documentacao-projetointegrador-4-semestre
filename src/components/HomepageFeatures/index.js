import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
      {
        title: 'Gestão de Viagens',
        icon: '🚗',
        description: (
          <>
            Controle completo de viagens com rastreamento em tempo real, 
            registro de horários e monitoramento de rotas.
          </>
        ),
      },
      {
        title: 'Controle de Passageiros',
        icon: '👥',
        description: (
          <>
            Sistema avançado de cadastro e acompanhamento de passageiros, 
            garantindo segurança e organização no transporte.
          </>
        ),
      },
      {
        title: 'Administração Completa',
        icon: '⚙️',
        description: (
          <>
            Dashboard administrativo com relatórios detalhados, 
            gestão de motoristas, veículos e rotas integrada.
          </>
        ),
      },
    ];

function Feature({Svg, title, description, icon}) {
      return (
        <div className={clsx('col col--4', styles.featureCard)}>
          <div className={styles.featureIcon}>
            <span className={styles.icon}>{icon}</span>
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
      );
    }

export default function HomepageFeatures() {
      return (
        <section className={styles.features}>
          <div className="container">
            <div className="text--center margin-bottom--xl">
              <Heading as="h2" className={styles.featuresTitle}>
                Principais Funcionalidades
              </Heading>
              <p className={styles.featuresSubtitle}>
                Descubra como nosso sistema pode transformar sua gestão de transporte
              </p>
            </div>
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      );
    }
