import React from "react";
import { Helmet } from "react-helmet";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex gap-5 gabarito pt-5 flex-col items-center justify-center bg-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kaydol | Spotify</title>
        <link rel="canonical" href={`http://open.spotify.com/`} />
      </Helmet>
      <div className="w-1/3 h-full flex flex-col items-center gap-10 py-10 bg-black rounded-lg">
        <div className="w-2/4 flex flex-col items-center justify-center gap-4 text-white">
          <FaSpotify className="w-12 h-12" />
          <h1 className="w-full text-5xl gabarito-600 text-center">
            Dinlemeye başlamak <br /> için kaydol
          </h1>
        </div>
        <div className="w-6/12 flex">
          <form className="w-full flex flex-col gap-5">
            <div className="formControl flex flex-col gap-1 w-full text-white">
              <label htmlFor="">E-posta adresi</label>
              <input
                type="email"
                placeholder="ad@alan.com"
                className="w-full rounded-sm px-3 pt-2 pb-2 bg-transparent border border-white border-opacity-60"
              />
            </div>
            <div className="formControl text-white flex flex-col gap-10 items-center">
              <button className="w-full py-2 rounded-full text-black bg-green-500">
                Oturum Aç
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex items-center justify-center relative">
            <hr className="w-6/12 bg-white rounded-full opacity-60" />
            <h6 className="absolute bg-black px-5 text-white">veya</h6>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-3 justify-center">
          <Link
            to={"/"}
            className="w-full hover:scale-105 duration-200 ease-in-out flex items-center justify-center text-white border border-white rounded-full border-opacity-45 py-2 px-5"
          >
            <img className="w-5 self-start" src="/google.png" alt="" />
            <span className="w-full text-center">Google ile devam et</span>
          </Link>
          <Link
            to={"/"}
            className="w-full hover:scale-105 duration-200 ease-in-out flex items-center justify-center text-white border border-white rounded-full border-opacity-45 py-2 px-5"
          >
            <img className="w-5 self-start" src="/facebook.png" alt="" />
            <span className="w-full text-center">Facebook ile devam et</span>
          </Link>
          <Link
            to={"/"}
            className="w-full hover:scale-105 duration-200 ease-in-out flex items-center justify-center text-white border border-white rounded-full border-opacity-45 py-2 px-5"
          >
            <img className="w-5 self-start invert" src="/apple.png" alt="" />
            <span className="w-full text-center">Apple ile devam et</span>
          </Link>
        </div>
        <div className="flex gap-1 text-white">
          <span className="opacity-60">Hesabın var mı?</span>{" "}
          <a href="/login" className="underline">
            Buradan oturum aç.
          </a>
        </div>
      </div>
      <div className="flex justify-center text-center mb-5 text-sm text-white">
        <span className="w-7/12">
            This site protected by reCAPTCHA and the Google{" "}
            <a href="" className="underline">Privacy Policy</a>{" "}
            and{" "}
            <a href="" className="underline">Terms of Service</a>{" "}
            apply.
        </span>
      </div>
    </div>
  );
};

export default Register;
