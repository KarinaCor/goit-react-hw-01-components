import PropTypes from 'prop-types';
import * as SC from './Statistics.styled'
import { getRandomHexColor } from '../Statistics/getRandomColor';



export const Statistics = ({title, stats}) => {
    return (
        <SC.Section>
          {title && <SC.Title>{title}</SC.Title>}
  <SC.List>
    {stats.map(({id,label,percentage}) => {
        return (
            <SC.Item key={id}  style={{backgroundColor: getRandomHexColor()}}>
            <SC.SpanLabel>{label}</SC.SpanLabel>
            <SC.SpanPercent>{percentage}%</SC.SpanPercent>
          </SC.Item>
        )
    })}   
  </SC.List>
</SC.Section>
    )
    
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };
