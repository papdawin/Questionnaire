import React from 'react'
import GuestHeader from './GuestHeader'
import UserHeader from './UserHeader'

const Picker = (props : any) => {
    if(props.user) {
        return <UserHeader user={props.user}/>
    }else{
        return <GuestHeader />
    }
}

export default Picker