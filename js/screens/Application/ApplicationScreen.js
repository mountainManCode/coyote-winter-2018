import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import Application from './Application';
import PropTypes from 'prop-types';
import { getApplicationsByUser } from '../../config/helpers';
import {
  updateApplicationState,
  updateLoadingState
} from '../../redux/modules/application';
import { styles } from './styles';

class ApplicationScreen extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;

    // TODO: get uid from authenticated object in redux
    const uid = 'QhP2yK3dx4P8BAB3AHJiLPAZgn93';

    const listingIds = await getApplicationsByUser(uid);

    dispatch(updateApplicationState(listingIds));
    dispatch(updateLoadingState(false));
  }
  render() {
    const { applications, loading } = this.props;
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      <ScrollView style={styles.scroll}>
        <Application listings={applications} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  applications: state.application.applications,
  loading: state.application.loading
});

ApplicationScreen.propTypes = {
  applications: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ApplicationScreen);
