import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-2 m-4'>
           <div> <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p></div>
          <Marquee pauseOnHover={true} speed={100} className='space-x-4'>
          <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat dignissimos eveniet voluptatem ipsam saepe!</Link>
          <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat dignissimos eveniet voluptatem ipsam saepe!</Link>
          <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat dignissimos eveniet voluptatem ipsam saepe!</Link>
          </Marquee>
        </div>
    );
};

export default Latest;