import { PropTypes } from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChange, value }) => {
  return (
    <>
      <label className={css.filter}>
        Find contacts by name:
        <input
          className={css.inputfilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default Filter;