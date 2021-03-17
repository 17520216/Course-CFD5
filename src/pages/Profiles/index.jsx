import TopInfo from "./components/TopInfo";
import TabTitle from "./components/TabTitle";
import TabContent from "./components/TabContent";

export default function Profile() {
  return (
    <>
      <main className="homepage" id="main">
        <div>
          <div className="overlay_nav" />
          <main className="profile" id="main">
            <section>
              <TopInfo />
              <div className="container">
                <div className="tab">
                  <TabTitle />
                  <TabContent />
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}
