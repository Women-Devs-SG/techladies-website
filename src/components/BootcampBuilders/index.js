import { useState } from "react"
import clsx from "clsx"
import Image from "next/image"

function BootcampBuilders(props) {
  const { data } = props

  const firstThreeBuilders = data.slice(0, 3)
  const remainingBuilders = data.slice(3)

  const [showMoreBuilders, setShowMoreBuilders] = useState(false)

  return (
    <div className="container py-6">
      <div className="row m-0">
        <h2 className="mb-4 text-center">Bootcamp Builders</h2>
        <div className="row">
          {firstThreeBuilders.map(
            ({ image, name, title, description }, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="d-flex flex-row">
                  <div className="col-md-4 pr-3">
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt={title + " image"}
                      src={image}
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="col-md-8">
                    <h4>{name}</h4>
                    <h6>{title}</h6>
                  </div>
                </div>
                <div className="row my-2">
                  <p className="align-top text-small">{description}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div
          className={clsx("row", { collapse: !showMoreBuilders })}
          id="moreBuilders"
        >
          {remainingBuilders.map(
            ({ image, name, title, description }, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="row">
                  <div className="col-md-4">
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt={title + " image"}
                      src={image}
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="col-md-8">
                    <h4>{name}</h4>
                    <h6>{title}</h6>
                  </div>
                </div>
                <div className="row my-2">
                  <p className="align-top text-small">{description}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="row">
          <div className="mx-auto col-md-5 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="collapse"
              data-target="#moreBuilders"
              role="button"
              aria-expanded={showMoreBuilders}
              aria-controls="moreBuilders"
              onClick={() => setShowMoreBuilders(!showMoreBuilders)}
            >
              {showMoreBuilders ? "Hide Builders" : "Show All Builders"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BootcampBuilders
