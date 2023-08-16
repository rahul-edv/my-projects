import { Link } from "react-router-dom";
import "./sidebar.scss";
import { menu } from "../../data";

const Sidebar = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title.toUpperCase()}</span>
          {item.listItems.map((listItem) => (
            <Link className="listItem" to={listItem.url} key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
