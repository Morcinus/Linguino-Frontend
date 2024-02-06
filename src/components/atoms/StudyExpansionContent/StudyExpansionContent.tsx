import { MutableRefObject } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import MarkdownText from "../MarkdownText/MarkdownText";

export interface IStudyExpansionContent {
  open: boolean;
  reference?: MutableRefObject<HTMLElement | null>;
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
