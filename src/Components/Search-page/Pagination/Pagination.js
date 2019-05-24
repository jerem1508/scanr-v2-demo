import React from 'react';
import { IntlProvider, FormattedHTMLMessage } from 'react-intl';
import PropTypes from 'prop-types';
/* eslint-disable */
/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

import classes from './Pagination.scss';


const Pagination = (props) => {
  const messages = {
    fr: messagesFr,
    en: messagesEn,
  };
  const pageSize = props.currentPageSize || 20;
  const pageCurrent = props.currentPage || 1;
  const lastIndex = Math.ceil(props.totalDocuments / pageSize) || 1;

  const ShouldDisabled = (position) => {
    if (position === 'previous' && pageCurrent === 1) {
      return classes.NoDisplay;
    }
    if (position === 'next' && pageCurrent === lastIndex) {
      return classes.NoDisplay;
    }
    return ''
  };

  const ShouldPrintPaginationStart = () => {
    if (pageCurrent === 4) {
      return (
        <React.Fragment>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(1)}>1</div>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(2)}>2</div>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(3)}>3</div>
        </React.Fragment>
      );
    }
    if (pageCurrent === 3) {
      return (
        <React.Fragment>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(pageCurrent - 2)}>{pageCurrent - 2}</div>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(pageCurrent - 1)}>{pageCurrent - 1}</div>
        </React.Fragment>
      );
    }
    if (pageCurrent === 2) {
      return (
        <React.Fragment>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(pageCurrent - 1)}>{pageCurrent - 1}</div>
        </React.Fragment>
      );
    }
    if (!pageCurrent || pageCurrent === 1) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(1)}>1</div>
        <div className={`row d-flex justify-content-center align-items-end m-0 ${classes.Dots}`}>...</div>
        <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(pageCurrent - 2)}>{pageCurrent - 2}</div>
        <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(pageCurrent - 1)}>{pageCurrent - 1}</div>
      </React.Fragment>
    );
  };

const ShouldPrintPaginationEnd = () => {
    if (![lastIndex, lastIndex - 1, lastIndex - 2].includes(pageCurrent)) {
      return (
        <React.Fragment>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(pageCurrent + 1)}>{pageCurrent + 1}</div>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(pageCurrent + 2)}>{pageCurrent + 2}</div>
          <div className={`row d-flex justify-content-center align-items-end m-0 ${classes.Dots}`}>...</div>
          <div className="row d-flex justify-content-center align-items-center m-1 pl-2 pr-2" onClick={() => props.PaginationHandler(lastIndex)}>{lastIndex}</div>
        </React.Fragment>
      );
    }
    return null;
  };

  return (
    <IntlProvider locale={props.language} messages={messages[props.language]}>
      <section className={`row mb-3 p-3 d-flex flex-row justify-content-end ${classes.Section}`}>
        <div
          className={`row d-flex justify-content-center align-items-center m-1 pl-2 pr-2 ${ShouldDisabled('previous')}`}
          onClick={() => props.PaginationHandler(pageCurrent - 1)}>
          <i className="fas fa-chevron-left" />
        </div>
        <div className={`row d-flex justify-content-center align-items-center m-1 pr-3 ${ShouldDisabled('previous')} ${classes.NextPrevious}`}>
          <FormattedHTMLMessage id="pagination.previous" defaultMessage="pagination.previous" />
        </div>
        {ShouldPrintPaginationStart()}
        <div className={`row d-flex justify-content-center align-items-center m-1 pl-2 pr-2 ${classes.Active}`}>
          {pageCurrent}
        </div>
        {ShouldPrintPaginationEnd()}
        <div className={`row d-flex justify-content-center align-items-center m-1 pl-3 ${ShouldDisabled('next')} ${classes.NextPrevious}`}>
          <FormattedHTMLMessage id="pagination.next" defaultMessage="pagination.next" />
        </div>
        <div
          className={`row d-flex justify-content-center align-items-center m-1 pl-2 pr-2 ${ShouldDisabled('next')}`}
          onClick={() => props.PaginationHandler(pageCurrent + 1)}
        >
          <i className="fas fa-chevron-right" />
        </div>
      </section>
    </IntlProvider>
  );
};

export default Pagination;

Pagination.propTypes = {
  language: PropTypes.string.isRequired,
  currentPage: PropTypes.number,
  currentPageSize: PropTypes.number,
  totalDocuments: PropTypes.number,
};
