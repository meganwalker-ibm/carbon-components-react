import React from 'react';
import classNames from 'classnames';
import Icon from '../elements/Icon';
import '@console/bluemix-components/consumables/scss/components/card/card.scss';

const propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  ariaLabel: React.PropTypes.string,
  iconName: React.PropTypes.string.isRequired,
  restartApp: React.PropTypes.func,
};

const CardActionItem = ({ className, id, ariaLabel, iconName, ...other }) => {
  const cardActionItemClasses = classNames({
    'bx--app-actions__button': true,
    [className]: className,
  });

  return (
    <button
      {...other}
      className={cardActionItemClasses}
      id={id}
      aria-label={ariaLabel}
    >
      <Icon
        className="bx--app-actions__button--icon"
        name={iconName}
      />
    </button>
  );
};

CardActionItem.propTypes = propTypes;

export default CardActionItem;