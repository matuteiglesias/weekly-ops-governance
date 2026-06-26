import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}




import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Card(props: {title: string; to: string; children: React.ReactNode}) {
  return (
    <Link className="home-card" to={props.to}>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </Link>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Weekly Ops Governance"
      description="Paper-first weekly operations governance system"
    >
      <main className="home-shell">
        <section className="hero-panel">
          <p className="eyebrow">Weekly Ops Governance</p>
          <h1>Paper-first operation, digital support.</h1>
          <p>
            Use the weekly board as the human surface. Use route cards for bounded action.
            Use the digital support index for links, state, and evidence.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/docs/weekly_board/weekly-board-layout-v0">
              Start with Weekly Board
            </Link>
            <Link className="button button--secondary" to="/printables/weekly-board-v1.pdf">
              Open Weekly Board PDF
            </Link>
          </div>
        </section>

        <section className="home-grid">
          <Card title="Weekly Board" to="/docs/weekly_board/weekly-board-layout-v0">
            The paper surface for week operation, checks, outputs, blockers, and contracts alive.
          </Card>
          <Card title="Digital Support Index" to="/docs/digital_support_index/">
            Functional navigation from route IDs to cards, state sources, links, and evidence.
          </Card>
          <Card title="Route Cards" to="/docs/route_cards/">
            Short operational contracts for BOOT, MAINT, FOCUS, FIN-W, GYM-GOV, and more.
          </Card>
          <Card title="Governance Map" to="/docs/governance_map/">
            Architecture of routes, contracts, state, evidence, and paper/digital boundaries.
          </Card>
        </section>
      </main>
    </Layout>
  );
}