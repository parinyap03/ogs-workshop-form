import { Form, Input } from "antd";

type FieldType = {
  email?: string;
  phone?: string;
};

const Formstep2: React.FC = () => {
  return (
    <>
      <div style={{ width: "300px" }}>
        <div className="text-xl font-bold mt-5 mb-5">Contact :</div>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          
          rules={[{ required: true, message: "Please input valid email!", type: "email"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input valid phone!" , pattern: /^[0-9]{10}$/ ,}]}
        >
          <Input  />
        </Form.Item>
      </div>
    </>
  );
};

export default Formstep2;
