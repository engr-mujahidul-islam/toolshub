import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const routes = [
    { path: "/", label: "Previews" },
    { path: "/creatives", label: "Creatives" },
    { path: "/codes", label: "Codes" },
    { path: "/ImgNames", label: "ImgNames" },
    { path: "/ss-sr", label: "SS & SR" },
    { path: "/Paths", label: "Paths" },
    { path: "/tabs", label: "Tabs" },
    { path: "/folders", label: "Folders" },    
    { path: "/team", label: "Team" },
    { path: "/post", label: "Post" },
    { path: "/daily", label: "Daily" },
    { path: "/qa", label: "QA" },
    { path: "/checklist", label: "Checklist" },
    { path: "/sop", label: "SOP" },

  ];

  return (
    <nav className="navbar navbar-expand-xxl navbar-dark bg-success sticky-top" style={{ width: '100%' }}>
      <a className="navbar-brand mx-2" href="/">ToolsHub</a>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {routes.map(route => (
            <li className="nav-item" key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}