import { PropTypes } from 'react';
import blockPropType from './blockPropType';

import Feature from 'views/elements/Feature';

const ContentProptypes = {
  header: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape(Feature.propType)
  ).isRequired,
};

export default {
  propTypes: blockPropType(ContentProptypes),
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Возможности',
        key: 'features',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 6,
          fields: [
            {
              title: 'Возможность',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
            {
              title: 'Класс иконки',
              key: 'iconClass', // TODO Завести отдельный тип
              type: 'string',
              isRequired: true,
            },
          ],
        },
      },
    ],
  },
};