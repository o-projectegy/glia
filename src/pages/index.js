import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { numbersSectionData } from "@/mocks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 2,
    },
  });

  return (
    <div className="Home-page">
      <NavBar></NavBar>
      <div className="d-flex flex-column-reverse d-sm-flex flex-sm-row Home-title-container">
        <div className="Home-title-text-container">
          <h1 className="Perform-Male-Fertility-Test-From-The-Comfort-of-Your-Home">
            Facilitate Men’s Fertility Journey
          </h1>
          <h4 className="subtitle">
            Perform Male Fertility Test From Comfort Of Your Home.
          </h4>
          <div className="d-flex flex-column-reverse d-sm-flex flex-sm-row">
            <button className="register-btn">
              Register now <img src="/assets/arrow.png"></img>
            </button>
            <a
              target="_blank"
              href="https://wa.me/+201287822278 "
              rel="noopener noreferrer"
              className="contact-btn"
            >
              {`WhatsApp`}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "1.3rem",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                <path
                  d="M14.0013 0.666664C21.3653 0.666664 27.3347 6.636 27.3347 14C27.3347 21.364 21.3653 27.3333 14.0013 27.3333C11.645 27.3371 9.3302 26.7136 7.29465 25.5267L0.673321 27.3333L2.47599 20.7093C1.28811 18.6732 0.664051 16.3573 0.667987 14C0.667987 6.636 6.63732 0.666664 14.0013 0.666664ZM9.45732 7.73333L9.19065 7.744C9.01802 7.75451 8.84929 7.79987 8.69465 7.87733C8.55002 7.95924 8.41798 8.06163 8.30265 8.18133C8.14265 8.332 8.05199 8.46266 7.95465 8.58933C7.46148 9.23054 7.19595 10.0177 7.19999 10.8267C7.20265 11.48 7.37332 12.116 7.63999 12.7107C8.18532 13.9133 9.08265 15.1867 10.2667 16.3667C10.552 16.6507 10.832 16.936 11.1333 17.2013C12.6045 18.4966 14.3577 19.4307 16.2533 19.9293L17.0107 20.0453C17.2573 20.0587 17.504 20.04 17.752 20.028C18.1403 20.008 18.5195 19.9028 18.8627 19.72C19.0373 19.6301 19.2077 19.5322 19.3733 19.4267C19.3733 19.4267 19.4307 19.3893 19.54 19.3067C19.72 19.1733 19.8307 19.0787 19.98 18.9227C20.0907 18.808 20.1867 18.6733 20.26 18.52C20.364 18.3027 20.468 17.888 20.5107 17.5427C20.5427 17.2787 20.5333 17.1347 20.5293 17.0453C20.524 16.9027 20.4053 16.7547 20.276 16.692L19.5 16.344C19.5 16.344 18.34 15.8387 17.6307 15.516C17.5564 15.4836 17.4769 15.4651 17.396 15.4613C17.3048 15.452 17.2126 15.4622 17.1257 15.4914C17.0387 15.5206 16.9591 15.5681 16.892 15.6307C16.8853 15.628 16.796 15.704 15.832 16.872C15.7767 16.9463 15.7004 17.0025 15.6131 17.0334C15.5257 17.0643 15.4311 17.0684 15.3413 17.0453C15.2545 17.022 15.1694 16.9926 15.0867 16.9573C14.9213 16.888 14.864 16.8613 14.7507 16.8133C13.9854 16.4794 13.2769 16.0282 12.6507 15.476C12.4827 15.3293 12.3267 15.1693 12.1667 15.0147C11.6421 14.5123 11.185 13.944 10.8067 13.324L10.728 13.1973C10.6715 13.1122 10.6258 13.0204 10.592 12.924C10.5413 12.728 10.6733 12.5707 10.6733 12.5707C10.6733 12.5707 10.9973 12.216 11.148 12.024C11.2947 11.8373 11.4187 11.656 11.4987 11.5267C11.656 11.2733 11.7053 11.0133 11.6227 10.812C11.2493 9.9 10.8627 8.992 10.4653 8.09066C10.3867 7.912 10.1533 7.784 9.94132 7.75866C9.86932 7.75066 9.79732 7.74266 9.72532 7.73733C9.54626 7.72844 9.36683 7.73022 9.18799 7.74266L9.45599 7.732L9.45732 7.73333Z"
                  fill="#124C53"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img src="/assets/GLIA.png" className="Gila_Front_logo"></img>
        </div>
      </div>
      <div className="Question-div">
        <h1 className="titles">How do we do it?</h1>
        <div className="how-to-div">
          {numbersSectionData.map((item, index) => (
            <div className="number-container" key={index}>
              <h1 className="numberTitle">{item.number}</h1>
              <p className="number-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="How-container">
        <h1 className="titles">How do we do it?</h1>
        <div className="how-div">
          <div className="Rectangle-4782">
            <div className="mb-1">
              <img src="/assets/Group.png"></img>
            </div>
            <span className="mt-3 Package-will-be-sent-to-your-home-containing-necessary-instructions">
              Package will be sent to your home containing necessary
              instructions.
            </span>
          </div>
          <div class="Rectangle-4782">
            <div className="mb-1">
              <img src="/assets/Group2.png"></img>
            </div>
            <span className="mt-3 Package-will-be-sent-to-your-home-containing-necessary-instructions">
              Package will be collected and sent to our prestigious lab
              partners.
            </span>
          </div>
          <div class="Rectangle-4782">
            <div className="mb-1">
              <img src="/assets/Group3.png"></img>
            </div>

            <span className="Package-will-be-sent-to-your-home-containing-necessary-instructions">
              Results will be confidentially sent to you
            </span>
          </div>
        </div>
      </div> */}
      {/* <div>
        <div className="male-test">
          <h2>What is Male Fertility Test?</h2>
        </div>
        <div ref={sliderRef} className="keen-slider mb-4 mt-4">
          <div className="keen-slider__slide number-slide1">
            <div className="d-block" style={{ textAlign: "center" }}>
              <div>
                <img src="/assets/Group_2023-05-08/Group.png"></img>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "1.5rem",
                    margin: "0.5rem 0",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "0.88",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  PH level
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "1.4",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  PH level: Test semen’s acidity
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="d-block" style={{ textAlign: "center" }}>
              <div>
                <img src="/assets/Group_2023-05-08 (1)/Group.png"></img>
              </div>
              <div>
                <div
                  className="slider-title"
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "1.5rem",
                    margin: "0.5rem 0",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "0.88",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  Vitality
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "1.4",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  Vitality: Percent of live sperm in the sample.
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            {" "}
            <div className="d-block" style={{ textAlign: "center" }}>
              <div>
                <img src="/assets/Group_2023-05-08 (2)/Group.png"></img>
              </div>
              <div>
                <div
                  className="slider-title"
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "1.5rem",
                    margin: "0.5rem 0",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "0.88",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  Concentration
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "1.4",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  Sperm concentration: Sperm concentration
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            {" "}
            <div className="d-block" style={{ textAlign: "center" }}>
              <div>
                <img src="/assets/Group_2023-05-08 (3)/Group.png"></img>
              </div>
              <div>
                <div
                  className="slider-title"
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "1.5rem",
                    margin: "0.5rem 0",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "0.88",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  Morphology
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "1.4",
                    letterSpacing: "normal",
                    textAlign: "center",
                    color: "#124c53",
                  }}
                >
                  Sperm morphology: Size and shape of the sperm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <hr class="new1"></hr>
      <div>
        <div className="male-test" style={{ marginBottom: "2rem" }}>
          <h1 className="how-to-prepare">
            How To Prepare For Male Fertility Test?
          </h1>
        </div>
        <div className="row" style={{ textAlign: "center", width: "100%" }}>
          <div className="col-sm-12 col-lg-6 mt-2 male-test-col">
            <img src="/assets/2day.png"></img>
            <span className="img-desc">
              2 days minimum of sexual abstinence
            </span>
          </div>
          <div className="col-sm-12 col-lg-6  mt-2 male-test-col">
            <img src="/assets/week.png"></img>
            <span className="img-desc">
              7 days maximum of sexual abstinence
            </span>
          </div>
        </div>
      </div>
      <hr class="new1"></hr>

      {/* <div
        className="d-flex flex-column d-sm-flex flex-sm-row "
        style={{ justifyContent: "space-between" }}
      >
        <div className="improve-container">
          <div style={{ color: "#124c53" }}>
            <h2>How To Improve Fertility?</h2>
          </div>
          <div className="row">
            <div className="col-6" style={{ margin: "1rem 0" }}>
              <div style={{ position: "relative" }}>
                <img src="/assets/01.png"></img>{" "}
                <span className="Healthy-Weight"> Healthy Weight.</span>
              </div>
            </div>
            <div className="col-6" style={{ margin: "1rem 0" }}>
              <div style={{ position: "relative" }}>
                <img src="/assets/02.png"></img>{" "}
                <span class="Healthy-Weight">Exercise Regularly.</span>
              </div>
            </div>
            <div className="col-6" style={{ margin: "1rem 0" }}>
              <div style={{ position: "relative" }}>
                <img src="/assets/03.png"></img>
                <span class="Healthy-Weight">Healthy Diet.</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/maledoc.png" style={{ width: "100%" }}></img>
        </div>
      </div> */}
      <div className="How-container">
        <h2 className="titles">How To Improve Fertility</h2>
        <div
          className="d-flex flex-column d-sm-flex flex-sm-row"
          style={{
            justifyContent: "space-between",
            padding: "1rem 0",
          }}
        >
          <div class="Rectangle-4782">
            <div className="mb-1">
              <img src="/assets/scale.png"></img>
            </div>
            <span className="rec-text">Healthy Weight</span>
          </div>
          <div class="Rectangle-4782">
            <div className="mb-1">
              <img src="/assets/weight.png"></img>
            </div>
            <span className="rec-text">Exercise Regularly</span>
          </div>
          <div class="Rectangle-4782">
            <div className="mb-1">
              <img src="/assets/heart.png"></img>
            </div>
            <span className="rec-text">Healthy Diet</span>
          </div>
        </div>
      </div>
      <div className="row w-100 video-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-end",
          }}
        >
          {/* <div>
            <img
              style={{ width: "100%" }}
              src="/assets/vid/Rectangle 4788.png"
            ></img>
          </div> */}
          <div>
            {/* <button className="Rectangle-4791 w-100">
              <img src="/assets/ant-design_instagram-filled.png"></img>{" "}
              Instagram page
            </button> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
