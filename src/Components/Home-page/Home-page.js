import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header-homePage';
import LastFocus from '../Shared/LastFocus/LastFocus';
import LexiconPanel from '../Shared/Lexicon/LexiconPanel';
import MostActiveThemes from '../Shared/MostActiveThemes/MostActiveThemes';
import Newsletter from '../Shared/Newsletter/Newsletter';
import ScanrToday from '../Shared/ScanrToday/ScanrToday';
import Search from './Search/Search';
import Banner from '../Shared/Banner/Banner';

import classes from './Home-page.scss';

class HomePage extends Component {
  state = {
    lexiconTarget: null,
  };

  lexiconHandler = (lexiconTarget) => {
    this.setState({ lexiconTarget });
  }

  render() {
    return (
      <div className={`container-fluid ${classes.HomePage}`}>
        <Header
          language={this.props.language}
          switchLanguage={this.props.switchLanguage}
        />

        <Search language={this.props.language} />

        <ScanrToday
          language={this.props.language}
          lexiconHandler={this.lexiconHandler}
        />

        <Banner
          language={this.props.language}
          labelKey="WhatAreOurSources"
          cssClass="BannerLight"
          url=""
        />

        <MostActiveThemes
          language={this.props.language}
          data={['Brain to computer', 'Anthropologie évolutive', 'Biotechnologie', 'Fusion nucléaire', 'Brain content', 'Cryptographie', 'Matériaux', 'Machine learning', 'Intelligence artificielle', 'Réalité virtuelle']}
        />

        <Banner
          language={this.props.language}
          labelKey="Appear"
          cssClass="BannerLight"
          url=""
        />

        <LastFocus language={this.props.language} />

        <Newsletter language={this.props.language} />

        <Banner
          language={this.props.language}
          labelKey="DiscoverDataesr"
          cssClass="BannerDark"
          url="https://data.esr.gouv.fr/FR/"
          target="_blank"
        />

        <Footer language={this.props.language} />

        <LexiconPanel
          className={classes.HomePageLexiconPanelTop}
          language={this.props.language}
          target={this.state.lexiconTarget}
          lexiconHandler={v => this.lexiconHandler(v)}
        />
      </div>
    );
  }
}

export default HomePage;

HomePage.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired,
};
