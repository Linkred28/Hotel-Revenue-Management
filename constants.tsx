
import React from 'react';
import { Tool } from './types';

export const tools: Tool[] = [
    {
        name: 'Power BI',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#F2C811">
                <path d="M6 12h4v8H6zM11 4h4v16h-4zm5 12h4v4h-4z" />
            </svg>
        ),
    },
    {
        name: 'Excel',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#1D6F42">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 14.5l-2-2.5 2-2.5h2l-2 2.5 2 2.5h-2zm5 0h-2.5v-5H17v1.5h-2.5v1h2v1h-2v1.5z" />
            </svg>
        ),
    },
    {
        name: 'Dynamics CRM',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#0066CC">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-5H8l4-5v5h3l-4 5z" />
            </svg>
        ),
    },
    {
        name: 'Planner',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="#03A9F4">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        ),
    },
];
