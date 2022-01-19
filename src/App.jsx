import React, {useState} from 'react'

const App = () => {
    const [items, setItems] = useState ( [
        {id:0, label: 'Text1'},
        {id:1, label: 'Text2'},
        {id:2, label: 'Text3'},
        {id:3, label: 'Text4'},
    ])

    const [search, setSeatch] = useState('')

    return(
        <h1>hello world</h1>

    )

}
export default App
