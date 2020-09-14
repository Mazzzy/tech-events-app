export const hoursFormat = (date: Date): string => {
    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ':' + minutes;
}