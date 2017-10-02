const Card = ({ label, text, imageUrl }) => (
  <div>
    <hr />
    <p>{label}</p>
    <p>{text}</p>
    <img src={imageUrl} />
  </div>
)

export default Card
