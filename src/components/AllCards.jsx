import React from 'react';
import Cards from '@/components/Cards';

const AllCards = async() => {
    const res = await fetch('http://localhost:3000/friends.json');
    const allcards = await res.json()
    console.log(allcards);
    return (
        <div className='w-11/12 container mx-auto mt-6  border-t border-[#E9E9E9] pt-8'>
            <h3 className='font-semibold text-2xl mb-4'>Your Friends</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 '>
                {
                    allcards.map(cards => <Cards cards = {cards} key={cards.id}></Cards>)
                }
            </div>
        </div>
    );
};

export default AllCards;