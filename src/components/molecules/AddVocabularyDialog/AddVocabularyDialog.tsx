import { useTranslation } from "i18n/client";
import { LessonItem } from "infrastructure/api/lesson-items/LessonItems";
import icons from "styles/icons";

import { useState } from "react";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";

import LessonItemsSearchResults from "components/atoms/LessonItemsSearchResults/LessonItemsSearchResults";
import NavigationBar from "components/atoms/navigation/top-navigation-bars/NavigationBar/NavigationBar";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

export interface IAddVocabularyDialog {
  open: boolean;
  onItemAdd: (lessonItem: LessonItem) => void;
  onItemRemove: (lessonItem: LessonItem) => void;
  onClose: () => void;
  items: Array<Pick<LessonItem, "id" | "nameL1" | "nameL2" | "imageURL">>;
}

const AddVocabularyDialog: React.FC<IAddVocabularyDialog> = ({
  open,
  onItemAdd,
  onItemRemove,
  onClose,
  items,
}) => {
  const { t } = useTranslation("cs", "common");
  const [text, setText] = useState("");
  const [searchPrompt, setSearchPrompt] = useState("");

  return (
    <Dialog fullScreen open={open}>
      <NavigationBar
        header={t("userLessons.addVocabulary")}
        leftIconButton={{
          icon: icons.back,
          onClick: onClose,
        }}
      />
      <Toolbar />
      <ContentContainer>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box>
            <InputLabel id="text">
              {t("userLessons.searchVocabulary")}
            </InputLabel>
            <TextField
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setSearchPrompt(text)}>
                      <Icon>{icons.search}</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            {searchPrompt && (
              <LessonItemsSearchResults
                searchPrompt={searchPrompt}
                onItemAdd={onItemAdd}
                onItemRemove={onItemRemove}
                items={items}
              />
            )}
          </Box>
        </Box>
      </ContentContainer>
    </Dialog>
  );
};

export default AddVocabularyDialog;
