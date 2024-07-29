// All data for the drop down menu: used on all pages except home


export const MenuItemsData = [
    {
        title: 'Home',
        url: '/portfolio',
        submenu: [
            {
                title: 'Tester1',
                url: '/portfolio',
            }, 
            {
                title: 'Tester2',
                url: '/portfolio/res'
            },
        ],
    },
    {
        title: 'Resume',
        url: '/portfolio/res',
    },
    {
        title: 'Information',
        url: '/portfolio/contact',
        submenu: [
            {
                title: "About Me",
                url: "/portfolio/information/about"
            },
            {
                title: "Contact",
                url:  "/portfolio/information/contact"
            }
        ]
    },
];
// Add more as needed -> create page first
