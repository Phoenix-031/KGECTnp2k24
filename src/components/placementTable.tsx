'use client';


import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import placementData from '../data/data.json'; 

interface PlacementTableProps {
  year: string;
}

export function PlacementTable({ year }: PlacementTableProps) {
  const yearData = placementData.years?.find((data) => data.year === year)?.departments || [];

  return (
    <div className='w-full h-full'>
      <Table className='border-none bg-accordian-grey px-10'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'></TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Offers</TableHead>
            <TableHead className='text-right'>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {yearData.map((item) => (
            <TableRow key={item.department}>
              <TableCell className='font-medium'>{item.department}</TableCell>
              <TableCell>{item.students}</TableCell>
              <TableCell>{item.offers}</TableCell>
              <TableCell className='text-right'>{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
