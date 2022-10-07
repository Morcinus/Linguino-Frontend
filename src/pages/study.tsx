import { useEffect, useState } from "react";

import Link from "next/link";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Container, IconButton, Toolbar } from "@mui/material";

import MultiProgressBar from "../app/components/atoms/MultiProgressBar/MultiProgressBar";
import { default as StudySessionComponent } from "../app/components/molecules/StudySession/StudySession";
import { StudySession } from "../domain/models/types/studySessions";
import UserAPI from "../infrastructure/api/UserAPI";
import useAuth from "../infrastructure/services/AuthProvider";

export default function Study() {
  const [index, setIndex] = useState(0);
  const { data, isLoading } = UserAPI.useUserSettings(useAuth().user?.id);
  const [progressArray, setProgressArray] = useState<Array<StudySession>>([]);

  function handleWrongAnswer() {
    setProgressArray(() => {
      const arr = progressArray;
      arr[index].goal += 1;
      return arr;
    });
  }

  function handleContinue() {
    setProgressArray(() => {
      const arr = [...progressArray];
      arr[index].progress += 1;
      return arr;
    });
  }

  function handleSessionFinish() {
    if (index < progressArray.length - 1) {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    if (progressArray === undefined || progressArray.length == 0) {
      if (Array.isArray(data?.dailySessions) && data?.dailySessions.length) {
        const arr = data.dailySessions;
        arr.forEach((e) => (e.progress = 0));
        setProgressArray(arr);
      }
    }
  }, [data, progressArray]);

  return (
    <>
      {isLoading || (
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Container maxWidth="sm">
                <Toolbar sx={{ mt: 1 }}>
                  <MultiProgressBar data={progressArray} />
                  <Box>
                    <IconButton>
                      <Link href={"/"}>
                        <CloseIcon />
                      </Link>
                    </IconButton>
                  </Box>
                </Toolbar>
              </Container>
            </Box>
          </Box>

          <StudySessionComponent
            sessionInfo={data.dailySessions[index]}
            onContinue={handleContinue}
            onWrongAnswer={handleWrongAnswer}
            onFinish={handleSessionFinish}
            key={index}
          />
        </Box>
      )}
    </>
  );
}
