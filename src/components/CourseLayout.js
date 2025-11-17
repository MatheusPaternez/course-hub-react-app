import React from 'react';
import Subvar from "../components/Subvar";
import { Outlet } from 'react-router-dom';
import  Header  from "./Header"
const CourseLayout = () => {

  return (
    <>
      <Header />

      {/* child root components */}
      <main>
        <Outlet />
      </main>

    </>
  );
};

export default CourseLayout;