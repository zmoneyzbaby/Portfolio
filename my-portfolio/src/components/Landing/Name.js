import React, {useEffect} from 'react'
import Vivus from 'vivus'


const Name = () => {
    useEffect(() => {
        new Vivus('name', {duration: 200, file: 'svg/name_animated.svg'})
    }, [])
    return (
        <div id='name'>
            
        </div>
    )
}

export default Name
