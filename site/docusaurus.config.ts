import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Weekly Ops Governance',
  tagline: 'Paper-first weekly operations system with digital support',
  favicon: 'img/favicon.ico',

  url: 'http://localhost',
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
        {to: '/docs/00_overview/support-flow-map', label: 'Support Flow', position: 'left'},
        {to: '/docs/02_governance_map/route-atlas', label: 'Route Atlas', position: 'left'},
        {to: '/docs/01_weekly_board/weekly-board-layout-v0', label: 'Weekly Board', position: 'left'},
        {to: '/docs/04_digital_support_index/', label: 'Support Index', position: 'left'},
        {to: '/docs/03_route_cards/', label: 'Route Cards', position: 'left'},
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
            {label: 'Support Flow Map', to: '/docs/00_overview/support-flow-map'},
            {label: 'Weekly Board', to: '/docs/01_weekly_board/weekly-board-layout-v0'},
            {label: 'Monday Bridge PDF', href: '/printables/monday-bridge-v1.pdf'},
            {label: 'Weekly Board PDF', href: '/printables/weekly-board-v1.pdf'},
          ],
        },
        {
          title: 'Navigate',
          items: [
            {label: 'Route Atlas', to: '/docs/02_governance_map/route-atlas'},
            {label: 'Agent Navigation Guide', to: '/docs/00_overview/agent-navigation-guide'},
            {label: 'Governance Map', to: '/docs/02_governance_map/'},
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

