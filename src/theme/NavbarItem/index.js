import React from "react";

import NavbarItem from "@theme-original/NavbarItem";
import NavbarIconLink from "@theme/NavbarItem/NavbarIconLink";

const CustomNavbarItemComponents = {
  "custom-iconLink": () => NavbarIconLink,
};

export default function NavbarItemWrapper(props) {
  if (Object.keys(CustomNavbarItemComponents).includes(props.type)) {
    const Component = CustomNavbarItemComponents[props.type]();
    return <Component {...props} />;
  } else {
    return <NavbarItem {...props} />;
  }
}
