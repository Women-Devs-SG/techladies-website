import styles from "./index.module.scss"
import clsx from "clsx"
import Image from 'next/image'

function MentorsCard(props) {
  const { handleViewMentors, dataMessage, mentors, icon } = props
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card">
        <div className="card-body card-body-sm">
          <Image
            className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10"
            alt="Mentors"
            src={icon}
            width={120} height={120}
          />
          <h6 className="text-center my-4">{mentors.title}</h6>
          {/* <div className="d-flex flex-row flex-wrap justify-content-center">
            {mentors.mentors.map((mentor, index) => (
              <Image
                key={index}
                className="thumbnail thumbnail-sm mx-1 mb-2"
                alt={mentor.name}
                src={mentor.image}
                width={50} height={50}
              />
            ))}
          </div> */}
          <div className={clsx(styles.viewMentors)}>
            <button
              type="button"
              className="btn btn-link"
              onClick={handleViewMentors}
              data-message={dataMessage}
            >
              View All {mentors.mentors.length} Mentors
            </button>
          </div>
          <div className={clsx(styles.whiteTransparent)}></div>
        </div>
      </div>
    </div>
  )
}

export default MentorsCard
