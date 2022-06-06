import React, { useEffect, useState } from 'react'
import { baseurl } from '../apicalls'
import Renderusers from './Renderusers'
// import Peoplecard from './Peoplecard'

export default function Followers(props) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getprofile() {
      const result1 = await fetch(`${baseurl}/user/${props.uid}`)
      const data1 = await result1.json()
      setUsers(data1.followers)
    }
    getprofile()
  }, [])
  return (
    <>
      {
        users.length !== 0 ?
          users.map(item => <Renderusers key={item} specific={props.specific} uid={item} />)
          : <></>
      }
    </>
  )
}