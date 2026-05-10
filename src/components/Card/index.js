import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const AvatarBlock = ({ avatar, avatarLayout, avatarSize }) => {
  const src = useBaseUrl(avatar.src || '');
  const size = avatarSize || 'xl';
  const isVertical = avatarLayout === 'vertical';
  return (
    <div className={clsx('avatar', isVertical && 'avatar--vertical')}>
      {avatar.src && (
        <img
          className={clsx('avatar__photo', `avatar__photo--${size}`)}
          src={src}
          alt={avatar.name || ''}
        />
      )}
      {(avatar.name || avatar.subtitle) && (
        <div className="avatar__intro">
          {avatar.name && <div className="avatar__name">{avatar.name}</div>}
          {avatar.subtitle && <small className="avatar__subtitle">{avatar.subtitle}</small>}
        </div>
      )}
    </div>
  );
};

const Card = ({
  // Smart props
  title,
  text,
  image,
  avatar,
  avatarLayout,
  avatarSize,
  actions,
  headerColor,
  bodyColor,
  footerColor,
  cyberpunk = false,
  // Legacy / passthrough
  className,
  style,
  children,
  shadow,
}) => {
  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  const cyberpunkClass = cyberpunk ? styles.cyberpunk : '';

  if (children) {
    return (
      <div className={clsx('card', className, cardShadow, cyberpunkClass)} style={style}>
        {children}
      </div>
    );
  }

  const hasHeader = title || avatar;
  const hasBody = text;
  const hasFooter = actions && actions.length > 0;

  return (
    <div className={clsx('card', className, cardShadow, cyberpunkClass)} style={style}>
      {hasHeader && (
        <div
          className="card__header"
          style={headerColor ? { backgroundColor: headerColor } : undefined}
        >
          {avatar && (
            <AvatarBlock
              avatar={avatar}
              avatarLayout={avatarLayout}
              avatarSize={avatarSize}
            />
          )}
          {title && <h3>{title}</h3>}
        </div>
      )}
      {image && <SmartImage src={image} alt={title || ''} />}
      {hasBody && (
        <div
          className="card__body"
          style={bodyColor ? { backgroundColor: bodyColor } : undefined}
        >
          {text}
        </div>
      )}
      {hasFooter && (
        <div
          className={clsx('card__footer', 'text--center')}
          style={footerColor ? { backgroundColor: footerColor } : undefined}
        >
          <div className="button-group button-group--block">
            {actions.map((action, i) => (
              <button
                key={i}
                className={clsx('button', `button--${action.variant || 'secondary'}`)}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SmartImage = ({ src, alt }) => {
  const url = useBaseUrl(src);
  return <img className="card__image" src={url} alt={alt} />;
};

export default Card;
