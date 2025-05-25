import Image from 'next/image'

export default function Team({ thumbnail, name }) {
  return (
    <div className="col-md-3 text-center">
          {thumbnail && (
            <Image
              className="thumbnail thumbnail-xl mb-2 "
              alt={name + " thumbnail"}
              src={thumbnail}
              width={120} height={120}
            />
          )}
          <h5>{name}</h5>
        </div>
  )
}
