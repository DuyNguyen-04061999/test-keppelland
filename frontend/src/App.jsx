import React, { useState } from "react";
import Field from "./components/Field";
import { useForm } from "./hooks/useForm";
import { http, regex, require } from "./utils";
import { message } from "antd";
import { emailService } from "./services/email.service";
import { LoadingOutlined } from "@ant-design/icons";
const App = () => {
  const [loading, setLoading] = useState(false);

  const { register, form, validate } = useForm({
    email: [
      require({ message: "Vui lòng điền email" }),
      regex("email", "Địa chỉ email chưa chính xác"),
    ],
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        await emailService.postEmail(form);
        message.success("Đã gửi email thành công, vui lòng kiểm tra hộp thư");
      } catch (error) {
        message.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <form
      className="form w-[500px] mx-auto border border-gray-500 mt-[100px] rounded p-10"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <h1 className="uppercase text-center text-2xl font-bold">Contact us</h1>
      <Field
        type="text"
        placeholder="Enter your email"
        {...register("email")}
      />
      <button className="bg-black p-4 text-white uppercase mx-auto block mt-10 rounded">
        {loading ? (
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
          />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default App;
