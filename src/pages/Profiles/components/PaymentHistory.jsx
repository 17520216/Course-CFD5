export default function PaymentHisory() {
  return (
    <div className="tab4">
      <YourCourseLearnt
        name="Khóa học CFD1-offline"
        date="09/09/2020"
        money="1.500.000 VND"
      />
      <YourCourseLearnt
        name="Khóa học CFD1-offline"
        date="09/02/2021"
        money="1.500.000 VND"
      />
      <YourCourseLearnt
        name="Khóa học CFD1-online"
        date="09/09/2021"
        money="6.500.000 VND"
      />
      <YourCourseLearnt
        name="Khóa học CFD1-online"
        date="09/12/2020"
        money="2.500.000 VND"
      />
    </div>
  );
}

function YourCourseLearnt({ name, date, money }) {
  return (
    <div className="item itemhistory">
      <div className="name">{name}</div>
      <div className="date">{date}</div>
      <div className="money">{money}</div>
    </div>
  );
}
