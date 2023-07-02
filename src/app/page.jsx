"use client";
import axios from "axios";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [device, setDevice] = useState("");
  const [count, setCOunt] = useState(0);

  const sendDeviceInfo = async () => {
    const res = await axios.post("/api/devices", { device: device });
  };
  useEffect(() => {
    if (device !== "") {
      sendDeviceInfo();
    }
  }, [device]);
  useEffect(() => {
    setTimeout(() => {
      setCOunt(count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (typeof platform !== "undefined") {
      setDevice(platform?.description);
    }
  }, [count]);
  return (
    <main className="min-h-screen">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.6/platform.min.js" />

      {/* Hero Section */}

      <div className="hero_section flex items-center justify-between px-60 py-20 max-md:flex-col max-md:px-5 max-md:py-5">
        <div className="content w-[50%] mb-5 max-md:w-full max-md:order-2">
          <h1 className="text-4xl font-bold my-5 ">
            Love story Between Lans Kaba and F. Bah
          </h1>
          <p className="leading-6">
            Once upon a time, in a bustling city, there lived a young man named
            Lans Kaba. Lans was a charming and ambitious individual with a heart
            full of dreams. He had always believed in the power of love and had
            been waiting for someone special to enter his life. Little did he
            know that his life was about to change forever.
          </p>
          <br />
          <p className="leading-6">
            One beautiful day, fate intervened and brought Lans face to face
            with the love of his life, F Bah. F Bah was an extraordinary woman,
            with a radiant smile that could light up any room. Her compassionate
            nature and infectious laughter drew Lans in like a magnet. Sparks
            flew the moment their eyes met, and they soon discovered a profound
            connection between them.
          </p>
        </div>
        <div className="image w-[40%] max-md:w-full">
          <img className="rounded-3xl" src="/jumbakaba.png" alt="" />
        </div>
      </div>
      <div className="px-60 max-md:px-10 ">
        <p className="leading-6 mb-4">
          One beautiful day, fate intervened and brought Lans face to face with
          the love of his life, F Bah. F Bah was an extraordinary woman, with a
          radiant smile that could light up any room. Her compassionate nature
          and infectious laughter drew Lans in like a magnet. Sparks flew the
          moment their eyes met, and they soon discovered a profound connection
          between them.
        </p>
        <p className="leading-6 mb-4">
          Lans and F Bah embarked on an incredible journey together. They spent
          countless hours talking, sharing their dreams, and supporting each
          other in every aspect of life. Their bond grew stronger with each
          passing day, and their love blossomed like a beautiful flower in the
          spring.
        </p>
        <p className="leading-6 mb-4">
          Their love story was filled with adventure and laughter. They explored
          new places, created beautiful memories, and celebrated the simple joys
          of life. Lans and F Bah were the perfect team, complementing each
          other's strengths and uplifting one another in times of need.
        </p>

        <p className="leading-6 mb-4">
          But like any relationship, they also faced their fair share of
          challenges. However, their love proved to be resilient, conquering
          every obstacle that came their way. They learned the art of
          compromise, understanding, and forgiveness, realizing that their love
          was worth fighting for.
        </p>

        <p className="leading-6 mb-4">
          As time went on, Lans and F Bah's love deepened even further. Lans
          found himself falling more and more in love with F Bah each day. Her
          kindness, intelligence, and unwavering support were a constant
          reminder of how lucky he was to have her by his side. One magical
          evening, under a sky filled with twinkling stars, Lans knew that the
          time had come to take their love to the next level. With a heart full
          of love and a trembling hand, he got down on one knee and asked F Bah
          to be his forever. Tears of joy streamed down F Bah's face as she
          said, "Yes!" They sealed their love with a passionate embrace, knowing
          that their journey together was just beginning
        </p>
        <p className="leading-6 mb-4">
          Lans and F Bah's love story continues to unfold, filled with laughter,
          adventures, and endless love. They inspire each other to chase their
          dreams and support one another through thick and thin. Together, they
          create a love story that will be remembered for generations, a
          testament to the power of true love. And so, Lans Kaba and F Bah live
          happily ever after, their hearts forever entwined, and their love
          growing stronger with each passing day.
        </p>
      </div>
    </main>
  );
}
