import Head from "next/head"
import NavLink from "../components/NavLink"
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <Image
                alt="About TechLadies"
                className="about-image mb-4"
                src="/illustrations/illus_aboutus.png"
                width={600} height={400}
              />
            </div>
            <div className="col-md-6">
              <h1 className="mb-4">
                We create opportunities to increase women’s participation in
                tech.
              </h1>
              <p className="mb-4 text-body large-line-height">
                TechLadies is a community-led initiative for women to connect,
                learn, and grow in the tech industry as software engineers,
                product managers, data scientists, and UI/UX designers.
              </p>
              <p className="mb-4 text-body large-line-height">
                Our community is for women in tech and women keen in switching
                careers into tech.
              </p>
              <a
                className="btn btn-primary"
                href="https://www.facebook.com/groups/techladiescode/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Community on Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <div className="container py-6">
            <div className="row gy-6">
              <div className="col-md-5 offset-md-1 order-md-last">
                <Image
                  alt="TODO: REPLACE ME"
                  className="img-fluid"
                  src="/photos/history.jpg"
                  width={400} height={300}
                />
              </div>
              <div className="col-md-6 order-md-first d-flex flex-column align-items-start justify-content-center">
                <h2 className="mb-4 h4">How we got started</h2>
                <p>
                  As someone with no formal technical background, Elisha Tan
                  learned to code from the developer community. Being a minority
                  in tech, she wondered if women had adequate opportunities to
                  explore the industry.
                </p>
                <p>
                  That’s why she started TechLadies in 2016, to provide a space
                  where women can learn technical skills and switch careers into
                  the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <div className="row mb-5">
            <div className="col-md-10 offset-md-1">
              <h2 className="text-center">
                Today, TechLadies is led by a small group of volunteers
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Founder and Chairperson</h6>
                  <p className="card-text">
                    Leads TechLadies in Singapore, Malaysia, and Vietnam.
                  </p>
                  <div className="mb-4 d-flex flex-row flex-wrap">
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Elisha Tan"
                      src="/team/elisha.jpg"
                      width={120} height={120}
                    />
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Nicole"
                      src="/team/bootnicole.png"
                      width={120} height={120}
                    />
                  </div>
                  <a href="mailto:hello@techladies.co">Contact us!</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Mentorship Team</h6>
                  <p className="card-text">
                    Leads the TechLadies Mentorship program.
                  </p>
                  <div className="mb-4 d-flex flex-row flex-wrap">
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Diya"
                      src="/team/bootdiya.png"
                      width={120} height={120}
                    />
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Victoria"
                      src="/team/victoria.png"
                      width={120} height={120}
                    />
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Toshal"
                      src="/team/toshal.png"
                      width={120} height={120}
                    />
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Saloni"
                      src="/team/mentorship2021/softwareengineering/salonikaur.png"
                      width={120} height={120}
                    />
                  </div>
                  <a href="mailto:mentorship@techladies.co">
                    Contact the Mentorship Team
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Bootcamp Team</h6>
                  <p className="card-text">Leads the TechLadies Bootcamp.</p>
                  <div className="mb-4 d-flex flex-row flex-wrap">
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Valentina"
                      src="/team/valentina.png"
                      width={120} height={120}
                    />
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Charu"
                      src="/team/coreteam2022/comm_charu.jpeg"
                      width={120} height={120}
                    />
                  </div>
                  <a href="mailto:hello@techladies.co">
                    Contact the Bootcamp Team
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Community Team</h6>
                  <p className="card-text">
                    Grows our TechLadies Community online.
                  </p>
                  <div className="mb-4 d-flex flex-row flex-wrap">
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Xena"
                      src="/team/Xena.png"
                      width={120} height={120}
                    />
                  </div>
                  <a href="mailto:hello@techladies.co">
                    Contact the Community Team
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Partnerships Team</h6>
                  <p className="card-text">Leads partnership conversations.</p>
                  <div className="mb-4">
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Pauline"
                      src="/team/commpauline.jpg"
                      width={120} height={120}
                    />
                    <Image
                      className="thumbnail thumbnail-lg"
                      alt="Xi Yi"
                      src="/team/coreteam2022/boot_xi_yi.png"
                      width={120} height={120}
                    />
                  </div>
                  <a href="mailto:hello@techladies.co">
                    Contact the Partnerships Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <Image
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/photos/team.jpg"
                width={400} height={300}
              />
            </div>
            <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
              <h2 className="mb-4 h4">
                Passionate about increasing gender diversity in tech?
              </h2>
              <p className="mb-4">
                We are looking for volunteers and support from companies.
              </p>
              <NavLink href="/contribute/">
                <a className="btn btn-primary">Volunteer with TechLadies</a>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
