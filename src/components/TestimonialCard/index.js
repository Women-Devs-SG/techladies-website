import clsx from "clsx"
import Image from "next/image"

import styles from "./index.module.scss"

export default function TestimonialCard({ image, thumbnail, name, message }) {
  return (
    <div className="text-center">
      <div className={clsx("card", styles.card)}>
        <Image
          alt={name + " message"}
          src={image}
          className={clsx("card-img-top", styles.bannerImage)}
          width={400}
          height={200}
        />
        <div className="card-body">
          {thumbnail && (
            <Image
              className={clsx("thumbnail thumbnail-lg mb-3", styles.thumbnail)}
              alt={name + " thumbnail"}
              src={thumbnail}
              width={120}
              height={120}
            />
          )}
          <p className={clsx("text-emphasis")}>{message}</p>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  )
}
