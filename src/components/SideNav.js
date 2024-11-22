"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { activeSubMenuData } from "@/utils/activeSubMenu";
import { setActiveSideNavMenu } from "@/redux/actions/activeSideNavMenuAction";

const Sidebar = () => {
  const activeSideMenu = useSelector((state) => state?.activeSideMenu);
  const menuItems = useSelector((state) => state?.sideNavMenu);

  const dispatch = useDispatch();
  const pathName = usePathname();

  const currentMenu = () => {
    const menuItem = menuItems.find((i) => {
      if (i.subItems.length === 0) {
        return i.MenuName === activeSideMenu?.nav;
      } else {
        return i.subItems.some((v) => v.MenuName === activeSideMenu?.nav);
      }
    });
    return menuItem
      ? { nav: menuItem.MenuName, subNav: activeSideMenu?.nav }
      : false;
  };

  // const removeNavbar = () => {
  //   let element = document.getElementById("admin-sideNav");
  //   let element2 = document.getElementsByClassName("offcanvas-backdrop");
  //   let body = document.body;
  //   body.style.overflow = "";
  //   body.style.paddingRight = "";
  //   element && element.classList.remove("show");
  //   element2 && Array.from(element2).forEach((el) => el.remove());
  // };

  useEffect(() => {
    const getMenuNameByUrl = (url) => {
      for (const [key, value] of Object.entries(activeSubMenuData)) {
        if (activeSubMenuData[key].includes(url)) {
          return { key: key, value: value };
        }
      }
      return null;
    };
    const matchedKey = getMenuNameByUrl(pathName);
    dispatch(
      setActiveSideNavMenu({ nav: matchedKey?.key, subNav: matchedKey?.value })
    );
  }, [pathName]);

  return (
    <div className="side-nav" id="admin-sideNav">
      <div className="side-nav-inner">
        <div className="logo">
          <Link href="#">
            <img src="Trangile-Logo.png" />
          </Link>
        </div>
        <ul>
          {menuItems?.length > 0 ? (
            menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="admin-nav-link"
                  data-bs-toggle={item.subItems.length > 0 ? "collapse" : ""}
                  href={
                    item.subItems.length !== 0
                      ? `#${item.MenuName.replace(
                          /[^a-zA-Z0-9]/g,
                          ""
                        ).toLowerCase()}`
                      : item.MenuPath
                  }
                  role="button"
                  aria-expanded={
                    currentMenu().nav === item.MenuName ? "true" : "false"
                  }
                  aria-controls={
                    item.subItems &&
                    item.MenuName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
                  }
                  onClick={() => !item.subItems && removeNavbar()}
                >
                  <div className="side-menu__icon">
                    <i
                      className={
                        item?.iconName?.split(" ").includes("fa") ||
                        item?.iconName?.split(" ").includes("fas")
                          ? item?.iconName
                          : `pi pi-home`
                      }
                    ></i>
                  </div>
                  <div className="side-menu__title"> {item.MenuName} </div>
                  {item.subItems.length > 0 && (
                    <div className="side-menu__sub-icon ">
                      <i className="fa fa-angle-up"></i>
                    </div>
                  )}
                </a>
                {item.subItems && item.subItems.length > 0 && (
                  <div
                    className={`collapse ${
                      currentMenu().nav === item.MenuName ||
                      menuItems.length === 1
                        ? "show"
                        : ""
                    }`}
                    id={item.MenuName.replace(
                      /[^a-zA-Z0-9]/g,
                      ""
                    ).toLowerCase()}
                  >
                    <ul className="sub-menu">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          className={`nav-item ${
                            currentMenu().subNav === subItem.MenuName
                              ? "active"
                              : ""
                          }`}
                          key={subIndex}
                        >
                          <Link
                            className="admin-nav-link"
                            href={subItem.MenuPath}
                          >
                            <div className="side-menu__icon">
                              <i
                                className={
                                  subItem.iconName.split(" ").includes("fa") ||
                                  subItem.iconName.split(" ").includes("fas")
                                    ? subItem.iconName
                                    : `pi pi-home`
                                }
                              ></i>
                            </div>
                            <div className="side-menu__title">
                              {subItem.MenuName}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="nav-item text-white">Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
