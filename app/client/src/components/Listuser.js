import React, { useEffect, useState } from 'react'
import { baseurl } from '../apicalls'
import Renderusers from './Renderusers'

export default function Listuser(props) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getprofile() {
      const result1 = await fetch(`${baseurl}/user/${props.uid}`)
      const data1 = await result1.json()
      if (props.following)
        setUsers(data1.following)
      if (props.followers)
        setUsers(data1.followers)

    }
    async function getPost() {
      const res = await fetch(`${baseurl}/post/${props.postid}`)
      const post = await res.json()
      if (props.likes)
        setUsers(post.likes)
      if (props.retweet)
        setUsers(post.retweet)
    }
    if (props.followers || props.following)
      getprofile()
    if (props.likes || props.retweet) {
      getPost()
    }
  }, [])
  return (
    <>
      {
        users?.length !== 0 ?
          users?.map(item => <Renderusers profilefollowing={props.profilefollowing} foll={props.foll} key={item} specific={props.specific} uid={item} />)
          : <></>
      }
    </>
  )
}