import React from 'react';

const SearchBar = ({ onSubmit, isFetching }) => {

  const isDisabled = isFetching ? { disabled: 'disabled' } : {};
  const defaultUrl = 'http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444';
  const handleSubmit = e => {
    onSubmit(e, this.input.value);
  };

  return (
    <div className="columns is-centered">
      <div className="column is-four-fifths is-narrow">
        <div className="content">
          <form onSubmit={handleSubmit} className="feed-form">
            <div className="field has-addons">
              <div className={`control is-expanded ${isFetching ? 'is-loading' : ''}`}>
                <input
                  className={`input`}
                  type="text"
                  defaultValue={defaultUrl}
                  placeholder={defaultUrl}
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
};

export default SearchBar;
