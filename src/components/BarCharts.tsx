'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import data from '../data/data.json'; // Ensure the path is correct

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/chart';

// Define the chart configuration
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function BarCharts() {
  return (
    <Card className='bg-accordian-grey border-none'>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={data.desktop_and_mobile_data} // Use the imported JSON data here
            margin={{ top: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='department'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dashed' />}
            />
            <Bar
              dataKey='desktop'
              fill='var(--color-desktop)'
              radius={4}
            />
            <Bar
              dataKey='mobile'
              fill='var(--color-mobile)'
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
