import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="landing-section-title">Modern. Scalable design support</h1>
        <p className="landing-section-description" style={{ width: '56ch' }}>
          We have created Eccentric Touch to give a creative experience 
          while creating frontend applications, UIs and components.
          It has a set of utility classes and designed components to solve
          all of your design related issues. Also, the project is being open-sourced 🚀
        </p>
        <Link to="/docs/intro">
          <button className="primary-btn bg-color-white neutral-gray-900">Get started with docs 🔥</button>
        </Link>
        <a href="https://www.github.com/DesignSystemsOSS/eccentrictouch" target="_blank">
          <button className="outline-btn border-color-white text-color-white m-left-4">Contribute on GitHub 🌱</button>
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Docs - ${siteConfig.title}`}
      description="Documentation for Eccentric Touch">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

{/* <h1 className="hero__title">{siteConfig.title}</h1>
  <p className="hero__subtitle">{siteConfig.tagline}</p>
  <div className={styles.buttons}>
    <Link
      className="button button--secondary button--lg"
      to="/docs/intro">
      Eccentric Touch Tutorial - Get Started
    </Link>
  </div> */}