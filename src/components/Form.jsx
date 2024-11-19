import {Form,Button,Input,Checkbox} from 'antd'

const Forms = () => {

    const onFinish = (values) => {
       console.log(values)
    }

    return(
        <div
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            padding:'0 20px',
            backgroundColor:'#e1d4c9'
        }}
        >
            <div style={{ width: '100%', maxWidth: '500px' }}>
            <h1
            style={{
                marginLeft:'auto',
                marginRight:'auto',
                color:'#b0907a'
            }}
            >Registration Form</h1>
            <Form
             labelCol={{span:8}}
             wrapperCol={{span:16}}
            onFinish={onFinish}
            >
                <Form.Item 
                label='Email' 
                name='email' 
                rules={[
                    {
                        required:true,
                        message: 'please enter your email'
                    }
                ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                label='Password' 
                name='password'
                rules={[
                    {required:true,
                        message:'please enter your password'
                    }
                ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                name='remember'
                valuePropName='checked'
                initialValue={true}
                >
                 <Checkbox>Remember me</Checkbox>
                 </Form.Item>
                <Form.Item>
                    <Button 
                    style={{
                        backgroundColor: '#665f55', 
                        borderColor: '#665f55',     
                        color: 'white',             
                      }}
                    type='primary' htmlType='submit'>submit</Button>
                </Form.Item>
            </Form>
        </div>
        </div>
    )
}

export default Forms;