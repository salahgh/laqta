import React from "react";
import { Button } from "@/components/ui/Button";
import { Rocket } from "lucide-react";

export const SubmitButton = ({ isSubmitting }) => (
    <div style={{ width: "100%" }} className={"h-14 md:h-16 "}>
        <Button rightIcon={<Rocket />} type="submit" disabled={isSubmitting}>
            Submit
        </Button>
    </div>
);
