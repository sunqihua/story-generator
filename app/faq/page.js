import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import "/styles.css"
import Link from 'next/link';

function FAQ() {
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
            <a href="#" className="nav-link active">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link" aria-current="page">About Us</Link>
          </li>
        </ul>
      </header>
    <div className="px-4 pt-5 my-5 text-center border-bottom">
  <h1 className="display-4 fw-bold">Frequently Asked Questions (FAQs)</h1>
  <div className="col-lg-6 mx-auto">
    <div className="lead mb-4">
       <p> <div className="faq-item">
      <p className="question">Q: What is a story title generator?</p>
      <p>
        A: A story title generator is a tool that automatically generates titles
        for stories or creative writing projects. It helps writers overcome
        writers block and find inspiration for their works.
      </p>
    </div>
    <div className="faq-item">
      <p className="question">Q: How does your story title generator work?</p>
      <p>
        A: Our story title generator uses algorithms to generate titles based on
        input parameters such as genre, theme, characters, and keywords. It then
        produces a variety of title options for users to choose from.
      </p>
    </div>
    <div className="faq-item">
      <p className="question">Q: Is your story title generator free to use?</p>
      <p>
        A: Yes, our story title generator is completely free to use. There are
        no subscription fees or hidden charges. Simply visit our website and
        start generating titles for your stories!
      </p>
    </div></p>  </div>
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

export default FAQ;
