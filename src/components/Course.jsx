export default function Course({ name, des, status, img, coach, img_coach }) {
  return (
    <>
      <div className="col-md-4 course">
        <div className="wrap">
          <a className="cover" href="#">
            <img src={img} alt="" />
            {status === "dang_dien_ra" ? (
              <span className="badge b1">Đang Diễn Ra</span>
            ) : status === "da_ket_thuc" ? (
              <span className="badge b2">Đã kết thúc</span>
            ) : (
              <span className="badge b3">Sắp Khai Giảng</span>
            )}
            <div className="hover">
              <div className="top">
                <div className="user">
                  <img src="/img/icon-user-white.svg" alt="" />
                  12
                </div>
                <div className="heart">
                  <img src="/img/icon-heart.svg" alt="" /> 100
                </div>
              </div>
              <div className="share">
                <img src="/img/icon-viewmore.svg" alt="" />
              </div>
            </div>
          </a>
          <div className="info">
            <a className="name" href="#">
              {name}
            </a>
            <p className="des">{des}</p>
          </div>
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src={img_coach} alt="" />
              </div>
              <div className="name">{coach}</div>
            </div>
            <div className="register-btn">Đăng Ký</div>
          </div>
        </div>
      </div>
    </>
  );
}
