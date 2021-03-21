import TopInfo from "./components/TopInfo";
import TabTitle from "./components/TabTitle";
import TabContent from "./components/TabContent";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Redirect } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

export default function Profile() {
  const { login } = useContext(GlobalContext);
  return (
    <MainLayout>
      {!login ? (
        <Redirect to="/" />
      ) : (
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
      )}
    </MainLayout>
  );
}
