import {
  Form,
  Input,
  Radio,
  DatePicker,
  Checkbox,
  Switch,
  Divider,
  GetProp,
  CheckboxProps,
} from "antd";
import React, { useState } from "react";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["ดูหนัง", "ฟังเพลง", "เล่นเกมส์", "อื่นๆ"];
const defaultCheckedList = [""];

const Formstep3: React.FC = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  return (
    <>
      <div style={{ width: "300px" }}>
        <div className="text-xl font-bold mt-5 mb-5">Confirm :</div>
        <Form.Item label="birth date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please select your gender!"}]}

         >
          Gender :{" "}
          <Radio.Group>
            <Radio value="male"> ชาย </Radio>
            <Radio value="female"> หญิง </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="งานอดิเรก">
          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
            Check all
          </Checkbox>
          <Divider style={{ margin: 10 }} />
          <CheckboxGroup
            style={{
              display: "flex",
              width: "300px",
              justifyContent: "space-between",
            }}
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <Input placeholder="ระบุ" />
        </Form.Item>
        <Form.Item valuePropName="checked">
          ยอมรับเงื่อนไข : <Switch />
        </Form.Item>
      </div>
    </>
  );
};

export default Formstep3;
