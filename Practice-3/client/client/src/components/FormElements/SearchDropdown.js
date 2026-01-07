import React from "react";
import Select from 'react-select';


function SearchDropDown(props) {
    const { DataList, InputData } = props;
    const HandleChange = props.onChange;
    let error = props.error;
    return (
        <div className="form-group">
            <label className="form-label">{InputData?.label}</label>
            <Select defaultValue={props?.value} name={props?.name} options={DataList} isMulti={InputData?.multi} onChange={opt => { HandleChange({ name: props?.name, value: opt }); }} required={InputData?.required} />
            <span className={error ? "invalid-feedback show" : "invalid-feedback"}>{error}</span>
        </div>
    );
}

export default SearchDropDown;