import React from 'react';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { connect } from 'react-redux';
import { createSturcturedSelector } from 'reselect';

const ShopPage= ({ collections }) =>(
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );

const mapStateProps = createSturcturedSelector({
  collections: selectCollections
})
export default connect(mapStateProps)(ShopPage);
