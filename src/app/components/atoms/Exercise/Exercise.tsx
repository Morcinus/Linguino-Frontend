import { Component, ElementType, ReactNode } from "react";

import { WithTranslation, withTranslation } from "next-i18next";

import { Box, Typography } from "@mui/material";

import { AnswerState } from "../../../../domain/models/types/exercises";
import { QuestionAnswer } from "../../../../domain/models/types/questionAnswers";
import { UserAnswer } from "../../../../domain/models/types/questionAttempts";
import theme from "../../../styles/theme";
import FullWidthButton from "../FullWidthButton/FullWidthButton";
import ImageCard from "../ImageCard/ImageCard";
import KeyPress from "../KeyPress/KeyPress";

export interface IExercise {
  assignmentTitle?: string;
  imageURL?: string;
  onContinue: (arr: Array<UserAnswer>) => void;
  questionAnswers: Array<QuestionAnswer>;
  questionAnswerComponents: Array<{
    component: ElementType;
    props?: Object;
  }>;
  componentsAboveQuestions?: ReactNode;
  componentsBelowQuestions?: ReactNode;
}

type IExerciseState = {
  userAnswers: Array<UserAnswer>;
  submitted: boolean;
  readyToSubmit: boolean;
};

class Exercise extends Component<IExercise & WithTranslation, IExerciseState> {
  constructor(props: IExercise & WithTranslation) {
    super(props);
    this.state = {
      userAnswers: [],
      submitted: false,
      readyToSubmit: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.submitted) {
      this.props.onContinue(this.state.userAnswers);
    } else {
      if (this.state.readyToSubmit) {
        this.setState({ submitted: true });
      }
    }
  };

  handleChange = (answer: UserAnswer) => {
    const questionAnswer = this.props.questionAnswers.find(
      (qa) => qa.id === answer.questionAnswerId
    );

    if (!questionAnswer) {
      console.error("questionAnswer undefined");
      return;
    }

    const prevUserAnswer = this.state.userAnswers.find(
      (ua) => ua?.questionAnswerId === answer?.questionAnswerId
    );
    answer.answers = this.patchAnswers(answer.answers, prevUserAnswer?.answers);
    //answer.states = this.patchStates(answer.states, prevUserAnswer?.states);

    /*     const index = this.state.userAnswers.findIndex(
      (ua) => ua.questionAnswerId === answer.questionAnswerId
    );

    const answers = [...this.state.userAnswers];
    if (index !== -1) {
      answers[index] = answer;
    } else {
      answers.push(answer); // Zde je problém - nemůžu pushovat, protože answers musí být ve stejném pořadí jako questionAnswers???
    } */

    const answers = [...this.state.userAnswers];
    const index = this.props.questionAnswers.findIndex(
      (qa) => qa.id === answer.questionAnswerId
    );
    answers[index] = answer;

    this.setState({
      userAnswers: answers,
      readyToSubmit: this.isReadyToSubmit(this.props.questionAnswers, answers),
    });
  };

  patchAnswers(newAnswers: Array<string>, prevAnswers?: Array<string>) {
    if (prevAnswers) {
      newAnswers.forEach((answer, i) => {
        prevAnswers[i] = answer;
      });

      return [...prevAnswers];
    } else {
      return newAnswers;
    }
  }

  patchStates(newStates: Array<AnswerState>, prevStates?: Array<AnswerState>) {
    if (prevStates) {
      newStates.forEach((newState, i) => {
        // Don't patch states with NONE
        /*         if (
          newState === "NONE" &&
          (prevStates[i] === "RIGHT" || prevStates[i] === "WRONG")
        )
          return; */

        prevStates[i] = newState;
      });
      return [...prevStates];
    } else {
      return newStates;
    }
  }

  isReadyToSubmit(
    questionAnswers: Array<QuestionAnswer>,
    userAnswers: Array<UserAnswer>
  ) {
    let allQuestionsAnswered = true;
    questionAnswers.forEach((qa) => {
      const answer = userAnswers.find((a) => a?.questionAnswerId === qa.id);
      if (answer === undefined) {
        allQuestionsAnswered = false;
      } else {
        answer?.states.forEach((s) => {
          if (s === "NONE") allQuestionsAnswered = false;
        });
      }
    });

    return allQuestionsAnswered;
  }

  render() {
    const { t } = this.props;
    console.log("Rendering");
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          margin: "auto",
          gap: 1,
          mb: 4,
        }}
      >
        <KeyPress onPress={this.handleClick} keys={["Enter"]} />
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          {this.props.assignmentTitle}
        </Typography>

        {this.props.imageURL && <ImageCard url={this.props.imageURL} />}

        {this.props.componentsAboveQuestions}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3),
          }}
        >
          {this.props.questionAnswerComponents.map(
            ({ component, props }, i) => {
              let Child = component;
              return (
                <Child
                  {...props}
                  onChange={this.handleChange}
                  answerStates={this.state?.userAnswers?.[i]?.states}
                  displayAnswers={this.state.submitted}
                  key={i}
                />
              );
            }
          )}
        </Box>

        {this.props.componentsBelowQuestions}

        <FullWidthButton
          text={
            this.state.submitted ? t("exercise.continue") : t("exercise.check")
          }
          onClick={this.handleClick}
          disabled={!this.state.readyToSubmit}
        />
      </Box>
    );
  }
}

export default withTranslation()(Exercise);
