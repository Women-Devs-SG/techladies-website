import { useState } from "react"
import Head from "next/head"
import Image from "next/image"

import { mentorsData } from "../data/mentorship-2021-mentors"

import Accordion from "../components/Accordion"
import Timeline from "../components/Timeline"
import TimelineItem from "../components/TimelineItem"
import MentorsCard from "../components/MentorsCard"
import Gallery from "../components/Gallery"
import TestimonialCard from "../components/TestimonialCard"
import Team from "../components/Team"

import mentorshipTimeline from "../data/mentorship-timeline-2025"
import programsFAQ from "../data/mentorship-faq.js"
import mentorshipTestimonials from "../data/mentorship-testimonials.js"
import team from "../data/team.js"

import Modal from "../components/Modal"

export default function Home() {
  const [showMentorsModal, setShowMentorsModal] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(null)

  const handleViewMentors = (e) => {
    setSelectedTopic(e.target.dataset.message)
    setShowMentorsModal(true)
  }

  return (
    <div>
      <Head>
        <title>Mentorship | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <h1 className="large-line-height">TechLadies x WomenDevsSG Mentorship Program 2025</h1>
              <p className="mb-4 text-body large-line-height">
              The TechLadies Mentorship Program empowers women with personal career guidance from experienced industry professionals in Software Engineering, UI/UX Design, Data Science/AI, and Product Management.
                <br />
                <br />
                In 2025, we&apos;re proud to collaborate once again with {" "}
                <a
                  href="https://womendevssg.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Women Devs Singapore
                </a>
                {" "}to connect like-minded mentors and mentees to learn, grow, and create meaningful impact together. The program includes one-on-one mentoring sessions between mentors and mentees, with a new “Speed Mentorship” pilot to help find the right match more effectively.
                <br />
                <br />
                Registration for the TechLadies x WomenDevsSG Mentorship Program
                2025 is now open!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeT2tpYkyVvhWf6tkLmfIotCtTkIos528vDs65guEqFJybkRQ/viewform?usp=sharing"
                    rel="noreferrer"
                  >
                    Apply as a Mentor!
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf7HOH85UGMCjHqXQgE99OmyCLBKSzyTcIPt0pnYv7s-Gnhpw/viewform?usp=sharing"
                    rel="noreferrer"
                  >
                    Apply as a Mentee!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5  offset-md-1">
              <Image
                className="img-fluid"
                alt="mentorship illustration"
                src="/illustrations/illus_mentorship.png"
                width={600} height={400}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <h2 className="text-center mb-5">Mentorship Focus Areas</h2>
              <div className="col-md-3 text-center">
                <Image
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="data science engineering"
                  src="/icons/icon_datascience.png"
                  width={120} height={120}
                />
                <h6>Data Science / AI</h6>
              </div>
              <div className="col-md-3 text-center">
                <Image
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="product management"
                  src="/icons/icon_productmanagement.png"
                  width={120} height={120}
                />
                <h6>Product Management</h6>
              </div>
              <div className="col-md-3 text-center">
                <Image
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="software engineering"
                  src="/icons/icon_softwaredevelopment.png"
                  width={120} height={120}
                />
                <h6>Software Engineering</h6>
              </div>
              <div className="col-md-3 text-center">
                <Image
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="UI UX"
                  src="/icons/icon_UIUX.png"
                  width={120} height={120}
                />
                <h6>UI / UX</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="text-center mb-5">Why join us as a Mentor?</h2>
            <div className="container">
              <Image
                className="container mb-6"
                alt="mentorship growth"
                src="/photos/team2.jpg"
                width={600} height={550}
              />
            </div>
            <div className="col-md-3 text-center">
              <Image
                className="thumbnail thumbnail-lg mb-2 "
                alt="product management"
                src="/img/paper-plane.svg"
                width={64} height={64}
              />
              <h6>
                You are passionate about empowering others to succeed in their
                career.
              </h6>
            </div>
            <div className="col-md-3 text-center">
              <Image
                className="thumbnail thumbnail-md mb-2 "
                alt="product management"
                src="/img/paper-plane.svg"
                width={48} height={48}
              />
              <h6>
                You desire to make a difference for aspiring women in Tech.
              </h6>
            </div>
            <div className="col-md-3 text-center">
              <Image
                className="thumbnail thumbnail-lg mb-2 "
                alt="product management"
                src="/img/paper-plane.svg"
                width={64} height={64}
              />
              <h6>
                You believe mentoring is a two-way learning - for you and your
                mentees.
              </h6>
            </div>
            <div className="col-md-3 text-center">
              <Image
                className="thumbnail thumbnail-md mb-2 "
                alt="product management"
                src="/img/paper-plane.svg"
                width={48} height={48}
              />
              <h6>
                You want to contribute to the Tech community with your time and
                expertise.
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <h2 className="mb-5 text-center">Program Timeline 2025</h2>
            <div className="row gy-4">
              <Timeline>
                {mentorshipTimeline.map(({ date, title, description }) => (
                  <TimelineItem key={title}>
                    <h3 className="h5 text-red mb-3">{date}</h3>
                    <h4 className="h6 mb-3">{title}</h4>
                    <p className="pb-3">{description}</p>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <h2 className="mb-5 text-center">Testimonials</h2>
          <div className="row gy-4">
            <Gallery>
              {mentorshipTestimonials.map(
                ({ image, thumbnail, name, message }) => (
                  <TestimonialCard
                    image={image}
                    key={name}
                    thumbnail={thumbnail}
                    name={name}
                    message={message}
                  />
                )
              )}
            </Gallery>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <h2 className="text-center mb-5">
                Meet Our Mentorship Core Team 2025
              </h2>
              {team.map(
                ({ thumbnail, name }) => (
                  <Team
                    key={name}
                    thumbnail={thumbnail}
                    name={name}
                  />
                )
              )}
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="mb-4 text-center">Mentors from 2024</h2>
            <div className="row gy-4">
              <MentorsCard
                dataMessage="software"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["software"]}
                icon="/icons/icon_softwaredevelopment.png"
              />
              <MentorsCard
                dataMessage="ux"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["ux"]}
                icon="/icons/icon_UIUX.png"
              />
              <MentorsCard
                dataMessage="data"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["data"]}
                icon="/icons/icon_datascience.png"
              />
              <MentorsCard
                dataMessage="product"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["product"]}
                icon="/icons/icon_productmanagement.png"
              />
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3 className="text-center mb-5">Frequently Asked Questions</h3>
              <Accordion data={programsFAQ} />
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <Image
                alt="Contact us"
                className="img-fluid"
                src="/illustrations/illus_contactus.png"
                width={600} height={400}
              />
            </div>
            <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
              <h3 className="mb-4 h4">Have a question?</h3>
              <p>
                Do drop us an email via the link below and we&apos;ll get back
                to you soon.
              </p>
              <a
                className="btn btn-primary"
                href="mailto:mentorship@techladies.co"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {selectedTopic && (
          <Modal
            isShown={showMentorsModal}
            onClose={() => setShowMentorsModal(false)}
            title={mentorsData[selectedTopic].title}
          >
            <div className="container">
              <div className="row">
                {mentorsData[selectedTopic].mentors.map(
                  ({ image, title, link, description }) => (
                    <div className="row gy-3 mb-4" key={title}>
                      <div className="col-md-2">
                        <Image
                          className="thumbnail thumbnail-lg"
                          alt={title + " image"}
                          src={image}
                          width={120} height={120}
                        />
                      </div>

                      <div className="col-md-10">
                        <h6 className="mb-3">
                          {title} (
                          <a href={link} target="_blank" rel="noreferrer">
                            LinkedIn
                          </a>
                          )
                        </h6>
                        <p>{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </Modal>
        )}
      </main>
    </div>
  )
}
