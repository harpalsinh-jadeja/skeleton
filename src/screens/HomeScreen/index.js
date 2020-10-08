import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { getBookingWatcher, myProfileWatcher } from 'src/store/actions';
import HomeScreen from './HomeScreen.Component';

// function mapStateToProps(state) {
// 	return {
// 		getBookingReducer: state.getBookingReducer,
// 		myProfileReducer: state.myProfileReducer
// 	};
// }

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(HomeScreen);
