import React from 'react';
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Cart',
        path: '/cart',
        icon: <BsIcons.BsFillCartFill />,
    },

    {
        title: 'Posts',
        path: '/posts',
        icon: <AiIcons.AiOutlineAppstoreAdd />,
    },

    {
        title: 'Chat',
        path: '/chat',
        icon: <BsIcons.BsFillChatDotsFill />,
    },

    {
        title: 'Currency Converter',
        path: '/converter',
        icon: <BsIcons.BsCurrencyExchange />,
    },
    
    {
        title: 'Contact Us',
        path: '/contact',
        icon:  <MdEmail/>
    }
];