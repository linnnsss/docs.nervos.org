import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7a3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-1',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-1', '83f'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-10',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-10', '00e'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-2',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-2', '0b6'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-3',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-3', '977'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-4',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-4', '3b6'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-5',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-5', '2ae'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-6',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-6', '32a'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-7',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-7', '018'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-8',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-8', '97b'),
    exact: true
  },
  {
    path: '/blog/intro-to-ckb-script-programming-9',
    component: ComponentCreator('/blog/intro-to-ckb-script-programming-9', '988'),
    exact: true
  },
  {
    path: '/blog/page/10',
    component: ComponentCreator('/blog/page/10', '7f3'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '53f'),
    exact: true
  },
  {
    path: '/blog/page/3',
    component: ComponentCreator('/blog/page/3', 'c57'),
    exact: true
  },
  {
    path: '/blog/page/4',
    component: ComponentCreator('/blog/page/4', '466'),
    exact: true
  },
  {
    path: '/blog/page/5',
    component: ComponentCreator('/blog/page/5', '36b'),
    exact: true
  },
  {
    path: '/blog/page/6',
    component: ComponentCreator('/blog/page/6', '18c'),
    exact: true
  },
  {
    path: '/blog/page/7',
    component: ComponentCreator('/blog/page/7', 'c90'),
    exact: true
  },
  {
    path: '/blog/page/8',
    component: ComponentCreator('/blog/page/8', '756'),
    exact: true
  },
  {
    path: '/blog/page/9',
    component: ComponentCreator('/blog/page/9', 'f02'),
    exact: true
  },
  {
    path: '/homeContents',
    component: ComponentCreator('/homeContents', '7a1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'da0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2bd'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a3e'),
            routes: [
              {
                path: '/docs/common-scripts/omnilock',
                component: ComponentCreator('/docs/common-scripts/omnilock', '3cf'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/common-scripts/spore-dob-0',
                component: ComponentCreator('/docs/common-scripts/spore-dob-0', 'aa7'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/common-scripts/spore-protocol',
                component: ComponentCreator('/docs/common-scripts/spore-protocol', '6b7'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/common-scripts/xudt',
                component: ComponentCreator('/docs/common-scripts/xudt', 'a4e'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/dapp/create-dob',
                component: ComponentCreator('/docs/dapp/create-dob', '292'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/dapp/create-token',
                component: ComponentCreator('/docs/dapp/create-token', 'd8a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/dapp/simple-lock',
                component: ComponentCreator('/docs/dapp/simple-lock', '749'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/dapp/store-data-on-cell',
                component: ComponentCreator('/docs/dapp/store-data-on-cell', '974'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/dapp/transfer-ckb',
                component: ComponentCreator('/docs/dapp/transfer-ckb', '23b'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/ecosystem/organizations',
                component: ComponentCreator('/docs/ecosystem/organizations', '36d'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/ecosystem/projects',
                component: ComponentCreator('/docs/ecosystem/projects', 'd7d'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/getting-started/blockchain-networks',
                component: ComponentCreator('/docs/getting-started/blockchain-networks', '164'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/getting-started/ckb-vs-btc',
                component: ComponentCreator('/docs/getting-started/ckb-vs-btc', '117'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/getting-started/how-ckb-works',
                component: ComponentCreator('/docs/getting-started/how-ckb-works', '463'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/getting-started/installation-guide',
                component: ComponentCreator('/docs/getting-started/installation-guide', '1aa'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/getting-started/quick-start',
                component: ComponentCreator('/docs/getting-started/quick-start', '43d'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/history-and-hard-forks/ckb-hard-fork-history',
                component: ComponentCreator('/docs/history-and-hard-forks/ckb-hard-fork-history', '305'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/history-and-hard-forks/history-vm-version',
                component: ComponentCreator('/docs/history-and-hard-forks/history-vm-version', 'f1d'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/history-and-hard-forks/intro-to-hard-fork',
                component: ComponentCreator('/docs/history-and-hard-forks/intro-to-hard-fork', '436'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/history-and-hard-forks/rethinking-forks',
                component: ComponentCreator('/docs/history-and-hard-forks/rethinking-forks', '1bd'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/how-tos/how-to-calculate-code-hash',
                component: ComponentCreator('/docs/how-tos/how-to-calculate-code-hash', '1cf'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/how-tos/how-to-calculate-script-hash',
                component: ComponentCreator('/docs/how-tos/how-to-calculate-script-hash', '5af'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/how-tos/how-to-calculate-tx-hash',
                component: ComponentCreator('/docs/how-tos/how-to-calculate-tx-hash', '1d9'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/how-tos/how-to-query-tx-state',
                component: ComponentCreator('/docs/how-tos/how-to-query-tx-state', 'db8'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/how-tos/how-to-sign-a-tx',
                component: ComponentCreator('/docs/how-tos/how-to-sign-a-tx', '5df'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/integrate-wallets/ccc-wallet',
                component: ComponentCreator('/docs/integrate-wallets/ccc-wallet', 'e5a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/integrate-wallets/intro-to-wallets',
                component: ComponentCreator('/docs/integrate-wallets/intro-to-wallets', '110'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/integrate-wallets/joyid',
                component: ComponentCreator('/docs/integrate-wallets/joyid', 'b64'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/algorithm-difficulty',
                component: ComponentCreator('/docs/mining/algorithm-difficulty', '8c4'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/cost-and-profit',
                component: ComponentCreator('/docs/mining/cost-and-profit', '0f2'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/guide',
                component: ComponentCreator('/docs/mining/guide', 'a7f'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/halving',
                component: ComponentCreator('/docs/mining/halving', '57b'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/hardware',
                component: ComponentCreator('/docs/mining/hardware', 'f3e'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/info-stats',
                component: ComponentCreator('/docs/mining/info-stats', '61c'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/rewards',
                component: ComponentCreator('/docs/mining/rewards', '5e7'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/mining/risks',
                component: ComponentCreator('/docs/mining/risks', '816'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/node/rpcs',
                component: ComponentCreator('/docs/node/rpcs', 'a16'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/node/run-devnet-node',
                component: ComponentCreator('/docs/node/run-devnet-node', '866'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/node/run-mainnet-node',
                component: ComponentCreator('/docs/node/run-mainnet-node', '906'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/node/run-public-rpc-node',
                component: ComponentCreator('/docs/node/run-public-rpc-node', '596'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/node/run-testnet-node',
                component: ComponentCreator('/docs/node/run-testnet-node', '3cb'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/common-script-error-code',
                component: ComponentCreator('/docs/script/common-script-error-code', '47c'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/debug-script',
                component: ComponentCreator('/docs/script/debug-script', '83a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/intro-to-script',
                component: ComponentCreator('/docs/script/intro-to-script', '449'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/js-script',
                component: ComponentCreator('/docs/script/js-script', 'b79'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/minimal-script',
                component: ComponentCreator('/docs/script/minimal-script', 'b7d'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/program-language-for-script',
                component: ComponentCreator('/docs/script/program-language-for-script', 'f0a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/spawn-cross-script-calling',
                component: ComponentCreator('/docs/script/spawn-cross-script-calling', '204'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/spawn-script',
                component: ComponentCreator('/docs/script/spawn-script', '023'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/sudt-script',
                component: ComponentCreator('/docs/script/sudt-script', '327'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/syscalls-for-script',
                component: ComponentCreator('/docs/script/syscalls-for-script', '386'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/type-id',
                component: ComponentCreator('/docs/script/type-id', 'eaa'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/vm-cycle-limits',
                component: ComponentCreator('/docs/script/vm-cycle-limits', '75d'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/script/vm-selection',
                component: ComponentCreator('/docs/script/vm-selection', '6a0'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/ccc',
                component: ComponentCreator('/docs/sdk-and-devtool/ccc', 'cad'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/ckb-cli',
                component: ComponentCreator('/docs/sdk-and-devtool/ckb-cli', 'f6a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/devtool',
                component: ComponentCreator('/docs/sdk-and-devtool/devtool', 'f36'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/go',
                component: ComponentCreator('/docs/sdk-and-devtool/go', '854'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/java',
                component: ComponentCreator('/docs/sdk-and-devtool/java', 'ce5'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/lumos',
                component: ComponentCreator('/docs/sdk-and-devtool/lumos', 'eee'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/offckb',
                component: ComponentCreator('/docs/sdk-and-devtool/offckb', 'cbd'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/sdk-and-devtool/rust',
                component: ComponentCreator('/docs/sdk-and-devtool/rust', '8a0'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/serialization/encoding-specs',
                component: ComponentCreator('/docs/serialization/encoding-specs', '8e0'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/serialization/example-role-playing-game',
                component: ComponentCreator('/docs/serialization/example-role-playing-game', '970'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/serialization/features-molecule',
                component: ComponentCreator('/docs/serialization/features-molecule', 'e2a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/serialization/schema-language',
                component: ComponentCreator('/docs/serialization/schema-language', '882'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/serialization/serialization-molecule-in-ckb',
                component: ComponentCreator('/docs/serialization/serialization-molecule-in-ckb', '70e'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/serialization/tools-molecule',
                component: ComponentCreator('/docs/serialization/tools-molecule', '719'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/serialization/use-in-ckb-scripts',
                component: ComponentCreator('/docs/serialization/use-in-ckb-scripts', '138'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/block',
                component: ComponentCreator('/docs/tech-explanation/block', '531'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/capacity',
                component: ComponentCreator('/docs/tech-explanation/capacity', 'd4e'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/cell',
                component: ComponentCreator('/docs/tech-explanation/cell', 'c86'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/cell-deps',
                component: ComponentCreator('/docs/tech-explanation/cell-deps', '23a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/cell-model',
                component: ComponentCreator('/docs/tech-explanation/cell-model', '816'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/cellinput',
                component: ComponentCreator('/docs/tech-explanation/cellinput', '54d'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/ckb-address',
                component: ComponentCreator('/docs/tech-explanation/ckb-address', '9a1'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/ckb-vm',
                component: ComponentCreator('/docs/tech-explanation/ckb-vm', '371'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/ckbhash',
                component: ComponentCreator('/docs/tech-explanation/ckbhash', '519'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/code-hash',
                component: ComponentCreator('/docs/tech-explanation/code-hash', 'fad'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/consensus',
                component: ComponentCreator('/docs/tech-explanation/consensus', 'be0'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/dep-group',
                component: ComponentCreator('/docs/tech-explanation/dep-group', '6cf'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/dep-type',
                component: ComponentCreator('/docs/tech-explanation/dep-type', '4cf'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/economics',
                component: ComponentCreator('/docs/tech-explanation/economics', '4eb'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/glossary',
                component: ComponentCreator('/docs/tech-explanation/glossary', 'f4a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/hash-type',
                component: ComponentCreator('/docs/tech-explanation/hash-type', '3d0'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/header',
                component: ComponentCreator('/docs/tech-explanation/header', '8f6'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/header-dep',
                component: ComponentCreator('/docs/tech-explanation/header-dep', 'ae8'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/lock-script',
                component: ComponentCreator('/docs/tech-explanation/lock-script', '784'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/lock-type-diff',
                component: ComponentCreator('/docs/tech-explanation/lock-type-diff', '22f'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/nervos-blockchain',
                component: ComponentCreator('/docs/tech-explanation/nervos-blockchain', '9a1'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/out-point',
                component: ComponentCreator('/docs/tech-explanation/out-point', 'c99'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/outpoint',
                component: ComponentCreator('/docs/tech-explanation/outpoint', 'c3b'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/outputs',
                component: ComponentCreator('/docs/tech-explanation/outputs', 'bdf'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/outputs-data',
                component: ComponentCreator('/docs/tech-explanation/outputs-data', 'd3e'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/previous-output',
                component: ComponentCreator('/docs/tech-explanation/previous-output', '637'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/proposals',
                component: ComponentCreator('/docs/tech-explanation/proposals', 'a07'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/rawheader',
                component: ComponentCreator('/docs/tech-explanation/rawheader', '478'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/script',
                component: ComponentCreator('/docs/tech-explanation/script', '634'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/script-args',
                component: ComponentCreator('/docs/tech-explanation/script-args', '930'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/script-group-exe',
                component: ComponentCreator('/docs/tech-explanation/script-group-exe', 'dd2'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/since',
                component: ComponentCreator('/docs/tech-explanation/since', '1c1'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/transaction',
                component: ComponentCreator('/docs/tech-explanation/transaction', 'e82'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/transactions',
                component: ComponentCreator('/docs/tech-explanation/transactions', 'd3a'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/type-script',
                component: ComponentCreator('/docs/tech-explanation/type-script', '5d9'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/uncles',
                component: ComponentCreator('/docs/tech-explanation/uncles', '4ea'),
                exact: true,
                sidebar: "tutorial"
              },
              {
                path: '/docs/tech-explanation/witness',
                component: ComponentCreator('/docs/tech-explanation/witness', '136'),
                exact: true,
                sidebar: "tutorial"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
