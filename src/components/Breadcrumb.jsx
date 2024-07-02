import React from "react";
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const renderBreadcrumbs = () => {
    let path = '/';
    return (
      <Breadcrumb >
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Inicio</Breadcrumb.Item>
        {pathnames.map((name, index) => {
          path += `${name}/`;
          const route = path;
          const isActive = index === pathnames.length - 1;
          return (
            <Breadcrumb.Item key={route} linkAs={Link} linkProps={{ to: route }} active={isActive}>
              {capitalizeFirstLetter(name)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return renderBreadcrumbs();
};

export default Breadcrumbs;
