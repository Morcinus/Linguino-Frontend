import {
  MatchAudioOption,
  MatchImageOption,
  MatchOption,
  MatchTextOption,
} from "../questionAnswers";

export function isMatchTextOption(
  option: MatchOption
): option is MatchTextOption {
  return (option as MatchTextOption).text !== undefined;
}

export function isMatchAudioOption(
  option: MatchOption
): option is MatchAudioOption {
  return (option as MatchAudioOption).audioURL !== undefined;
}

export function isMatchImageOption(
  option: MatchOption
): option is MatchImageOption {
  return (option as MatchImageOption).imageURL !== undefined;
}
