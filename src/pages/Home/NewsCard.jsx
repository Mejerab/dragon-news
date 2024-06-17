import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16 border">
            <h4 className="text-xl font-semibold p-2">{title}</h4>
            <img src={image_url} alt="" />
            {
                details.length > 500 ? <p>{details.slice(0, 500)}<Link className="text-blue-500 font-semibold ml-2" to={`news/${_id}`}>Read more</Link></p> : <p>{details}</p>
            }
        </div>
    );
};
NewsCard.propTypes = {
    news: PropTypes.object
}
export default NewsCard;