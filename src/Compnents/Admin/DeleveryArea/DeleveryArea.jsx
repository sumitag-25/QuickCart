import React, { useState } from 'react'
import LayoutEl from '../../shared/Layout/Index'
import { Button, Card, Form, Input, Table, Select } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function DeliveryArea() {

    // get form data
    const onFinish = (value) => {
        console.log(value);

    }

    const columns = [
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'State',
            dataIndex: 'state',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'Pincode',
            dataIndex: 'pincode',
        },
        {
            title: 'Days',
            dataIndex: 'days',
        },
        {
            title: 'Mode',
            dataIndex: 'mode',
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const data = [
        {
            key: '1',
            country: 'India',
            state: 'UP',
            city: 'lucknow',
            pincode: '110059',
            days: '5-10 days',
            mode: 'online',
            createdAt: "12-08-2024",
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined />} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined />} />
                </div>
            ),
        },
        {
            key: '2',
            country: 'India',
            state: 'UP',
            city: 'lucknow',
            pincode: '110059',
            days: '5-10 days',
            mode: 'online',
            createdAt: "12-08-2024",
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined />} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined />} />
                </div>
            ),
        },
        {
            key: '3',
            country: 'India',
            state: 'UP',
            city: 'lucknow',
            pincode: '110059',
            days: '5-10 days',
            mode: 'online',
            createdAt: "12-08-2024",
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined />} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined />} />
                </div>
            ),
        },
    ];

    return (
        <LayoutEl>
            <div className='grid md:grid-cols-3 gap-4'>
                <Card
                    title={<h1 className='text-2xl font-semibold'>
                        Set Delivery Area
                    </h1>}
                    extra={
                        <Select
                            showSearch
                            placeholder="Select a cateogry"
                            optionFilterProp="label"
                            options={[
                                {
                                    value: 'mobile',
                                    label: 'Mobile',
                                },
                            ]}
                        />
                    }
                >
                    <Form onFinish={onFinish} layout='vertical'>
                        <Form.Item
                            label="Country"
                            name="category"
                            rules={[{ required: true }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a country"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: 'india',
                                        label: 'India',
                                    },
                                    {
                                        value: 'dubai',
                                        label: 'Dubai',
                                    },
                                    {
                                        value: 'canada',
                                        label: 'Canada',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            label="State"
                            name="state"
                            rules={[{ required: true }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a state"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: 'up',
                                        label: 'UP',
                                    },
                                    {
                                        value: 'maharastra',
                                        label: 'Maharastra',
                                    },
                                    {
                                        value: 'tamil-nadu',
                                        label: 'Tamil-nadu',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label="City"
                            name="city"
                            rules={[{ required: true }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a city"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: 'up',
                                        label: 'UP',
                                    },
                                    {
                                        value: 'maharastra',
                                        label: 'Maharastra',
                                    },
                                    {
                                        value: 'tamil-nadu',
                                        label: 'Tamil-nadu',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Pin code"
                            name="pinCode"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="Enter pincode"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Days"
                            name="days"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="with in 5-10 days"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Select payment mode"
                            name="city"
                            rules={[{ required: true }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select payment mode"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: 'all',
                                        label: 'All',
                                    },
                                    {
                                        value: 'online',
                                        label: 'Online',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button className='bg-blue-500 text-white font-semibold w-full' htmlType='submit'>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card className='md:col-span-2'
                    title={<h1 className='text-2xl font-semibold'>
                        Brand list
                    </h1>}
                >
                    <Table columns={columns} dataSource={data} size="middle" />
                </Card>
            </div>
        </LayoutEl>
    )
}

export default DeliveryArea;