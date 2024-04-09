import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import "/styles.css"
import Link from 'next/link';

function ExamplePage() {
  const examplePrompts = [
    {
      prompt: "Write a story about a mysterious island",
      titles: [
        "The Secret of Shadow Island",
        "Lost in the Enigma Isles",
        "Whispers of the Forgotten Peninsula",
        "Unraveling the Mystery of Hidden Harbor",
        "Echoes from the Forbidden Isle"
      ]
    },
    {
      prompt: "Create a love story set in Paris",
      titles: [
        "Love Among the Parisian Lights",
        "Romance in the City of Love",
        "Eiffel Tower Serenade",
        "Whispers of Notre Dame",
        "Parisian Nights: A Tale of Love"
      ]
    },
    {
      prompt: "Craft a fantasy adventure involving dragons",
      titles: [
        "Dragon's Breath: The Quest for the Firestone",
        "Flight of the Dragonriders",
        "The Lost Kingdom of Draconia",
        "Realm of the Dragonheart",
        "Scales of Destiny: A Dragon's Tale"
      ]
    }
  ];

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
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
            <Link href="/example" className="nav-link active" aria-current="page">
              Example
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/faq" className="nav-link">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </header>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Beautiful Examples</h1>
        <div className="col-lg-6 mx-auto">
          <div className="lead mb-4 container">
            <p>Welcome to the Example Page for our Story Title Generator website! Here are some example prompts and the generated story titles based on them:</p>
          </div>
        </div>
        <div className="mb-4 row justify-content-center">
          {examplePrompts.map((example, index) => (
            <div key={index} className="col-6 d-flex flex-column h-100 mb-4 card card-cover container rounded-4 shadow-lg px-8 mx-4">
              <div>
              <h3 className="mb-3">Prompt: {example.prompt}</h3>
              <ul className="list-unstyled">
                {example.titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5 d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Image
              src="/0115_hint.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example Image"
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

export default ExamplePage;
