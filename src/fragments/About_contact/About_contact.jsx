import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import '../About_contact/About_contact.scss'
import callcenter from '../../assets/call center.png'
import { useTranslation } from 'react-i18next'
import xos from '../../assets/xos.png'

const About_contact = () => {

    const { t } = useTranslation();

    return (
        <>
            <img src={xos} alt="" className="back_xos" />
            <Nav />
            <div className='about_contact'>
                <p className="home">
                    <NavLink to="/">{t("about1")}</NavLink>
                    {t("about3")}
                </p>
                <div className="container">
                    <ul>
                        <NavLink to="/about" >{t("about2")}</NavLink>
                        <NavLink to="/about/contact" style={{ color: "#909090" }}>{t("about3")}</NavLink>
                        <NavLink to="/about/delivery">{t("about4")}</NavLink>
                    </ul>
                    <ul className='right'>
                        <h1>{t("about3")}</h1>
                        <img src={callcenter} alt="" />
                        <p>{t("about19")}</p>
                        <span>
                            {t("about20")}
                        </span>
                        <NavLink to='tel:+998977260528'>
                            ☎️ +998 97 726 05 28
                        </NavLink>
                        <NavLink to="https://t.me/Belial_04"><i className="fa-brands fa-telegram"></i>
                            {t("about47")} Telegram
                        </NavLink>
                        <span>
                            ⏰{t("about21")}
                        </span>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About_contact