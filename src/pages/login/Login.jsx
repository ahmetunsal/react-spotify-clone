import React from "react";
import { Helmet } from "react-helmet";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex gap-5 gabarito pt-5 flex-col items-center justify-center bg-gradient-to-b from-zinc-600 to-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oturum Aç | Spotify</title>
        <link rel="canonical" href={`http://open.spotify.com/`} />
      </Helmet>
      <div className="w-1/3 h-full flex flex-col items-center gap-10 py-10 bg-black rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4 text-white">
          <FaSpotify className="w-12 h-12" />
          <h1 className="text-4xl">Spotify'da oturum aç</h1>
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
        <hr className="w-9/12 bg-white rounded-full opacity-60" />
        <div className="w-6/12 flex">
          <form className="w-full flex flex-col gap-5">
            <div className="formControl flex flex-col gap-1 w-full text-white">
              <label htmlFor="">E-posta adresi veya kullanıcı adı</label>
              <input
                type="email"
                placeholder="E-posta adresi veya kullanıcı adı"
                className="w-full rounded-sm px-3 pt-2 pb-2 bg-transparent border border-white border-opacity-60"
              />
            </div>
            <div className="formControl flex flex-col gap-1 w-full text-white">
              <label htmlFor="">Parola</label>
              <input
                type="password"
                placeholder="Parola"
                className="w-full rounded-sm px-3 pt-2 pb-2 bg-transparent border border-white border-opacity-60"
              />
            </div>
            <div className="formControl text-white flex flex-col gap-10 items-center">
              <button className="w-full py-2 rounded-full text-black bg-green-500">
                Oturum Aç
              </button>
              <div className="flex">
                <a href="" className="underline">
                  Parolanı mı unuttun?
                </a>
              </div>
              <div className="flex gap-1">
                <span className="opacity-60">Hesabın yok mu?</span>{" "}
                <a href="/register" className="underline">
                  Spotify için kaydol
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-24 flex justify-center items-center bg-black">
        <h5 className=" text-white opacity-50">
          Bu site reCAPTCHA tarafından korunmaktadır ve Google{" "}
          <span className="underline">Gizlilik Politikası</span> ile{" "}
          <span className="underline">Hizmet Koşulları</span> geçerlidir.
        </h5>
      </div>
    </div>
  );
};

export default Login;
