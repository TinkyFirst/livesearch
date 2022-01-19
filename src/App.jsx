import React, {useState} from 'react'
import SearchPanel from "./components/SearchPanel/SearchPanel";

const App = () => {
    const [items, setItems] = useState ( [
        {id:0, label: 'Text1'},
        {id:1, label: 'Text2'},
        {id:2, label: 'Text3'},
        {id:3, label: 'Text4'},
    ])

    const [search, setSeatch] = useState('')

    return(
        <div>
            <SearchPanel/>
        </div>

    )

}
export default App
