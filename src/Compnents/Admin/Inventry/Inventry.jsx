import React from 'react'
import LayoutEl from '../../shared/Layout/Index'
import { Button, Card, Divider, Select, Table, Tag } from 'antd'
import { CalendarOutlined, CheckSquareFilled, CheckSquareOutlined, EditOutlined, GiftOutlined, TruckOutlined } from '@ant-design/icons'
import ReactApexChart from 'react-apexcharts'

const products = {
    series: [44, 55, 13, 33],
    options: {
        chart: {
            width: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
            show: false,
        }
    },
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Revenue',
        dataIndex: 'revenue',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const data = [
    {
        key: '1',
        name: (
            <div className='flex gap-x-2 items-center font-semibold'>
                <img width={60} className='rounded-full' src="/headphone-1.jpg" alt="headphone.jpg" />
                <p>Earphone</p>
            </div>
        ),
        revenue: '$100',
        stock: <Tag color='yellow'>15 Available</Tag>,
        action: <Button icon={<EditOutlined/>} 
        size='small'
        type='text'
        shape='circle'
        className='text-blue-400'
        />
    },
    {
        key: '3',
        name: (
            <div className='flex gap-x-2 items-center font-semibold'>
                <img width={60} className='rounded-full' src="/headphone.jpg" alt="headphone.jpg" />
                <p>Earphone</p>
            </div>
        ),
        revenue: '$100',
        stock: <Tag color='yellow'>15 Available</Tag>,
        action: <Button icon={<EditOutlined/>} 
        size='small'
        type='text'
        shape='circle'
        className='text-blue-400'
        />
    },
    {
        key: '4',
        name: (
            <div className='flex gap-x-2 items-center font-semibold'>
                <img width={60} className='rounded-full' src="/headphone-2.jpg" alt="headphone.jpg" />
                <p>Earphone</p>
            </div>
        ),
        revenue: '$100',
        stock: <Tag color='yellow'>15 Available</Tag>,
        action: <Button icon={<EditOutlined/>} 
        size='small'
        type='text'
        shape='circle'
        className='text-blue-400'
        />
    },
];

function Inventry() {
    return (
        <div>
            <LayoutEl>
                <div>
                    <div className='flex justify-between my-4 text-2xl font-semibold text-zinc-600 uppercase'>
                        <h2>Sales Activity</h2>
                        <h2 className='w-4/12 px-4'>Inventory Summary</h2>
                    </div>
                    <div className='grid md:grid-cols-6 gap-4'>
                        <div className='shadow-md flex flex-col items-center justify-center p-4 gap-y-4'>
                            <Button
                                icon={<GiftOutlined />}
                                size="large"
                                shape='circle'
                                type='text'
                                className='bg-orange-100 text-orange-600'
                            />
                            <h3 className='text-3xl font-bold'>10,432</h3>
                            <h3 className='uppercase text-xl font-semibold text-zinc-400'>to be packed</h3>
                        </div>
                        <div className='shadow-md flex flex-col items-center justify-center p-4 gap-y-4'>
                            <Button
                                icon={<TruckOutlined />}
                                size="large"
                                shape='circle'
                                type='text'
                                className='bg-violet-100 text-violet-600'
                            />
                            <h3 className='text-3xl font-bold'>10,432</h3>
                            <h3 className='uppercase text-xl font-semibold text-zinc-400'>to be packed</h3>
                        </div>
                        <div className='shadow-md flex flex-col items-center justify-center p-4 gap-y-4'>
                            <Button
                                icon={<CheckSquareOutlined />}
                                size="large"
                                shape='circle'
                                type='text'
                                className='bg-rose-100 text-rose-600'
                            />
                            <h3 className='text-3xl font-bold'>10,432</h3>
                            <h3 className='uppercase text-xl font-semibold text-zinc-400'>to be delivered</h3>
                        </div>
                        <div className='shadow-md flex flex-col items-center justify-center p-4 gap-y-4'>
                            <Button
                                icon={<CalendarOutlined />}
                                size="large"
                                shape='circle'
                                type='text'
                                className='bg-blue-100 text-blue-600'
                            />
                            <h3 className='text-3xl font-bold'>10,432</h3>
                            <h3 className='uppercase text-xl font-semibold text-zinc-400'>to be invoiced</h3>
                        </div>
                        <div className='md:col-span-2 shadow-md p-4'>
                            <div className='flex flex-col justify-between h-full'>

                                <div className='shadow-md flex items-center justify-between py-4 px-2'>
                                    <h1 className='uppercase font-semibold'>Quantity in hand</h1>
                                    <p className='font-bold text-zinc-400'>577</p>
                                </div>
                                <div className='shadow-md flex items-center justify-between py-4 px-2'>
                                    <h1 className='uppercase font-semibold'>Quantity to be recived</h1>
                                    <p className='font-bold text-zinc-400'>577</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid mt-5 md:grid-cols-2 gap-4'>
                        <div className='shadow-md p-4 '>
                            <div className='grid md:grid-cols-2'>
                                <div className='flex flex-col  justify-center gap-y-8'>
                                    <div className='flex justify-between'>
                                        <h2 className='font-semibold text-red-500'>
                                            Stockout Items
                                        </h2>
                                        <h3 className='font-semibold text-red-500'>
                                            231
                                        </h3>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h2 className='font-semibold text-zinc-500'>
                                            Low Stock Items
                                        </h2>
                                        <h3 className='font-semibold text-zinc-500'>
                                            473
                                        </h3>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h2 className='font-semibold text-zinc-500'>
                                            Available Items
                                        </h2>
                                        <h3 className='font-semibold text-zinc-500'>
                                            3254
                                        </h3>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <ReactApexChart
                                        options={products.options}
                                        series={products.series}
                                        type="donut"
                                        width={300} />
                                </div>
                            </div>
                            <Divider />
                            <div className='flex justify-between items-center'>
                                <h4 className='text-lg font-semibold text-zinc-500'>Purchase Order</h4>
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'this year',
                                            label: 'This Year',
                                        },
                                        {
                                            value: 'this month',
                                            label: 'This Month',
                                        },
                                        {
                                            value: 'last month',
                                            label: 'Last Month',
                                        },
                                    ]}
                                />
                            </div>
                            <div className='px-12 py-4 flex justify-between my-4'>
                                <div className='flex flex-col items-center'>
                                    <h2 className='text-lg text-gray-500 font-semibold'>
                                        Quantity Ordered
                                    </h2>
                                    <h2 className='text-lg text-blue-400 font-semibold'>
                                        762
                                    </h2>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <h2 className='text-lg text-gray-500 font-semibold'>
                                        Total Cost
                                    </h2>
                                    <h2 className='text-lg text-blue-400 font-semibold'>
                                        $556834
                                    </h2>
                                </div>

                            </div>
                        </div>
                        <div className='shadow-md p-4'>
                            <div className='flex justify-between items-center'>
                                <h4 className='text-lg font-semibold text-zinc-500'>To Selling Products</h4>
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'this year',
                                            label: 'This Year',
                                        },
                                        {
                                            value: 'this month',
                                            label: 'This Month',
                                        },
                                        {
                                            value: 'last month',
                                            label: 'Last Month',
                                        },
                                    ]}
                                />
                            </div>
                            <Divider />
                            <Table 
                            columns={columns} 
                            dataSource={data} 
                            size="middle" 
                            pagination={false}
                            />

                        </div>
                    </div>
                </div>
            </LayoutEl>
        </div>
    )
}

export default Inventry