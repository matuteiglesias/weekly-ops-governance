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
        {to: '/docs/weekly_board/weekly-board-layout-v0', label: 'Weekly Board', position: 'left'},
        {to: '/docs/digital_support_index/', label: 'Support Index', position: 'left'},
        {to: '/docs/route_cards/', label: 'Route Cards', position: 'left'},
        {to: '/printables/weekly-board-v1.pdf', label: 'Printables', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Operate',
          items: [
            {label: 'Weekly Board', to: '/docs/weekly_board/weekly-board-layout-v0'},
            {label: 'Monday Bridge PDF', to: '/printables/monday-bridge-v1.pdf'},
            {label: 'Weekly Board PDF', to: '/printables/weekly-board-v1.pdf'},
          ],
        },
        {
          title: 'Navigate',
          items: [
            {label: 'Governance Map', to: '/docs/governance_map/'},
            {label: 'Digital Support Index', to: '/docs/digital_support_index/'},
            {label: 'Route Cards', to: '/docs/route_cards/'},
          ],
        },
      ],
      copyright: `Weekly Ops Governance`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

