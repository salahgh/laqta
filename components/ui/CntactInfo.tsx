import React from "react";
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";

export const ContactInfo = () => (
    <div className="flex-1 flex flex-col justify-center px-3 lg:px-12 md:max-w-[50%]">
        <div className="mb-8 flex justify-center md:justify-start">
            <span
                className="inline-block border md:px-6 md:py-4 px-4 py-2 rounded-full shadow-lg"
                style={{
                    color: "#54B3F1",
                    borderColor: "#54B3F1",
                }}
            >
                Let's Connect
            </span>
        </div>

        <div
            className={"leading-tight text-gray-100 md:text-[56px] text-[42px]"}
        >
            Get in Touch
        </div>

        <div className="space-y-6 text-gray-400">
            <p className="leading-relaxed text-secondary-gray text-body-md mt-4">
                Whether you have a project in mind or a question about our
                services, we’d love to hear from you. Fill out the form and
                we’ll get back to you within 24 hours.
            </p>

            <div className="space-y-4 text-secondary-gray md:text-display-xs text-body-md">
                <div className={"flex gap-2 items-center"}>
                    <PhoneCall className={"w-8 h-8"} />
                    <div>+213 770 123 456</div>
                </div>
                <div className={"flex gap-2 items-center"}>
                    <Mail className={"w-8 h-8"} />
                    <div>helllo@laqta.agency</div>
                </div>

                <div className={"flex gap-1 items-center"}>
                    <MapPin className={"w-10 h-10"} />
                    <div className="leading-relaxed">
                        LAQTA Studio, 1600, Algiers,
                        <br />
                        Algeria
                    </div>
                </div>
            </div>
        </div>
    </div>
);
