import { useContext } from "react";
// import Loading from "../Home/Loading/Loading";
import { VideoTrailerProps } from "../../types/common/common";
import { CommonContext } from "../../context/Common/CommonContext";

const VideoTrailer = ({ keyTrailer }: VideoTrailerProps) => {
  const { loading } = useContext(CommonContext);

  return (
    <section style={{ position: "relative" }}>
      {/* {loading && <Loading />} */}
      {keyTrailer && !loading && (
        <iframe
          width="100%"
          height="350px"
          src={`https://www.youtube.com/embed/${keyTrailer}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: "0" }}
        ></iframe>
      )}
    </section>
  );
};

export default VideoTrailer;
