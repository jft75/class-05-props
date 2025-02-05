import BusinessCard from './components/BusinessCard'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <main>
      <BusinessCard name={"Jamie Tang"} email={"jft75@cornell.edu"} />
      <BusinessCard name={"Taylor Swift"} email={"ts13@cornell.edu"} />

      <Gallery />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
