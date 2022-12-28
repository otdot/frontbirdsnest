import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={"footercontainer"}>
        <div>
          <a
            className={"thankslink"}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/otdot"
          >
            <GitHubIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={"thankslink"}
            href="https://fi.linkedin.com/in/otto-mursula-48030b192"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className={"thankscontainer"}>
          <small>Special Thanks: </small>
          <a
            target="_blank"
            rel="noreferrer"
            className={"thankslink"}
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
        </div>
        <div className={"disclaimer"}>
          <small>This page renders is a pre-assignment task. </small>
          <small>
            More information:{" "}
            <a
              className="thankslink"
              href="https://assignments.reaktor.com/birdnest/?_gl=1*jme71n*_ga*NTcyNDM2MDczLjE2NjYwOTg2NDc.*_ga_DX023XT0SX*MTY3MjI0MTE2Mi41LjEuMTY3MjI0MTE2NS41Ny4wLjA."
              target="_blank"
            >
              Project Birdnest
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
