import Card from './ui/Card'

export default function Gallery() {
  return (
    <div className="gallery">
      <Card imgUri={"/images/asteroid.webp"} altText={"Asteroid"} citation={"Source: Microsoft Copilot"}/>
      <Card imgUri={"/images/black-hole.webp"} altText={"Black Hole"} citation={"Source: Microsoft Copilot"}/>
      <Card imgUri={"/images/cloud-nebulae.webp"} altText={"Nebulae"} citation={"Source: Microsoft Copilot"}/>
    </div>
  )
}
