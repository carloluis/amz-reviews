import { connect } from 'react-redux';
import { orderBy } from './order-by.actions';
import OrderBy from './OrderBy';

const mapStateToProps = ({ order }) => ({ value: order });
const mapDispatchToProps = { orderBy };

export default connect(mapStateToProps, mapDispatchToProps)(OrderBy);
