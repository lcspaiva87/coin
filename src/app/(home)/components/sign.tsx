'use client'
import Button from '@/components/ui/button'
import { useState } from 'react'
import ModalSignInTo from './modalSign'
import ModalSignUp from './modalSignup'
export default function Sign() {
  const [isOpenSignInTo, setIsOpenSignInTo] = useState(false)
  const [isOpenSignUp, setIsOpenSignUp] = useState(false)

  return (
    <div className="w-full hidden items-center gap-[1.5rem] md:flex ">
      <Button
        variant="ghost"
        dataTest="button-sign-in"
        onClick={() => setIsOpenSignInTo(true)}
      >
        Sign in
      </Button>
      <Button
        variant="primary"
        dataTest="button-sign-in"
        onClick={() => setIsOpenSignUp(true)}
      >
        Sign up
      </Button>

      <ModalSignInTo
        isClose={setIsOpenSignInTo}
        isOpen={isOpenSignInTo}
        isOpenModalSignUp={setIsOpenSignUp}
      />
      <ModalSignUp
        isClose={setIsOpenSignUp}
        isOpen={isOpenSignUp}
        isOpenModalSignIn={setIsOpenSignInTo}
      />
    </div>
  )
}
