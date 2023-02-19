export interface Meteor {
    name: string;
    id: string;
    nametype: string;
    recclass: string;
    mass: string;
    fall: string;
    year: string;
    reclat: string;
    reclong: string;
    geolocation: {
        type: string;
        coordinates: [number, number]
    }
}

export enum Messages {
    loading = 'Loading...',
    massNotFound = 'The mass was not found, jumping to first-year where there is a mass that fits the criteria'
}
