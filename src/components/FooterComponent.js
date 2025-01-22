import React from "react";
import { BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import { TbBrandLinktree } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

// Contact Us

const Section9 = () => {
    return (
        <React.Fragment>

            <section
                id="section9"
                className="w-screen bg-black px-[calc(100vw/12)] py-16 font-poppins"
            >
                <h1 className="text-5xl text-white font-bold pb-6">Contact Us</h1>
                <div className="flex flex-col lg:flex-row gap-8 flex-wrap text-white mt-8">
                    <div className="space-y-6 lg:w-56 lg:mr-12">
                        <button
                            className="flex items-center space-x-4"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/company/studentsunion-psgtech/",
                                    "_blank"
                                )
                            }
                        >
                            <BsLinkedin size={24} className="text-white" />
                            <p className="text-lg">Students Union</p>
                        </button>
                        <button
                            className="flex items-center space-x-4"
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/kriya_psgtech/",
                                    "_blank"
                                )
                            }
                        >
                            <BsInstagram size={24} className="text-white" />
                            <p className="text-lg">@kriya_psgtech</p>
                        </button>
                        <button
                            className="flex items-center space-x-4"
                            onClick={() => window.open("mailto:events.kriya@psgtech.ac.in", "_blank")}
                        >
                            <SiGmail size={24} className="text-white" />
                            <p className="text-lg">events.kriya@psgtech.ac.in</p>
                        </button>
                        <button
                            className="flex items-center space-x-4"
                            onClick={() =>
                                window.open(
                                    "https://linktr.ee/su.psgtech",
                                    "_blank"
                                )
                            }
                        >
                            <SiLinktree size={24} className="text-white" />
                            <p className="text-lg">Linktree</p>
                        </button>

                    </div>
                    <div className="flex-1 flex flex-col lg:flex-wrap gap-8 lg:gap-6 lg:gap-y-12 lg:flex-row items-center lg:justify-between">
                        <div className="w-full lg:w-56">
                            <h5 className="text-xs tracking-widest">Chairperson</h5>
                            <ContactItem name="Jithendra J" phone="+91 75300 28769" />

                            <h5 className="text-xs tracking-widest mt-8">Co-Chairperson</h5>
                            <ContactItem name="Akash U" phone="+91 89390 28008" />
                        </div>
                        <div className="w-full lg:w-56">
                            <h5 className="text-xs tracking-widest">Secretary(men)</h5>
                            <ContactItem name="Naren Siddharth M" phone="+91 99409 79069" />
                            <h5 className="text-xs tracking-widest mt-8">Event Support
                            </h5>
                            <ContactItem
                                name="Aruna"
                                phone="+91 88258 51781"
                            />
                        </div>
                        <div className="w-full lg:w-56">
                            <h5 className="text-xs tracking-widest">
                                PR & Sponsorship Support
                            </h5>
                            <ContactItem name="Nakulan A" phone="+91 94889 64540" />
                            <h5 className="text-xs tracking-widest mt-8">Technical Support
                            </h5>
                            <ContactItem
                                name="Abinav"
                                phone="+91 99655 11133"

                            />
                        </div>


                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

const ContactItem = ({ name, phone, className = "" }) => {
    return (
        <div className={`${className}`}>
            <h4 className="text-lg mt-2 font-semibold">{name}</h4>
            <button
                className="flex items-center space-x-4 mt-2"
                onClick={() => window.open(`tel:${phone}`)}
            >
                <BsTelephone className="text-white" />
                <p className="text-sm">{phone}</p>
            </button>
        </div>
    );
};

export default Section9;