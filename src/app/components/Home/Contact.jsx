'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string()
            .matches(/^\d{10}$/, "Phone number must be 10 digits")
            .required("Phone number is required"),
        company: Yup.string().required("Company name is required"),
        project: Yup.string().required("Please describe your project or requirement"),
        existingClient: Yup.string().required("This field is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log("Form Submitted:", values);
        resetForm();
        alert("Thank you for reaching out! We'll get back to you soon.");
    };

    return (
        <div id="contact" className="p-20 flex flex-col md:flex-row space-y-10 md:space-y-0 gap-20">
            <div className="flex-[3] space-y-8">
                <div>
                    <p className="text-xl ">Contact Us</p>
                    <p className="text-4xl font-semibold">Elevate your brand to new heights with our expert services.
                    </p>
                </div>
                <div>
                    <p className="text-xl">Support</p>
                    <p className="text-3xl">Vaibhav Baranwal</p>
                    <p className="text-3xl">91 931515961</p>
                </div>
                <div>
                    <p className="text-gray-500 mt-2">
                    We are dedicated to exceeding your expectations, driving your success, and delivering solutions that elevate your business to the next level
                    </p>
                </div>
            </div>
            <div className="flex-[6] border rounded-lg p-5 shadow-lg">
                <Formik
                    initialValues={{
                        firstname:"",
                        lastname: "",
                        email: "",
                        phone: "",
                        company: "",
                        project: "",
                        existingClient: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium">First Name</label>
                                    <Field
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter your first name"
                                        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <ErrorMessage
                                        name="firstname"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Last Name</label>
                                    <Field
                                        type="text"
                                        name="lastname"
                                        placeholder="Enter your last name"
                                        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <ErrorMessage
                                        name="lastname"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Business Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter your business email"
                                        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Contact Number</label>
                                    <Field
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your contact number"
                                        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Organization</label>
                                    <Field
                                        type="text"
                                        name="company"
                                        placeholder="Enter your organization name"
                                        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <ErrorMessage
                                        name="company"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div>
                                <label className="block text-gray-700 font-medium">Existing Client Status
                                </label>
                                <Field as="select"
                                    name="existingClient"
                                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Please select</option>
                                    <option value="yes">Existing Client</option>
                                    <option value="no">New Client</option>
                                </Field>
                                <ErrorMessage name="existingClient"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">
                                    Project Overview
                                </label>
                                <Field
                                    as="textarea"
                                    name="project"
                                    placeholder="Please describe your project objectives and requirements"
                                    rows="4"
                                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <ErrorMessage
                                    name="project"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-red-700 transition duration-200 font-medium"
                            >
                                Submit Request
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Contact