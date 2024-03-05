import { createCampaign, dashboard,  profile } from '../assets';

export const navlinks = [           // Navigation Links
    {
        name: 'dashboard',
        imgUrl: dashboard,
        link: '/',
    },
    {
        name: 'campaign',
        imgUrl: createCampaign,
        link: '/create-campaign',
    },
    {
        name: 'profile',
        imgUrl: profile,
        link: '/profile',
    },
   
];