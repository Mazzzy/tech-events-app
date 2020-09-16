import { TechEvent } from "../store/types";

export const hoursFormat = (date: Date): string => {
    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes;
};

export const getVisibleEvents = (techEvents: TechEvent[], text: string, free: boolean) => {
    return techEvents.filter((techEvent) => {
        const textEventsMatch = techEvent.name.toLowerCase().includes(text.toLowerCase());
        const freeEventsMatch = typeof free !== "boolean" || techEvent.isFree;
        return textEventsMatch && freeEventsMatch;
    });
};
