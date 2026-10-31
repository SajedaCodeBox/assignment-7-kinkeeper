import Image from 'next/image';
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FiArchive } from 'react-icons/fi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const CardDetails = async({params}) => {
    const {cardId} = await params;
    const res = await fetch ('http://localhost:3000/friends.json');
    const cards =await res.json();
    const filter =cards.find(card => card.id === parseInt(cardId))
    // console.log ("Show me filter", filter)
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date} = filter;
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='grid md:grid-cols-2 container mx-auto w-11/12  md:p-20 gap-6 mt-8 mb-6'>
            <div className=' space-y-3'>
                {/* Left column */}
            <div >
                      <div className="card bg-base-100  shadow-sm ">
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
                     <div>
                      <button className={`${status === "Almost Due" ? "bg-[#EFAD44]"
                        : status === "Overdue" ? "bg-[#EF4444]"
                        : status === "On-Track" ? "bg-[#244D3F]" : ''} 
                        font-medium  text-white text-center p-2 rounded-2xl`}>{status}</button>
                    </div>
                       <div className='flex items-center gap-2'>
                         {
                            filter.tags.map((tag, index) => (<div key={index} className="badge  bg-[#CBFADB] font-medium">
                              {tag}</div>))
                         }
                         </div> 
                         <p className='font-medium text-[#64748B]'>{bio}</p>
                         <p className='text-[#64748B]'>{email}</p>
                    </div>
                    </div>
            </div>
           
            <div className='flex items-center gap-2 bg-white  h-15 rounded-xl justify-center font-bold'><RiNotificationSnoozeLine className='text-2xl' /><p>Snooze 2 weeks</p></div>
            <div className='flex items-center gap-2 bg-white  h-15 rounded-xl justify-center font-bold'><FiArchive className='text-2xl' /><p>Archive</p></div>
            <div className='flex items-center gap-2 bg-white  h-15 rounded-xl justify-center font-bold text-red-500'><RiDeleteBinLine className='text-2xl' /><p>Delete</p></div>
            </div>
            {/* Right column */}
            <div className='space-y-8'>
                {/* Right column step-1 */}
                <div className='grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-3  text-center'>
            <div className='bg-white lg:w-42 rounded-xl p-3 h-42 flex flex-col items-center justify-center'>
                <h3 className='font-semibold text-3xl text-[#244D3F]'>{days_since_contact}</h3>
                <p className='text-[#64748B] '>Days Since Contact</p>
            </div>
            <div className='bg-white lg:w-42 rounded-xl p-3 h-42 flex flex-col items-center justify-center'>
                <h3 className='font-semibold text-3xl text-[#244D3F]'>{goal}</h3>
                <p className='text-[#64748B] '>Goal (Days)</p>
            </div>
            <div className='bg-white lg:w-42 rounded-xl p-3 h-42 flex flex-col items-center justify-center'>
                <h3 className='font-semibold text-2xl text-[#244D3F]'>{next_due_date}</h3>
                <p className='text-[#64748B] '>Next Due</p>
            </div>
            </div>
            {/* Right column step-2 */}
            <div className='bg-white p-9 rounded-2xl space-y-3'>
                <div className='flex justify-between'>
                <p className='font-medium text-[#244D3F] text-xl'>Relationship Goal</p>
                <button className="btn btn-xs">Edit</button>
                </div>
                <p className='text-[#64748B]'>Connect every <span className='font-bold'>30 days</span></p>
            </div>
            {/* Right column step-3 */}
            <div className='bg-white p-6 space-y-5 rounded-xl'>
                <p className='font-medium text-[#244D3F] text-xl'>Quick Check-In</p>
                <div className='grid md:grid-cols-3 gap-2 '>
                <div className='bg-gray-200 rounded-xl flex flex-col items-center justify-center p-6'>
                    <span className ='text-3xl'><BiPhoneCall  /></span>
                    <p>Call</p>
                </div>
                <div className='bg-gray-200 rounded-xl flex flex-col items-center justify-center p-6'>
                   <span className ='text-3xl'><MdOutlineTextsms /></span>
                    <p>Text</p>
                </div>
                <div className='bg-gray-200 rounded-xl flex flex-col items-center justify-center p-6'>
                     <span className ='text-3xl'><MdOutlineVideocam /></span>
                    <p>Video</p>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default CardDetails;




