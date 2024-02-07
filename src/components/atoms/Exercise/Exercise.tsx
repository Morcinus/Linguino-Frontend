import { Component, ComponentProps, ElementType, ReactNode } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { AnswerState } from "../../../infrastructure/api/user/study-session/Exercises";
import { QuestionAnswer } from "../../../infrastructure/api/user/study-session/QuestionAnswers";
import { UserAnswer } from "../../../infrastructure/api/user/study-session/QuestionAttempt";
import theme from "../../../styles/theme";
import ExerciseContinueButton from "../ExerciseContinueButton/ExerciseContinueButton";
import KeyPress from "../KeyPress/KeyPress";
import ImageCard from "../cards/ImageCard/ImageCard";

export interface IExercise {
  assignmentTitle?: string;
  imageURL?: string;
  onContinue: (arr: Array<UserAnswer>) => void;
  questionAnswers: Array<QuestionAnswer>;
  questionAnswerComponents: Array<{
    component: ElementType;
    props?: ComponentProps<ElementType>;
  }>;
  componentsAboveQuestions?: ReactNode;
  componentsBelowQuestions?: ReactNode;
  submitBeforeContinue?: boolean;
}

type IExerciseState = {
  userAnswers: Array<UserAnswer>;
  submitted: boolean;
  readyToSubmit: boolean;
};

class Exercise extends Component<IExercise, IExerciseState> {
  constructor(props: IExercise) {
    super(props);
    this.state = {
      userAnswers: [],
      submitted: false,
      readyToSubmit: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.submitted || this.props.submitBeforeContinue === false) {
      this.props.onContinue(this.state.userAnswers);
    } else {
      if (this.state.readyToSubmit) {
        this.setState({ submitted: true });
      }
    }
  };

  handleChange = (answer: UserAnswer) => {
    const questionAnswer = this.props.questionAnswers.find(
      (qa) => qa.id === answer.exerciseId
    );

    if (!questionAnswer) {
      console.error("questionAnswer undefined");
      return;
    }

    const prevUserAnswer = this.state.userAnswers.find(
      (ua) => ua?.exerciseId === answer?.exerciseId
    );
    answer.answers = this.patchAnswers(answer.answers, prevUserAnswer?.answers);

    const answers = [...this.state.userAnswers];
    const index = this.props.questionAnswers.findIndex(
      (qa) => qa.id === answer.exerciseId
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
      const answer = userAnswers.find((a) => a?.exerciseId === qa.id);
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
              const Child = component;
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

        <ExerciseContinueButton
          onClick={this.handleClick}
          disabled={!this.state.readyToSubmit}
          text={
            this.state.submitted || this.props.submitBeforeContinue === false
              ? "exercise.continue"
              : "exercise.check"
          }
        />
      </Box>
    );
  }
}

export default Exercise;
