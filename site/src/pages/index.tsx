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
            <Link className="button button--primary" to="/docs/00_overview/operator-console">
              Open Operator Console
            </Link>
            <Link className="button button--secondary" to="/docs/00_overview/support-flow-map">
              View Support Flow
            </Link>
            <Link className="button button--secondary" to="/docs/02_governance_map/route-atlas">
              Open Route Atlas
            </Link>
            <Link className="button button--primary" to="/docs/01_weekly_board/weekly-board-layout-v0">
              Start with Weekly Board
            </Link>
            <Link className="button button--secondary" href="/printables/weekly-board-v1.pdf">
              Open Weekly Board PDF
            </Link>
          </div>
        </section>

        <section className="home-grid">
          <Card title="Start the week" to="/docs/00_overview/operator-console">
            Open the need-first console for WEEK-GOV, Weekly Board, Digital Support Index, and Weekly Packet.
          </Card>
          <Card title="Start today" to="/docs/03_route_cards/core/boot">
            Use BOOT with the Weekly Board and NEXT pointer to choose the first concrete action.
          </Card>
          <Card title="Find a route" to="/docs/04_digital_support_index/navigation/route-atlas">
            Look up route cards, governance contracts, support pages, state, evidence, printables, and stop rules.
          </Card>
          <Card title="Use printables" to="/docs/06_printables/">
            Find the Weekly Board, Monday Bridge, printables manifest, and synced PDF/PNG assets.
          </Card>
          <Card title="Update state" to="/docs/04_digital_support_index/navigation/ops-navigator">
            Jump from a route to source-of-truth state such as Carry State, Weekly Packet, Finance Calendar, or Ledger.
          </Card>
          <Card title="Record evidence" to="/docs/04_digital_support_index/evidence-sources/output-log">
            Leave proof in Output Log, Messages Sent, Published Posts, Deployments, or Reports.
          </Card>
          <Card title="Guide for agents" to="/docs/04_digital_support_index/navigation/agent-navigation-guide">
            Follow safe-edit rules for routes, printables, Docusaurus links, board bloat, and Monday Bridge separation.
          </Card>
        </section>
      </main>
    </Layout>
  );
}