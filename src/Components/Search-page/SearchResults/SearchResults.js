import React from 'react';
import { IntlProvider, FormattedHTMLMessage } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

import classes from './SearchResults.scss';
import EntityCard from './ResultCards/EntityCard';
import EntityGraphs from './ResultGraphs/EntityGraphs';
import PersonCard from './ResultCards/PersonCard';
import PublicationCard from './ResultCards/PublicationCard';
import ProjectCard from './ResultCards/ProjectCard';

const ResultsToShow = {
  all: {
    list: EntityCard,
    graph: EntityGraphs,
  },
  entities: {
    list: EntityCard,
    graph: EntityGraphs,
  },
  projects: {
    list: ProjectCard,
    graph: EntityCard,
  },
  persons: {
    list: PersonCard,
    graph: EntityCard,
  },
  publications: {
    list: PublicationCard,
    graph: EntityCard,
  },
};

const SearchResults = (props) => {
  const messages = {
    fr: messagesFr,
    en: messagesEn,
  };
  const ToShow = ResultsToShow[props.objectType][props.view];
  return (
    <IntlProvider locale={props.language} messages={messages[props.language]}>
      <section className="row d-flex flex-column">
        <div className={`ml-1 mb-2 ${classes.ActiveFiltersContainer}`}>
          <div className={`p-3 ${classes.ResultHeader}`}>
            <span>
              {`${props.resultsCount} `}
            </span>
            <span>
              <FormattedHTMLMessage
                id={`searchResults.${props.objectType}`}
                defaultMessage={`searchResults.${props.objectType}`}
              />
            </span>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-between ml-1">
          {
            <ToShow
              language={props.language}
              results={props.results}
              facets={props.facets}
            />
          }
        </div>
      </section>
    </IntlProvider>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  language: PropTypes.string.isRequired,
  objectType: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  results: PropTypes.array,
  facets: PropTypes.array,
  resultsCount: PropTypes.number,
};
