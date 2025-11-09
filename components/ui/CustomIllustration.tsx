import Image from "next/image";

// Example usage with custom SVG illustration
export const CustomIllustration = () => (
    <div className="">
        {/* Placeholder for your SVG - replace this div with your actual SVG */}
        <Image
            src="/images/camera.svg"
            alt="Camera Illustration"
            width={300}
            height={300}
            className="ml-4"
            style={{ marginTop: -30 }}
        />
    </div>
);
