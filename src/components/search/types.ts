export interface SearchProps {
    pickedDate?: Date;
    filterText?: string;
    onPickDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    setFilterText: React.Dispatch<React.SetStateAction<string | undefined>>;
}
