'use client';

import React from 'react';
import { useState } from 'react';
import PlacementStatisticsUG from './PlacementStatisticsUG';
import PlacementStatistics from './PlacementStatistics';

type Tab = 'ug' | 'pg';

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState<Tab>('ug');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='w-full mx-auto'>
      <div className='flex items-center justify-center gap-3 m-8'>
        <div className='flex gap-2 p-2 px-4 bg-slate-300 rounded-[10px]'>
          <button
            className={`flex items-center justify-center px-4 sm:px-[80px] md:pl-[100px] lg:px-[80px] py-2 sm:py-[10px] md:py-[12px] lg:py-[15px] bg-slate-300 text-center text-sm sm:text-base md:text-lg lg:text-xl rounded-lg ${activeTab === 'pg' ? 'border-b-2 bg-blue-400 border-blue-500 font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabClick('pg')}
          >
            Under Graduate
          </button>
          <button
            className={`flex items-center justify-center px-4 sm:px-[80px] md:pl-[100px] lg:px-[80px] py-2 sm:py-[10px] md:py-[12px] lg:py-[15px] bg-slate-300 text-center text-sm sm:text-base md:text-lg lg:text-xl rounded-lg ${activeTab === 'ug' ? 'border-b-2 bg-blue-400 border-blue-500 font-semibold' : 'text-gray-600'}`}
            onClick={() => handleTabClick('ug')}
          >
            Post Graduate
          </button>
        </div>
      </div>

      <div className='px-4'>
        {activeTab === 'ug' && (
          <div>
            <PlacementStatisticsUG />
          </div>
        )}

        {activeTab === 'pg' && (
          <div>
            <PlacementStatistics />
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 1020px) {
          .flex.items-center.justify-center button {
            padding-left: 100px;
            padding-right: 100px;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .text-sm {
            font-size: 14px;
          }
        }

        @media (max-width: 640px) {
          .flex.items-center.justify-center button {
            padding-left: 50px;
            padding-right: 50px;
            padding-top: 8px;
            padding-bottom: 8px;
          }

          .text-sm {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
