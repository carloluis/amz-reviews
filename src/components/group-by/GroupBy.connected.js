import { connect } from 'react-redux';
import { getGroup } from '../../store/reducers';
import { groupBy } from './group-by.actions';
import GroupBy from './GroupBy';

const mapStateToProps = state => ({ value: getGroup(state) });
const mapDispatchToProps = { groupBy };

export default connect(mapStateToProps, mapDispatchToProps)(GroupBy);
