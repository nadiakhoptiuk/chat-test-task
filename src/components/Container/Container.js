import React from 'react';
import s from './Container.module.css';

export default function Container({ style, children }) {
  return (
    <div className={s.container} style={style}>
      {children}
    </div>
  );
}
