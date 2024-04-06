import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import OpenAI from "openai";
import { useState } from 'react';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true
});
function CenteredHero() {
  const [note, setNote] = useState("");
  const [data, setData] = useState(""); // State to store data
  async function getData() {
    const res = await openai.chat.completions.create({
      messages: [{ role: "system", content: "give me around 5 story title and topic is" + note }], // Use note directly, no need for props
      model: "gpt-3.5-turbo",
    });
    console.log(res.choices[0].message.content);
    setData(res.choices[0].message.content); // Update state with fetched data
  }
  return (
    <>
      {/* Hello world */}
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/hello.com"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4"></span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Example
            </a>
          </li>
          <li className="nav-item">
            <Link href="/faq" className="nav-link">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">About Us</Link>
          </li>
        </ul>
      </header>

      <div className="px-4 py-5 my-5 text-center">
        <Image
          className="d-block mx-auto mb-4"
          src="/book.svg"
          alt="book logo"
          width={72}
          height={57}
        />
        <h1 className="display-5 fw-bold">story title generator</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to our Story Title Generator – your gateway to a world of limitless imagination and boundless creativity! Are you ready to embark on an adventure where every click sparks a new tale waiting to be told? </p> <div class="mb-3">
            <input
              class="form-control"
              id="input1"
              placeholder="a love story title"
              value={note}
              onChange={(e) => setNote(e.target.value)} // Update note state onChange
            /> </div>
          <p style={{ color: "black" }}>{data}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-dark btn-lg" onClick={() => getData()} // Call getData function onClick
            >generate</button></div>
        </div>
      </div>
    </>

  )

}

export default CenteredHero;

