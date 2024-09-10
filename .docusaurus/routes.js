import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '468'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd91'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '669'),
            routes: [
              {
                path: '/docs/building-websites/Docusaurus',
                component: ComponentCreator('/docs/building-websites/Docusaurus', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/building-websites/serving-websites',
                component: ComponentCreator('/docs/building-websites/serving-websites', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/building-websites',
                component: ComponentCreator('/docs/category/building-websites', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/dev-environnement',
                component: ComponentCreator('/docs/category/dev-environnement', 'dd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/learning-languages',
                component: ComponentCreator('/docs/category/learning-languages', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/linux-unix',
                component: ComponentCreator('/docs/dev-environnement/linux-unix', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/make',
                component: ComponentCreator('/docs/dev-environnement/make', 'b6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-environnement/tmux',
                component: ComponentCreator('/docs/dev-environnement/tmux', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/Assembly',
                component: ComponentCreator('/docs/learning-languages/Assembly', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/C',
                component: ComponentCreator('/docs/learning-languages/C', 'd7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/python',
                component: ComponentCreator('/docs/learning-languages/python', '4ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/rust',
                component: ComponentCreator('/docs/learning-languages/rust', 'bcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/learning-languages/zig',
                component: ComponentCreator('/docs/learning-languages/zig', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
