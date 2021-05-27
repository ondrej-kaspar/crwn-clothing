import React from 'react';
import { Link, withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName, match }) => (
    <div className="collection-preview">
        <h1 className="title"><Link to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link></h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);