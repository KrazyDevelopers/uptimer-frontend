import { Fragment } from "react";
import { useCookies } from 'react-cookie';

export function Header() {
  const [cookies] = useCookies(['login']);

  const mode = cookies.login ? "logout" : "login";
  return (
    <Fragment>
      <nav>
        <div className="brandName">
          <a className="" href="/">
            <img src="/src/assets/avatar.svg"></img>
            <span>Krazy Uptimer</span>
          </a>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            {mode === "logout" ? <li className="nav-item"> <a className="nav-link" href="/dashboard">Dashboard</a> </li> : ""}
            <li className="nav-item"><a className="nav-link" href={`/${mode}`}>{`${mode[0].toUpperCase() + mode.slice(1)}`}</a></li>
          </ul>
        </div>
      </nav>
    </Fragment >
  )
}
