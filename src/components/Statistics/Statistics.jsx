import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
import getRandomHexColor from "./getRandomHexColor";


export const Statistics = ({title, stats}) => {
    return <section class={css.statistics}>
    <h2 className={css.title}>{title}</h2>
  
    <ul className={css.statlist}>
    {stats.map(({ id, label, percentage }) => (
					<li className={css.item} style={{ backgroundColor: getRandomHexColor() }} key={id}>
						<span className={css.label}>{label}</span>
						<span className={css.percentage}>{percentage}%</span>
					</li>
				))}
    </ul>
  </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
}