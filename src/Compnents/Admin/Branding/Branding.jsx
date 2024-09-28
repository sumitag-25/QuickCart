import React, { useState } from 'react'
import LayoutEl from '../../shared/Layout/Index'
import { Avatar, Button, Card, Form, Input } from 'antd'
import { EditOutlined, UserOutlined } from '@ant-design/icons'

const {Item} = Form;

function Branding() {

    // state collection
    const [disabled, setDisabled] = useState(true);


    // get form data
    const onFinish = (value) => {
        console.log(value);
        
    }

  return (
    <LayoutEl>
        <h1>
            <Card
            title={<h1 className='text-2xl font-semibold'>
                Branding Details
            </h1>}
            extra={<Button 
                onClick={()=>setDisabled(!disabled)}
                type='text' shape='circle'  icon={
                <EditOutlined />
            }></Button>}
            >
                <div className='flex items-center justify-center md:justify-end'>
                    <Avatar className='w-[40px] h-[40px]' icon={<UserOutlined/>} />
                </div>
                <Form disabled={disabled} onFinish={onFinish} layout='vertical'>
                    <div className='grid md:grid-cols-3 gap-x-4'>
                        <Item
                        label="Name"
                        name="name"
                        rules={[{required:true}]}
                        >
                            <Input placeholder='Enter Name' />
                        </Item>
                        <Item
                        label="Email"
                        name="email"
                        rules={[{required:true}]}>
                            <Input type='email' placeholder='Enter email' />
                        </Item>
                        <Item
                        label="Mobile"
                        name="modile"
                        rules={[{required:true}]}>
                            <Input type='number' placeholder='Enter number' />
                        </Item>
                    </div>

                    <div className='grid md:grid-cols-3 gap-x-4'>
                        <Item
                        label="Domain"
                        name="domain"
                        >
                            <Input type='url' placeholder='Enter domain url' />
                        </Item>

                        <Item
                        label="Facebook"
                        name="facebook">
                            <Input type='url' placeholder='Enter facebook url' />
                        </Item>

                        <Item
                        label="Twitter"
                        name="twitter"
                        rules={[{required:true}]}>
                            <Input type='url' placeholder='Enter twitter url' />
                        </Item>
                    </div>

                    <div className='grid md:grid-cols-3 gap-x-4'>
                        <Item
                        label="Whatsapp"
                        name="whatsapp"
                        >
                            <Input type='url' placeholder='Enter domain url' />
                        </Item>

                        <Item
                        label="Instagram"
                        name="instagram">
                            <Input type='url' placeholder='Enter instagram url' />
                        </Item>
                        
                        <Item
                        label="Linkedin"
                        name="linkedin"
                        rules={[{required:true}]}>
                            <Input type='url' placeholder='Enter linkedin url' />
                        </Item>
                    </div>

                    <Item
                    label="About"
                    name="about"
                    >
                        <Input.TextArea/>
                    </Item>

                    <Item
                    label="Privacy Policy"
                    name="privacy"
                    >
                        <Input.TextArea/>
                    </Item>
                    
                    <Item
                    label="Cookie Policy"
                    name="cookie"
                    >
                        <Input.TextArea/>
                    </Item>

                    <Item
                    label="Terms & conditions"
                    name="terms"
                    >
                        <Input.TextArea/>
                    </Item>

                    <Item>
                        <Button className='w-full bg-blue-500 text-white font-semibold' htmlType='submit'>
                            Submit
                        </Button>
                    </Item>

                </Form>
            </Card>
        </h1>
    </LayoutEl>
  )
}

export default Branding