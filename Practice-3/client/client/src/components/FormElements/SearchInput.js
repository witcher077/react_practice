import React, { useContext, useEffect, useRef, useState } from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchInput.scss'
import { searchDetails } from '../../services/Search-service';
import AuthContext from '../../store/auth-context';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchInput() {
      const searchRef = useRef();
      const navigate = useNavigate();
      const searchResults = { users: [], ideas: [] }
      const [searchValue, setSearchValue] = useState({ text: "", type: "" })


      const onChange = (e) => {
            setSearchValue({ ...searchValue, text: e.target.value });
      };
      const onSearchClick = () => {
            if (searchValue.text) {
                  navigate('/searchResults', {
                        state: {
                              type: '',
                              text: searchValue.text,
                        }
                  })
            }
      };

      return (
            <div class="form-group has-search">
                  <div className='input-group'>
                        <input type="text" className="form-control" name="search" placeholder="Search here..." onChange={onChange} autoComplete="off" />
                        <FontAwesomeIcon icon={faSearch} className="input-group-text form-control-feedback" onClick={onSearchClick} />
                  </div>
                  <div
                        className="autoCompolelte"
                        style={{ display: searchValue.text ? "block" : "none", }}
                        ref={searchRef}
                  >
                        {
                              Object.keys(searchResults).map((result, i) => {
                                    return (
                                          searchValue.text && (
                                                <Link className="layoutSearch" to="/searchResults"
                                                      state={{
                                                            type: result === "users" ? "user" : result,
                                                            text: searchValue.text,
                                                      }} key={i}>
                                                      <div className="typedSearch" >
                                                            {searchValue.text + " "} in <span>{result}</span>
                                                      </div>
                                                </Link>
                                          )
                                    )
                              })
                        }
                  </div>
            </div>
      )
}
