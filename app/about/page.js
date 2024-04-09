import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import "/styles.css"
import Link from 'next/link';

function About() {
    return (
        <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4"></span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/example" className="nav-link">
              Example
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/faq" className="nav-link">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link active" aria-current="page">About Us</Link>
          </li>
        </ul>
      </header>
    <div className="px-4 pt-5 my-5 text-center border-bottom">
  <h1 className="display-4 fw-bold">About Us</h1>
  <div className="col-lg-6 mx-auto">
    <div className="lead mb-4">
       <p>Welcome to our Story Generator website! We are a team of passionate writers, developers, and dreamers who believe in the power of storytelling to inspire and connect people.
      Our mission is to provide a platform where anyone, regardless of their writing experience, can unleash their creativity and create captivating stories that transport readers to new worlds and adventures.
      With our Story Generator, you can explore endless possibilities, from epic fantasy quests to heartwarming romance tales. Let your imagination run wild and discover the magic of storytelling!
      Thank you for visiting our website. We hope you enjoy using our Story Generator and embark on many exciting storytelling journeys.</p>
   </div>
  </div>
  <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
    <div className="container px-5 d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <Image
        src="/0115_hint.png"
        className="img-fluid border rounded-3 shadow-lg mb-4"
        alt="great image"
        width={800}
        height={800}
        loading="lazy"
      />
    </div>
  </div>
            </div>
            </>

  );
}

export default About;
