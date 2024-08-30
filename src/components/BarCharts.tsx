'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';
import chartData from '../data/data.json'; // Ensure the path is correct

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/chart';

// Define chart configuration
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function BarCharts() {
  return (
    <Card className='bg-[#B2C1AD] border-none'>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData.desktop_data_alternative} // Use the alternative data here
            margin={{
              top: 20,
            }}
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey='desktop'
              fill='var(--color-desktop)'
              radius={8}
            >
              <LabelList
                position='top'
                offset={12}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>{/* Footer Content */}</CardFooter>
    </Card>
  );
}
