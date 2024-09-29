import React from 'react'
import { useState } from 'react'
import LayoutEl from '../../shared/Layout/Index'
import { Card, Button, Drawer, Form, Input, Select, Image, Upload, Table } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const { Item } = Form;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function Products() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    //table Info
    const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
        },
        {
            title: 'Photos',
            dataIndex: 'photos',
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
            brand: 'Nokia',
            name: 'Nokia 1100',
            qty: '237',
            price: '2100',
            desc: 'over latest product',
            photos: (
                <div className='flex gap-3'>
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                </div>
            ),
            createdAt: 32,
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined />} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined />} />
                </div>
            ),
        },
        {
            key: '2',
            category: 'Jim Green',
            brand: 'Nokia',
            name: 'Nokia 1100',
            qty: '237',
            price: '2100',
            desc: 'over latest product',
            photos: (
                <div className='flex gap-3'>
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                </div>
            ),
            createdAt: 42,
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined />} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined />} />
                </div>
            ),
        },
        {
            key: '3',
            category: 'Joe Black',
            brand: 'Nokia',
            name: 'Nokia 1100',
            qty: '237',
            price: '2100',
            desc: 'over latest product',
            photos: (
                <div className='flex gap-3'>
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                    <Image
                        src='/sq-1.jpg'
                        width={60}
                        height={40}
                    />
                </div>
            ),
            createdAt: 32,
            action: (
                <div className='flex gap-x-2'>
                    <Button shape='circle' className='text-white bg-green-400' icon={<EditOutlined />} />
                    <Button shape='circle' className='text-white bg-rose-400' icon={<DeleteOutlined />} />
                </div>
            ),
        },
    ];

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    //get form data
    const onFinish = (values) => {
        console.log(values)
    }


    return (
        <LayoutEl>
            <div className='grid'>
                <Card
                    title={<h1 className='text-2xl font-semibold'>
                        Products List
                    </h1>}
                    extra={
                        <div className='flex gap-4'>
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

                            <Select
                                showSearch
                                placeholder="Select a brand"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: 'nokia',
                                        label: 'Nokia',
                                    },
                                ]}
                            />

                            <Button
                                onClick={() => { setDrawerOpen(true) }}
                                type="primary"
                                icon={<PlusOutlined />}>
                                Add new product
                            </Button>
                        </div>
                    }
                >
                    <Table
                        columns={columns}
                        dataSource={data}
                        size="middle" />
                </Card>
            </div>
            <Drawer
                open={drawerOpen}
                width={720}
                onClose={() => { setDrawerOpen(false) }}
            >
                <Form onFinish={onFinish} layout="vertical">
                    <div className='grid md:grid-cols-2 gap-x-4'>
                        <Item
                            label="Category"
                            name="category"
                            rules={[{ required: true }]}
                        >
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
                        </Item>
                        <Item
                            label="Brand"
                            name="Brand"
                            rules={[{ required: true }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a cateogry"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: 'Nokia',
                                        label: 'Apple',
                                    },
                                ]}
                            />
                        </Item>

                        <Item
                            className='md:col-span-2'
                            label="Product Name"
                            name="productName"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder='nokia 1100'
                            />
                        </Item>

                    </div>

                    <div className='grid md:grid-cols-2 gap-x-4'>
                        <Item
                            label="Product Quantity"
                            name="qty"
                            rules={[{ required: true }]}
                        >
                            <Input
                                type='number'
                                placeholder='230'
                            />
                        </Item>

                        <Item
                            label="Product Price"
                            name="price"
                            rules={[{ required: true }]}
                        >
                            <Input
                                type='number'
                                placeholder='2500'
                            />
                        </Item>
                    </div>
                    <Item
                        label="Description"
                        name="desc"
                        rules={[{ required: true }]}
                    >
                        <Input.TextArea />
                    </Item>

                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 6 ? null : uploadButton}
                    </Upload>
                    {previewImage && (
                        <Image
                            wrapperStyle={{
                                display: 'none',
                            }}
                            preview={{
                                visible: previewOpen,
                                onVisibleChange: (visible) => setPreviewOpen(visible),
                                afterOpenChange: (visible) => !visible && setPreviewImage(''),
                            }}
                            src={previewImage}
                        />
                    )}

                    <Item className='mt-4'>
                        <Button htmlType='submit' className='w-full bg-blue-500 text-white font-bold'>
                            Submit
                        </Button>
                    </Item>
                </Form>

            </Drawer>
        </LayoutEl>
    )
}

export default Products