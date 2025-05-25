import { useState } from "react"
import Head from "next/head"
import clsx from "clsx"
import Accordion from "../components/Accordion"
import bootcampFAQ from "../data/bootcamp-faq.js"
import Timeline from "../components/Timeline"
import TimelineItem from "../components/TimelineItem"
import BootcampBuilders from "../components/BootcampBuilders"
import EmailSubscription from "../components/EmailSubscription"
import bootcampTimeline from "../data/bootcamp-timeline"
import bootcampBuildersData from "../data/bootcamp-3-builders"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bootcamp #3 | TechLadies</title>
      </Head>
      <main>
        <div className="container p-3">
          <div className="row gy-6">
            <div className="col-md-9">
              <h3 className="my-5">TechLadies Bootcamp #3</h3>
              <p className="mb-4">
                The TechLadies Bootcamp #3 was a 12-week part-time accelerated
                learning program held in 2017. It was designed to help women
                with some basic programming background become professional
                programmers. creating products for non-profit organizations
                using the Ruby programming language under the guidance of
                industry experts.
                <br />
                <br />
                To qualify, applicants had to create their own personal websites
                using Ruby on Rails. TechLadies conducted 3 pre-bootcamp
                workshops to equip women with basic programming skills to aid
                their submission app.
                <br />
                <br />
                See all workshop materials, slides and video recordings at this{" "}
                <Link href="/">Link</Link>.
              </p>
            </div>
            <div className="col-md-3">
              <Image
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/img/img2_PLACEHOLDER_REMOVE_ME.png"
                width={400} height={300}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row gy-6">
              <h3>
                Out of 86 applicants, 6 ladies were selected for this bootcamp.
              </h3>
              <p className="col-md-8 mb-4 text-emphasis">
                They each have their unique backgrounds - coming from industries
                such as publishing, finance, logistics and more.
              </p>
              <div className="col-md-4">
                <Image
                  className="img-fluid"
                  alt="TODO: REPLACE ME"
                  src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                  width={400} height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <p className="mb-4 text-center text-emphasis text-primary">
              The 6 TechLadies Bootcamp #3 participants formed 2 teams to build
              web applications for Mountbatten Vocational School and TechLadies.
              They presented their work at the TechLadies Bootcamp #3 Graduation
              Party, hosted by Google.
            </p>
          </div>
          <div className="row mt-4">
            <div className="col-md-5">
              <Image
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                width={400} height={300}
              />
            </div>
            <div className="offset-md-1 col-md-6">
              <Image
                alt="TODO: REPLACE ME"
                className="thumbnail thumbnail-lg d-block space-bottom-10"
                src="/icons/icon_TLmentorship.png"
                width={200} height={200}
              />
              <p>
                Mountbatten Vocational School provides vocational courses for
                students with learning disabilities to prepare them for their
                careers. They were using paper and excel sheets to keep track of
                student details, which was becoming difficult given the
                multitude of courses and students.
                <br />
                <br />
                Anukrity, Marta, and Pearly worked as a team to build a school
                management system that automates and digitizes record keeping
                and report generation.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-5">
              <Image
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                width={400} height={300}
              />
            </div>
            <div className="offset-md-1 col-md-6">
              <Image
                alt="TODO: REPLACE ME"
                className="thumbnail thumbnail-lg d-block space-bottom-10"
                src="/icons/icon_TLmentorship.png"
                width={200} height={200}
              />
              <p>
                Mountbatten Vocational School provides vocational courses for
                students with learning disabilities to prepare them for their
                careers. They were using paper and excel sheets to keep track of
                student details, which was becoming difficult given the
                multitude of courses and students.
                <br />
                <br />
                Anukrity, Marta, and Pearly worked as a team to build a school
                management system that automates and digitizes record keeping
                and report generation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row gy-6">
              <div className="col-md-4 offset-md-1">
                <Image
                  alt="TODO: REPLACE ME"
                  className="img-fluid"
                  src="/img/img1_PLACEHOLDER_REMOVE_ME.png"
                  width={400} height={300}
                />
              </div>
              <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
                <p className="mb-4 h2 text-primary">
                  Get updates on the next TechLadies Bootcamp.
                  <br />
                  Join our mailing list below.
                </p>
                <div className="container pl-0">
                  <EmailSubscription />
                </div>
              </div>
            </div>
          </div>
        </div>

        <BootcampBuilders data={bootcampBuildersData} />

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                <Accordion data={bootcampFAQ} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
