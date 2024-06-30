import Link from 'next/link'
import { GiMountaintop } from "react-icons/gi";
import { Button } from '../ui/button'

const Logo = () => {
  return (
    <>
    <Button size='icon' asChild>

    <Link href='/'>
    <GiMountaintop className='w-6 h-6'/>
    </Link>
    </Button>
      
    </>
  )
}

export default Logo
