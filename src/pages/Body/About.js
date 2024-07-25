import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { useSoundContext } from '../../components/Containers/Providers/Sound'

const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut',
        },
        delay: 1,
    },
}

function About() {
    const { sound } = useSoundContext()
    return (
        <section id="about" className="m-2 md:m-5 lg:mt-0">
            <div className="flex flex-wrap flex-row ml-[0.625rem] shadow-offsetLeft md:h-full">
                <div className="box-left relative z-[1] border-2 border-solid border-black flex-1 p-7 pb-12 w-full md:py-14 md:px-16 md:border-r-0 md:flex-1">
                    <div className="robot-image"></div>
                </div>
                <div className="box-right relative z-[1] flex-1 p-7 pb-12 border-2 border-solid border-black md:py-14 md:px-16 xl:h-[650px] xl:flex-[1.5]">
                    <svg className="mb-4 w-full xl:mb-14 xl:w-unset" width="423" height="161" viewBox="0 0 423 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="M18.7982 46.8428H23.7805L39.4674 62.6167H52.391V61.7899L32.7662 45.1022C42.5786 41.5123 48.2137 33.8321 48.2137 23.454C48.2137 9.63831 38.0749 1.30537 21.0827 1.30537H10.4435V62.6167H18.7764V46.8428H18.7982ZM18.7982 9.09437H21.235C32.5921 9.09437 39.2063 14.9035 39.2063 24.7812C39.2063 34.0932 33.2448 39.9023 23.6717 39.9023H18.7764V9.09437H18.7982Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path
                            d="M91.5971 63.9221C111.135 63.9221 125.516 50.4328 125.516 31.9611C125.516 13.4894 111.2 0 91.6841 0C72.1681 0 57.6779 13.4894 57.6779 31.9611C57.6779 50.4328 72.0593 63.9221 91.5971 63.9221ZM91.6841 8.02834C106 8.02834 116.117 17.906 116.117 31.9611C116.117 46.0161 105.978 55.9155 91.6841 55.9155C77.3898 55.9155 67.0987 46.0161 67.0987 31.9611C67.0987 17.906 77.3245 8.02834 91.6841 8.02834Z"
                            fill="black"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M177.081 43.3399C177.081 32.7878 170.967 26.5 160.502 26.1736V25.7603C165.005 23.9544 167.442 19.7988 167.442 14.229C167.442 5.56974 161.546 1.30537 149.775 1.30537H137.766V62.6167H153.452C168.574 62.6167 177.059 55.6762 177.059 43.3182L177.081 43.3399ZM146.033 8.76803H150.189C156.477 8.76803 159.675 11.2266 159.675 16.1437C159.675 21.0607 156.237 24.1502 150.602 24.1502H146.033V8.76803ZM153.713 54.9582L146.033 54.8711V30.6773H152.082C162.22 30.6773 168.095 35.2681 168.095 43.2746C168.095 50.7808 162.851 55.0452 153.713 54.9582Z"
                            fill="black"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M252.273 31.9611C252.273 13.4894 237.978 0 218.441 0C198.903 0 184.434 13.4894 184.434 31.9611C184.434 50.4328 198.816 63.9221 218.353 63.9221C237.891 63.9221 252.273 50.4328 252.273 31.9611ZM193.833 31.9611C193.833 17.9931 204.037 8.02834 218.441 8.02834C232.844 8.02834 242.874 17.906 242.874 31.9611C242.874 46.0161 232.735 55.9155 218.441 55.9155C204.146 55.9155 193.833 46.0161 193.833 31.9611Z"
                            fill="black"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path d="M279.164 62.6167V9.09437H292.24V1.30537H257.168V9.09437H270.266V62.6167H279.164Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path
                            d="M24.4332 116.139H44.863V137.787C41.6647 138.766 37.9878 139.267 34.4849 139.267C19.0374 139.267 9.13798 129.868 9.13798 115.247C9.13798 100.626 19.0374 91.4665 34.8112 91.4665C38.4882 91.4665 42.0128 91.9452 44.95 92.6849V100.278L52.478 98.2329L52.8913 86.9628C46.3642 84.5043 40.3158 83.3729 34.3326 83.3729C14.0768 83.3729 0 96.4489 0 115.334C0 134.219 13.7287 147.208 33.2665 147.208C37.5961 147.208 41.6865 146.555 44.7977 145.337V160.371L53.0654 158.326V116.161H58.8745L60.5063 108.72H26.0867L24.4549 116.161L24.4332 116.139Z"
                            fill="black"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path d="M80.4795 116.139H92.3371L93.9688 108.72H80.4795V92.4456H95.927V84.6783H72.2336V108.72H67.7299L66.0981 116.139H72.2336V145.99H96.732L98.3638 138.222H80.4795V116.139Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M139.158 102.258H138.745L117.51 84.6783H109.394V145.99H118.075V95.7961H118.467L139.158 111.483V145.99H147.817V84.6783H139.158V102.258Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M157.63 92.4456H170.706V145.99H179.604V92.4456H192.68V84.6783H157.63V92.4456Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M211.413 84.6783H202.493V145.99H225.381L227.013 138.222H211.413V84.6783Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M245.071 116.139H256.929L258.56 108.72H245.071V92.4456H260.519V84.6783H236.825V108.72H232.322L230.69 116.139H236.825V145.99H261.345L262.977 138.222H245.071V116.139Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M295.352 102.345H295.025L282.189 84.6783H274.008V145.99H282.189V97.1886H282.602L294.59 115.421H294.938L306.948 97.1886H307.362V145.99H315.934V84.6783H308.014L295.352 102.345Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M351.572 83.3729C339.475 83.3729 333.1 89.8347 333.1 101.845V108.698H328.618L326.986 116.139H333.1V145.968H341.368V116.139H360.405V145.968H368.673V101.845C368.673 89.4214 363.038 83.3729 351.594 83.3729H351.572ZM360.405 108.698H341.368V100.604C341.368 94.0774 344.392 91.1402 350.941 91.1402C357.49 91.1402 360.427 94.0774 360.427 100.604V108.698H360.405Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M414.341 84.6783V102.258H413.927L392.692 84.6783H384.577V145.99H393.258V95.7961H393.672L414.341 111.483V145.99H423V84.6783H414.341Z" fill="black" variants={pathVariants} initial="hidden" animate="visible" />
                    </svg>
                    <p className="text-black font-normal no-underline text-base">
                        Robot Gentleman is the independent game developer based in Poznań, Poland, easily recognizable by our signature headgear.
                        <br />
                        <br />
                        <b>If you've ever seen a robot in a top hat, that's probably one of us!</b>
                    </p>
                    <br />

                    <p className="text-black font-normal no-underline text-base">
                        The studio is known for the warmly received dark comedy atomic adventure <i>60 Seconds!</i> and its spiritual successor – <i>60 Parsecs!</i> Following the success of the <i>60!</i> series, we plan to continue developing unconventional games with twisted stories, while actively engaging with the global gamedev community and supporting the local indie scene in our home city of Poznań, Poland.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
