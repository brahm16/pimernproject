const Contact=()=>{
    return(
        <div className="page_content single-page about-page contacts-page">
    <div className="content-head">
        <div className="wrap">
            <div className="wrap_float">
                <div className="main">
                    <div className="title">
                        Contact Us
                    </div>
                    <div className="contacts-columns">
                        <div className="column tel">
                            <div className="_title">Phone</div>
                            <div className="text">
                                A wonderful serenity has taken possession of my entire soul, like these
                            </div>
                            <a href="#">+1 1235 6789 10</a>
                        </div>
                        <div className="column email">
                            <div className="_title">Email</div>
                            <div className="text">
                                A wonderful serenity has taken possession of my entire soul, like these
                            </div>
                            <a href="#">info@hellodigi.ru</a>
                        </div>
                        <div className="column location">
                            <div className="_title">Location</div>
                            <div className="text">
                                12 Main Street Pt. London
                            </div>
                            <a href="#">View On Google Map</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="content-body">
        <div className="mab-block" id="gmap"></div>
    </div>
</div>
    )
}

export default Contact;