import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';


export const ContactListItem = ({ contacts, onDeleteBtn }) => {
  return contacts.map(contact => (
    <li className={css.listItem} key={contact.id}>
      {contact.name}: {contact.number}{' '}
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteBtn(contact.id)}
      >
        Delete
      </button>
    </li>
  ));
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
