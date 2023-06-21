// prettier-ignore
"use client"

import { StudySession as StudySessionType } from "domain/models/types/studySessions";
import UserAPI from "infrastructure/api/UserAPI";
import useAuth from "infrastructure/services/AuthProvider";
import useNotices from "infrastructure/services/NoticeProvider";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Container, IconButton, Toolbar } from "@mui/material";

import MultiProgressBar from "components/atoms/MultiProgressBar/MultiProgressBar";
import StudySession from "components/molecules/StudySession/StudySession";

export interface IStudyPage {}

const StudyPage: React.FC<IStudyPage> = () => {
  const [index, setIndex] = useState(0);

  const { data, isLoading } = UserAPI.useUserSettings(useAuth().user?.id);
  const [progressArray, setProgressArray] = useState<Array<StudySessionType>>(
    []
  );
  const [rewardSum, setRewardSum] = useState<number>(0);
  const { addNotices } = useNotices();
  const router = useRouter();

  function handleContinue(reschedule: boolean) {
    setProgressArray(() => {
      const arr = [...progressArray];

      if (reschedule) arr[index].goal += 1;

      arr[index].progress += 1;

      return arr;
    });
  }

  function handleSessionFinish(reward: number) {
    const newRewardSum = rewardSum + reward;
    setRewardSum(newRewardSum);

    if (index < progressArray.length - 1) {
      setIndex(index + 1);
    } else {
      addNotices([
        {
          id: "study_advertisement_notice",
          type: "ADVERTISEMENT",
        },
        {
          id: "study_reward_notice",
          type: "REWARD",
          reward: newRewardSum,
        },
      ]);
      router.push("/");
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

          <StudySession
            session={data.dailySessions[index]}
            onContinue={handleContinue}
            onFinish={handleSessionFinish}
            key={index}
          />
        </Box>
      )}
    </>
  );
};

export default StudyPage;
