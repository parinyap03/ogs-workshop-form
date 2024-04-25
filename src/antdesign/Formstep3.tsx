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
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
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
        <Form.Item
          label="birth date"
          name="birth"
          rules={[
            { required: true, message: "Please select your birth date!" },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          // className="[&_div]:!flex-row [&_div_div:last-child]:!w-auto [&_div_.ant-form-item-explain-error]:translate-x-[-35%]"
          className="[&_div]:!flex-row [&_div_div:last-child]:!w-auto"
          label="Gender :"
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group
          style={{marginBottom: "5px"}}
          >
            <Radio value="male"> ชาย </Radio>
            <Radio value="female"> หญิง </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="งานอดิเรก">
          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
            เลือกทั้งหมด
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
        <Form.Item
          className="[&_div]:!flex-row [&_div_div:last-child]:!w-auto "
          label="ยอมรับเงื่อนไข"
          name="accept"
          rules={[{ validator(_,value) {
            // console.log(value);
            if (value) {
              return  Promise.resolve();
            }
            return Promise.reject(new Error ('Please accept condition!'));
          },}]}
          valuePropName="checked"
        >
          <Switch style={{marginBottom:"5px"}} />
        </Form.Item>
      </div>
    </>
  );
};

export default Formstep3;
