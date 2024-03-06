import React, { useState, useEffect } from "react";
import { header } from "../css/header.css";
import imagese from "../images/wolrd.png";
import musicLogo from "../images/music.png";
import compressedLogo from "../images/compressed.png";
import videosLogo from "../images/videos.png";
import programsLogo from "../images/programs.png";
import documentsLogo from "../images/documents.png";
import apksLogo from "../images/apks.png";
import imagesLogo from "../images/images.png";
import unfinishedLogo from "../images/unfinished.png";
import finishLogo from "../images/finish.png";
import caretUpIcon from "../images/carat-up.png";
import caretDownIcon from "../images/carat-down.png";
import Card from "./Card/Card";
import HeartEmoji from "../images/tired.png";
import resume from "../images/resume.png";
import stop from "../images/stop.png";
import stopall from "../images/stopall.png";
import AllData from "./Data.json";

const MainPage = () => {
  const [allDocumentsOpen, setAllDocumentsOpen] = useState(false);
  const [unfinishedOpen, setUnfinishedOpen] = useState(false);
  const [finishOpen, setFinishOpen] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [data, SetDate] = useState([]);
  // Function to increment percentage by 2% and reset at 100%
  useEffect(() => {
    SetDate(AllData);
    const durationInSeconds = 10; // for example, set the duration to 10 seconds for 100% progress
    const incrementInterval = 1000; // interval for updating the progress bar

    const incrementAmount =
      100 / ((durationInSeconds * 1000) / incrementInterval);

    const timer = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          clearInterval(timer);
          return 100;
        } else {
          return prevPercentage + incrementAmount;
        }
      });
    }, incrementInterval);

    return () => clearInterval(timer); // Cleanup timer
  }, []);
  const startAnimation = () => {
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, 5000);
  };
  const toggleAllDocuments = () => {
    setAllDocumentsOpen(!allDocumentsOpen);
    setUnfinishedOpen(false);
    setFinishOpen(false);
  };

  const toggleUnfinished = () => {
    setUnfinishedOpen(!unfinishedOpen);
    setAllDocumentsOpen(false);
    setFinishOpen(false);
  };

  const toggleFinish = () => {
    setFinishOpen(!finishOpen);
    setAllDocumentsOpen(false);
    setUnfinishedOpen(false);
  };

  return (
    <div>
      <div className="grandDiv1">
        <div className="bigheader">
          <h1 className="h1">
            <img src={documentsLogo} alt="" /> Internet Download Manager 10.36
          </h1>
          <br />
          <ul className="header1">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">File</a>
            </li>
            <li>
              <a href="">Downloads</a>
            </li>
            <li>
              <a href="">View</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ display: "flex", color: "black", width: 1000 }}></hr>
      <div className="grandDiv">
        <div className="leftDiv">
          <div className="smallDiv">
            <div className="dropdown">
              <div className="dropdown-toggle" onClick={toggleAllDocuments}>
                <div className="logo-text-container">
                  <img
                    src={documentsLogo}
                    alt="Documents Logo"
                    className="dropdown-logo"
                  />
                  <span className={allDocumentsOpen ? "expanded" : ""}>
                    All Documents
                  </span>
                  <img
                    src={allDocumentsOpen ? caretUpIcon : caretDownIcon}
                    alt={allDocumentsOpen ? "caret up" : "caret down"}
                    className="caret-icon1"
                  />
                </div>
              </div>
              {allDocumentsOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <img
                      src={musicLogo}
                      alt="Music Logo"
                      className="dropdown-logo"
                    />
                    <a href="">Music</a>
                  </li>
                  <li>
                    <img
                      src={compressedLogo}
                      alt="Compressed Logo"
                      className="dropdown-logo"
                    />
                    <a href="">Compressed</a>
                  </li>
                  <li>
                    <img
                      src={videosLogo}
                      alt="Videos Logo"
                      className="dropdown-logo"
                    />
                    <a href="">Videos</a>
                  </li>
                  <li>
                    <img
                      src={programsLogo}
                      alt="Programs Logo"
                      className="dropdown-logo"
                    />
                    <a href="">Programs</a>
                  </li>
                  <li>
                    <img
                      src={documentsLogo}
                      alt="Documents Logo"
                      className="dropdown-logo"
                    />
                    <a href="">Documents</a>
                  </li>
                  <li>
                    <img
                      src={apksLogo}
                      alt="APKs Logo"
                      className="dropdown-logo"
                    />
                    <a href="">APKs</a>
                  </li>
                  <li>
                    <img
                      src={imagesLogo}
                      alt="Images Logo"
                      className="dropdown-logo"
                    />
                    <a href="">Images</a>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="dropdown"
              style={{ marginTop: allDocumentsOpen ? "334px" : "0" }}
            >
              <div className="dropdown-toggle" onClick={toggleUnfinished}>
                <div className="logo-text-container">
                  <img
                    src={unfinishedLogo}
                    alt="Unfinished Logo"
                    className="dropdown-logo"
                  />
                  <span>Unfinished</span>
                  <img
                    src={unfinishedOpen ? caretUpIcon : caretDownIcon}
                    alt={unfinishedOpen ? "caret up" : "caret down"}
                    className="caret-icon2"
                  />
                </div>
              </div>
              {unfinishedOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Placeholder Item 1</a>
                  </li>
                  <li>
                    <a href="">Placeholder Item 2</a>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="dropdown"
              style={{ marginTop: unfinishedOpen ? "124px" : "0" }}
            >
              <div className="dropdown-toggle" onClick={toggleFinish}>
                <div className="logo-text-container">
                  <img
                    src={finishLogo}
                    alt="Finish Logo"
                    className="dropdown-logo"
                  />
                  <span>Finish</span>
                  <img
                    src={finishOpen ? caretUpIcon : caretDownIcon}
                    alt={finishOpen ? "caret up" : "caret down"}
                    className="caret-icon3"
                  />
                </div>
              </div>
              {finishOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Placeholder Item 3</a>
                  </li>
                  <li>
                    <a href="">Placeholder Item 4</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <br />
          <div
            className={`smallDiv1 ${animationActive ? "animated" : ""}`}
            onMouseEnter={startAnimation}
          >
            <Card progress={percentage} />
          </div>
        </div>
        <div className="rightDiv">
          <div className="bloc1">
            <input type="text" placeholder="Add Url" className="search" />
          </div>
          <div className="bloc1">
            <img src={resume} alt="" />
            <a href="">Resume</a>
          </div>
          <div className="bloc1">
            <img src={stop} alt="" />
            <a href="">Stop</a>
          </div>
          <div className="bloc1">
            <img src={stopall} alt="" />
            <a href="">Stop All</a>
          </div>
          <div>
            <table style={{ width: "100%", height: "auto" }}>
              <thead>
                <tr className="table1">
                  <th style={{ paddingLeft: "120px" }}>
                    <input type="checkbox" />
                    Name
                  </th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {data.map((fdata, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{fdata.name}</td>
                    <td>{fdata.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="select1">
              <input type="checkbox" />
              <label htmlFor="">Select All</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
