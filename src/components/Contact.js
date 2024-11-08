import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../common/Buttons/Button";
import Typography from "../common/Typography";

const Contact = ({ setOpen }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://portfolio-server-1be8.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    }).then((res) => {
      reset({
        name: "",
        email: "",
        comment: "",
      });
      res.status === 201 && setOpen(true);
      setLoading(false);
    });
  };
  const style = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  return (
    <div
      className="relative max-md:px-5 max-w-full bg-[#fafafa] md:flex md:justify-center"
      id="contact"
    >
      <div className="py-20 md:py-24 w-full relative md:w-[70%] lg:w-[65%] xl:w-[55%] 2xl:w-[70vh]">
        <div className="flex justify-center">
          <Typography variant="h2" className="animate-character">
            CONTACT
          </Typography>
        </div>
        <div className="text-center mt-6">
          <Typography variant="h4" className="font-thin">
            Feel free to Contact me by submitting the form below and i will get
            back to you as soon as possible
          </Typography>
        </div>
        <div className="w-full min-h-fit mt-16">
          <div
            className="shadow-lg w-full py-5 px-6 md:px-12 md:py-10  rounded-xl bg-white "
            style={style}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-12"
              ref={formRef}
            >
              <input
                {...register("name")}
                placeholder="Name"
                required
                className="outline-none text-base md:text-lg px-4 py-3 rounded-lg bg-neutral-100"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                required
                className="outline-none text-base md:text-lg px-4 py-3 rounded-lg bg-neutral-100"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <textarea
                {...register("comment", { required: true })}
                rows="8"
                required
                placeholder="message"
                className="outline-none text-base md:text-lg resize-none px-4 py-2 rounded-lg bg-neutral-100"
              />
              {errors.exampleRequired1 && <span>This field is required</span>}
              <div className="flex justify-end ">
                <Button
                  label="SUBMIT"
                  loading={loading}
                  id="submit"
                  className="max-md:w-full md:px-6 md:py-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
