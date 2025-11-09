import React from "react";
import Image from "next/image";

const LetsStartProjectSection = () => {
    return (
        <div className={"mt-12 md:mt-24"}>
            <Image
                src="/images/letsStartProject.png"
                alt="Let's Start Your Project"
                width={1920}
                height={600}
                className="w-full h-auto"
            />
        </div>
    );
};

export default LetsStartProjectSection;
