import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.home}>
      <div className={s.title}>
        This is a simple MERN stack Authentication website.
      </div>
      <div className={s.dev}>
        <p>Developer:- </p>
        <a
          href="https://facebook.com/arifbillah64"
          target="_blank"
          rel="noreferrer"
        >
          Arif Billah
        </a>
      </div>
    </div>
  );
}
/// /// /// /// ///
export default Home;
