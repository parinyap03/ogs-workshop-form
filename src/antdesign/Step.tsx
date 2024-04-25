import React, { useState } from "react";
import { Button, Form, message, Steps, theme } from "antd";
import Formstep1 from "./Formstep1";
import Formstep2 from "./Formstep2";
import Formstep3 from "./Formstep3";

const steps = [
  {
    title: "",
    content: <Formstep1 />,
  },
  {
    title: "",
    content: <Formstep2 />,
  },
  {
    title: "",
    content: <Formstep3 />,
  },
];

const Step = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current !== steps.length - 1) {
      setCurrent(current + 1);
    } else {
      message.success("Submit success!");
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <div className="flex flex-col  items-center justify-center h-screen bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500">
        <div className="h-fit w-fit bg-white rounded-lg ">
          <div className="p-6 mt-3 ml-3 mr-3">
            <h1 className="text-xl font-bold  text-center mb-5">
              Sign up Form
            </h1>
            <Form
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={next}
              autoComplete="off"
            >
              <Steps current={current} items={items} />
              <div>{steps[current].content}</div>
              <div
                style={{
                  marginTop: 24,
                }}
              >
                {current > 0 && (
                  <Button className="mr-5 w-24 bg-orange-500" onClick={() => prev()} >
                    Previous
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button type="primary" htmlType="submit" className="w-24 bg-purple-500">
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button type="primary" htmlType="submit" className="w-24 bg-pink-500">
                    Done
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Step;
