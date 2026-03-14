import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const BlogOne = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="blog-mainsection">
                <div className="blog-section1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <h3 className="blog-subhead">What is Corporate Sustainability Reporting Directive (CSRD) ?</h3>
                                <p className="blog-content">Timeline of CSRD Implementation</p>
                                <div>
                                    <p>Sustainability</p>
                                    <p>Abstract</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="blogleft-section">
                                <img className="blogmain-im" src="../assets/images/blogOne001.png" alt="blog" />
                                {/* <p className="blog-mainheader">Why Scope 3 Is the Next Battleground in Automotive Sustainability</p> */}
                                <p className="blog-mainsubheader">By 2030, the CSRD is expected to increase the number of EU companies reporting from 11,000 under the NFRD to 49,000, making it a critical framework for sustainability transparency.</p>
                                <p className="blog-mainsubheader blog-mainsubheader2">Why CSRD is Crucial for German Automotive Manufacturers?</p>
                                <ul className="bloglists">
                                    <li className="bloglists-txt"><span>Regulatory Compliance and Market Access</span> Global German automakers must comply with CSRD to avoid penalties and keep EU market access. ESG reporting violations can result in fines of up to 4% of yearly revenue and reputational damage. The CSRD aligns with other EU legislation including the EU Taxonomy and Sustainable Finance Disclosure Regulation (SFDR), making sustainability crucial for companies' smooth continuous operations.</li>
                                    <li className="bloglists-txt"><span>Investor and Consumer Demand for Transparency</span> Sustainability is gaining popularity among investors and consumers. The CSRD mandates corporations to report full ESG data, including Scope 3 emissions (supply chain indirect emissions), which are important for the automobile industry. Transparent CSRD reporting boosts a company's reputation, attracts sustainable investment, and builds stakeholder trust.</li>
                                    <li className="bloglists-txt"><span>Supply Chain Transparency and Risk Mitigation</span> Environmental and social implications of the car industry's complex supply chains are under investigation. Companies must report value chain sustainability risks and opportunities under the CSRD. German firms must ensure suppliers follow sustainable practises to reduce carbon emissions, resource consumption, and labour concerns.</li>
                                </ul>
                                <p className="blog-mainsubheader"><span>Competitive Advantage in a Green Economy</span> Early adoption of CSRD reporting can make German automakers sustainability leaders. Businesses can show their environmental responsibility by giving verifiable environmental data through Environmental Product Declarations (EPDs). This addresses legal standards and gives a competitive edge in an ESG driven market.</p>
                                <h3 className="blog-mainsubheader2">Key Takeaways for Automotive Manufacturers</h3>
                                <p className="blog-mainsubheader"><span>Scope 3 Emissions Reporting:</span> The CSRD requires detailed reporting of Scope 3 emissions, which are critical for the automotive industry due to its extensive supply chains. Manufacturers must work closely with suppliers to gather accurate data and reduce emissions.</p>
                                <p className="blog-mainsubheader"><span>EPDs as a Tool for Compliance:</span> Environmental Product Declarations (EPDs) can help manufacturers provide transparent, science-based data on the environmental impact of their products, aligning with CSRD requirements.
                                    Strategic Investment in Sustainability: Companies should set science-based targets for reducing their environmental footprint, using CSRD reporting as a foundation for long-term sustainability strategies.</p>

                                <div className="blogdata-sec">
                                    <div className="blogdata-sec1">
                                        <img className="blogdata-im" src="../assets/images/blog/icon1.png" alt="blog" />
                                        <p className="blogdata-head">Published June 28, 2024</p>
                                    </div>
                                    {/* <div className="blogdata-sec1">
                                        <img className="blogdata-im" src="../assets/images/blog/icon2.png" alt="blog" />
                                        <p className="blogdata-head">Scope 3 & Supply Chain</p>
                                    </div> */}
                                    <div className="blogdata-sec1">
                                        <img className="blogdata-im" src="../assets/images/blog/icon3.png" alt="blog" />
                                        <p className="blogdata-head">By Enviguide ResearchTeam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blogright-section">
                                <h2 className="blogright-mainheader">Recent Articles</h2>
                                <NavLink to={'/BlogTwo'} style={{textDecoration: 'none'}}>
                                <div className="d-flex blogright-sec">
                                    <div className="flex-shrink-0">
                                        <img className="blogright-secim" src="../assets/images/blog1.png" alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className="blogright-text1">What is LCA & EPD?</p>
                                        <p className="blogright-text2">LCA is a comprehensive method used to evaluate the environmental impacts of a product from its inception to disposal.</p>
                                        <div className="blogright-sec3">
                                            {/* <div className="blogright-sec4">
                                                <img className="blogright-sec4im" src="../assets/images/blog/icon2.png" alt="blog" />
                                                <p className="blogright-sec4txt">Compliance</p>
                                            </div> */}
                                            <div className="blogright-sec4">
                                                <img className="blogright-sec4im" src="../assets/images/blog/icon1.png" alt="blog" />
                                                <p className="blogright-sec4txt">Published June 28, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </NavLink>

                                {/* <div className="d-flex blogright-sec">
                                    <div className="flex-shrink-0">
                                        <img className="blogright-secim" src="../assets/images/blog/img222.png" alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className="blogright-text1">Digital Product Passports: What Auto Manufacturers Need to Know</p>
                                        <p className="blogright-text2">New EU mandates are redefining how product emissions are shared.</p>
                                        <div className="blogright-sec3">
                                            <div className="blogright-sec4">
                                                <img className="blogright-sec4im" src="../assets/images/blog/icon2.png" alt="blog" />
                                                <p className="blogright-sec4txt">Regulation / Tech</p>
                                            </div>
                                            <div className="blogright-sec4">
                                                <img className="blogright-sec4im" src="../assets/images/blog/icon1.png" alt="blog" />
                                                <p className="blogright-sec4txt">March 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex blogright-sec">
                                    <div className="flex-shrink-0">
                                        <img className="blogright-secim" src="../assets/images/blog/image333.png" alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p className="blogright-text1">AI + ESG: How Automotive Companies Are Automating Impact</p>
                                        <p className="blogright-text2">Discover how leaders are leveraging AI for climate forecasting, material switching,and compliance readiness.</p>
                                        <div className="blogright-sec3">
                                            <div className="blogright-sec4">
                                                <img className="blogright-sec4im" src="../assets/images/blog/icon2.png" alt="blog" />
                                                <p className="blogright-sec4txt">AI & Automation</p>
                                            </div>
                                            <div className="blogright-sec4">
                                                <img className="blogright-sec4im" src="../assets/images/blog/icon1.png" alt="blog" />
                                                <p className="blogright-sec4txt">March 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="blog-section3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <h2 className="blog-section3-mainhead">Ready to Take Action?</h2>
                                <p className="blog-section3-content">Join the growing network of automotive leaders turning sustainability goals into operational advantage.</p>
                                <div className="text-center">
                                    <NavLink className="blog-section3bt" to={'/Contact-Us'}>Get Started with Enviguide</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogOne;