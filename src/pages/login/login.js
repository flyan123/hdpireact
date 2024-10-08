import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Button, Form, Input } from "antd";
import MyNotification from "../../components/mynotification.js";
import { $login } from "../../api/index.js";
export default function login() {
  // 导航
  let navigate = useNavigate()
  useEffect(()=>{
    // 判断是否已登录成功
    if(sessionStorage.getItem('token')){
      navigate('./layout')
    }
  })
  // 通知框状态
  let [notiMsy, setNotiMsy] = useState({ type: "", description: "" });
  // 表单
  let [form] = Form.useForm();
  // 表单成功提交方法
  const onFinish = async (values) => {
    return  navigate('/layout')
    let { message, success } = await $login(values);
    // 判断是否登录成功
    if (success) {
      setNotiMsy({ type: "success", description: message });
      // 跳转到首页
      navigate('/layout')
    } else {
      setNotiMsy({ type: "error", description: message });
    }
  };
  return (
    <div className="login">
      <div className="content">
        <h2>管理系统</h2>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          initialValues={{
            loginId: "",
            loginPwd: "",
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="loginId"
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="loginPwd"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button
              onClick={
                //  resetFields:重置一组字段到 initialValues
                () => {
                  form.resetFields();
                }
              }
              style={{ marginLeft: "20px" }}
            >
              取消
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* {contextHolder} */}
      <MyNotification notiMsy={notiMsy} />
    </div>
  );
}
