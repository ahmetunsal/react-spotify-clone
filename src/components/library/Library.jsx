import React from "react";
import { SiLibrariesdotio } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import InfoCard from "../cards/InfoCard";

const Library = () => {
  return (
    <div className="lg:w-1/12 xl:w-1/5 hidden h-full pb-24 py-1 px-2 md:flex">
      <div className="w-full h-full flex bg-neutral-900 text-white rounded-md">
        <div className="w-full flex flex-col p-4 gap-8">
          <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-0">
            <Link className="flex gap-2 opacity-70 hover:opacity-100 duration-300 ease-in">
              <SiLibrariesdotio className="w-6 h-6" />
              <h6 className="hidden xl:flex text-lg gabarito-600">Kütüphaneniz</h6>
            </Link>
            <div className="flex">
                <button className="opacity-70 hover:opacity-100 duration-300 ease-in">
                    <FaPlus />
                </button>
            </div>
          </div>
          <div className="w-full hidden xl:flex flex-col gap-4">
            <InfoCard>
                <h6 className="text-md gabarito-600">İlk oynatma listenizi oluşturun.</h6>
                <p className="text-sm gabarito">Aşşırı kolay, biz yardımcı olacağız.</p>
                <div className="mt-2 ms-1">
                    <button className="hover:scale-105 hover:font-bold px-4 py-2 text-sm bg-white text-black gabarito-600 rounded-full">
                        Oynatma Listesi Oluştur
                    </button>
                </div>
            </InfoCard>
            <InfoCard>
                <h6 className="text-md gabarito-600">Hadi birkaç dinlenecek podcast bakalım</h6>
                <p className="text-sm gabarito">Ayrıca, takip ederek son bölümlerden de haberdar olabilirsin</p>
                <div className="mt-2 ms-1">
                    <button className="hover:scale-105 hover:font-bold px-4 py-2 text-sm bg-white text-black gabarito-600 rounded-full">
                        Podcast'leri ara
                    </button>
                </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
