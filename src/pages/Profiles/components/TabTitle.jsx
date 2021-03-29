import { NavLink, useRouteMatch } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import $ from "jquery";

export default function TabTitle() {
  let ref = useRef();
  const [click, setClick] = useState(-1);
  const { url } = useRouteMatch();
  useEffect(() => {
    $(".nguyenan").addClass("active");
    return () => {
      $(".nguyenan").removeClass("active");
    };
  }, [click]);
  return (
    <div className="tab-title">
      <NavLink className="nguyenan" to={`${url}/info`}>
        Thông tin tài khoản
      </NavLink>
      <NavLink to={`${url}/your-course`}>Khóa học của bạn</NavLink>
      <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
      <NavLink to={`${url}/history-payment`}>Lịch sử thanh toán</NavLink>
      <NavLink to={`${url}/coin-management`}>Quản lý COIN của tôi</NavLink>
    </div>
  );
}
