import type {ReactNode} from 'react';
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

export default function Home(): ReactNode {
  return (
    <Layout
      title="Weekly Ops Governance"
      description="Human week shaping over governed state and compiled views"
    >
      <main className="home-shell">
        <section className="hero-panel">
          <p className="eyebrow">Weekly Ops Governance</p>
          <h1>Shape the week without creating another source of truth.</h1>
          <p>
            Use the board for human visibility, routes for recurring moves,
            and the digital index to reach real governed sources or published views.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/docs/00_overview/operator-console">
              Open Operator Console
            </Link>
            <Link className="button button--primary" to="/docs/01_weekly_board/weekly-board-layout-v0">
              Open Weekly Board
            </Link>
            <Link className="button button--secondary" to="/docs/02_governance_map/cadence-horizons">
              Cadence & Horizons
            </Link>
            <Link className="button button--secondary" href="/printables/weekly-board-v1.pdf">
              Weekly Board PDF
            </Link>
          </div>
        </section>

        <section className="home-grid">
          <Card title="Shape the week" to="/docs/02_governance_map/cadence-horizons">
            Use horizons, Mon/Wed/Fri carry, 14-day framing, dayparts, and attention counts as heuristics.
          </Card>
          <Card title="Start today" to="/docs/03_route_cards/core/boot">
            Use BOOT to choose one concrete move from current Office or Weekly views.
          </Card>
          <Card title="Review carry" to="/docs/04_digital_support_index/state-sources/carry-state">
            Navigate to governed carry_state_v2 instead of maintaining a Weekly copy.
          </Card>
          <Card title="Find a route" to="/docs/02_governance_map/tables/routes-master-table">
            Use the canonical Weekly route registry, then follow the Digital Support Index to sources and evidence.
          </Card>
          <Card title="Use a front portfolio view" to="/docs/04_digital_support_index/state-sources/project-frontier">
            The legacy Project Frontier name now resolves to a compiled view over governed fronts.
          </Card>
          <Card title="Use a Weekly View" to="/docs/04_digital_support_index/state-sources/weekly-packet">
            Weekly Packet is now a compiled human view, not a state database.
          </Card>
          <Card title="Navigate digital support" to="/docs/04_digital_support_index/">
            Reach the exact source, view, manual, or evidence target with minimal search.
          </Card>
        </section>
      </main>
    </Layout>
  );
}
