import React from 'react';

export const Container: React.FunctionComponent<any> = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        width: 100%;
        max-width: 920px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
