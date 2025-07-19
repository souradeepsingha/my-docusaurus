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
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        backgroundColor: '#4B45A1',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <Heading
          as="h1"
          className="hero__title"
          style={{ fontSize: '2.8rem', fontWeight: 'bold' }}
        >
          {siteConfig.title}
        </Heading>
        <p
          className="hero__subtitle"
          style={{
            fontSize: '1.25rem',
            marginTop: '1rem',
            marginBottom: '2rem',
          }}
        >
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{
              backgroundColor: '#f5f5f5',
              color: '#333',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
            to="/docs/intro"
          >
            Curious to hear more? 👀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
