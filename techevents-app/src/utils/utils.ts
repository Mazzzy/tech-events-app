import { TechEvent, FilterState, CityDetails } from "../store/types";
import moment from "moment";

// local storage related
export const getEventsFromLS = (): TechEvent | any => {
    if (localStorage.getItem("selected_events")) {
        return JSON.parse(localStorage.getItem("selected_events") || "{}");
    }
    return {};
};

export const saveEventsToLS = (eventsList: TechEvent) => {
    localStorage.setItem("selected_events", JSON.stringify(eventsList));
};

// date time related helpers
export const hoursFormat = (date: Date): string => {
    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes;
};

export const getCityLabel = (cities: CityDetails[], city: number): string => {
    const { name = "" } = cities.find(({ id }) => id === city) || {};
    return name;
};

const getTime = (currentTime: any): string => {
    if (!currentTime || !currentTime.isValid()) {
        return "";
    }
    const splitMorning: number = 7; // 24hr time to split the afternoon
    const splitAfternoon: number = 11; // 24hr time to split the afternoon
    const splitEvening: number = 17; // 24hr time to split the evening
    const splitNight: number = 24; // 24hr time to split the evening

    const currentHour: number = parseFloat(currentTime.format("HH"));
    if (currentHour >= splitMorning && currentHour <= splitAfternoon) {
        return "morning";
    } else if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
        return "afternoon";
    } else if (currentHour >= splitEvening && currentHour <= splitNight) {
        return "evening";
    }
    return "night";
};

// filter out matched criterias
export const getVisibleEvents = (techEvents: TechEvent[], filters: FilterState, activeTab: string) => {
    const { text, city, free, dayPart } = filters;
    const selectedEventsFromLS = getEventsFromLS();
    return techEvents
        .filter((techEvent) => {
            const textEventsMatch: boolean = text ? techEvent.name.toLowerCase().includes(text.toLowerCase()) : true;
            const cityMatch: boolean = city ? city === techEvent.city : true;
            const freeEventsMatch: boolean = free ? techEvent.isFree : true;
            const dayPartMatch: boolean =
                dayPart && dayPart.length > 0 ? dayPart.includes(getTime(moment(techEvent.startDate))) : true;
            const myEventsMatch: boolean =
                activeTab === "my" ? Object.keys(selectedEventsFromLS).includes(String(techEvent.id)) : true;

            return myEventsMatch && textEventsMatch && cityMatch && freeEventsMatch && dayPartMatch;
        })
        .sort((a: any, b: any) => moment(a.startDate).diff(b.startDate));
};
