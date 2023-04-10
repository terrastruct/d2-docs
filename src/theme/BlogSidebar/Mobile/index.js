import React from "react";
import Link from "@docusaurus/Link";
import { NavbarSecondaryMenuFiller } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import RSSIcon from "@site/static/img/rss.svg";

function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  return (
    <ul className="menu__list">
      {sidebar.items.map((item) => (
        <li key={item.permalink} className="menu__list-item">
          <Link
            isNavLink
            to={item.permalink}
            className="menu__link"
            activeClassName="menu__link--active"
          >
            {item.title}
          </Link>
        </li>
      ))}
      <button className={styles.sidebarRSS} onClick={() => window.open("/blog/rss.xml")}>
        RSS <RSSIcon />
      </button>
    </ul>
  );
}
export default function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller component={BlogSidebarMobileSecondaryMenu} props={props} />
  );
}
