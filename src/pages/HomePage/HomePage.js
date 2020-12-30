import React, {useEffect, useState } from 'react';

import { getJSON } from '../../utils/fetchJSON';
import { END_POINTS, HEADERS } from '../../constants';
import ListRenderer from '../../components/ListRenderer/ListRenderer';

import './HomePage.css';

const HomePage = () => {
    const [ seasonsList, updateSeasonsList ] = useState([]);

    const updateList = (data) =>  {
        const { MRData: { SeasonTable: { Seasons } } } = data;
        const seasonsData = Seasons.map( seasonDetail => ({
            path: `/season/${seasonDetail.season}`,
            label: seasonDetail.season
        }));
        updateSeasonsList([...seasonsData]);
    }

    useEffect(getJSON.bind(null,END_POINTS.SEASONS,updateList),[]);

    return (
        <section className="homepage">
            <h1>{HEADERS.HOME_PAGE}</h1>
            <ListRenderer componentName="link-tile" list={seasonsList} />
        </section>
    )
}

export default HomePage;
