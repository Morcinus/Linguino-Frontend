import { MutableRefObject } from "react";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

import MarkdownText from "../MarkdownText/MarkdownText";

export interface IStudyExpansionContent {
  open: boolean;
  reference?: MutableRefObject<any>;
  content: string | undefined;
}

const StudyExpansionContent: React.FC<IStudyExpansionContent> = ({
  open,
  reference,
  content,
}) => {
  return (
    <>
      {open && (
        <Container maxWidth="md">
          <Box ref={reference}>
            <MarkdownText text={content} />
          </Box>
        </Container>
      )}
    </>
  );
};

export default StudyExpansionContent;
