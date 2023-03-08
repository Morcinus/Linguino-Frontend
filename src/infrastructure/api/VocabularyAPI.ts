import { Vocabulary } from "domain/models/types/vocabulary";
import { parseQueryParams } from "util/functions/api";

import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./hooks/useAPI";

export interface VocabularyParams {
  favorite?: boolean;
}

const VocabularyAPI = {
  URI: "vocabulary",

  useVocabulary(
    params: VocabularyParams
  ): Modify<FetchHook<Array<Vocabulary>>, { vocabulary: Array<Vocabulary> }> {
    const { data, ...rest } = useAPI<Array<Vocabulary>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { vocabulary: data, ...rest };
  },
};

export default VocabularyAPI;
