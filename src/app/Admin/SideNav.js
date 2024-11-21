"use client";
import React, { useEffect } from "react";
import Link from "next/link";
// import { sidNavmenu } from "@/utils/sideNavMenu";
// import { usePathname } from "next/navigation";
// import { activeSubMenuData } from "@/utils/activeSubMenu";

const Sidebar = () => {
  // const pathName = usePathname();

  // const sideNaveMenuHandler = (role) => {
  //   const buildMenuStructure = (menuData) => {
  //     const menuMap = {};
  //     const structuredMenu = [];

  //     menuData.forEach((item) => {
  //       menuMap[item.MenuID] = { ...item, subItems: [] };
  //     });

  //     menuData.forEach((item) => {
  //       if (item.ParentMenuID === 0) {
  //         structuredMenu.push(menuMap[item.MenuID]);
  //       } else {
  //         menuMap[item.ParentMenuID].subItems.push(menuMap[item.MenuID]);
  //       }
  //     });
  //     return transformMenu(structuredMenu);
  //   };

  //   const transformMenu = (menu) => {
  //     const transformPath = (item) => {
  //       return sidNavmenu[item.MenuName]
  //         ? sidNavmenu[item.MenuName]
  //         : item.MenuPath;
  //     };
  //     return menu.map((item) => {
  //       return {
  //         ...item,
  //         MenuPath: transformPath(item),
  //         subItems: transformMenu(item.subItems),
  //       };
  //     });
  //   };
  //   const fetchMenuItems = async () => {
  //     try {
  //       const result = await GlobalServices.roleWiseMenu({
  //         roleId: role,
  //       });
  //       const menuData = result.data.data;
  //       const menuStructure = buildMenuStructure(menuData);
  //       const pushDashbordItem = [
  //         {
  //           MenuID: 1,
  //           ParentMenuID: 0,
  //           MenuName: "Dashboard",
  //           MenuPath: "/Admin/dashboard",
  //           MenuOrder: 1,
  //           Level: 0,
  //           subItems: [],
  //           iconName: "home",
  //         },
  //         ...menuStructure,
  //       ];
  //       dispatch(setSideNavMenu(pushDashbordItem));
  //     } catch (error) {
  //       console.error("Error fetching menu items:", error);
  //     }
  //   };
  //   fetchMenuItems();
  // };

  // useEffect(() => {
  //   menuItems.length === 0 && sideNaveMenuHandler(userData?.roleId);
  // }, []);

  // const currentMenu = () => {
  //   const menuItem = menuItems.find((i) => {
  //     if (i.subItems.length === 0) {
  //       return i.MenuName === activeSideMenu?.nav;
  //     } else {
  //       return i.subItems.some((v) => v.MenuName === activeSideMenu?.nav);
  //     }
  //   });
  //   return menuItem
  //     ? { nav: menuItem.MenuName, subNav: activeSideMenu?.nav }
  //     : false;
  // };

  // const removeNavbar = () => {
  //   let element = document.getElementById("admin-sideNav");
  //   let element2 = document.getElementsByClassName("offcanvas-backdrop");
  //   let body = document.body;
  //   body.style.overflow = "";
  //   body.style.paddingRight = "";
  //   element && element.classList.remove("show");
  //   element2 && Array.from(element2).forEach((el) => el.remove());
  // };

  // useEffect(() => {
  //   const getMenuNameByUrl = (url) => {
  //     for (const [key, value] of Object.entries(activeSubMenuData)) {
  //       if (activeSubMenuData[key].includes(url)) {
  //         return { key: key, value: value };
  //       }
  //     }
  //     return null;
  //   };
  //   const matchedKey = getMenuNameByUrl(pathName);
  //   dispatch(
  //     setActiveSideNavMenu({ nav: matchedKey?.key, subNav: matchedKey?.value })
  //   );
  // }, [pathName]);

  return (
    <div className="side-nav" id={"admin-sideNav"}>
      <div className="side-nav-inner">
        <div className="logo">
          <Link href="#">
            <img src="Trangile-Logo.png" />
          </Link>
        </div>
        <ul>
          <li className="nav-item" key="1">
            <a className="admin-nav-link" href="#" role="button">
              <div className="side-menu__icon">
                <i className="pi pi-home"></i>
              </div>
              <div className="side-menu__title"> {`item.MenuName`} </div>
              <div className="side-menu__sub-icon">
                <i className="pi pi-angle-up"></i>
              </div>
            </a>
            <div className={`collapse`}>
              <ul className="sub-menu">
                <li className={`nav-item `}>
                  <Link className="admin-nav-link" href="#">
                    <div className="side-menu__icon">
                      <i className={`pi pi-home`}></i>
                    </div>
                    <div className="side-menu__title">{"subItem.MenuName"}</div>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
