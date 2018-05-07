import { connect } from 'react-redux';
import { toggleStar } from './stars.actions';
import Stars from './Stars';

const mapStateToProps = ({ stars }) => ({ stars });
const mapDispatchToProps = { toggleStar };

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
