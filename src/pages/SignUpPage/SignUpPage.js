import './SignUpPage.scss'
import React from 'react'
import SignUpBlock from 'containers/SignUpBlock/SignUpBlock'

const SignUpPage = () => {
  const blockInfo = [['username', 'password'], ['name', 'last_name', 'city'], ['image'], []]
  const blocks = blockInfo.map((info, ind) => {
    return <SignUpBlock key={ind+1} id={ind+1} inputs={info} />
  })

  return (
    <main className="signup-page">
      { blocks }
    </main>
  )
}

export default SignUpPage
