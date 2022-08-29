import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <div className="card">
        <span className="xMenName">{ card.alias }</span>
        <img src={ card.img } alt={ card.alias } />
        <div className="nameContainer">
          <span className="firstChild">Nome:</span>
          { ' ' }
          <span>{ card.name }</span>
        </div>
        <div className="powersContainer">
          <span className="firstChild">
            Poderes:
            <br />
          </span>
          <div className="secondChild">
            {
              typeof card.powers === 'string' ? (
                <span className="powers">{ card.powers }</span>
              ) : (
                card.powers
                  .map((power) => <span className="powers" key={ power }>{ power }</span>)
              )
            }
          </div>
        </div>
        <div className="descriptionContainer">
          <p className="secondChild">{ card.description }</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    powers: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
