import { Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
};

const Formstep1: React.FC = () => {
  return (
    <>
      <div style={{width:"300px"}}>
        <div className="text-xl font-bold mt-5 mb-5">General :</div>

        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </div>
    </>
  );
};

export default Formstep1;
