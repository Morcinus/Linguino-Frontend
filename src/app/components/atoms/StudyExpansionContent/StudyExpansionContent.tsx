import { MutableRefObject } from "react";
import ReactMarkdown from "react-markdown";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

export interface IStudyExpansionContent {
  open: boolean;
  reference?: MutableRefObject<any>;
  content: string;
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
            <ReactMarkdown>{content}</ReactMarkdown>
          </Box>
        </Container>
      )}
    </>
  );
};

export default StudyExpansionContent;
