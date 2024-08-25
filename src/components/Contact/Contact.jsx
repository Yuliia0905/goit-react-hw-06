import { useDispatch } from "react-redux";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { MdDeleteForever } from "react-icons/md";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <p className={css.name}>
        <IoPersonSharp className={css.icon} />
        {name}
      </p>
      <p className={css.number}>
        <FaPhoneAlt className={css.icon} />
        {number}
      </p>
      <button className={css.delBtn} type="button" onClick={handleDelete}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default Contact;
