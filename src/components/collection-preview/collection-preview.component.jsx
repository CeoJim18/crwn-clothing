import React from "react";
import './collection-preview.styles.scss';

import CollectionItem from "../collection-item/collection-item.component";

//idx --> moet je niet verwarren met de id property van de item. In dit geval is het de index (positie) van die item in zijn array
const CollectionPreview=({title, items})=>(
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items.filter((item, idx)=>idx<4).map((item)=>
          (<CollectionItem key={item.id} item={item}/>
        ))
      }

    </div>
  </div>
)


export default CollectionPreview;
