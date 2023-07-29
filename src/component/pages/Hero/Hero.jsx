import { FcSynchronize } from 'react-icons/fc';

const Hero = () => {
  return (
    <div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-3/3 mx-auto">

            <div className="flex ">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full shadow-xl bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div>
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                      <FcSynchronize />
                    </div>
                    <div className='w-16 h-12 inline-flex items-center justify-center text-5xl ml-5 text-gradient-to-r from-white to-gray-500'>
                      <h3 className='mt-3'>1</h3>
                    </div>
                  </div>
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-3xl text-gray-900 text-left font-bold title-font mb-2">Browse verified candidate profiles</h2>
                    <p className="leading-relaxed text-left">Here you can effortlessly navigate through our pool of thoroughly vetted candidates. Peruse their detailed profiles, including their resumes, case studies, PRDs, and other product work included in their portfolios, to find the perfect match for your needs. Browse with confidence, knowing each candidate has been carefully screened, and select the best fit for your team.</p>

                  </div>
                </div>
              </div>
              <div className="px-2  w-1/2">
                <div className="flex flex-wrap h-full shadow-xl w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div>
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                      <FcSynchronize />
                    </div>
                    <div className='w-16 h-12 inline-flex items-center justify-center text-5xl ml-5  '>
                      <h3 className='' >2</h3>
                    </div>
                  </div>
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-3xl text-gray-900 text-left font-bold title-font mb-2">Profiles should be prioritized</h2>
                    <p className="leading-relaxed text-left">You can effectively streamline your hiring process by shortlisting the profiles that match your requirements. We update our pool of candidates at a stretch, and as new profile become available, we proactively send them your way, ensuring that your search for top talent continues with any hassle.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-2 w-full  shadow-xl bg-gray-100 py-32 px-10 relative ">
              <div>
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <FcSynchronize />
                </div>
                <div className='w-16 h-12 inline-flex items-center justify-center text-5xl ml-5     '>
                  <h3 className='' >3</h3>
                </div>
              </div>
              <div className="text-center relative z-10 w-full">
                <h2 className="text-3xl text-gray-900 text-left font-bold title-font mb-2">Interview and hire the deserving candidate</h2>
                <p className="leading-relaxed text-left">Improve your hiring process by connecting directly with the shortlisted candidates to conduct in-depth interviews. If they meet your criteria and pass your internal hiring process, extend an offer to your newly selected product manager, making sure that you bring top talent on board to move your business forward.</p>

              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Hero;