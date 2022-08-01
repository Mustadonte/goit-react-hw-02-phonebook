import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
export const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul>
      <ContactListItem contacts={contacts} onDeleteBtn={onDeleteBtn} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};
