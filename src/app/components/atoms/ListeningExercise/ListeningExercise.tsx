import { Box, Typography } from "@mui/material";

import {
  IExerciseComponent,
  ListeningExercise as ListeningExerciseType,
} from "../../../../domain/models/types/exercises";
import FillTheBlankSet from "../../molecules/FillTheBlankSet/FillTheBlankSet";
import ListenButton from "../ListenButton/ListenButton";

export interface IListeningExercise extends IExerciseComponent {
  exercise: ListeningExerciseType;
}

const ListeningExercise: React.FC<IListeningExercise> = ({
  exercise,
  onContinue,
}) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "90%",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {exercise.instructionTitle}
        </Typography>
        <ListenButton
          audioLink={exercise.audioLink}
          displayProgress={true}
          playOnMount={false}
        />

        <FillTheBlankSet
          onContinue={(attempts) => onContinue(attempts, false)}
          questions={exercise.questions}
        />
      </Box>
    </Box>
  );
};

export default ListeningExercise;
