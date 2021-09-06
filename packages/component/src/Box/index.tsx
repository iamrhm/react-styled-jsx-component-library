// eslint-disable-next-line no-use-before-define
import React from 'react';

const Box: React.FC = () => (
  <>
    <style jsx>
      {`
        p {
          text-align: center;
          color: red;
        }
        @media (--screen-mob) {
          p {
            text-align: center;
            color: black;
          }
        }
    `}
    </style>
    <p>Hello world From Box</p>
  </>
);

export default Box;
