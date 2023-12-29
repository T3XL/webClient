import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
    const [data, setData] = useState([]);
    const [Item, setDataItem] = useState([]);
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/deletecourse?courseno=${data}`)
            .then(res => {
                alert("删除成功");
            })
            .catch(err => {
                console.log(err);
            })
        setData("");
    }
    const handleDeleteItem = (e) => {
        axios.delete(`http://localhost:8080/deleteexperiment?itemno=${Item}`)
            .then(res => {
                alert("删除成功");
            })
            .catch(err => {
                console.log(err);
            })
        setDataItem("");
    }
    return (
        <div>
            <div>
                <h2>删除课程</h2>
                <label htmlFor="data">课程编号：</label>
                <input
                    type="text"
                    id="data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button onClick={handleDelete}>删除课程</button>
            </div>
            <div>
                <h2>删除实验</h2>
                <label htmlFor="Item">实验编号：</label>
                <input
                    type="text"
                    id="Item"
                    value={Item}
                    onChange={(e) => setDataItem(e.target.value)}
                />
                <button onClick={handleDeleteItem}>删除实验</button>
            </div>
        </div>
    )
}
export default Delete;