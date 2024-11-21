import React from 'react'

const Whyus = () => {
  return (
    <section id='why-us'>
      <div className="w-full h-[100vh] m-150 about-section pt-[5vw] tablet:h-full">
          <div className="w-[77%] mx-auto flex justify-between tablet:flex-col tablet:w-[85%]">
            <div className="w-[55%] h-full overflow-hidden left-box-heading about-section-content">
              <h2 className="why-us-anim tablet:!text-[10vw]">
                <span className="stroke">why</span> us.
              </h2>
            </div>
            <div className="right-box-content about-section-content">
              <p data-jelly className="why-us-anim">
                <span>
                  We have been asked this question like a zillion times – How
                  are you different from the other agencies out there. Well, the
                  truth is that we were “Born Different”.{" "}
                </span>
              </p>
              <br />
              <p className="mt-about why-us-anim" data-jelly>
                <span>
                  We see the bigger picture, we are ambitious, we set the bar
                  high in all facets of our work, we love what we do and most
                  importantly, we were not made for the overpopulated plains of
                  mediocrity. Swayed already?{" "}
                  <span className="emoji-dark">😏</span> But we’ve got a few
                  more reasons for why you’d want to work with us:
                </span>
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Whyus
