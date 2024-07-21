import * as React from 'react'
import { Links, Button, Loader } from '@/path'



export default function Home() {
  return (
    <div>
      Home  {React.version}
      <Button Children="login" />
      <Links path={'/about'} content={"About"} />
      <Loader/>
    </div>
  )
}