import React from "react";
import { Button } from "@/components/ui/Button";
import { Rocket } from "lucide-react";

export const SubmitButton = ({ isSubmitting }) => (
    <div style={{ height: 60, width: "100%" }}>
        <Button rightIcon={<Rocket />} type="submit" disabled={isSubmitting}>
            Submit
        </Button>
    </div>
);
