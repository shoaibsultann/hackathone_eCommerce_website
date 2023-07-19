import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import heroImage from "/public/header.webp"
import Image from "next/image"
const Hero = () => {
  return (  
    <section className="flex flex-col lg:flex-row gap-y-10">
      <div className="flex-1"> 
      <Badge className=" bg-blue-200 text-blue-700 hover:bg-blue-300 rounded-lg h-10 px-6">Badge</Badge>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
      An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className="bg-black h-12 px-6 mt-4"><ShoppingCart className="mr-2"/>Start Shopping</Button>
      </div>

      <div className="flex-1" >
      <Image src={heroImage} alt="hero image"/>
      </div>

    </section>
  )
}

export default Hero
