import Info from "./Info";
import YourCourse from "./YourCourse";
import Course from "./Course";
import PaymentHistory from "./PaymentHistory";
import CoinManagement from "./CoinManagement";

export default function TabContent() {
  return (
    <div className="tab-content">
      <Info />
      <YourCourse />
      <Course />
      <PaymentHistory />
      <CoinManagement />
    </div>
  );
}
