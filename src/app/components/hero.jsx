import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative bg-black text-white mx-auto"
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        maxWidth: "1718px",
        height: "664px",
        marginTop: "87px",
        paddingBottom: "100px",
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>

      <div className="container mx-auto px-6 flex flex-col items-center justify-center pt-20 text-center">
        {/* Main heading */}
        <h1
          style={{
            fontWeight: 400,
            fontSize: "70px",
            lineHeight: "75.6px",
            letterSpacing: "0.68px",
            marginBottom: "40px",
          }}
        >
          Powerful for developers.
          <br />
          Fast for everyone.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            width: "589px",
            fontWeight: 400,
            fontSize: "21px",
