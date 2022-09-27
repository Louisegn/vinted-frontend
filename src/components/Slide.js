import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const MIN = 0;
const MAX = 1000;

const Slide = ({ setRangeValues }) => {
  const [slideValues, setSlideValues] = useState([0, 1000]);

  return (
    <div className="slide-div">
      <Range
        step={5}
        min={MIN}
        max={MAX}
        values={slideValues}
        onChange={(values) => setSlideValues(values)}
        onFinalChange={(values) => {
          setRangeValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "50%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: slideValues,
                  colors: ["#ccc", " #017782", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              border: isDragged ? "" : "1px solid #017782",
              backgroundColor: "#017782",
              outline: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#017782",
                fontSize: "12px",
                fontFamily: "Maison Neue",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#fff",
              }}
            >
              {slideValues[index]}€
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Slide;
