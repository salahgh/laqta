import React from "react";
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const ContactInfo = () => (
    <div className="flex-1 flex flex-col gap-6 justify-center items-center px-3 lg:px-12 md:min-w-4xl">
        <Badge variant="default" shadow>
            Let's Connect
        </Badge>

        <h2 className={"leading-tight text-gray-100"}>Get in Touch</h2>

        <div className="text-gray-400 space-y-4">
            <p className="leading-relaxed text-secondary-gray text-responsive-lg">
                Whether you have a project in mind or a question about our
                services, we’d love to hear from you. Fill out the form and
                we’ll get back to you within 24 hours.
            </p>

            <div className={"space-y-2 text-responsive-lg"}>
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
