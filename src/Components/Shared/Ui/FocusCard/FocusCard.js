import React from 'react';
import PropTypes from 'prop-types';

import BubbleSVG from '../../svg/icon-focus-bubble';
import BubbleTopSVG from '../../svg/icon-focus-bubbleTop';
import DonutSVG from '../../svg/icon-focus-donut';
import HistoTopSVG from '../../svg/icon-focus-histoTop';
import MapSVG from '../../svg/icon-focus-map';
import TreemapSVG from '../../svg/icon-focus-treemap';

import ButtonToPage from '../Buttons/ButtonToPage';

/* COULEURS */
import {
  ENTITY_COLOR,
  PERSON_COLOR,
  PROJECT_COLOR,
  PUBLICATION_COLOR,
} from '../../../../config/config';

/* SCSS */
import classes from './FocusCard.scss';

const FocusCard = (props) => {
  let color = '#ff0000';
  switch (props.schema) {
    case 'entity':
      color = ENTITY_COLOR;
      break;
    case 'person':
      color = PERSON_COLOR;
      break;
    case 'project':
      color = PROJECT_COLOR;
      break;
    case 'publication':
      color = PUBLICATION_COLOR;
      break;
    default:
      color = '#000000';
  }

  let componentSvg = null;
  switch (props.type) {
    case 'bubble':
      componentSvg = <BubbleSVG fill={color} />;
      break;
    case 'bubbleTop':
      componentSvg = <BubbleTopSVG fill={color} />;
      break;
    case 'donut':
      componentSvg = <DonutSVG fill={color} />;
      break;
    case 'histoTop':
      componentSvg = <HistoTopSVG fill={color} />;
      break;
    case 'map':
      componentSvg = <MapSVG fill={color} />;
      break;
    case 'treemap':
      componentSvg = <TreemapSVG fill={color} />;
      break;
    default:
      componentSvg = null;
  }

  return (
    <div className={classes.FocusCard}>
      <div>
        {componentSvg}
      </div>
      <div className={classes.Title}>
        {props.title}
      </div>
      <div className={`row ${classes.TagsAndButton}`}>
        <div className="col-lg-8">
          {props.tags.map(tag => (<span className={classes.Tag} key={tag}>{tag}</span>))}
        </div>
        <div className={`col-lg-4 ${classes.Button}`}>
          <ButtonToPage
            url={props.url}
          >
            Lire
          </ButtonToPage>
        </div>
      </div>
    </div>
  );
};

export default FocusCard;

FocusCard.propTypes = {
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  schema: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
