import React from "react";

function TextArea(props) {
    const formData = props.InputData;
    const HandleChange = props.onChange;
    const error = props.error;
    const textLength = props?.value ? props?.value.length : 0;

    return (
        <div className="form-group">
            <label className="form-label">{formData.label}</label>
            <textarea
                className="form-control"
                type="text"
                id={formData.name}
                name={props.name}
                onChange={HandleChange}
                required={formData.required}
                maxLength={formData.maxLength}
                value={props.value}
                rows={props?.rows ? props?.rows : 3}
            />
            <small style={{ float: 'right', padding: '5px 0' }}>
                {formData.maxLength - textLength + " "}characters left
            </small>
            <span className={error ? "invalid-feedback" : ""}>{error}</span>
        </div>
    );
}

export default TextArea;
