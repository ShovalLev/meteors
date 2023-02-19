import { ChangeEvent } from 'react';
import { SearchBox, SerachBoxContainer, StyledDatePicker, TextSearchInput } from './styles';
import { SearchProps } from './types';

const Search: React.FC<SearchProps> = ({ pickedDate, filterText, onPickDate, setFilterText }) => {
    return (
        <SerachBoxContainer>
            <SearchBox>
                <TextSearchInput
                    disabled={!pickedDate}
                    placeholder="Filter by larger than MASS"
                    value={filterText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                />
                <StyledDatePicker
                    maxDetail='decade'
                    key={pickedDate?.toString()}
                    onChange={onPickDate}
                    value={pickedDate}
                />
            </SearchBox>
        </SerachBoxContainer>
    )
};

export default Search;
