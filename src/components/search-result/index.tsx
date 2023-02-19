import React from 'react';
import MeteorResultCard from './components/meteor-result-card';
import { MeteorCounterText, MeteorsCounter, MeteorsDetails, SearchResultContainer } from './styles';
import { SearchResultProps } from './types';

const SearchResult: React.FC<SearchResultProps> = ({ filteredMeteors }) => {
    return (
        <SearchResultContainer>
            <MeteorsCounter>
                <MeteorCounterText style={{color: 'white'}}>Number of Meteors: {filteredMeteors.length}</MeteorCounterText>
            </MeteorsCounter>
            <MeteorsDetails>
                {filteredMeteors.map((meteor) => (
                    <MeteorResultCard key={meteor.id} name={meteor.name} />
                ))}
            </MeteorsDetails>
        </SearchResultContainer>
    )
};

export default SearchResult;
