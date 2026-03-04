export const site = {
    meta: {
        title: 'Jay Honnold',
        description: "Jay Honnold's Portfolio and Website",
        keywords: 'developer, fullstack, software, portfolio',
        url: 'https://honnold.me',
        ogImage: '/images/jay.webp',
    },
    about: {
        heading: 'Jay Honnold',
        text: "I'm a senior software engineer specializing in system design and full-stack development with extensive experience at AWS and Amazon. I've led initiatives that transformed manual processes into automated solutions, saving years of effort. Throughout my career, I've architected scalable systems that bridge complex business requirements with robust technical implementation - my work focuses on building maintainable, secure solutions that empower engineering teams to deliver value efficiently.",
        specific:
            "My professional expertise centers on building and modernizing full-stack systems at scale - leading migrations to microservices architectures, developing automation tools for CI/CD pipelines, and engineering backends using Spring and Express with SQL and NoSQL databases. Beyond my professional work, I'm driven by a genuine love for coding and problem-solving, which I pursue through independent projects. This passion is best reflected in Berserk, an open-source chess engine I've built in C that ranks among the world's strongest. Developing Berserk isn't about professional advancement - it's about the joy of creating something complex and elegant, the satisfaction of optimization, and the intellectual challenge of teaching machines to think. Whether at work or at home, I'm motivated by elegant solutions.",
        image: {
            webp: '/images/jay.webp',
            avif: '/images/jay.avif',
            placeholder: '/images/jay-placeholder.webp',
        },
        links: {
            github: 'https://github.com/jhonnold',
        },
    },
    experience: [
        {
            title: 'SDE I / SDE II / SDE III',
            company: 'AWS',
            start: 'April 2022',
            end: 'Present',
            details:
                'Designed and implemented internal automation tools to support AWS teams in global and regional expansion initiatives. Built solutions to streamline 3 common manual processes, developed validation services for testing automation reliability, created code templates to ensure expansion readiness, and implemented AI-driven scripts to automate the code refactoring necessary to achieve expansion automation. Leveraged JVM languages, Typescript, Ruby, Golang, and Python with AWS infrastructure to deploy solutions that supported over 1300 pipelines and saved over 50 developer years of effort.',
        },
        {
            title: 'SDE I',
            company: 'Amazon',
            start: 'February 2021',
            end: 'April 2022',
            details:
                'Developed and maintained a scalable order ingestion system for Multi-Channel Fulfillment, supporting thousands of orders daily. Worked on the modernization of legacy components, the initial migration to native AWS infrastructure, and resolved operational issues. Built and deployed solutions using JVM-based languages on AWS infrastructure.',
        },
        {
            title: 'Full-Stack Developer',
            company: 'Allstate',
            start: 'March 2019',
            end: 'January 2021',
            details:
                'Worked on the development of an internal risk assessment platform that automatically evaluates application artifacts against security and compliance standards, assessing over 100 components daily to determine production deployment readiness. Led the refactoring of a monolithic API into 6 independent microservices, improving system maintainability and enabling independent deployment cycles. Redesigned and rebuilt the UI to comply with accessibility standards, enhancing data visualization and user experience. Engineered the full solution using React, JavaScript, Java, Spring, Node.js, Express, and MSSQL.',
        },
        {
            title: 'Full-Stack Developer',
            company: 'Coder Inc.',
            start: 'June 2017',
            end: 'August 2018',
            details:
                'Developed the Android application Victor, a mobile tool for veterans. Built the "Coder Platform" web application that streamlines collaboration between non-technical users and developers, enhancing project intake efficiency. Architected a new version of the "Coder Platform" with a scalable backend and optimized database design. Engineered all solutions using React Native, React, Ruby on Rails, Express, Node.js, and PostgreSQL.',
        },
    ],
    works: [
        {
            title: 'Berserk Chess Engine',
            stack: ['devicon-c-plain', 'devicon-gcc-plain'],
            image: {
                src: '/images/works/berserk.webp',
                avif: '/images/works/berserk.avif',
                placeholder: '/images/works/berserk-placeholder.webp',
            },
            description:
                'UCI-compliant chess engine written in C. Utilizes an optimized minimax search with a self-trained neural network for position evaluation.',
            href: 'https://github.com/jhonnold/berserk',
        },
        {
            title: 'Live Chess Viewer',
            stack: ['devicon-typescript-plain', 'devicon-express-original', 'devicon-nodejs-plain'],
            image: {
                src: '/images/works/tlcv.webp',
                avif: '/images/works/tlcv.avif',
                placeholder: '/images/works/tlcv-placeholder.webp',
            },
            description:
                "Web viewer service for Tom's live chess server broadcasts. Officially used by CCRL to broadcast chess events.",
            href: 'https://ccrl.live',
        },
        {
            title: 'Torch Chess Engine',
            stack: ['devicon-cplusplus-plain', 'devicon-gcc-plain'],
            image: {
                src: '/images/works/torch.webp',
                avif: '/images/works/torch.avif',
                placeholder: '/images/works/torch-placeholder.webp',
            },
            description:
                'UCI-compliant chess engine written in C++. Collaborated with leading chess developers to build one of the strongest engines to date.',
            href: 'https://www.chess.com/news/view/torch-chess-engine',
        },
        {
            title: 'FN Dash',
            stack: ['devicon-python-plain', 'devicon-react-original', 'devicon-postgresql-plain'],
            image: {
                src: '/images/works/fndash.webp',
                avif: '/images/works/fndash.avif',
                placeholder: '/images/works/fndash-placeholder.webp',
            },
            description: 'Fortnite statistics tracking website. Automated data collection upon user registration.',
            href: 'https://github.com/jhonnold/fndash',
        },
        {
            title: 'react-chartjs-2',
            stack: ['devicon-react-original', 'devicon-npm-original-wordmark'],
            image: {
                src: '/images/works/chartjs.webp',
                avif: '/images/works/chartjs.avif',
                placeholder: '/images/works/chartjs-placeholder.webp',
            },
            description:
                'React wrapper for the popular Chart.js library. Significant contributor to the open-source project during its React modernization.',
            href: 'https://react-chartjs-2.js.org/',
        },
    ],
    nav: ['Home', 'About', 'Experience', 'Works'],
};
