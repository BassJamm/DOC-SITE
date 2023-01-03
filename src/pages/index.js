import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{'Welcome'}</h1>
        <p className="hero__subtitle">{"I'm an IT professional, currently working as an Infrastructure Engineer. This website is a portfolio of my work and what I've learned over time. Please check out my GitHub and GitBooks repositories linked at the top. "}</p>
        <p className="hero__subtitle">{"Check out the links up top for my GitHub, Knowledge Base and Blog. "}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to IT Jamm, a place to share knowledge about IT. <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
