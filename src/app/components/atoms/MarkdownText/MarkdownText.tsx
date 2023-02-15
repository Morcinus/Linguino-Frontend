import ReactMarkdown from "react-markdown";

import Typography from "@mui/material/Typography";

export interface IMarkdownText {
  text?: string;
}

const MarkdownText: React.FC<IMarkdownText> = ({ text }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <Typography variant="h4" {...props} />,
        h2: ({ node, ...props }) => <Typography variant="h5" {...props} />,
        h3: ({ node, ...props }) => <Typography variant="h6" {...props} />,
        h4: ({ node, ...props }) => (
          <Typography variant="subtitle1" {...props} />
        ),
        h5: ({ node, ...props }) => (
          <Typography variant="subtitle2" {...props} />
        ),
        h6: ({ node, ...props }) => <Typography variant="body1" {...props} />,
        p: ({ node, ...props }) => <Typography {...props} />,
      }}
    >
      {text ?? ""}
    </ReactMarkdown>
  );
};

export default MarkdownText;
