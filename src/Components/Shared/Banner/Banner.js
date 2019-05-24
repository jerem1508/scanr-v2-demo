import React from 'react';
import { IntlProvider, FormattedHTMLMessage } from 'react-intl';
import PropTypes from 'prop-types';

/* Gestion des langues */
import messagesFr from './translations/fr.json';
import messagesEn from './translations/en.json';

import ButtonToPage from '../Ui/Buttons/ButtonToPage';

/* SCSS */
import classes from './Banner.scss';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const Banner = props => (
  <IntlProvider locale={props.language} messages={messages[props.language]}>
    <section className={`${classes.Banner} ${classes[props.cssClass]}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <FormattedHTMLMessage
              id={`Banner.title.${props.labelKey}`}
              defaultMessage={`Banner.title.${props.labelKey}`}
            />
          </div>
          <div className={`col-lg-3 ${classes.ContainerButton}`}>
            <div className={classes.Button}>
              <ButtonToPage
                url={props.url}
                target={props.target}
              >
                <FormattedHTMLMessage
                  id={`Banner.button.${props.labelKey}`}
                  defaultMessage={`Banner.button.${props.labelKey}`}
                />
              </ButtonToPage>
            </div>
          </div>
        </div>

      </div>
    </section>
  </IntlProvider>
);


export default Banner;

Banner.propTypes = {
  cssClass: PropTypes.string,
  language: PropTypes.string.isRequired,
  labelKey: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
};
