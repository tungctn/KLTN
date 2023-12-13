import React from "react";
import { Form, Input, DatePicker } from "antd";

const Profile = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      birthday: values.birthday
        ? values.birthday.format("YYYY-MM-DD")
        : undefined,
    };
    console.log(formattedValues);
  };
  const onSubmit = () => {
    onFinish(form.getFieldsValue());
  };
  return (
    <div className="w-full p-4">
      <Form
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        labelCol={{
          span: 4,
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          },
        }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item
          label={<span className="text-2xl">Name</span>}
          name="name"
          labelAlign="center"
        >
          <Input placeholder="Tap Here to Type" className="py-3" />
        </Form.Item>
        <Form.Item
          label={<span className="text-2xl">Birthday</span>}
          name="birthday"
        >
          <DatePicker format="DD/MM/YYYY" className="py-3 w-full" />
        </Form.Item>
        <Form.Item label={<span className="text-2xl">Age</span>} name="age">
          <Input placeholder="Tap Here to Type" className="py-3" />
        </Form.Item>
        <Form.Item
          label={<span className="text-2xl">Address</span>}
          name="address"
        >
          <Input placeholder="Tap Here to Type" className="py-3" />
        </Form.Item>
        {/**
         * phone number of doctor
         */}
        <Form.Item
          label={<span className="text-2xl">Doctor's phone</span>}
          name="phone"
        >
          <Input placeholder="Tap Here to Type" className="py-3" />
        </Form.Item>
      </Form>
      <button
        className="w-full ant-btn ant-btn-primary mt-4 bg-cyan-200 hover:bg-cyan-300 p-3 border-2 border-black rounded-xl text-2xl"
        onClick={onSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default Profile;
