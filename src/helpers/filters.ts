import { Meteor } from '../types';

const checkIfYearsAreEqual = (d1: Date, d2: Date) => d1.getFullYear() === d2.getFullYear();
const checkIfMeteorMassBiggerThanFilteredMASS = (meteorMass: string, filterMass: string) => parseInt(meteorMass) >= parseInt(filterMass);

export const getMostRelevantYearForMassFilter = (data: Array<Meteor>, massFilter?: string): Date | undefined => {
    if (!massFilter) {
        return;
    }

    const relevantMeteor = data.find((meteor) => checkIfMeteorMassBiggerThanFilteredMASS(meteor.mass, massFilter));

    if (relevantMeteor) {
        return new Date(relevantMeteor.year);
    }
    return;
};

export const filterData = (data: Array<Meteor>, pickedDate?: Date, massFilter?: string): Meteor[] => {
    if (!pickedDate) {
        return [];
    }

    const filteredData = data.filter((meteor) => {
        if (massFilter) {
            return checkIfYearsAreEqual(new Date(meteor.year), pickedDate) && checkIfMeteorMassBiggerThanFilteredMASS(meteor.mass, massFilter);
        }
        return checkIfYearsAreEqual(new Date(meteor.year), pickedDate);
    });

    return filteredData;
};

export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
