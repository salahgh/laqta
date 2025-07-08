import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormInput } from "@/components/ui/FormInput";

// Yup validation schema
const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be less than 50 characters")
        .matches(/^[A-Za-z\s]+$/, "First name can only contain letters")
        .required("First name is required"),
    lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be less than 50 characters")
        .matches(/^[A-Za-z\s]+$/, "Last name can only contain letters")
        .required("Last name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email",
        )
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^[+]?[\d\s\-\(\)]+$/, "Invalid phone number format")
        .test(
            "phone-length",
            "Phone number must be at least 10 digits",
            (value) => {
                if (!value) return false;
                return value.replace(/\D/g, "").length >= 10;
            },
        )
        .required("Phone number is required"),
    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message must not exceed 500 characters")
        .required("Message is required"),
});

// Custom hook for handling form input changes
function useFormInput(name, formik) {
    return {
        name,
        value: formik.values[name],
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        error: formik.touched[name] && formik.errors[name],
    };
}

const PersonalInfoForm = ({
    initialValues = {
        firstName: "Sarah",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    },
    currentStep = 1,
    totalSteps = 4,
}) => {
    const onSubmit = (values, formikBag) => {
        // Handle form submission logic here
        console.log("Form submitted with values:", values);
        formikBag.setSubmitting(false);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, formikBag) => {
            if (onSubmit) {
                onSubmit(values, formikBag);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-3">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                    label="First Name"
                    {...useFormInput("firstName", formik)}
                    placeholder="Enter your first name"
                    className=""
                    variant={"compact"}
                    style={{
                        backgroundColor: "#141733",
                        color: "#D2D2D3",
                    }}
                />
                <FormInput
                    label="Last Name"
                    variant={"compact"}
                    {...useFormInput("lastName", formik)}
                    placeholder="e.g. Benyamina"
                    style={{
                        backgroundColor: "#141733",
                        color: "#D2D2D3",
                    }}
                />
            </div>

            {/* Email Field */}
            <FormInput
                label="Email Address"
                {...useFormInput("email", formik)}
                placeholder="e.g. sarah.benyamina@email.com"
                variant={"compact"}
                style={{
                    backgroundColor: "#141733",
                    color: "#D2D2D3",
                }}
            />

            {/* Phone Field */}
            <FormInput
                label="Phone number"
                {...useFormInput("phone", formik)}
                variant={"compact"}
                placeholder="0 000 000"
                style={{
                    backgroundColor: "#141733",
                    color: "#D2D2D3",
                }}
            />

            {/* Message Field */}
            <FormInput
                label="Message"
                {...useFormInput("message", formik)}
                variant={"compact"}
                as="textarea"
                placeholder="Tell us more about what you're looking for..."
                style={{
                    backgroundColor: "#141733",
                    color: "#D2D2D3",
                    width: "100%",
                    height: 200,
                }}
            />

            {/* Character Count for Message */}
            {formik.values.message && (
                <div className="text-right text-sm text-slate-400">
                    {formik.values.message.length}/500 characters
                </div>
            )}
        </form>
    );
};

export default PersonalInfoForm;
