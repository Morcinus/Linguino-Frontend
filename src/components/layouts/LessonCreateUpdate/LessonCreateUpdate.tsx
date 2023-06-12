import { useTranslation } from "i18n/client";
import { LessonItem } from "infrastructure/api/lesson-items/LessonItems";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";
import icons from "styles/icons";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import BottomFab from "components/atoms/BottomFab/BottomFab";
import Popup from "components/atoms/Popup/Popup";
import CardList from "components/atoms/lists/CardList/CardList";
import AddVocabularyDialog from "components/molecules/AddVocabularyDialog/AddVocabularyDialog";

import ContentContainer from "../ContentContainer/ContentContainer";

interface Lesson {
  id?: ID;
  name: string;
  description?: string;
  items: Array<Pick<LessonItem, "id" | "nameL1" | "nameL2" | "imageURL">>;
}

export interface ILessonCreateUpdate {
  lesson: Lesson;
  onSave: (lesson: Lesson) => void;
  isCreate?: boolean;
}

const LessonCreateUpdate: React.FC<ILessonCreateUpdate> = ({
  lesson,
  onSave,
  isCreate = false,
}) => {
  const [items, setItems] = useState(lesson.items);
  const [name, setName] = useState(lesson.name);
  const [popupOpen, setPopupOpen] = useState(false);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [description, setDescription] = useState(lesson.description);
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

  function displaySaveButton() {
    if (
      name !== lesson.name ||
      description !== lesson.description ||
      items?.length !== lesson.items?.length
    )
      return true;

    const arr1 = items?.slice().sort((a, b) => a.id.localeCompare(b.id));
    const arr2 = lesson.items?.slice().sort((a, b) => a.id.localeCompare(b.id));

    if (arr1 && arr2) {
      for (let i = 0; i < arr1?.length; i++) {
        if (arr1[i].id !== arr2[i].id) {
          return true;
        }
      }
    }
    return false;
  }

  return (
    <>
      <ContentContainer>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <InputLabel id="name">{t("userLessons.lessonName")}</InputLabel>
              <TextField
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <InputLabel id="description">
                {t("userLessons.lessonDescription")}
              </InputLabel>
              <TextField
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>

            <Popup
              open={popupOpen}
              onClose={() => setPopupOpen(false)}
              header={t("userLessons.removeLesson")}
              text={t("userLessons.removeDialogText")}
              primaryAction={{
                text: t("userActions.delete"),
                onClick: () => {
                  LessonsAPI.deleteLesson({ ...lesson, id: lesson.id || "" });
                  router.push("/user-lessons");
                },
              }}
              secondaryAction={{
                text: t("userActions.cancel"),
                onClick: () => setPopupOpen(false),
              }}
              displayCloseButton={true}
            />
            {!isCreate && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => setPopupOpen(true)}>
                  {t("userLessons.removeLesson")}
                </Button>
              </Box>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1" mb={1}>
              {t("userLessons.vocabulary")}
            </Typography>
            <IconButton onClick={() => setSearchDialogOpen(true)}>
              <Icon>{icons.add}</Icon>
            </IconButton>
          </Box>
          <AddVocabularyDialog
            open={searchDialogOpen}
            onItemAdd={(item) => {
              setItems([...(items || []), item]);
            }}
            onItemRemove={(item) => {
              setItems(items.filter((e) => e.id !== item.id));
            }}
            onClose={() => setSearchDialogOpen(false)}
            items={items}
          />

          {items.length > 0 ? (
            <CardList>
              {items?.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    secondaryAction={
                      <IconButton
                        onClick={() => {
                          setItems(items.filter((e) => e.id !== item.id));
                        }}
                      >
                        <Icon>{icons.remove}</Icon>
                      </IconButton>
                    }
                    sx={{ pr: 2 }}
                  >
                    <ListItemButton
                      component="a"
                      onClick={() => router.push(`/lesson-items/${item.id}`)}
                    >
                      <ListItemAvatar>
                        <Avatar src={item.imageURL} variant="rounded" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.nameL2}
                        secondary={item.nameL1}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </CardList>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="body2">
                {t("userLessons.emptyLesson")}
              </Typography>
            </Box>
          )}
        </Box>
      </ContentContainer>
      {displaySaveButton() && (
        <BottomFab
          header={isCreate ? t("userActions.create") : t("userActions.save")}
          icon={icons.save}
          onClick={() => onSave({ name, description, items, id: lesson.id })}
        />
      )}
    </>
  );
};

export default LessonCreateUpdate;
