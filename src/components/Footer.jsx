import React from 'react';
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-center space-y-3 pt-20'>
            <h1 className='font-bold text-5xl text-white'>KeenKeeper</h1>
            <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <h2 className='font-medium text-xl text-white'>Social Links</h2>
            <div className='flex items-center justify-center gap-2'>
                <Image
                src={instagram}
                alt={instagram}
                width={50}
                height={50}
                ></Image>
                <Image
                src={facebook}
                alt={facebook}
                width={50}
                height={50}
                ></Image>
                <Image
                src={twitter}
                alt={twitter}
                width={50}
                height={50}
                ></Image>
            </div>
            <div className='flex justify-between text-white items-center p-4 border-t border-white container mx-auto md:w-250'>
             <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className='flex gap-5'>
            <p>Privacy Policy </p>
            <p>Terms of Service </p>
            <p> Cookies</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;