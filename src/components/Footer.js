import React from "react";

function Footer() {
  return (
    <>
      <div class="Rectangle-4822">
        <div>
          <img src="/assets/GLIA logo-02.png" style={{ width: "20vw" }}></img>
        </div>
        <div className="d-flex flex-column-reverse d-sm-flex flex-sm-row menu-footer">
          {/* <div className="menu-footer-li">Home</div>
          <div className="menu-footer-li">Services</div>
          <div className="menu-footer-li">Prepare Test</div> */}
          <div className="menu-footer-li">Contact us</div>
          <div className="menu-footer-li">English</div>
          <div className="menu-footer-li">Arabic</div>
        </div>
        <div className="d-flex menu-footer" style={{ margin: "2rem 0" }}>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100093267635450&mibextid=LQQJ4d"
            rel="noopener noreferrer"
          >
            <div style={{ marginInlineEnd: "0.5vw" }}>
              <img
                src="/assets/ant-design_facebook-filled.png"
                style={{ width: "1.5rem" }}
              ></img>
            </div>
          </a>
          <a
            target="_blank"
            href="https://instagram.com/glia.health?igshid=NTc4MTIwNjQ2YQ=="
            rel="noopener noreferrer"
          >
            <div style={{ marginInlineEnd: "0.5vw" }}>
              <img
                src="/assets/instgram.png"
                style={{
                  width: "1.5rem",
                  marginLeft: "2vw",
                  marginRight: "2vw",
                }}
              ></img>
            </div>
          </a>
          <a
            target="_blank"
            href="https://youtube.com/@Glia-co"
            rel="noopener noreferrer"
          >
            <div style={{ marginInlineEnd: "0.5vw" }}>
              <img
                src="/assets/akar-icons_youtube-fill.png"
                style={{ width: "1.5rem" }}
              ></img>
            </div>
          </a>
          {/* <div style={{ marginInlineEnd: "0.5vw" }}>
            <img
              src="/assets/ant-design_twitter-square-filled.png"
              style={{ width: "1.5vw" }}
            ></img>
          </div> */}
          {/* <div style={{ marginInlineEnd: "0.5vw" }}>
            <img
              src="/assets/akar-icons_linkedin-box-fill.png"
              style={{ width: "1.5vw" }}
            ></img>
          </div> */}
        </div>
      </div>
      <div class="Rectangle-4823"></div>
    </>
  );
}

export default Footer;
