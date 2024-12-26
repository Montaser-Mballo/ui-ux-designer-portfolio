import PropTypes from 'prop-types';
import { HiOutlineArrowSmRight, HiOutlineClipboardList } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card">
      <img className="project__img" src={item.image} alt={item.title} />
      <HiOutlineClipboardList className="cards__icon" />
      <h3 className="project__title">{item.title}</h3>
      <Link to={item.link} className="project__button">
        View Details <HiOutlineArrowSmRight className="project__button-icon" />
      </Link>
    </div>
  );
};

ProjectItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItems;
