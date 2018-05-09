import { connect } from 'react-redux';
import { getStars } from '../../store/reducers';
import { toggleStar } from './stars.actions';
import Stars from './Stars';

const mapStateToProps = state => ({ stars: getStars(state) });
const mapDispatchToProps = { toggleStar };

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
