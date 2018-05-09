import { connect } from 'react-redux';
import { getOrder } from '../../store/reducers';
import { orderBy } from './order-by.actions';
import OrderBy from './OrderBy';

const mapStateToProps = state => ({ value: getOrder(state) });
const mapDispatchToProps = { orderBy };

export default connect(mapStateToProps, mapDispatchToProps)(OrderBy);
