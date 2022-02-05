import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage =({collection})=>{
  const {title,items}= collection;
  return(
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {
        items.map(item=> <CollectionItem key= {item.id} item={item}></CollectionItem>)
      }

    </div>

  </div>
)
  }

  const mapStateToProps=(state, ownProps)=>({

    collection:selectCollection(ownProps.match.params.collectionId)(state)//state moet je zo wel passen, omdat je zonder die geen selector flow kan hebben. Het moet in zo een volgorde, omdat je eerst de parameter voor selectCollection moet providen
  })
export default connect(mapStateToProps)(CollectionPage);

//ownProps zijn de props van de component die in de connect gewrapped worden
