import Image from 'next/image'
import Header from './components/Header'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <main className="font-primary text-text-color">
      <Header/>
      <div className="mt-8 flex flex-col space-y-2 mx-20">
        <a className="text-[35px] font-normal font-font-spring" >Find the right property, right away</a>
        <a className="font-font-spring font-thin text-[16.5px]">Kemea supports your property research in Israel at every stage</a>
      </div>
     <div className="fixed bottom-0 flex flex-row"> 
     
     </div>
    </main>
  )
}
