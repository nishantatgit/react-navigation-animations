import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ListRenderer from '../../components/ListRenderer/ListRenderer';
import { END_POINTS, SEASON_DETAILS_HEADERS } from '../../constants';
import { getJSON } from '../../utils/fetchJSON';

import './SeasonDetail.css';

const SeasonDetails = () => {
    const [ seasonData, setSeasonData ] = useState([]);
    const fetchSeasonDetails = (data) => {
        const { MRData: { RaceTable: { Races: races }}} = data;
        setSeasonData([SEASON_DETAILS_HEADERS,...races]);
    }
    const { year } = useParams();
    
    useEffect(getJSON.bind(null, `${END_POINTS.BASE_URL}/${year}.json`, fetchSeasonDetails),[]);

    return (<section className="season-details">
                <h1>Season Details for year {year}</h1>
                <ListRenderer componentName="race-tile" list={seasonData}/>
            </section>)
}

export default SeasonDetails;