import CodeLearningimg from '../../assets/Rectangle 4423.png'
const CodeLearningCentre = () => {
  return (
    <div className="bg-purple-50 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section (Text and Details) */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Code Learning Centre</h1>
          <p className="text-lg text-gray-700 mb-6">
            Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training.
          </p>
          <div className="space-y-6">
            {/* Safe & Secured */}
            <div className="flex items-start">
              <div className="bg-[#4B44BB] text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M17.7515 2.65919C17.7174 2.41422 17.5412 2.21271 17.3029 2.14648L9.66646 0.0227865C9.5576 -0.00751413 9.4426 -0.00751413 9.33365 0.0227865L1.69723 2.14648C1.45896 2.21271 1.28271 2.41414 1.2486 2.65919C1.2043 2.97768 0.193869 10.5028 2.78557 14.2464C5.3742 17.9854 9.193 18.9436 9.35427 18.9826C9.4022 18.9942 9.45105 18.9999 9.50006 18.9999C9.54907 18.9999 9.59792 18.9941 9.64585 18.9826C9.80721 18.9436 13.626 17.9854 16.2146 14.2464C18.8062 10.5029 17.7958 2.97776 17.7515 2.65919ZM14.4246 7.05245L9.21576 12.2613C9.09456 12.3825 8.93561 12.4432 8.77673 12.4432C8.61786 12.4432 8.45891 12.3826 8.33771 12.2613L5.11714 9.04071C5.00066 8.92431 4.93526 8.76635 4.93526 8.60168C4.93526 8.43701 5.00074 8.27905 5.11714 8.16265L5.7566 7.52319C5.99909 7.28079 6.39226 7.2807 6.63466 7.52319L8.77673 9.66527L12.9071 5.53486C13.0235 5.41837 13.1814 5.35297 13.3461 5.35297C13.5108 5.35297 13.6687 5.41837 13.7851 5.53486L14.4246 6.17432C14.6671 6.4168 14.6671 6.80997 14.4246 7.05245Z" fill="white"/>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Safe & Secured</h4>
                <p className="text-gray-600">Safe and secured services at every step of the process.</p>
              </div>
            </div>

            {/* Highly Expert Instructors */}
            <div className="flex items-start">
              <div className="bg-[#4B44BB] text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 9.5C19 14.7467 14.7467 19 9.5 19C7.69652 19 6.01041 18.4975 4.57407 17.6248L0 19L1.17165 14.0741C0.424854 12.7172 0 11.1582 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM13.4575 12.9926C13.9205 12.468 14.2746 11.8565 14.4992 11.1938L12.7779 10.6105C12.6307 11.045 12.3985 11.4459 12.0949 11.7899C11.7913 12.1338 11.4224 12.414 11.0095 12.614C10.5966 12.8141 10.1481 12.93 9.69003 12.9551C9.23194 12.9803 8.77343 12.914 8.34118 12.7603C7.90892 12.6066 7.51155 12.3685 7.17218 12.0597C6.83281 11.751 6.55821 11.3779 6.36436 10.9621C6.17051 10.5463 6.06128 10.0961 6.04302 9.63771C6.02477 9.1793 6.09785 8.72183 6.25802 8.29193L4.55493 7.65741C4.31063 8.31311 4.19916 9.01085 4.22701 9.71003C4.25485 10.4092 4.42145 11.0959 4.71712 11.7301C5.01278 12.3643 5.43161 12.9333 5.94923 13.4042C6.46685 13.875 7.07293 14.2383 7.73222 14.4727C8.3915 14.7072 9.09083 14.8082 9.78951 14.7699C10.4882 14.7316 11.1723 14.5547 11.802 14.2496C12.4317 13.9445 12.9944 13.5172 13.4575 12.9926Z" fill="white"/>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Highly Expert Instructors</h4>
                <p className="text-gray-600">Enjoy learning with experienced and skilled instructors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={CodeLearningimg}
            alt="CodeLearningimg"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeLearningCentre;
