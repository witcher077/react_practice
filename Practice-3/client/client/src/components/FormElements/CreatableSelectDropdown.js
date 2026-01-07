import React, { useEffect, useState } from 'react'
import CreatableSelect from "react-select/creatable";

export default function CreatableSelectDropdown(props) {
  const { InputData } = props;
  let error = props.error;
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState(props?.dataList ? props?.dataList : []);

  useEffect(() => {
    props.onChange({ name: props.name, value });
  }, [value]);

  useEffect(() => {
    if (props?.value) {
      setValue(props?.value);
    }
  }, [props?.value]);

  useEffect(() => {
    if (props?.dataList) {
      setOptions(props.dataList);
    }
  }, [props?.dataList]);


  const handleCreate = (inputValue) => {
    const newValue = { value: inputValue, label: inputValue };
    setOptions([...options, newValue]);
    setValue([...value, newValue]);
  }
  const handleChange = (input, actionChange) => {
    switch (actionChange.action) {
      case 'clear':
        setValue([]);
        break;
      case 'select-option':
        setValue([...value, actionChange.option])
        break;
      case 'remove-value':
        const selectedValues = [...value].filter(selectedVal => selectedVal.value !== actionChange.removedValue.value);
        setValue(selectedValues);
        break;
      default:
        break;
    }
  }


  return (
    <div className="form-group">
      <label className="form-label">{InputData.label}</label>
      <CreatableSelect
        isClearable
        value={value}
        options={options}
        name={props.name}
        onCreateOption={handleCreate}
        isMulti={true}
        onChange={handleChange}
      />
      <span className={error ? "invalid-feedback show" : "invalid-feedback"}>{error}</span>
    </div>
  );
}
