import styles from "./StudyPath.module.css";

export interface IStudyPath {
  numberOfCurves: number;
}

const StudyPath: React.FC<IStudyPath> = ({ numberOfCurves }) => {
  function getCurveString(numberOfCurves: number) {
    let curveString = "";

    let curveType: "TO_LEFT" | "TO_RIGHT" = "TO_LEFT";
    for (let i = 0; i < numberOfCurves; i++) {
      const offset = i * 200;
      switch (curveType) {
        case "TO_LEFT":
          curveString += `
            C 350,${offset + 60}
              325,${offset + 100}
              210,${offset + 100}
            C 95,${offset + 100}
              70,${offset + 140}
              70,${offset + 200}
          `;
          break;
        case "TO_RIGHT":
          curveString += `
          C 70,${offset + 60}
            95,${offset + 100}
            210,${offset + 100}
          C 325,${offset + 100}
            350,${offset + 140}
            350,${offset + 200}
        `;
          break;
      }

      curveType = curveType === "TO_LEFT" ? "TO_RIGHT" : "TO_LEFT";
    }

    return curveString;
  }

  return (
    <svg viewBox={`0 0 420 ${numberOfCurves * 200}`}>
      <path
        className={styles.studyPath}
        d={`
          M 350,0
          ${getCurveString(numberOfCurves)}
        `}
      />
    </svg>
  );
};

export default StudyPath;
