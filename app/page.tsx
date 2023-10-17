import Image from "next/image";
import Link from "next/link";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FiLink } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import {
  SiGoland,
  SiNextdotjs,
  SiMui,
  SiVercel,
  SiTestinglibrary,
  SiGithubactions,
  SiGithub,
  SiLinkedin,
  SiHashnode,
  SiMinutemailer,
} from "react-icons/si";

import KafuiAlordoPhoto from "./assets/kafui-alordo.jpg";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col p-8 gap-5 lg:flex-row">
        <Image
          className="border-4 rounded-lg"
          src={KafuiAlordoPhoto}
          width={350}
          alt="kafui-alordo profile photo"
        />
        <div className="header-text-right">
          <span className="font-bold">@kafui4k</span>
          <h1>Software Engineer,</h1>
          <p>Building applications for the web and mobile.</p>
          <p>Based in Ho, Volta, Ghana.</p>
          <div className="header-text-right-link w-full bg-gray-900 p-2 text-center">
            <Link
              className="text-sky-400 no-underline hover:underline"
              href="https://drive.google.com/file/d/1mrnL2I3FSdqsk7ShHysTD2oqmDk4f7Ip/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
      </header>

      <section className="about">
        <h2>About.</h2>
        <p>
          <span className="text-5xl">Hello, I&#x27;m Kafui.</span>
          <br /> A very Passionate Software Engineer - building applications for
          the web and mobile.
        </p>

        <p>
          I currently serve as the Organizer/Team lead for the{" "}
          <Link
            href="https://www.pythonghana.org/ho/"
            target="_blank"
            className="text-emerald-600 font-medium"
          >
            Python Ho User Group
          </Link>{" "}
          and an active member of the{" "}
          <Link
            href="https://www.pythonghana.org/"
            target="_blank"
            className="text-emerald-600 font-medium"
          >
            Python Software Community, Ghana.
          </Link>
        </p>

        <p>
          Outside of regular coding, I commit to my side and personal projects.
        </p>
      </section>

      {/* <section className="work">
        <h2>Works.</h2>
        <p>Some of my featured works.</p>
        <div className="card">
          <div className="card-header">
            <Image
              className="border-4 rounded-md"
              src={KafuiAlordoPhoto}
              alt="project image"
              // sizes="(min-width: 808px) 50vw, 100vw"
              // fill
              width={250}
              placeholder="blur"
            />
          </div>
          <div className="card-body">
            <h3>NextExpense</h3>
            <div className="flex gap-2 items-center mb-2">
              <SiGoland size="2em" />
              <DiJavascript1 size="2em" />
              <DiReact size="2em" />
              <SiNextdotjs size="2em" />
              <SiMui size="2em" />
              <SiVercel size="2em" />
              <SiTestinglibrary size="2em" />
              <SiGithubactions size="2em" />
            </div>
            <p>A clone of Expensify</p>
            <div>
              <div className="flex items-center gap-3">
                <SiGithub />
                <Link className="text-sky-500" href="#" target="_blank">
                  Github Link here
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FiLink />
                <Link className="text-sky-500" href="#" target="_blank">
                  Project Link here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <h2>Articles.</h2>
        <Link href="#">Read my articles here...</Link>
      </section> */}

      <section className="contact">
        <h2>Contact.</h2>
        <ul className="flex flex-col gap-3 lg:flex-row">
          <li>
            <Link href="https://twitter.com/Kafui4k" target="_blank">
              <FaXTwitter size="2em" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/kafui-alordo-5793ba159/"
              target="_blank"
            >
              <SiLinkedin size="2em" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/kafui4k" target="_blank">
              <SiGithub size="2em" />
            </Link>
          </li>
          <li>
            <Link href="https://dev.to/kafui4k">
              <BiLogoDevTo size="2em" />
            </Link>
          </li>
          <li>
            <Link href="https://hashnode.com/@kafui4k">
              <SiHashnode size="2em" />
            </Link>
          </li>
          <li>
            <SiMinutemailer size="2em" />
            <Link href="mailto:kafui.alordo@gmail.com">
              kafui.alordo@gmail.com
            </Link>
          </li>
        </ul>
        <p className="text-center mt-5">
          Copyright &copy;2023 All rights reserved.
        </p>
      </section>
    </main>
  );
}
