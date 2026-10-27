import React from 'react';

const Bannar = () => {
    return (
          <div>
         <div className='space-y-3 mt-20'>
            <h1 className='font-bold text-4xl'>Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
            relationships that matter most.</p>
            <button className="btn bg-[#244D3F] text-white">+ Add a Friend</button>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-11/12 container mx-auto mt-6'>
            <div className='bg-white p-8 rounded-xl'>
                <h3 className='font-semibold text-3xl text-[#244D3F]'>10</h3>
                <p className='text-[#64748B] '>Total Friends</p>
            </div>
            <div className='bg-white p-8 rounded-xl'>
                <h3 className='font-semibold text-3xl text-[#244D3F]'>3</h3>
                <p className='text-[#64748B] '>On Track</p>
            </div>
            <div className='bg-white p-8 rounded-xl'>
                <h3 className='font-semibold text-3xl text-[#244D3F]'>6</h3>
                <p className='text-[#64748B] '>Need Attention</p>
            </div>
            <div className='bg-white p-8 rounded-xl'>
                <h3 className='font-semibold text-3xl text-[#244D3F]'>12</h3>
                <p className='text-[#64748B] '>Interactions This Month</p>
            </div>
            </div>
        </div>

    );
};

export default Bannar;