import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import logoTitle from "../assets/CogniFly.svg";

const Sidebar = () => {
  const router = useRouter();
  const [isCourseExpanded, setIsCourseExpanded] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo-container">
          <Image src={logo} alt="CogniFly Logo" width={40} height={40} />
        </div>
        <Image src={logoTitle} alt="CogniFly" width={112} height={30} />
      </div>

      <div className="course-info">
        <h3>INFO 609</h3>
        <h4>Accessibility and Inclusive Design</h4>
      </div>

      <nav className="nav-sections">
        <div className="section">
          <div
            className={`section-title ${isCourseExpanded ? "active" : ""}`}
            onClick={() => setIsCourseExpanded(!isCourseExpanded)}
          >
            <div className="section-indicator"></div>
            Course Material
          </div>

          <div className={`module-list ${isCourseExpanded ? "expanded" : ""}`}>
            {[1, 2, 3, 4, 5].map((num) => (
              <Link
                key={num}
                href={`/module/${num}`}
                className={router.asPath === `/module/${num}` ? "active" : ""}
              >
                <div className="module-item">Module {num}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="other-sections">
          {[
            "Grades",
            "Readings",
            "Assignments",
            "Discussion Board",
            "Groups",
          ].map((item) => (
            <div key={item} className="section">
              <div className="section-title">
                <div className="section-indicator"></div>
                {item}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
