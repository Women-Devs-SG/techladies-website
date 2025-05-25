export default function Team({ thumbnail, name }) {
  return (
    <div className="col-md-3 text-center">
          {thumbnail && (
            <img
              className="thumbnail thumbnail-xl mb-2 "
              alt={name + " thumbnail"}
              src={thumbnail}
            />
          )}
          <h5>{name}</h5>
        </div>
  )
}
