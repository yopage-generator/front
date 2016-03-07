import mapValues from 'lodash/mapValues';
import { applyType } from 'views/utils';
import formContentType from 'views/types/formContent';

import { PropTypes } from 'react';

// TODO перейдет в частные файлы

import CustomPropTypes from 'constants/customPropTypes';
import LinkSchemaFields from 'schemaTypes/LinkFields';


const ContentContentType = {
  text: PropTypes.string.isRequired,
};

const content = {
  typeName: 'Content',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape(ContentContentType).isRequired,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Текст',
        key: 'text',
        type: 'text',
        isRequired: true,
      },
    ],
  },
};

const NavbarContentType = {
  logoLink: CustomPropTypes.link.isRequired,
  items: PropTypes.arrayOf(CustomPropTypes.link).isRequired,
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

const FormWithText = {
  typeName: 'FormWithText',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape({
      text: PropTypes.string.isRequired,
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
        title: 'Текст',
        key: 'text',
        type: 'string',
        isRequired: true,
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

const FooterType = {
  copyrightText: PropTypes.string,
  items: PropTypes.array.isRequired,
};

const Footer = {
  typeName: 'Footer',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape(FooterType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Копирайт',
        key: 'copyrightText',
        type: 'string',
        isRequired: false,
      },
      {
        title: 'Ссылки в меню',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 12,
          fields: LinkSchemaFields,
        },
      },
    ],
  },
};

const ContentSectionType = {
  header: PropTypes.string.isRequired,
  image: PropTypes.object,
  leadText: PropTypes.string,
  links: PropTypes.arrayOf(CustomPropTypes.link).isRequired,
};

const ContentSection = {
  typeName: 'ContentSection1',
  propTypes: {
    content: PropTypes.shape(ContentSectionType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Описание',
        key: 'leadText',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Картинка',
        key: 'image',
        type: 'image',
        isRequired: true,
      },
      {
        title: 'Кнопки',
        key: 'links',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 5,
          fields: LinkSchemaFields,
        },
      },
    ],
  },
};

const PlainHtmlPropType = {
  html: PropTypes.string.isRequired,
};

const PlainHtml = {
  typeName: 'PlainHTML',
  propTypes: {
    content: PropTypes.shape(PlainHtmlPropType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Чистый HTML',
        key: 'html',
        type: 'text',
        isRequired: true,
      },
    ],
  },
};

const HeaderListPropType = {
  header: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
    }
  )).isRequired,
};

const HeaderList = {
  typeName: 'HeaderList',
  propTypes: {
    content: PropTypes.shape(HeaderListPropType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },
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
        title: 'Список',
        key: 'items',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 30,
          fields: [
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
          ],
        },
      },
    ],
  },
};

const types = {
  content,
  PlainHtml,
  HeaderList,
  FormWithText,
  inlineForm: InlineForm,
  navbar: Navbar,
  googleMap: GoogleMap,
  cta: CTA,
  footer: Footer,
  contentSection: ContentSection,
};

export const Types = mapValues(types, (value, key) => ({ ...value, typeName: value.typeName || key }));