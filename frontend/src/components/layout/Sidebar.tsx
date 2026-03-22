import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
