const path = require('path');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        title: 'Jay Honnold',
        description: "Jay Honnold's Portfolio and Website",
        about:
            "I am a full-stack developer with experience working in multiple web and backend frameworks. Throughout my career I have designed, built, and maintained both legacy and new projects. Being thorough in nature, I'm determined to write code that is elegant, maintainable, and secure.",
        specific:
            "Specifically, I have worked a majority of my frontend career in React, though Vue and Svelte seem quite interesting to me. On the backend I have worked equals parts in Spring and Express in combination with both SQL and No-SQL databases. I'm always interested in learning more and welcome the idea of trying something new!",
        links: {
            github: 'https://github.com/jhonnold',
        },
        experience: [
            {
                title: 'SDE I / SDE II',
                company: 'Amazon',
                start: 'February 2021',
                end: 'Present',
                details:
                    'Developing and maintaing an order ingestion layer within Multi-Channel Fulfillment. Work has included designing and building new features, upgrading and modernizing legacy systems, as well as debugging and resolving operation related issues. In April of 2022, I transfered to AWS. Here, my focused changed to developing internal tools assisting other AWS teams with global and regional expansion. These tools focus on automating common and tedious manual tasks experienced when building a service in a new region.',
            },
            {
                title: 'Full-Stack Developer',
                company: 'Allstate',
                start: 'March 2019',
                end: 'January 2021',
                details:
                    'Developed an internal product which automatically collects relavant risk and security information on application artifacts and determines production deployment readiness. Refactored the API from a single codebase into multiple microservices. Rewrote the UI to meet accessiblity standards and present collected data in a clear and concise manner. Used React, JS, Java, Spring, Node, Express, and MSSQL.',
            },
            {
                title: 'Full-Stack Developer',
                company: 'Coder Inc.',
                start: 'June 2017',
                end: 'August 2018',
                details:
                    'Three year old startup that assists entrepreneurs in achieving their goals through assistance in product development and business strategy. Developed the android application for Victor, a mobile tool for veterans. Used react-native and redux for the application, and ruby on rails for the backend. In addition, developed “Coder Platform” that allows non-technical users to interface with developers in a more efficient manner. Used react and redux for the web application, and ruby on rails for the backend. Architected a new version of the “Coder Platform,” setting up the PostgreSQL database and backend with express/node.',
            },
        ],
        works: [
            {
                title: 'Berserk Chess Engine',
                stack: ['devicon-c-plain', 'devicon-gcc-plain'],
                image: 'works/berserk.jpg',
                description: 'UCI compliant chess engine written in C. Utilizes an optimized minimax search with a self-trained neural net evaluation.',
                href: 'https://github.com/jhonnold/berserk',
            },
            {
                title: 'Live Chess Viewer',
                stack: ['devicon-typescript-plain', 'devicon-express-original', 'devicon-nodejs-plain'],
                image: 'works/tlcv.png',
                description: 'Web viewer service for Tom\'s live chess server broadcasts. Utilized by CCRL to broadcast their events.',
                href: 'https://tlcv.net',
            },
            {
                title: 'Torch Chess Engine',
                stack: ['devicon-cplusplus-plain', 'devicon-gcc-plain'],
                image: 'works/torch.png',
                description: 'UCI compliant chess engine written in C++. Worked with other chess developers to build one of the strongest engines to date.',
                href: 'https://www.chess.com/news/view/torch-chess-engine',
            },
            {
                title: 'FN Dash',
                stack: ['devicon-python-plain', 'devicon-react-original', 'devicon-postgresql-plain'],
                image: 'works/fndash.png',
                description: 'Fortnite statistics tracking website. Data collection is automatic upon registration.',
                href: 'https://github.com/jhonnold/fndash',
            },
            {
                title: 'react-chartjs-2',
                stack: ['devicon-react-original', 'devicon-npm-original-wordmark'],
                image: 'works/chartjs.png',
                description: 'React wrapper for the popular Chart.js library. Contributed heavily to the OSS project during its modernization of react.',
                href: 'https://react-chartjs-2.js.org/',
            },
        ],
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-124174866-1',
                head: false,
                anonymize: true,
                respectDNT: true,
                exclude: [],
                pageTransitionDelay: 0,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'honnold.me',
                short_name: 'starter',
                start_url: '/',
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.navy,
                display: 'minimal-ui',
                icon: 'src/images/icon.webp',
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('tailwindcss')(tailwindConfig),
                    require('autoprefixer'),
                    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : []),
                ],
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
    ],
};
