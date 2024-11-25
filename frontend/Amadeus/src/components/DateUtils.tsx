export const getParsedDate = (date: string)  => {
    const rawDate = new Date(date);

    const year = rawDate.getFullYear();
    const month = rawDate.getMonth() + 1;
    const day = rawDate.getDate();
    
    return `${year}-${month}-${day}`;
}

export const getParsedTime = (date: string)  => {
    const rawDate = new Date(date);
    
    const hours = rawDate.getHours();
    const minutes = rawDate.getMinutes();
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function parseISODurationToTime(duration: string): string {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
    const match = duration.match(regex);

    if (!match) {
        throw new Error("Not valid format");
    }
    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;

    return `${hours}H ${minutes}M`;
}