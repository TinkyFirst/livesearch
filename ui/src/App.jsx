import React, {useState} from 'react'
import SearchPanel from "./components/SearchPanel/SearchPanel";
import s from './Label.module.css'
import FileUpload from "./components/UploadButton/file-upload.component";
import axios from "axios";
import apiUrl from "./Const";

const App = () => {

    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
    });

    const updateUploadedFiles = (files) =>
        setNewUserInfo({ ...newUserInfo, profileImages: files });

    const handleSubmit = (event) => {
        event.preventDefault();
        //logic to create new user...
    };

    const [items, setItems] = useState ( [
        {id:0, label: '♂Dungeon♂Master♂ '},
        {id:1, label: 'Fisting is 300 bucks'},
        {id:2, label: 'FUCK YOU'},
        {id:3, label: 'Im not gay, but 300 bucks its 300 bucks'},
    ]);
    console.log(apiUrl)
    // axios.get(apiUrl)
    //     .then((response) => {
    //         console.log(response.data);
    //         console.log(response.status);
    //         console.log(response.statusText);
    //         console.log(response.headers);
    //         console.log(response.config);
    //     });

    const [search, setSearch] = useState('')

    const handleInputChange = (searchValue) => setSearch(searchValue)

    const searchItem = (item, search) => {
    if (search.length === 0) {
        return items
    }

    return items.filter(item => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
    }

    const visibleItems = searchItem(items, search).map(item => {
        return (
            <li className={s.li}>
                {item.label}
            </li>
        )
    })

const downloadFile = 0
    return(

        <div className={s.container}>



            <SearchPanel handleInputChange={handleInputChange}/>
            <div>
                <ul className={s.ul}>
                    {visibleItems}
                </ul>


            </div>
            <form onSubmit={handleSubmit}>
                <FileUpload
                    accept=".json,.txt"
                    multiple
                    updateFilesCb={updateUploadedFiles}
                />
                {/*<button type="submit">Create New User</button>*/}
            </form>

        </div>

    )

}
export default App
