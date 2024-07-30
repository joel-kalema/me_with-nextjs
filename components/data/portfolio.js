export const projects = [
    {
        id: 1,
        image: '/images/cbt.png',
        title: 'CBT MINISTRIES',
        details: "CBT MINISTRIES INC official website.",
        fewDetail :'CBT MINISTRIES INC official...',
        technologies: ['Nextjs', 'MongoDB','Strype', 'Tailwind'],
        live: 'https://christopherbeleke.com/',
        state: 'private'
    },
    // {
    //     id: 2,
    //     image: '/images/neutral.jpg',
    //     title: 'Neutral',
    //     details: "Neutral is a digital agency platform that provides software development services to businesses, focusing on building and maintaining mobile and web applications. The platform has collaborated with 10+ commerce in the Democratic Republic of Congo (DRC).",
    //     fewDetail :'Neutral is a digital agency...',
    //     technologies: ['React','Rails', 'Scss', 'Tailwind'],
    //     live: 'https://neutral.codes/',
    //     state: 'private'
    // },
    {
        id: 2,
        image: '/images/updev.jpg',
        title: 'UpDev',
        details: "UpDev is more than just a social media platform; it's a thriving ecosystem designed to support your journey as a developer. Whether you're looking to learn, share, or collaborate, UpDev provides the tools and community you need to succeed. Join UpDev today and be a part of the future of development!",
        fewDetail :'UpDev is more than just a social media...',
        technologies: ['Nextjs', 'MongoDB', 'Tailwind'],
        live: 'https://updevcommunity.vercel.app/',
        source: 'https://github.com/joel-kalema/UpDev',
        state: 'public'
    },
    {
        id: 5,
        image: '/images/imagai.png',
        title: 'IMAGE AI',
        details: 'ImagAI is an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.',
        fewDetail :'ImagAI is an AI image SaaS platform...',
        technologies: ['Nextjs', 'MongoDB', 'Tailwind'],
        live: 'https://image-ai-generater.vercel.app/',
        source: 'https://github.com/joel-kalema/image-ai-generator',
        state: 'public'
    },
    {
        id: 3,
        image: '/images/HAGSYO.jpg',
        title: 'HAGSYO',
        details: "Hagsyo Kingdom is dedicated to providing top-notch services to its customers, while also working to reduce unemployment in the Congo. With a strong focus on customer satisfaction and community development, the team at Hagsyo Kingdom is committed to helping businesses thrive and individuals succeed.",
        fewDetail :'Hagsyo Kingdom is dedicated to providing...',
        technologies: ['Nextjs', 'Tailwind', 'Rails'],
        live: 'https://hagsyo-kingdom-git-new-post-page-cyw-01.vercel.app/',
        state: 'private'
    },
    {
        id: 4,
        image: '/images/cars.jpg',
        title: 'LUXURY CARS',
        details: 'This web app allows users to get a list of cars, car details, and helps people who are passionate about all things high-end and the goal is to provide the latest news, compare cars side by side, and information on the most luxurious vehicles on the market.',
        fewDetail :'This web app allows users to get...',
        technologies: ['Nextjs', 'Tailwind', 'API'],
        live: 'https://luxury-cars-mu.vercel.app/',
        source: 'https://github.com/joel-kalema/luxury-cars',
        state: 'public'
    },
    {
        id: 6,
        image: '/images/math.jpg',
        title: 'Math Magicians',
        details: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
        fewDetail :'Math magicians is a website...',
        technologies: ['React', 'CSS'],
        live: 'https://mathmagiciansjk.netlify.app/',
        source: 'https://github.com/joel-kalema/Math-Magicians',
        state: 'public'
    },
    // {
    //     id: 6,
    //     image: '/images/live.jpg',
    //     title: 'Global-warming',
    //     details: 'This is a responsive website that navigates from the home page to the about page, following mobile first rule.',
    //     fewDetail :'This is a responsive website...',
    //     technologies: ['HTML', 'CSS', 'JavaScript'],
    //     live: 'https://joel-kalema.github.io/Global-warming/',
    //     source: 'https://github.com/joel-kalema/Global-warming',
    //     state: 'public'
    // },
    // {
    //     id: 6,
    //     image: '/images/recipe.jpg',
    //     title: 'Recipe App',
    //     details: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have . Also, allow you to make them public so anyone can access them.',
    //     fewDetail :'The Recipe app keeps track of...',
    //     technologies: ['Rails', 'PostgreSQL'],
    //     live: 'https://github.com/joel-kalema/Recipe_app',
    //     source: 'https://github.com/joel-kalema/Recipe_app',
    //     state: 'public'
    // }
];

const getProject = (name) => {
    const formattedName = name.split('_').join(' ');
    const project = projects.find(project => project.title === formattedName);
    return project;
};

export default getProject;