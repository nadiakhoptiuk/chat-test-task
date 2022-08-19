import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({
  title,
  isHidden,
  width,
  flexShrink,
  children,
}) {
  return (
    <section
      className={s.section}
      style={{ width: `${width}`, flexShrink: `${flexShrink}` }}
    >
      <h1 className={isHidden ? 'sectionTitleIsHidden' : 'sectionTitle'}>
        {title}
      </h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  flexShrink: PropTypes.number.isRequired,
};
