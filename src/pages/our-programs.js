import Head from "next/head"

import { useEffect } from "react"

import clsx from "clsx"

import Accordion from "../components/Accordion"
import Gallery from "../components/Gallery"
import TestimonialCard from "../components/TestimonialCard"
import Quiz from "../components/Quiz"
import NavLink from "../components/NavLink"

import preloadImages from "../utils/preloadImages"

import bootcampTestimonials from "../data/bootcamp-testimonials.js"
import mentorshipTestimonials from "../data/mentorship-testimonials.js"
import programsFAQ from "../data/programs-faq.js"
import quiz from "../data/quiz.js"

export default function Home() {
  useEffect(() => {
    preloadImages(bootcampTestimonials.map((testimonial) => testimonial.image))
    preloadImages(
      mentorshipTestimonials.map((testimonial) => testimonial.image)
    )
  }, [bootcampTestimonials, mentorshipTestimonials])

  return (
    <div>
      <Head>
        <title>Our Programs | TechLadies</title>
      </Head>
      <div className="container py-6">
        <div className="row gy-6">
          <div className="col-lg-5 col-md-6">
            <img
              alt="Learn about TechLadies' programs"
              className="img-fluid mb-4"
              src="/illustrations/illus_programmes.png"
            />
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <h1 className="mb-4 h3">
              Discover TechLadies&apos; various programs
            </h1>
            <p className="text-body mb-4 large-line-height">
              We are currently planning for new programs. Stay tuned!
            </p>
            {/* <Quiz data={quiz} /> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-gray">
        <div id="bootcamp" className="container py-6">
          <div className="row gy-5">
            <div className="col-md-5 offset-md-1 col-lg-6 offset-lg-1 order-md-last">
              <img
                alt="TechLadies Bootcamp"
                className="thumbnail thumbnail-xl mb-4"
                src="/icons/icon_TLbootcamp.png"
              />
              <h3 className="mb-4 h4">TechLadies Bootcamp Workshops</h3>
              <p className="mb-4">Duration: 5 weekends</p>
              <p className="mb-4">
                The TechLadies Bootcamp offers 5 weekend workshops to help women
                come into Tech.
              </p>
              <button className="btn btn-primary">
                <NavLink href="/bootcamp/">
                  <a className="white-text">I'm Interested!</a>
                </NavLink>
              </button>
            </div>
            <div className="col-md-6 col-lg-5 order-md-first">
              <Gallery>
                {bootcampTestimonials.map(
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
        </div>
      </div> */}
      <div className="bg-gray">
        <div className="container py-6">
          <div id="mentorship" className="row gy-5">
            <div className="col-lg-6 col-md-5">
              <img
                alt="TechLadies Mentorship Program"
                className="thumbnail thumbnail-xl mb-4"
                src="/icons/icon_TLmentorship.png"
              />
              <h3 className="mb-4 h4">TechLadies Mentorship Program</h3>
              <p className="mb-4">Duration: 12 weeks</p>
              <p className="mb-4">
                A 3-month mentorship program that pairs women who are
                transitioning into or establishing themselves in the tech
                industry with industry practitioners.
              </p>

              <button className="btn btn-primary">
                <NavLink href="/mentorship/">
                  <a className="white-text">I&apos;m Interested!</a>
                </NavLink>
              </button>
            </div>
            <div className="col-lg-5 col-md-6 offset-md-1">
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
        </div>
      </div>
      <div className="container py-6 text-center">
        <div className="row gy-6">
          <div id="meet" className="col-md-5 offset-md-1">
            <img
              alt="TechLadies Meet"
              className="thumbnail thumbnail-xl mb-4"
              src="/icons/icon_TLmeet.png"
            />
            <h3 className="mb-4 h4">TechLadies Meet</h3>
            <p className="mb-4">
              Meet fellow TechLadies through in-person or online technical
              talks, roundtable discussions, study groups and more! TechLadies
              Meet is open to women of all levels of technical skills.
            </p>
            <a
              className="btn btn-primary"
              href="https://www.eventbrite.sg/o/techladies-11040976589"
              target="_blank"
              rel="noreferrer"
            >
              See our Events
            </a>
          </div>
          <div id="community" className="col-md-5">
            <img
              alt="TechLadies Community"
              className="thumbnail thumbnail-xl mb-4"
              src="/icons/icon_TLcommunity.png"
            />
            <h3 className="mb-4 h4">TechLadies Community</h3>
            <p className="mb-4">
              Beyond programs and events, TechLadies is a community. Join us
              online for the latest industry news, highlights on awesome women
              in tech, and get support on your journey in tech.
            </p>
            <a
              className="btn btn-primary"
              href="https://www.facebook.com/groups/techladiescode"
              target="_blank"
              rel="noreferrer"
            >
              Join us on Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5 offset-md-1 order-md-last">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/photos/coach.jpg"
              />
            </div>
            <div className="col-md-6 order-md-first d-flex flex-column align-items-start justify-content-center">
              <h2 className="mb-4 h4">Want to be a Coach?</h2>
              <p className="mb-4">
                We are also on the lookout for awesome people to be a coach for
                our programs. Connect with many others and contribute to the
                tech community.
              </p>
              <a
                className="btn btn-primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmKUasl2XeZjaFzx58PxDwLL2WtVcI4LSKM1KaZXyOcRVvTg/viewform"
                target="_blank"
                rel="noreferrer"
              >
                I&apos;m interested!
              </a>
            </div>
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
    </div>
  )
}
