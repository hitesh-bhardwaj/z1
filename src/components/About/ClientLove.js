import React from 'react'

const ClientLove = () => {
  return (
    <section id='client-love'>
         <div className="cw-full h-full m-150 about-section tablet:h-full" id="client-loveus">
          <div className="w-[80%] mx-auto flex justify-between tablet:flex-col tablet:w-[85%] ">
            <div className="w-[60%] h-full overflow-hidden flex items-start left-box-heading about-section-content tablet:w-full">
              <h2 className="client-anim-heading">
                <span className="stroke">clients</span> love us.
              </h2>
            </div>
            <div className="right-box-content w-[70%] about-section-content tablet:w-full">
              <p data-jelly className="client-anim-heading">
                <span>
                  It’s not just the eminence & superior quality of our work.
                  It’s our attitude, our approach, our meticulous attention to
                  detail, our ability to understand their business & their
                  goals, and most of all, it’s the way we treat our clients
                  –They walk in as clients and stay as friends! That’s why we
                  say, we don’t work for clients, we work with our friends.
                </span>
              </p>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default ClientLove
