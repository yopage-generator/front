import React from 'react';
import ViewContainer from 'views/elements/ViewContainer';
import applyType from 'views/types/apply';

import Image from 'views/elements/Image';
import Buttons from 'views/elements/Buttons';

import StringEditable from 'views/elements/StringEditable';
import RichEditable from 'views/elements/RichEditable';

/* eslint-disable react/prop-types */
const ContentSection2 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
          <div className="clearfix" />
          <StringEditable
            className="BML-h2 color-primary"
            data={block.content}
            fieldName="header"
            tagName="h2"
          />
          <RichEditable
            className="lead"
            data={block.content}
            fieldName="leadText"
            tagName="div"
          />
          <Buttons buttons={block.content.links} className="mt40" />
        </div>
        <div className="col-lg-5 col-sm-pull-6 col-sm-6">
          <Image {...block.content.image} />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.contentSection(ContentSection2);
