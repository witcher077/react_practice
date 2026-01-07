import React, { useRef } from "react";
import attachment from "../.././assets/InnovativeIdeas-Icons/SVG/attachment.svg";
import cancel from "../.././assets/InnovativeIdeas-Icons/SVG/cancel.svg";
import word from "../.././assets/InnovativeIdeas-Icons/SVG/word.svg";
import pdf from "../.././assets/InnovativeIdeas-Icons/PNG/Pdf.png";
import xlsx from "../.././assets/InnovativeIdeas-Icons/PNG/xlsx.png";
import ppt from "../.././assets/InnovativeIdeas-Icons/PNG/ppt.png";
import "./Attachment.scss";

export default function Attachment(props) {
    const fileRef = useRef();
    const { InputData, uploadedFiles } = props;
    const handleChange = props.onChange;
    const handleDelete = props.onDelete;
    let error = props.error;
    const icons = { pdf: pdf, doc: word, docx: word, ppt: ppt, xls: xlsx, xlsx: xlsx }
    return (
        <div className="form-group attachment-section">
            {
                !InputData?.isSidebar && (
                    <>
                        <label className="form-label">{InputData?.label}</label>
                        <p className="supported-file">No.of files : Upto {InputData?.limit},</p>
                        <p className="supported-file">File Size: Upto {InputData?.maxSize},</p>
                        <p className="supported-file">{InputData?.supportedFiles},</p>
                    </>
                )
            }
            <input
                className="form-control"
                type="file"
                id={InputData?.name}
                name={InputData?.name}
                onChange={handleChange}
                accept={InputData?.supportedFiles}
                multiple={InputData?.multiple}
                ref={fileRef}
            />
            <div className="upload-img" style={{ flexDirection: InputData?.isSidebar ? "column" : "row" }}>
                {
                    uploadedFiles && uploadedFiles.map((file, i) => {
                        const fileType = file?.name ? file?.name?.split('.')[1] : file?.originalname?.split('.')[1];
                        return (
                            <div key={i} className="img-preview" title={file?.name ? file?.name : file?.originalname}>
                                <div className="img-preview-icons">
                                    <a href={"/"+file.path} target="_blank">
                                    <img src={icons[fileType]} alt="preview" className="preview-img" />
                                    </a>
                                    {
                                        props?.cancel &&
                                        (<img src={cancel} alt="delete" className="delete-img" onClick={() => handleDelete(i)} />)
                                    }
                                </div>
                                <p>{file?.name ? file?.name : file?.originalname}</p>
                            </div>
                        )
                    })
                }
                {
                    props?.cancel &&
                    <img
                        src={attachment}
                        alt="attachment Icon"
                        onClick={() => fileRef.current.click()}
                        className={uploadedFiles?.length < InputData?.limit ? 'upload-icon' : 'upload-icon disable'}
                    />
                }
            </div>
        </div>
    );
}
