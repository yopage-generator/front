import React from 'react';

import map from 'lodash/map';
import { Types } from 'views/types';
import { applyType } from 'views/utils';

import StringEditable from 'components/primitives/StringEditable';

import './index.css';

const MustRead1 = ({ content }) => (
  <section className="MustRead1">
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-lg-12">
          <div className="MustRead1-message">
            <StringEditable
              data={content}
              className="MustRead1-header text-white"
              fieldName="header"
              tagName="h1"
            />
            <StringEditable
              data={content}
              className="MustRead1-subheader text-white"
              fieldName="subheader"
              tagName="div"
            />
            <ul className="list-inline MustRead1-buttons">
              {map(content.items, (item, index) =>
                <li key={index} className="list-inline-item">
                  <a
                    href={item.url}
                    className="btn btn-lg btn-filled"
                  >
                  {item.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default applyType(MustRead1, Types.mustRead);
