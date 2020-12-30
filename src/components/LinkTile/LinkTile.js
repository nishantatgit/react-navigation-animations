import React from 'react';
import { Link } from 'react-router-dom';
import  classNames  from 'classnames';



const LinkTile = (props) => {
    const { path, label, className} = props;
    const linkClass= classNames(className, 'tile');
    return <Link to={path} className={linkClass} title={`Formulae 1 season ${label}`}>{label}</Link>
}

export default LinkTile;