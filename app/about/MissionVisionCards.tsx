import React from "react";
import { missionsApi } from "@/lib/strapi";
import { defaultMissions } from "@/app/about/DefaultMissions";
import { MissionVisionCardsClient } from "./MissionVisionCardsClient";

const MissionVisionCards = async () => {
    // let missions = defaultMissions;
    let missions = null;

    try {
        const response = await missionsApi.getAll({
            sort: "order:asc",
            pageSize: 10,
        });

        if (response.data && response.data.length > 0) {
            missions = response.data;
        }
    } catch (error) {
        console.warn(
            "Failed to fetch missions from Strapi, using default data:",
            error,
        );
    }

    return <MissionVisionCardsClient missions={missions} />;
};

export default MissionVisionCards;
