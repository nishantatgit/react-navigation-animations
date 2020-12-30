import React from 'react';
import LinkTile from '../LinkTile/LinkTile';
import RaceTile from '../RaceTile/RaceTile';
import classNames from 'classnames';

const mapper = {
    'link-tile': LinkTile,
    'race-tile': RaceTile 
}

const ListRenderer = (props) => {
    const { componentName, list, className } = props;
    const Component = mapper[componentName];
    const listClass = classNames(className, 'list');
    return (<section className={listClass}>
        {list.map( item => <Component {...item} />)}
    </section>)
}

export default ListRenderer;

