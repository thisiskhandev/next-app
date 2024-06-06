"use client";

import {
  Button,
  Input,
  Tabs,
  Tab,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";

interface formInterface {
  isRegisterActive?: boolean;
}

interface roleInterface {
  administrator: string;
  editor: string;
  author: string;
  contributor: string;
  subscriber: string;
}

const roles: roleInterface = {
  administrator: "administrator",
  editor: "editor",
  author: "author",
  contributor: "contributor",
  subscriber: "subscriber",
};

// console.log(roles);

const FormSubmission = ({ isRegisterActive }: formInterface) => {
  const [roleState, setRole] = useState("");

  useEffect(() => {
    if (roleState) {
      if (roleState == "0") {
        setRole("administrator");
      } else if (roleState == "1") {
        setRole("editor");
      } else if (roleState == "2") {
        setRole("author");
      } else if (roleState == "3") {
        setRole("contributor");
      } else if (roleState == "4") {
        setRole("subscriber");
      }
    }
    formik.values.roles === roleState;
  }, [roleState]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ...(isRegisterActive && {
        username: "",
        first_name: "",
        last_name: "",
        roles: "",
      }),
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid Email address").required(),
      password: Yup.string()
        .min(3, "Password length does not meet the minium requirement.")
        .required(),
      ...(isRegisterActive && {
        username: Yup.string()
          .test(
            "no-spaces",
            "Username should not contain spaces",
            (value) => !value || !/\s/.test(value)
          )
          .required("Username is a required"),
        first_name: Yup.string()
          .min(5)
          .max(50)
          .required("First Name is required"),
        last_name: Yup.string()
          .min(5)
          .max(50)
          .required("Last Name is required"),
        roles: Yup.string().required(),
      }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log("Values", formik.values.roles);
  // console.log("Errors", formik.errors);

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    formik;
  return (
    <form onSubmit={handleSubmit}>
      <section>
        <PageTitle
          title={isRegisterActive ? "Register" : "Login"}
          classes="text-white mt-0 pt-8"
        />
        <div className="flex gap-5 flex-col">
          {isRegisterActive && (
            <>
              <div className="">
                <Input
                  id="username"
                  type="text"
                  label="Username"
                  // value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.username && errors.username && (
                  <small className="text-red-500">{errors.username}</small>
                )}
              </div>
              <div className="">
                <Input
                  id="fname"
                  type="text"
                  label="First Name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.first_name && errors.first_name && (
                  <small className="text-red-500">{errors.first_name}</small>
                )}
              </div>
              <div className="">
                <Input
                  id="lname"
                  type="text"
                  label="Last Name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.last_name && errors.last_name && (
                  <small className="text-red-500">{errors.last_name}</small>
                )}
              </div>
            </>
          )}
          <div className="">
            <Input
              id="email"
              type="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <small className="text-red-500">{errors.email}</small>
            )}
          </div>
          <div className="">
            <Input
              id="password"
              type="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <small className="text-red-500">{errors.password}</small>
            )}
          </div>
          {isRegisterActive && (
            <div>
              <Select
                label="Assign a Role"
                placeholder="Select Role"
                className="text-black"
                onChange={(e) => setRole(e.target.value)}
                value={values.roles}
                onBlur={handleBlur}
              >
                {Object.values(roles).map((items, ind) => (
                  <SelectItem key={ind} className="text-black">
                    {items}
                  </SelectItem>
                ))}
              </Select>
              {touched.roles && errors.roles && (
                <small className="text-red-500">{errors.roles}</small>
              )}
            </div>
          )}
          <Button
            type="submit"
            variant="ghost"
            className="text-white hover:text-black"
          >
            Submit
          </Button>
        </div>
      </section>
    </form>
  );
};

const FormTabs = () => {
  return (
    <div className="flex w-full flex-col md:pt-20">
      <Tabs aria-label="Options">
        <Tab key="login" title="Login">
          <FormSubmission />
        </Tab>
        <Tab key="register" title="Sign Up">
          <FormSubmission isRegisterActive />
        </Tab>
      </Tabs>
    </div>
  );
};

export default FormTabs;
