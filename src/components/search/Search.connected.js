import { connect } from 'react-redux';
import { getSearch } from '../../store/reducers';
import { updateSearch } from './search.actions';
import Search from './Search';

const mapStateToProps = state => ({ value: getSearch(state) });
const mapDispatchToProps = { onUpdateSearch: updateSearch };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
