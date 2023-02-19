import { useEffect, useState } from 'react';
import MessageBox from './components/message-box';
import Search from './components/search';
import SearchResult from './components/search-result';
import { delay, filterData, getMostRelevantYearForMassFilter } from './helpers/filters';
import {
    FILE_URL,
    FILTER_TIMEOUT,
    JUMP_TO_NEW_YEAR_TIMEOUT,
    LOADING_TIMEOUT
} from './constants';
import { PageContainer } from './styles';
import { Messages, Meteor } from './types';

const App = () => {
    const [filterDate, setFilterDate] = useState<Date>();
    const [filterText, setFilterText] = useState<string>();
    const [filteredMeteors, setFilteredMeteors] = useState<Meteor[]>([]);
    const [message, setMessage] = useState<Messages>();

    const updateScreenMessage = async (msg?: Messages, timeoutMS?: number) => {
        if (!msg || !msg?.length || !timeoutMS) {
            setMessage(undefined);
            return;
        }

        setMessage(msg);
        await delay(timeoutMS); // loading feeling
    };

    useEffect(() => {
        if (!filterDate) {
            setFilteredMeteors([]);
            return;
        }

        const getMeteors = async () => {
            await updateScreenMessage(Messages.loading, LOADING_TIMEOUT);

            try {
                const response = await fetch(FILE_URL);
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }

                const data = await response.json();
                const filteredFetchData = filterData(data, filterDate, filterText);
                setFilteredMeteors(filteredFetchData);
                if (filteredFetchData.length === 0 && filterText) { // should search for a different year that matches MASS filter
                    await updateScreenMessage(Messages.massNotFound, JUMP_TO_NEW_YEAR_TIMEOUT);
                    const newYearFilter = getMostRelevantYearForMassFilter(data, filterText);
                    if (!newYearFilter) {
                        throw new Error("No matches year was found");
                    }

                    setFilterDate(newYearFilter); // filter with new year
                } else {
                    updateScreenMessage();
                }
            } catch (err) {
                updateScreenMessage();
                console.log(err);
            }
        }

        let timer = setTimeout(() => {
            getMeteors();
        }, filterText ? FILTER_TIMEOUT : 0);

        return () => clearTimeout(timer);
    }, [filterDate, filterText]);

    return (
        <PageContainer>
            <Search
                pickedDate={filterDate}
                filterText={filterText}
                onPickDate={setFilterDate}
                setFilterText={setFilterText}
            />
            <MessageBox message={message} />
            <SearchResult filteredMeteors={filteredMeteors} />
        </PageContainer>
    );
}

export default App;
