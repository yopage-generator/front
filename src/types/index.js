import { PropTypes } from 'react';
import mapValues from 'lodash/mapValues';
import { applyType } from 'views/utils';
import { propTypes as formContentType } from 'views/elements/ContentForm';

// TODO перейдет в частные файлы

import CustomPropTypes from 'constants/customPropTypes';
import LinkSchemaFields from 'schemaTypes/LinkFields';


const NavbarContentType = {
  //logoLink: CustomPropTypes.link.isRequired,
  //items: PropTypes.arrayOf(CustomPropTypes.link).isRequired,
};

const Navbar = {
  typeName: 'Navbar',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape(NavbarContentType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Бренд',
        key: 'logoLink.text',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Бренд (ссылка)',
        key: 'logoLink.href',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Меню',
        key: 'items',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 7,
          fields: [ // TODO заменить на CustomPropType.link
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
            {
              title: 'Ссылка',
              key: 'url',
              type: 'url',
              isRequired: true,
            },
          ],
        },
      },
    ],
  },
};

const InlineForm = {
  typeName: 'InlineForm',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    form: formContentType.isRequired,
    uuid: PropTypes.string.isRequired,
  },

  contentSchema: {
    version: 1,
    backgroundImage: false,
    form: 'required',
    fields: [
      {
        title: 'Заголовок',
        key: 'title',
        type: 'string',
        isRequired: false,
      },
    ],
  },
};

const PlaceType = PropTypes.shape({
  location: CustomPropTypes.location.isRequired,
  title: PropTypes.string,
});

const GoogleMapType = {
  center: CustomPropTypes.location.isRequired,
  zoom: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PlaceType).isRequired,
};

const GoogleMap = {
  typeName: 'GoogleMap',
  propTypes: {
    content: PropTypes.shape(GoogleMapType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },

  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Координаты карты',
        key: 'center',
        type: 'location',
        isRequired: true,
      },
      {
        title: 'Масштаб',
        key: 'zoom',
        type: 'number',
        isRequired: true,
      },
      {
        title: 'Точки',
        key: 'places',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 20,
          fields: [
            {
              title: 'Координаты',
              key: 'location',
              type: 'location',
              isRequired: true,
            },
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: false,
            },
          ],
        },
      },
    ],
  },
};

const CTAContentType = {
  text: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, // TODO array of shape
};

const CTA = {
  typeName: 'CTA',
  propTypes: {
    content: PropTypes.shape(CTAContentType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Текст',
        key: 'text',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Кнопки',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 3,
          fields: LinkSchemaFields,
        },
      },
    ],
  },
};

const types = {
  inlineForm: InlineForm,
  navbar: Navbar,
  googleMap: GoogleMap,
  cta: CTA,
};

export const Types = mapValues(types, (value, key) => ({ ...value, typeName: value.typeName || key }));
