import React from 'react'
import Form from 'react-bootstrap/Form';
import './RadioInput.scss'

export default function RadioInput(props) {
      const { name, label, options, type, required } = props.InputData;
      return (
            <>
                  <Form className='radio-form'>
                        <label className='form-label'>{label}</label>
                        {
                              options?.map((item, i) => {
                                    return (
                                          <Form.Check
                                                color='#ffc107'
                                                inline
                                                label={item.label}
                                                name={name}
                                                type={type}
                                                value={item.value}
                                                id={`${item.name}-${i}`}
                                                required={required}
                                                onChange={props?.onChange}
                                          />
                                    )
                              })
                        }
                  </Form>
                  {/* <span className="invalid-feedback show">{props?.error}</span> */}
                  <span className={props?.error ? "invalid-feedback show" : ""}>{props?.error}</span>
            </>
      )
}
