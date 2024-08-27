'use client';

import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion';
import { PieCharts } from './PieChart';
import { BarCharts } from './BarCharts';
import { BarChartHorizontal } from './BarChartHorizontal';
import { PlacementTable } from './placementTable';
import data from '../data/data.json';

const PlacementStatistics = () => {
  const years = data.years;

  return (
    <div
      id='placement-statistics'
      className='w-full h-full flex flex-col items-start'
    >
      <h2 className='font-bold text-xl mx-8 my-8'>Placement Statistics</h2>
      <div className='lg:mx-8 lg:w-[1420px] lg:mb-4 w-80 mb-6 mx-5'>
        <Accordion
          className='gap-4'
          type='single'
          collapsible
        >
          {years.map((yearData) => (
            <AccordionItem
              key={yearData.year}
              value={yearData.year}
              className='mb-4'
            >
              <AccordionTrigger className='flex items-center justify-between p-4 bg-accordian-grey rounded-lg cursor-pointer hover:no-underline hover:bg-gray-300 transition'>
                <span className='text-gray-800'>Year {yearData.year}</span>
              </AccordionTrigger>
              <AccordionContent className='w-full lg:px-80 lg:py-16 mt-6 bg-accordian-grey rounded-lg flex flex-col items-center justify-center'>
                <div className='w-full h-full'>
                  <PlacementTable year={yearData.year} />
                </div>
                <div className='w-full h-full mt-10'>
                  <PieCharts />
                </div>
                <div className='mt-10 w-full h-full'>
                  <BarCharts />
                </div>
                <div className='mt-10 w-full h-full'>
                  <BarChartHorizontal />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default PlacementStatistics;
