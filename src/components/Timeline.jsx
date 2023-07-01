import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        // <section id="timeline">
        //     <div className="single-timeline">
        //         <h1 className="inshaallaah">Inshaallaah ...</h1>

        //         <div
        //             className="wrapper"
        //             data-aos="fade-up"
        //             data-aos-delay="100"
        //         >
        //             <div className="content">
        //                 <h1>Nikaah</h1>
        //                 <p>
        //                     On Friday, 3<sup>rd</sup> February, 2023,
        //                     <br />
        //                     11<sup>th</sup> Rajab-ul-Murajjab, 1444 Hijri,
        //                     <br />
        //                     Time: 07:30 PM.
        //                 </p>
        //                 <h2>Venue:</h2>
        //                 <p>
        //                     Farhan Khan Hall,
        //                     <br /> Millat Nagar,
        //                     <br /> Bhiwandi.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section id="timeline">
            <div className="multi-timeline">
                <h1 className="inshaallaah">Inshaallaah ...</h1>
                <div className="wrapper">
                    {/* shukrana included */}
                    {/* <>
                        <div className="row">
                            <div className="col-lg-6 left" data-aos="fade-down">
                                <h1>Shukrana</h1>
                                <p>
                                    On Saturday, 27<sup>th</sup> July, 2023.
                                    <br />
                                    06<sup>th</sup> Zil-Hajjah, 1444 Hijri,
                                    <br />
                                    Time: 09:00 PM.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right"
                                data-aos="fade-down"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Sunday, 28<sup>th</sup> July, 2023,
                                    <br />
                                    07<sup>th</sup> Zil-Hajjah, 1444 Hijri,
                                    <br />
                                    Time: 01:00 PM.
                                </p>

                                

                                <h2>Venue:</h2>
                                <p>
                                    Heera Functional Hall,
                                    <br /> Belagal Cross, Bandi Hatti Road,
                                    <br /> Ram Nagar, Cowl Bazar,
                                    <br /> Bellari.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>

                                <p>
                                    On Tuesday, 30<sup>th</sup> July, 2023,
                                    <br />
                                    09<sup>th</sup> Zil-Hajjah, 1444 Hijri,
                                    <br />
                                    Time: 02:00 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    KKB Function Hall,
                                    <br /> Arts College Road,
                                    <br /> Adoni,
                                    <br /> Kurnool Dist., AP.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                        </div>
                    </> */}

                    {/* shukrana excluded */}
                    <>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Monday, 09<sup>th</sup> July, 2023,
                                    <br />
                                    20<sup>th</sup> Zil-Hajjah, 1444 Hijri,
                                    <br />
                                    Time: 11:00 AM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    Meridian Function Palace,
                                    <br /> Budhawarpet,
                                    <br /> Opposite Kurnool Medical College,
                                    <br /> Kurnool.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>
                                <p>
                                    On Tuesday, 11<sup>th</sup> July, 2023,
                                    <br />
                                    22<sup>nd</sup> Zil-Hajjah, 1444 Hijri,
                                    <br />
                                    Time: 01:00 PM.
                                </p>
                                <h2>Venue:</h2>
                                <p>
                                    Machani Somapp Memorial Hall,
                                    <br /> Govt. Hospital Road,
                                    <br /> Yemmiganur.
                                </p>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
