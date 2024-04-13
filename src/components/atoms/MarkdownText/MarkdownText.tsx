import ReactMarkdown from "react-markdown";

import Typography from "@mui/material/Typography";

export interface IMarkdownText {
  text?: string;
}

const MarkdownText: React.FC<IMarkdownText> = ({ text }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => <Typography variant="h4" {...props} />,
        h2: ({ ...props }) => <Typography variant="h5" {...props} />,
        h3: ({ ...props }) => <Typography variant="h6" {...props} />,
        h4: ({ ...props }) => <Typography variant="subtitle1" {...props} />,
        h5: ({ ...props }) => <Typography variant="subtitle2" {...props} />,
        h6: ({ ...props }) => <Typography variant="body1" {...props} />,
        p: ({ ...props }) => <Typography {...props} />,
      }}
    >
      {text ?? ""}
    </ReactMarkdown>
  );
};

export default MarkdownText;
