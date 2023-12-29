import React, { useState } from 'react';
import axios from 'axios';
import "./api.css"
const Search = () => {
    const [query, setCourseno] = useState([]);
    const [coursedata, setCoursedata] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/getcoursebyname/${query}`)
            .then(res => {
                setCoursedata(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleSearchById = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/getcourse/${query}`)
            .then(res => {
                setCoursedata(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div>
                <label className='search-bar'>
                    <input type="text" className="search-input" value={query} onChange={(e) => setCourseno(e.target.value)} />
                </label>
                <button className="search-button" onClick={handleSearch}>SearchByName</button>
                <button className="search-button" onClick={handleSearchById}>SearchById</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>courseno</th>
                            <th>coursename</th>
                            <th>credithour</th>
                            <th>coursetype</th>
                            <th>experimenttype</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(coursedata) ?(coursedata.map(courses => (
                        <tr>
                            <td>{courses.courseno}</td>
                            <td>{courses.coursename}</td>
                            <td>{courses.credithour}</td>
                            <td>{courses.coursetype}</td>
                            <td>{courses.experimenttype}</td>
                            <td>{courses.description}</td>
                        </tr>
                    ))):(<tr>
                        <td>{coursedata.courseno}</td>
                        <td>{coursedata.coursename}</td>
                        <td>{coursedata.credithour}</td>
                        <td>{coursedata.coursetype}</td>
                        <td>{coursedata.experimenttype}</td>
                        <td>{coursedata.description}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default Search;
