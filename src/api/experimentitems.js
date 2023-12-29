import React, {useState} from'react';
import axios from "axios";
import "./api.css"
const Experimentitems = () => {
    const [query,setQuery] = useState([]);
    const [data,setData] = useState([]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/getexperimentbyname/${query}`)
        .then(res => {
            setData(res.data.data);
        })
       .catch(err => {
            console.log(err);
        })
    }
    const handleSearchById = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/getexperiment/${query}`)
       .then(res => {
            setData(res.data.data);
        })
      .catch(err => {
            console.log(err);
        })
    }
    const handleSearchByCourse = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/getexperimentbycourseno/${query}`)
      .then(res => {
            setData(res.data.data);
        })
     .catch(err => {
            console.log(err);
        })
    }
    return(
        <div>
            <div>
                <label className='search-bar'>
                    <input type="text" className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} />
                </label>
                <button className="search-button1" onClick={handleSearch}>SearchByName</button>
                <button className="search-button1" onClick={handleSearchById}>SearchById</button>
                <button className="search-button1" onClick={handleSearchByCourse}>SearchByCourse</button>
            </div>
            <div>
                <table>
                <thead>
                        <tr>
                            <th>itemno</th>
                            <th>itemname</th>
                            <th>courseno</th>
                            <th>itemhour</th>
                            <th>itemcontent</th>
                            <th>itemtype</th>
                            <th>iscompulsory</th>
                        </tr>
                </thead>
                <tbody>
                    {data.map(item =>(
                        <tr>
                            <td>{item.itemno}</td>
                            <td>{item.itemname}</td>
                            <td>{item.courseno}</td>
                            <td>{item.itemhour}</td>
                            <td>{item.itemcontent}</td>
                            <td>{item.itemtype}</td>
                            <td>{item.iscompulsory}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default Experimentitems;