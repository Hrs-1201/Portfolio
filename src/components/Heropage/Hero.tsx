import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className=" min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section: Information */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-black mb-4">
            Hi, I&apos;m Harsh
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            I&apos;m a passionate developer specializing in building elegant and
            user-friendly web applications.
          </p>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=harshpanchal888@gmail.com"
            target="_blank"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 inline-block"
          >
            Contact Me
          </a>
        </div>

        {/* Right Section: Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/img-h.jpg" // Replace with your image path
            alt="Harsh's Picture"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
