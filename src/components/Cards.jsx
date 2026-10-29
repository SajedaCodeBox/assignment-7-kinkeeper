  import Image from 'next/image';
  import React from 'react';

  const Cards = ({cards}) => {
    const {name, picture, days_since_contact, tags, status} = cards
    return (
        <div className="card bg-base-100  shadow-sm mb-10">
  <figure className=" pt-10">
    <Image 
    src={picture}
    alt={picture}
    width={100}
    height={100}
    className='rounded-full'
    >

    </Image>
  </figure>
  <div className="card-body items-center text-center">
    <h3 className='font-semibold text-xl'>{name}</h3>
    <p className='text-[#64748B]'>{days_since_contact}d ago</p>
       <div className='flex items-center gap-2'>
         {
            cards.tags.map((tag, index) => (<div key={index} className="badge  bg-[#CBFADB] font-medium">
              {tag}</div>))
         }
         </div> 

    <div className="">
      <button className={`${status === "Almost Due" ? "bg-[#EFAD44]"
        : status === "Overdue" ? "bg-[#EF4444]"
        : status === "On-Track" ? "bg-[#244D3F]" : ''} 
        font-medium  text-white text-center p-2 rounded-2xl`}>{status}</button>
    </div>
    </div>
    </div>
    );
    };

export default Cards;