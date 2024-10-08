import imgHuman1 from '../../assets/image 1198.png'
import imgHuman2 from '../../assets/image 1201.png'
import imgHuman3 from '../../assets/image1202.png'
const HeroSection = () => {
    return (
        <section className="bg-[#160A3A]  text-white py-32 px-4 md:px-32 flex flex-wrap justify-end relative ">
           
           <div className="flex-1 gap-8">
            {/* Verified Badge */}
            <div className="flex items-center mb-4  ">
                <div className="bg-gradient-to-r from-[#241457] to-[#4F2BBD] via-[#241457]  px-6 py-[6px] rounded-lg text-sm flex items-center gap-[10px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Check circle - 4">
                <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M15.993 10.222L11.375 14.84C11.228 14.987 11.037 15.06 10.845 15.06C10.652 15.06 10.461 14.987 10.314 14.84L8.005 12.531C7.712 12.238 7.712 11.763 8.005 11.47C8.298 11.177 8.772 11.177 9.065 11.47L10.845 13.249L14.932 9.161C15.225 8.868 15.7 8.868 15.993 9.161C16.286 9.454 16.286 9.929 15.993 10.222ZM12 2.5C6.762 2.5 2.5 6.762 2.5 12C2.5 17.239 6.762 21.5 12 21.5C17.238 21.5 21.5 17.239 21.5 12C21.5 6.762 17.238 2.5 12 2.5Z" fill="#13C163"/>
                </g>
                </svg>

                  <span className='text-[#FFFFFF]'> Verified by Coursera</span> 
                </div>
            </div>

            {/* Main Title and Subtitle */}
            <div className="mb-8 gap-8 flex flex-col">
                <h1 className="text-white font-inter text-[70px] font-semibold leading-none">
                    Learn Code <br />From top <span className="text-[#EAE34A] font-inter text-[70px] font-semibold leading-none underline pb-4">Coder</span>
                </h1>
                <p className="text-white font-inter text-[20px] font-normal leading-[30px] w-[574px] h-[89px] flex-shrink-0">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                </p>
            </div>

            {/* Buttons */}
            <div className="inline-flex justify-center items-center gap-[10px]">
                <a href="#" className="rounded-[4px] bg-[#EAE34A] shadow-[0_10px_30px_0_rgba(229,222,53,0.16)] py-3 px-8 text-[#10005A] font-semibold"
                >
                    Get Started
                </a>
                <a href="#" className="bg-[#291B52] text-white font-semibold py-3 px-8 rounded  transition flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C15.5116 0 20 4.48625 20 10.0058C20 15.5137 15.5116 20 10 20C4.48842 20 0 15.5137 0 10.0058C0 4.48625 4.48842 0 10 0ZM8.861 6.02991C8.64865 6.02991 8.44595 6.07815 8.2529 6.17463C8.01158 6.3097 7.81853 6.52195 7.71236 6.77279C7.64479 6.94645 7.53861 7.46744 7.53861 7.47709C7.43243 8.04631 7.37452 8.9725 7.37452 9.99518C7.37452 10.9706 7.43243 11.8572 7.51931 12.4361C7.52896 12.4457 7.63514 13.0921 7.75097 13.314C7.96332 13.7192 8.37838 13.9701 8.82239 13.9701H8.861C9.15058 13.9604 9.75869 13.7096 9.75869 13.7C10.7819 13.2754 12.7992 11.9537 13.61 11.0757L13.668 11.0178C13.7741 10.9117 13.9093 10.7477 13.9382 10.7091C14.0927 10.5065 14.1699 10.2557 14.1699 10.0058C14.1699 9.72504 14.083 9.46454 13.9189 9.25229C13.8803 9.2137 13.7355 9.04969 13.6004 8.91462C12.8089 8.06561 10.7432 6.67631 9.66216 6.25181C9.49807 6.18524 9.08301 6.03956 8.861 6.02991Z" fill="white"/>
                </svg>
                    
                    <span>How it works</span>
                 
                </a>
            </div>

            {/* Ratings */}
            <div className="flex items-center space-x-2 mb-4 mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="107" height="21" viewBox="0 0 107 21" fill="none">
    <path d="M10.0135 0L12.2617 6.91917H19.5369L13.6511 11.1954L15.8993 18.1146L10.0135 13.8383L4.12772 18.1146L6.37589 11.1954L0.490096 6.91917H7.76534L10.0135 0Z" fill="#F7B933"/>
    <path d="M31.5811 0L33.8293 6.91917H41.1046L35.2188 11.1954L37.4669 18.1146L31.5811 13.8383L25.6953 18.1146L27.9435 11.1954L22.0577 6.91917H29.333L31.5811 0Z" fill="#F7B933"/>
    <path d="M74.7162 0L76.9643 6.91917H84.2396L78.3538 11.1954L80.6019 18.1146L74.7162 13.8383L68.8304 18.1146L71.0785 11.1954L65.1927 6.91917H72.468L74.7162 0Z" fill="#F7B933"/>
    <path d="M53.1488 0L55.3969 6.91917H62.6722L56.7864 11.1954L59.0346 18.1146L53.1488 13.8383L47.263 18.1146L49.5111 11.1954L43.6253 6.91917H50.9006L53.1488 0Z" fill="#F7B933"/>
    <path d="M96.2838 0L98.532 6.91917H105.807L99.9214 11.1954L102.17 18.1146L96.2838 13.8383L90.398 18.1146L92.6462 11.1954L86.7604 6.91917H94.0356L96.2838 0Z" fill="#F7B933"/>
                </svg><span>Based on 10,000+ reviews on</span>
            </div>

            <div className="flex  items-center gap-5">
              
              <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M20.0218 10.1763C20.0858 12.1558 19.5615 14.1097 18.515 15.7912C17.4685 17.4726 15.9469 18.806 14.1427 19.6226C12.3384 20.4393 10.3325 20.7026 8.37856 20.3792C6.42465 20.0559 4.61051 19.1604 3.16555 17.806C1.72058 16.4516 0.709691 14.6991 0.260711 12.7702C-0.18827 10.8413 -0.055176 8.82251 0.643162 6.96923C1.3415 5.11595 2.57372 3.51137 4.18399 2.3584C5.79426 1.20543 7.71027 0.555849 9.68972 0.491809L9.79277 3.67693C8.44328 3.72059 7.13704 4.16344 6.03923 4.94948C4.94142 5.73552 4.10136 6.82944 3.62527 8.09292C3.14918 9.3564 3.05844 10.7327 3.36453 12.0477C3.67062 13.3628 4.3598 14.5575 5.34491 15.4809C6.33001 16.4042 7.5668 17.0147 8.89888 17.2352C10.231 17.4557 11.5985 17.2761 12.8286 16.7194C14.0586 16.1626 15.096 15.2536 15.8094 14.1073C16.5228 12.961 16.8803 11.6288 16.8367 10.2793L20.0218 10.1763Z" fill="white"/>
                <path d="M12.3242 9.72974H20.0269V11.2703C20.0269 12.1211 19.3372 12.8108 18.4864 12.8108H12.3242V9.72974Z" fill="white"/>
                </svg> <span>| CROWD</span>
              </div>
             
              <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.1123 15.2565C10.8692 15.9737 9.85961 15.9871 9.59774 15.2765L7.63289 9.94473C7.53951 9.69143 7.32508 9.50185 7.06215 9.44041L1.52925 8.14592C0.791872 7.97341 0.681011 6.96982 1.36295 6.64044L14.7857 0.157328C15.4271 -0.152445 16.1244 0.463847 15.8959 1.13843L11.1123 15.2565Z" fill="white"/>
                </svg> <span>Capterra</span>
              </div>
             
              <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                <path d="M11.0137 6.97416L6.87715 1.3605C6.27359 0.541438 5.11073 0.565425 4.53679 1.40878L0.603296 7.18891C0.212137 7.76372 0.226132 8.5488 0.637491 9.10705L4.7741 14.7207C5.37768 15.5398 6.54054 15.5158 7.11447 14.6724L11.0479 8.89231C11.4392 8.31749 11.4252 7.53242 11.0137 6.97416Z" fill="white"/>
                <path d="M9.45055 1.40771C9.24642 1.13069 9.23954 0.741077 9.4338 0.455916C9.71847 0.0378899 10.295 0.0259971 10.5944 0.431974L15.052 6.4765C15.4638 7.03491 15.4778 7.82062 15.0862 8.39559L10.8474 14.6195C10.5626 15.0376 9.98608 15.0495 9.68672 14.6434C9.66116 14.6088 9.63873 14.5724 9.61937 14.5347C9.48383 14.2707 9.49973 13.9412 9.66953 13.6917L13.9103 7.45995L9.45055 1.40771Z" fill="white"/>
                <path d="M14.6793 1.40771C14.4752 1.13069 14.4683 0.741077 14.6626 0.455916C14.9472 0.0378899 15.5238 0.0259971 15.8232 0.431974L20.2808 6.4765C20.6926 7.03491 20.7066 7.82062 20.315 8.39559L16.0761 14.6195C15.7914 15.0376 15.2148 15.0495 14.9155 14.6434C14.8899 14.6088 14.8675 14.5724 14.8481 14.5347C14.7126 14.2707 14.7285 13.9412 14.8983 13.6917L19.1391 7.45995L14.6793 1.40771Z" fill="white"/>
                </svg> <span>GetApp</span>
              </div>
              
            </div>

            </div>




            {/* Profiles */}
            <div className="flex flex-1 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-between ">
            
                <div className="w-[160px] h-[459px] flex-shrink-0 rounded-[99.5px] bg-custom-gradient flex flex-col justify-between">
                <div className=""></div>
                <div className="">
                    <div className="text-center text-neutral-800">
                        <h3 className="font-bold text-2xl">Zillio Moniel</h3>
                        <p>Data Engineer</p>
                    </div>
                    <img
                        src={imgHuman2} 
                        alt="Zillio Moniel"
                        className=" rounded-full mx-auto mb-0" 
                        />
                        </div>
                </div>
                
                <div className="absolute right-[363px]  bottom-0 w-[160px] h-[459px] flex-shrink-0 rounded-[99.5px] bg-gradient-to-b from-[#DCB1FF] to-[#221644] flex flex-col justify-between">
                <div className=""></div>
                <div className="">
                    <div className="text-center text-neutral-800">
                        <h3 className="font-bold text-2xl">Lissa Kie</h3>
                        <p>React Engineer</p>
                    </div>
                    <img
                        src={imgHuman1} 
                        alt="Zillio Moniel"
                        className=" rounded-full mx-auto mb-0" 
                        />
                        </div>
                </div>
            
                <div className="w-[160px] h-[459px] flex-shrink-0 rounded-[99.5px] bg-gradient-to-b from-[#8ad2d2] to-[#3E3761] flex flex-col justify-between">
                <div className=""></div>
                <div className="">
                    <div className="text-center text-neutral-800">
                        <h3 className="font-bold text-2xl">Killan James</h3>
                        <p>Laravel Engineer</p>
                    </div>
                    <img
                        src={imgHuman3} 
                        alt="Zillio Moniel"
                        className=" rounded-full mx-auto mb-0" 
                        />
                        </div>
                </div>

            </div>

        </section>
    );
};

export default HeroSection;
