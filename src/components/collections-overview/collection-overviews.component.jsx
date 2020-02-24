import React from 'react';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'
import './collection-overviews.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)