import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Select from 'react-select';
import { options } from './config/options';
import BrowserLanguage from './utils/BrowserLanguage';
import './App.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lang: options[0],
    };
  }

  changeLang = (lang) => {
    const { i18n } = this.props;
    if (!lang) {
      const tempLang = BrowserLanguage.getDefaultLanguage();
      lang = tempLang === 'en' ? 'fr' : 'en';
    }
    this.setState({ lang: lang });

    if (BrowserLanguage.setLanguage(lang.value)) {
      // Reload page if browser support localStorage
      window.location.reload(); // Relaod app after langue change
    } else {
      // Change language at runtime if localStorage not found
      i18n.changeLanguage(lang); // Need for change language at runtime
    }
  };

  render() {
    const { lang } = this.state;
    const { t } = this.props;

    return (
      <div className="App-Root">
        <Select
          defaultValue={options[0]}
          options={options}
          value={lang}
          onChange={this.changeLang}
          className="App-Select"
        />

        <h3 className="text-center pt-5">{t('Welcome to React Translation')}</h3>
      </div>
    );
  }
}

export default withTranslation()(App);
