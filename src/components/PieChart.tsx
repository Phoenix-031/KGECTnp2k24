'use client';

import * as React from 'react';
import { Label, Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import pieChartData from '../data/data.json';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import { ChartConfig, ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent } from '@/components/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'Desktop',
  },
  mobile: {
    label: 'Mobile',
  },
  CSE: {
    label: 'CSE',
    color: 'hsl(var(--chart-1))',
  },
  IT: {
    label: 'IT',
    color: 'hsl(var(--chart-2))',
  },
  ECE: {
    label: 'ECE',
    color: 'hsl(var(--chart-3))',
  },
  EE: {
    label: 'EE',
    color: 'hsl(var(--chart-4))',
  },
  ME: {
    label: 'ME',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function PieCharts() {
  const id = 'pie-interactive';

  const [activedepartment, setActivedepartment] = React.useState(pieChartData.desktop_data[0].department);

  const activeIndex = React.useMemo(
    () => pieChartData.desktop_data.findIndex((item) => item.department === activedepartment),
    [activedepartment]
  );

  const departments = React.useMemo(() => pieChartData.desktop_data.map((item) => item.department), []);

  return (
    <Card
      data-chart={id}
      className='flex flex-col bg-accordian-grey border-none'
    >
      <ChartStyle
        id={id}
        config={chartConfig}
      />
      <CardHeader className='flex-row items-start space-y-0 pb-0'>
        <div className='grid gap-1'>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </div>
        <Select
          value={activedepartment}
          onValueChange={setActivedepartment}
        >
          <SelectTrigger
            className='ml-auto h-7 w-[130px] rounded-lg pl-2.5'
            aria-label='Select a value'
          >
            <SelectValue placeholder='Select department' />
          </SelectTrigger>
          <SelectContent
            align='end'
            className='rounded-xl'
          >
            {departments.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className='rounded-lg [&_span]:flex'
                >
                  <div className='flex items-center gap-2 text-xs'>
                    <span
                      className='flex h-3 w-3 shrink-0 rounded-sm'
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='flex flex-1 justify-center pb-0'>
        <ChartContainer
          id={id}
          config={chartConfig}
          className='mx-auto aspect-square w-full max-w-[300px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieChartData.desktop_data}
              dataKey='desktop'
              nameKey='department'
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 10}
                  />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {pieChartData.desktop_data[activeIndex]?.desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
