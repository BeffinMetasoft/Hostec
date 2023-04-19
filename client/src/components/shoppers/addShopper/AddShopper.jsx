import React from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';
import { Link } from 'react-router-dom';
import { addShopper } from '../../../api/AdminRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  // wrapperCol: {
  //   xs: {
  //     span: 24,
  //   },
  //   sm: {
  //     span: 16,
  //   },
  // },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function AddShopper() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {

    console.log('Received values of form: ', values);
    try {
      const { data } = await addShopper(values)
      console.log(data);
      if (data.success) {
        toast.success('Shopper Created', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast(error.message)
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="87">+88</Option>
        <Option value="87">+571</Option>
        <Option value="87">+971</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className='flex h-screen justify-center items-center'>
      <div>
        <h1 className='text-center m-5 text-xl font-bold'>Add Shopper</h1>

        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '86',
          }}
          style={{
            // maxWidth: 600,
            width: 300
          }}
          scrollToFirstError
        >

          <label htmlFor="" className='text-xl font-semibold'>Name </label>
          <Form.Item
            name="name"
            // label="Name "
            className='mb-2'
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
                whitespace: true,
              },
            ]}
          >

            <Input />
          </Form.Item>

          <label htmlFor="" className='text-xl font-semibold'>E-mail</label>
          <Form.Item
            name="email"
            // label="E-mail"
            className='mb-2'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >

            <Input />
          </Form.Item>

          <label htmlFor="" className='text-xl font-semibold'>Phone Number</label>
          <Form.Item
            name="phone"
            // label="Phone Number"
            className='mb-2'
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >

            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <label htmlFor="" className='text-xl font-semibold'>Password</label>
          <Form.Item
            name="password"
            // label="Password"
            className='mb-2'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <label htmlFor="" className='text-xl font-semibold'>Confirm Password</label>
          <Form.Item
            name="confirm"
            // label="Confirm Password"
            className='mb-2'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >

            <Input.Password />
          </Form.Item>


          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <Link href="">agreement</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button className='bg-blue-800' type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddShopper