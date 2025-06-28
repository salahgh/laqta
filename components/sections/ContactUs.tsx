"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { SubmitButton } from "@/components/ui/SubmitButton";
import { FormInput } from "@/components/ui/FormInput";
import { ContactInfo } from "@/components/ui/CntactInfo";

// Main Contact Form Component
interface ContactFormValues {
    fullname: string;
    email: string;
    phone: string;
    message: string;
}

const ContactForm = () => {
    const formik = useFormik<ContactFormValues>({
        initialValues: {
            fullname: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().trim().required("Full name is required"),
            email: Yup.string()
                .trim()
                .email("Invalid email address")
                .required("Email is required"),
            phone: Yup.string().trim().required("Phone number is required"),
            message: Yup.string().trim().required("Message is required"),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                    },
                );

                if (response.ok) {
                    alert("Message sent successfully!");
                    resetForm();
                } else {
                    throw new Error("Failed to send message");
                }
            } catch (error) {
                alert("Error sending message. Please try again.");
                console.error("Error:", error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div
            className="bg-primary flex items-center justify-center px-4"
            style={{ paddingTop: 188, paddingBottom: 188 }}
        >
            <div className="w-full overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left side - Contact Info */}
                    <ContactInfo />

                    {/* Right side - Form */}

                    <div
                        style={{
                            background:
                                "linear-gradient(358deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)",
                            padding: 3,
                            borderRadius: 16,
                            zIndex: 20,
                        }}
                        className={"shadow-2xl"}
                    >
                        {/* Inner content */}
                        <div
                            style={{
                                width: 689,
                                padding: 48,
                                background:
                                    "linear-gradient(180deg, rgba(29, 34, 53, 1) 0%, rgba(18, 19, 24, 1) 100%)",
                                borderRadius: 15, // 62 - 16 (border width)
                                zIndex: 19,
                            }}
                            className={"shadow-2xl"}
                        >
                            <form
                                onSubmit={formik.handleSubmit}
                                className="h-full flex flex-col"
                                style={{ borderRadius: 62 }}
                            >
                                <div className="flex-1 space-y-8">
                                    <FormInput
                                        label="Fullname"
                                        name="fullname"
                                        placeholder="Benyamina Sarah"
                                        value={formik.values.fullname}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.fullname &&
                                            (formik.errors.fullname as string)
                                        }
                                    />

                                    <FormInput
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        placeholder="sarah.benyamina@email.com"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.email &&
                                            (formik.errors.email as string)
                                        }
                                    />

                                    <FormInput
                                        label="Phone number"
                                        name="phone"
                                        placeholder="05 0000 00 00"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.phone &&
                                            (formik.errors.phone as string)
                                        }
                                    />

                                    <FormInput
                                        label="Message"
                                        name="message"
                                        as="textarea"
                                        placeholder="Tell us more about what you're looking for..."
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.message &&
                                            (formik.errors.message as string)
                                        }
                                    />
                                </div>

                                <div className="mt-8">
                                    <SubmitButton
                                        isSubmitting={formik.isSubmitting}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
