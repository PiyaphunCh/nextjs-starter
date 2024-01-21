import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { useEffect } from 'react'
import { setName } from '../../lib/features/setNameSlice'

const Home = () => {
  const name = useAppSelector((state) => state.setNameSlice.name)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setName('aun'))
    }, 1000)
  })

  return <div className=" h-screen bg-white ">{name}</div>
}

export default Home
