import About from "@/components/About"
import Choose from "@/components/Choose"
import Product from "@/components/Product"
import Strong from "@/components/Strong"
import Expert from "@/components/Expert"
import Homeservice from "@/components/home/Homeservice"
import Client from "@/components/Client"
import Market from "@/components/Market"
import Export from "@/components/home/Export"


export default function Home() {

  console.log('first')
  return (
    <>
      <Homeservice />
      <About />
      <Product />
      <Strong/>
      <Choose/>
      <Expert />
      <Client />
      <Market/>
      <Export />
    </>
  )
}
