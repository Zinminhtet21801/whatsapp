import { Circle } from "better-react-spinkit";
import Image from "next/image";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          height={200}
          width={200}
          className={{ marginBottom: 10 }}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
