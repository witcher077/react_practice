import React from "react";


function TextInput(props) {
    const formData = props.InputData;
    const HandleChange = props.onChange;
    const error = props.error;

    return (
        <div className="form-group">
            <label className="form-label">{formData.label}</label>
            <input className="form-control" placeholder={formData.placeholder ? formData.placeholder : ""} type={props.type ? props.type : "text"} id={formData.name} name={props.name} onChange={HandleChange} required={formData.required} autoComplete="off" value={props.value} disabled={props.disabled}/>
            <span className={error ? "invalid-feedback show" : ""}>{error}</span>
        </div>
    );
}

export default TextInput;