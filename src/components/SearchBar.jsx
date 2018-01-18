import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  defaultUrl = 'http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444';

  componentDidMount() {
    this.input.value = this.defaultUrl;
    this.input.focus();
  }

  handleSubmit = e => {
    this.props.onSubmit(e, this.input.value);
  };

  render() {
    const {isFetching} = this.props;
    const isDisabled = isFetching ? { disabled: 'disabled' } : {};
    return (
      <div className="columns is-centered">
        <div className="column is-four-fifths is-narrow">
          <div className="content">
            <form onSubmit={this.handleSubmit} className="feed-form">
              <div className="field has-addons">
                <div className={`control is-expanded ${isFetching ? 'is-loading' : ''}`}>
                  <input
                    className={`input`}
                    type="text"
                    defaultValue={null}
                    placeholder={this.defaultUrl}
                    ref={input => this.input = input}
                    {...isDisabled}
                  />
                </div>
                <div className="control">
                  <input
                    type="submit"
                    value="Ok"
                    className="button is-info"
                    {...isDisabled}
                  />
                </div>
              </div>
            </form>
            <p className="intro">
              Para comenzar, inserta la url del podcast, por ejemplo: &nbsp;
              <a href="http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444">
                http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444
              </a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

SearchBar.defaultProps = {
  onSubmit: null,
  isFetching: false,
}

export default SearchBar;
