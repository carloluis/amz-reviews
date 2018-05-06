import { connect } from 'react-redux';
import { updateSearch } from './search.actions';
import Search from './Search';

const mapStateToProps = ({ search }) => ({ value: search });
const mapDispatchToProps = { onUpdateSearch: updateSearch };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
