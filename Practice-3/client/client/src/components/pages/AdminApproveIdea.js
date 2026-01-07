import React, { useState } from "react";
import './AdminApproveIdea.scss'
import { Col, Row, Button } from "react-bootstrap";
import { approveIdeaDetail } from "../../services/ApproveIdea-service";
import { useNavigate } from "react-router";

const AdminApproveIdea = (props) => {
    const [complexity, setComplexity] = useState();
    const [status, setStatus] = useState();
    const [adminComments, setAdminComments] = useState('');
    const [errorMessage,setErrorMessage]=useState();
    const navigate = useNavigate();

    const adminActionIdea = ()=>{
        approveIdeaDetail(props.token,props.id,{
            "complexity": complexity,
            "action": status,
            "adminComment": adminComments})
        .then(()=> {
            navigate("/ideaPage")
        })
        .catch((error) => {
            console.error('Error:', error);
            setErrorMessage(error)
        });
    }

    return (
        <div className="approveIdeaDetail">
            <Row className="ans">
                <Col className="col-sm-2">
                    <b>Complexity*:</b>
                </Col>
                <Col>
                    <div className="approveComplexityRadio" onChange={(e)=>setComplexity(e.target.value)}>
                        <label className="radioLabel">Simple
                            <input type="radio" name="complexity" value="simple"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radioLabel">Medium
                            <input type="radio" name="complexity" value="medium"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radioLabel">Complex
                            <input type="radio" name="complexity" value="complex"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </Col>
            </Row>
            <Row className="ans">
                <Col className="col-sm-2">
                    <b>Action*:</b>
                </Col>
                <Col>
                    <div className="approveStatusRadio" onChange={(e)=>setStatus(e.target.value)}>
                        <label className="radioLabel">Approve
                            <input type="radio" name="status"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radioLabel">On hold
                            <input type="radio" name="status"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radioLabel">Reject
                            <input type="radio" name="status"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </Col>
            </Row>
            <Row className="ans">   
                <Col style={{width:"100%"}}>
                    <textarea style={{width:"100%"}} placeholder="Comments..." name="approveComments" rows="4" onChange={(e)=>setAdminComments(e.target.value)}>
                    </textarea>
                </Col>
                <span className={errorMessage ? "invalid-feedback show" : "invalid-feedback"}>{errorMessage}</span>
            </Row>
            <Row className="ans">
                <Col>
                    <div className="approveIdeaActions">
                        <Button variant="warning" size="sm" 
                        onClick={()=>adminActionIdea}>
                            Save
                        </Button>
                        <Button variant="warning" size="sm" onClick={()=>navigate("/ideaPage")}>
                            Cancel
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminApproveIdea;