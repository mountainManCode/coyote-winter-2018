import React, { Component } from 'react';
import Listing from './Listing';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchListing,
  fetchImages,
  fetchFeaturedImage,
  fetchLandlord
} from '../../redux/modules/listing';
import {
  getFaves,
  getSingleListing,
  addFavourite,
  updateFavourites
} from '../../config/helpers';
import { fetchFaves } from '../../redux/modules/faves';

class ListingScreen extends Component {
  constructor() {
    super();

    this.handleFeaturedImage = this.handleFeaturedImage.bind(this);
    this.addToFaves = this.addToFaves.bind(this);
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    getSingleListing().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });

      this.props.dispatch(fetchListing(data));
      const images = Object.values(data[0].pictures);
      const landlord = data[0].landlordId;
      this.props.dispatch(fetchImages(images));
      this.props.dispatch(fetchFeaturedImage(images[0]));
      this.props.dispatch(fetchLandlord(landlord));
    });

    getFaves().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        doc.id === 'RitwUtfThcfO6SxapXCuKfZ15SR2'
          ? data.push(doc.data())
          : null;
      });
      this.props.dispatch(fetchFaves(data[0].favourites));
    });
  }

  handleFeaturedImage(image) {
    this.props.dispatch(fetchFeaturedImage(image));
  }

  addToFaves() {
    const id = this.props.listing[0].listingId;
    const { faves } = this.props;

    if (!faves.includes(id)) {
      faves.push(id);

      addFavourite(faves);
    } else {
      faves.splice(faves.indexOf(id), 1);
      updateFavourites(faves);
    }
    this.props.dispatch(fetchFaves([...faves]));
  }

  render() {
    const { listing, images, featuredImage, faves, landlordId } = this.props;
    const listingId = listing[0] && listing[0].listingId;

    return (
      <Listing
        listing={listing}
        faves={faves}
        images={images}
        imageUrl={this.imageUrl}
        featuredImage={featuredImage}
        handleFeaturedImage={this.handleFeaturedImage}
        addToFaves={this.addToFaves}
        currentListing={listingId}
        landlord={landlordId}
        navigation={this.props.navigation}
      />
    );
  }
}

ListingScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listing: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  featuredImage: PropTypes.string.isRequired,
  faves: PropTypes.array.isRequired,
  landlordId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listing: state.listing.listing,
  images: state.listing.images,
  featuredImage: state.listing.featuredImage,
  faves: state.faves.faves,
  landlordId: state.listing.landlordId
});

export default connect(mapStateToProps)(ListingScreen);
