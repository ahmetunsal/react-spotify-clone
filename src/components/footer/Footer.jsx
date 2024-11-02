import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full flex flex-col px-5 pt-10 pb-5">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-2">
              <h6 className="text-xl gabarito-600">Şirket</h6>
              <ul className="list-none opacity-85">
                <li>
                  <a href="" className="text-md hover:underline">
                    Hakkında
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Kariyer
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    For The Record
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl gabarito-600">Topluluklar</h6>
              <ul className="list-none opacity-85">
                <li>
                  <a href="" className="text-md hover:underline">
                    Sanatçılar için
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Geliştiriciler
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Reklam
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Yatırımcılar
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Satıcılar
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl gabarito-600">Yararlı bağlantılar</h6>
              <ul className="list-none opacity-85">
                <li>
                  <a href="" className="text-md hover:underline">
                    Destek
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Ücretsiz mobil uygulama
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl gabarito-600">Spotify planları</h6>
              <ul className="list-none opacity-85">
                <li>
                  <a href="" className="text-md hover:underline">
                    Premium Bireysel
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Premium Duo
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Premium Aile
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Premium Öğrenci
                  </a>
                </li>
                <li>
                  <a href="" className="text-md hover:underline">
                    Spotify Free
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 md:justify-end">
            <div className="h-fit flex bg-zinc-700 hover:bg-zinc-500 rounded-full p-3">
              <a href="">
                <BsInstagram className="w-5 h-5" />
              </a>
            </div>
            <div className="h-fit flex bg-zinc-700 hover:bg-zinc-500 rounded-full p-3">
              <a href="">
                <BsTwitter className="w-5 h-5" />
              </a>
            </div>
            <div className="h-fit flex bg-zinc-700 hover:bg-zinc-500 rounded-full p-3">
              <a href="">
                <BsFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <hr className="opacity-15" />
        <div className="flex flex-col md:flex-row gap-5 justify-between py-10">
          <div className="flex flex-col md:flex-row gap-5">
            <div><a href="" className="opacity-75 hover:opacity-100">Yasal</a></div>
            <div><a href="" className="opacity-75 hover:opacity-100">Güvenlik ve Gizlilik Merkezi</a></div>
            <div><a href="" className="opacity-75 hover:opacity-100">Gizlilik Politikası</a></div>
            <div><a href="" className="opacity-75 hover:opacity-100">Tanımlama Bilgisi Ayarları</a></div>
            <div><a href="" className="opacity-75 hover:opacity-100">Reklamlar Hakkında</a></div>
            <div><a href="" className="opacity-75 hover:opacity-100">Erişilebilirlik</a></div>
          </div>
          <div className="flex opacity-75 pe-5">
            &copy; 2024 Spotify AB
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
