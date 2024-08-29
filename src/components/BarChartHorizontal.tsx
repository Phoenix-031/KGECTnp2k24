'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
import chartData from '../data/data.json'; // Ensure the path is correct

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/chart';

// Define chart configuration
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig;

export function BarChartHorizontal() {
  return (
    <Card className='bg-accordian-grey border-none'>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData.desktop_and_mobile_data} // Use the data containing both desktop and mobile data
            layout='vertical'
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={true} />
            <YAxis
              dataKey='department'
              type='category'
              tickLine={false}
              tickMargin={100}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis
              dataKey='desktop'
              type='number'
              hide
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />

            <Bar
              dataKey='desktop'
              fill='var(--color-desktop)'
              radius={4}
              name={chartConfig.desktop.label}
            >
              <LabelList
                dataKey='desktop'
                position='insideLeft'
                offset={8}
                className='fill-[--color-label]'
                fontSize={12}
              />
              <LabelList
                dataKey='desktop'
                position='right'
                offset={8}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>

            <Bar
              dataKey='mobile'
              fill='var(--color-mobile)'
              radius={4}
              name={chartConfig.mobile.label}
            >
              <LabelList
                dataKey='mobile'
                position='insideLeft'
                offset={8}
                className='fill-[--color-label]'
                fontSize={12}
              />
              <LabelList
                dataKey='mobile'
                position='right'
                offset={8}
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
