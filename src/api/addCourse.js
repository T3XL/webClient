import React,{useState} from "react";
import axios from "axios";
import "./add.css"
const AddCourse = () => {
    const [courseInfo, setCourseInfo] = useState({
        courseno: '',
        coursename: '',
        credit: '',
        credithour: '',
        coursetype: '',
        experimenttype: '',
        description: '',
      });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourseInfo({ ...courseInfo, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.nativeEvent.submitter.name === 'submitButton1'){
            axios.post("http://localhost:8080/addcourse", courseInfo,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
           .then(res => {
                console.log("added successfully:",res.data);
                alert("添加成功");
            })
           .catch(err => {
                console.log(err);
            });
            console.log(courseInfo);
            setCourseInfo({
                courseno: '',
                coursename: '',
                credit: '',
                credithour: '',
                coursetype: '',
                experimenttype: '',
                description: '',
              });
        }
        else if (event.nativeEvent.submitter.name ==='submitButton2'){
            event.preventDefault();
        axios.put("http://localhost:8080/updatecourse", courseInfo,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
           .then(res => {
                console.log("updated successfully:",res.data);
                alert("修改成功");
            })
           .catch(err => {
                console.log(err);
            });
            console.log(courseInfo);
            setCourseInfo({
                courseno: '',
                coursename: '',
                credit: '',
                credithour: '',
                coursetype: '',
                experimenttype: '',
                description: '',
              });
        }
        
    };
    const [itemsInfo, setItemsInfo] = useState({
        itemno : "",
        itemname : "",
        courseno : "",
        itemhour : "",
        itemcontent : "",
        itemtype : "",
        iscompulsory : "",
    });
    const handleItemsInputChange = (event) => {
        const { name, value } = event.target;
        setItemsInfo({...itemsInfo, [name]: value });
    };
    const handleItemsSubmit = (event) => {
        event.preventDefault();
        if (event.nativeEvent.submitter.name === 'itemsSubmitButton1'){
            axios.post("http://localhost:8080/addexperiment", itemsInfo,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
                console.log("added successfully:",res.data);
                alert("添加成功");
            })
        .catch(err => {
                console.log(err);
            });
            console.log(itemsInfo);
            setItemsInfo({
                itemno : "",
                itemname : "",
                courseno : "",
                itemhour : "",
                itemcontent : "",
                itemtype : "",
                iscompulsory : "",
            });
        }
        else if (event.nativeEvent.submitter.name ==='itemsSubmitButton2'){
            event.preventDefault();
            axios.put("http://localhost:8080/updateexperiment", itemsInfo,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
           .then(res => {
                console.log("updated successfully:",res.data);
                alert("修改成功");
            })
           .catch(err => {
                console.log(err);
            });
            setItemsInfo({
                itemno : "",
                itemname : "",
                courseno : "",
                itemhour : "",
                itemcontent : "",
                itemtype : "",
                iscompulsory : "",
            });
        }
        }

    return(
        <div className="container">
            <div className="form-container">
            <form onSubmit={handleSubmit}>
            <label>Course No:</label>
            <input type="text" name="courseno" value={courseInfo.courseno} onChange={handleInputChange} />
            <br />
            <label>Course Name:</label>
            <input type="text" name="coursename" value={courseInfo.coursename} onChange={handleInputChange} />
            <br />
            <label>Credit:</label>
            <input type="text" name="credit" value={courseInfo.credit} onChange={handleInputChange} />
            <br />
            <label>Credit Hour:</label>
            <input type="text" name="credithour" value={courseInfo.credithour} onChange={handleInputChange} />
            <br />
            <label>Course Type:</label>
            <input type="text" name="coursetype" value={courseInfo.coursetype} onChange={handleInputChange} />
            <br/>
            <label>Experiment Type:</label>
            <input type="text" name="experimenttype" value={courseInfo.experimenttype} onChange={handleInputChange} />
            <br/>
            <label>Description:</label>
            <input type="text" name="description" value={courseInfo.description} onChange={handleInputChange} />
            <br/>
            <button type="submit" name="submitButton1">Add Course</button>
            <button type="submit" name="submitButton2">Update Course</button>
        </form>
            </div>
        <div className="form-container">
            <form onSubmit={handleItemsSubmit}>
                <label>Item No:</label>
                <input type="text" name="itemno" value={itemsInfo.itemno} onChange={handleItemsInputChange} />
                <br />
                <label>Item Name:</label>
                <input type="text" name="itemname" value={itemsInfo.itemname} onChange={handleItemsInputChange} />
                <br />
                <label>Course No:</label>
                <input type="text" name="courseno" value={itemsInfo.courseno} onChange={handleItemsInputChange} />
                <br />
                <label>Item Hour:</label>
                <input type="text" name="itemhour" value={itemsInfo.itemhour} onChange={handleItemsInputChange} />
                <br />
                <label>Item Content:</label>
                <input type="text" name="itemcontent" value={itemsInfo.itemcontent} onChange={handleItemsInputChange} />
                <br />
                <label>Item Type:</label>
                <input type="text" name="itemtype" value={itemsInfo.itemtype} onChange={handleItemsInputChange} />
                <br />
                <label>Is Compulsory:</label>
                <input type="text" name="iscompulsory" value={itemsInfo.iscompulsory} onChange={handleItemsInputChange} />
                <br />
                <button type="submit" name="itemsSubmitButton1">Add Item</button>
                <button type="submit" name="itemsSubmitButton2">Update Item</button>
            </form>
        </div>
        </div>
    )
}
export default AddCourse;