import React from 'react';

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
          <span className="firstChild">Poderes:<br /></span>
          <div className="secondChild">
            {
              typeof card.powers === 'string' ? (
                <span className="powers">{ card.powers }</span>
              ) : (
                card.powers.map((power) => <span className="powers" key={ power }>{ power }</span>)
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

export default Card;
