import React, { useState, useeffect, useEffect } from 'react'

export default function App() {
  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('return from ressource change')
    }
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>

    </>
  )
}
/*
  basically the best way to think about useEffect hook is that any time that we want to have a side effect
whether its your component mounts, when it unmounts, when a variable changes when a state changes , when props 
changes or when anything updates and we want to do something this is what useEffect is going to be used for.
 */