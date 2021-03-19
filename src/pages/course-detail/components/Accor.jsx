export default function Accor({ date, des, content }) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <div className="date">{date}</div>
        <h3>{des}</h3>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}
