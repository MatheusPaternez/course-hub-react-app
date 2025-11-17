import React from 'react';
import Subvar from "../components/Subvar";
import { Outlet } from 'react-router-dom';
import  Header  from "./Header"
const CourseLayout = () => {

  return (
    <>
      <Header />

      {/* ネストされた子ルートのコンポーネントがここにレンダリングされます */}
      <main>
        <Outlet />
      </main>

      {/* 共通フッターなど */}
    </>
  );
};

export default CourseLayout;