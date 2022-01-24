import React, {useState} from 'react'
import S from './SearchPanel.module.css'

const SearchPanel = ({handleInputChange}) => {

    const [value, setValue] = useState('')

    const changeInput = (e) => {
        setValue(e.target.value)

        handleInputChange(e.target.value)


    }
    return(

        <div>
            <input className={S.input} type="text"  onChange={changeInput} value={value}/>
        </div>
    )
}

export default SearchPanel
