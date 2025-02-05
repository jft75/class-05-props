import Citation from "../Citation";

export default function Card({imgUri, altText, citation}) {
  return (
    <div className="card">
      <img src={imgUri} alt={altText} />
      <p>{citation}</p>
      {/* <Citation /> */}
    </div>
  )
}
