"use client"

import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './story';

export default function Stories({session}) {
    const [suggestions, setSuggestions] = useState<any[]>([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,

        }))
        setSuggestions(suggestions);
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border 
        rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            
            {session && (
                <Story img={session.user.image} username={session.user.username} />
            )}
            
            {suggestions.map(profile => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username} 
                />
            ))}
        </div>
    )
}