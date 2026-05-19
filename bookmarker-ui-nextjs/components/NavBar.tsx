import Link from 'next/link'

const NavBar = () => (
    <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" data-bs-theme="dark">
          <div className="container-fluid">
              <Link className="navbar-brand" href="/">Bookmarker</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" href="/bookmarks/add">Add Bookmark</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    </header>
);

export default NavBar;