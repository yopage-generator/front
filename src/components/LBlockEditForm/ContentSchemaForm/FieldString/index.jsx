import React, { Component, PropTypes } from 'react';
import FormGroup from '../FormGroup';

export default class FieldString extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    fieldKey: PropTypes.string.isRequired,
    value: PropTypes.string,
    isRequired: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { title, fieldKey, value, onChange } = this.props;

    const handleChange = (event) => onChange(event.target.value);

    return (
      <FormGroup fieldKey={fieldKey} title={title}>
        <input
          className="form-control"
          type="text"
          id={fieldKey}
          value={value}
          onChange={handleChange}
        />
      </FormGroup>
    );
  }
}