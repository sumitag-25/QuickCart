import React from 'react'
import LayoutEl from '../../shared/Layout/Index'
import { Button, Card, Form, Input, Table } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function Category() {

    const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
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
            category: 'John Brown',
            createdAt: 32,
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined/>} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined/>} />
                </div>
            ),
        },
        {
            key: '2',
            category: 'Jim Green',
            createdAt: 42,
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined/>} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined/>} />
                </div>
            ),
        },
        {
            key: '3',
            category: 'Joe Black',
            createdAt: 32,
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined/>} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined/>} />
                </div>
            ),
        },
    ];

    // get form data
    const onFinish = (value) =>{
        console.log(value);
        
    }

    return (
        <LayoutEl>
            <div className='grid md:grid-cols-3 gap-4'>
                <Card
                    title={<h1 className='text-2xl font-semibold'>
                        Create catrogry
                    </h1>}
                >
                    <Form onFinish={onFinish} layout='vertical'>
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder='Enter catrgory' />
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
                        Create list
                    </h1>}
                >
                    <Table columns={columns} dataSource={data} size="middle" />
                </Card>
            </div>
        </LayoutEl>
    )
}

export default Category