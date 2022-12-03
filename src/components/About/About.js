import avatar from "../../images/avatar.png";

function About() {
  return (
    <section className='about'>
      <img src={avatar} alt='avatar' className='about__avatar' />
      <div className='about__content'>
        <h2 className='about__title'>About</h2>
        <p className='about__paragraph'>
          This is the final product of the Yandex-Practicum-100 program,
          by Sara Weissman.
        </p>
        <p className='about__paragraph'>
          Technologies applied: React, Javascript, Node.js
          <br></br>
        </p>
      </div>
    </section>
  );
}

export default About;
