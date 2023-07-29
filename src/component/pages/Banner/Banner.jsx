

const Banner = () => {
    return (
        <div className='container '>
            <section className="relative mt-10 w-full flex flex-col sm:flex-row">
                <div className="sm:w-1/2 relative">
                    <img
                        className="absolute bg-white top-0 left-0 h-full w-full sm:w-3/4"
                        src="http://www.baoiam.com/Hire-From-Us/Image/1.jpg"
                        alt=""
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div className="p-4 sm:w-1/2">
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        Looking to hire{" "}
                        <span
                            className="text-blue-600"
                            style={{
                                background:
                                    "-webkit-linear-gradient(0deg, #fa2424, #fb8721)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                borderBottom: "1px solid red",
                            }}
                        >
                            top-notch
                        </span>{" "}
                        product managers?
                    </h1>
                    <p className="mt-4 text-base sm:text-lg">
                        Are you exhausted from trying to find top-notch product
                        managers? Look no further! With our platform, you can
                        effortlessly pick exceptional product managers with
                        fantastic skill sets. Say adios to endless hours of
                        reviewing resumes and hello to a more efficient process.
                        So, what are you waiting for? Start your search today and
                        get the best product managers on board. Our team selects
                        the best talent, so you can focus on what you do best:
                        developing outstanding products. It almost takes about 8
                        hours to verify a single candidate. But with our advanced
                        upskilling process, you can save a significant 5 hours
                        per candidate.
                    </p>
                </div>
            </section>

            <section className="w-1086 ml-20 ">
                <h1 className="text-5xl font-bold mt-16">
                    Only candidates with a{" "}
                    <span
                        className=""
                        style={{
                            background: "-webkit-linear-gradient(0deg, #fa2424, #fb8721)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            borderBottom: "1px solid red",
                        }}
                    >
                        strong mindset
                    </span>{" "}
                    make it to you.
                </h1>
                <p className="text-lg mt-10">
                    Our process to select candidates ensures that only the top candidates
                    with strong grit and a growth mindset make it into our pool.
                    Each candidate has committed to working 20 hours per week for
                    16 weeks to improve their skills. Our team of experts thoroughly
                    screens each candidate to assess their ability to:
                </p>
            </section>

           
        </div>



    );
};

export default Banner;