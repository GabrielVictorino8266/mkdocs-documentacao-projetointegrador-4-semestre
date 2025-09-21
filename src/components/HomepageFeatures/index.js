import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestão de Viagens',
    description: (
      <>
        Permite que motoristas iniciem e finalizem viagens, além de registrar
        informações importantes sobre o percurso e horários.
      </>
    ),
  },
  {
    title: 'Controle de Passageiros',
    description: (
      <>
        O sistema possibilita o cadastro e acompanhamento de passageiros, 
        garantindo organização e segurança no transporte.
      </>
    ),
  },
  {
    title: 'Administração Completa',
    description: (
      <>
        Administradores têm acesso a relatórios, gerenciamento de motoristas,
        veículos e rotas, tudo integrado ao banco de dados PostgreSQL.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
