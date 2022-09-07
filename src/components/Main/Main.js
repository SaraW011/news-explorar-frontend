import NotFound from "../NotFound/NotFound";
import About from "../About/About";

function Main() {
  const currentPath = window.location.pathname;

  return (
    <main className="main">
      <section
        className={
          !currentPath.includes(`/saved-news`) ? "main__content" : null
        }
      ></section>

      {!currentPath.includes(`/saved-news`) ? <NotFound /> : null}

      <About />
    </main>
  );
}

export default Main;
