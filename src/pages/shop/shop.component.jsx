import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component.jsx';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner= WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner= WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  state={
    loading:true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    fetch('https://firestore.googleapis.com/v1/projects/crwn-db-424eb/databases/(default)/documents/collections')
    .then(response=> response.json())
    .then(collections=> console.log(collections))

  /*  collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false});//dit is een eenmalig call, meaning dat je pas nieuwe collection zal krijgen als je website remount
      //
    });*/
  }

  render() {
    const { match } = this.props;
    const {loading}=this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props} />}/>
        <Route
          path={`${match.path}/:collectionId`}
          render={(props)=> <CollectionPageWithSpinner isLoading={loading}{...props}/>}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
