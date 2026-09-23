import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Weekly Ops Governance',
  tagline: 'Human week shaping over governed state and compiled views',
  favicon: 'img/favicon.ico',

  url: 'https://weekly-ops-governance.vercel.app',
  baseUrl: '/',

  organizationName: 'matuteiglesias',
  projectName: 'weekly-ops-governance',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          numberPrefixParser: false,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Weekly Ops',
      items: [
        {to: '/docs/00_overview/operator-console', label: 'Operator Console', position: 'left'},
        {to: '/docs/01_weekly_board/weekly-board-layout-v0', label: 'Weekly Board', position: 'left'},
        {to: '/docs/02_governance_map/cadence-horizons', label: 'Cadence', position: 'left'},
        {to: '/docs/02_governance_map/', label: 'Governance Map', position: 'left'},
        {to: '/docs/04_digital_support_index/', label: 'Support Index', position: 'left'},
        {href: '/printables/weekly-board-v1.pdf', label: 'Printables', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Operate',
          items: [
            {label: 'Operator Console', to: '/docs/00_overview/operator-console'},
            {label: 'Weekly Board', to: '/docs/01_weekly_board/weekly-board-layout-v0'},
            {label: 'Cadence & Horizons', to: '/docs/02_governance_map/cadence-horizons'},
            {label: 'Monday Bridge PDF', href: '/printables/monday-bridge-v1.pdf'},
          ],
        },
        {
          title: 'Navigate',
          items: [
            {label: 'Governance Map', to: '/docs/02_governance_map/'},
            {label: 'Routes Master Table', to: '/docs/02_governance_map/tables/routes-master-table'},
            {label: 'Digital Support Index', to: '/docs/04_digital_support_index/'},
            {label: 'Route Cards', to: '/docs/03_route_cards/'},
          ],
        },
      ],
      copyright: `Weekly Ops Governance`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
