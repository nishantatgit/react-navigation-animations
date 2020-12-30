import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const RaceTile = (props) => {
    const { Circuit : { Location: location, circuitId, circuitName }, 
            date, raceName, round, season, result, className } = props;
    const tileClass = classNames(className,'race-tile');

    return (<div className={tileClass}>
                <span>{date}</span>
                <span>{circuitName}</span>
                <span>{raceName}</span>
                <span>{round}</span>
                { !result && <Link to={`${season}/${round}/results`} title={`season ${season} results`}>Result</Link>}
                { result && <span>{result}</span>}
            </div>);
}

export default RaceTile;