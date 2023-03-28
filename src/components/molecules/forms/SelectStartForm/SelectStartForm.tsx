import { useTranslation } from "i18n/client";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import SimpleCardWide from "components/atoms/cards/SimpleCardWide/SimpleCardWide";

import { StartOptionId, startOptions } from "./config";

export interface ISelectStartForm {
  onSubmit: (optionId: StartOptionId) => void;
}

const SelectStartForm: React.FC<ISelectStartForm> = ({ onSubmit }) => {
  const { t: tForm } = useTranslation("cs", "form");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="subtitle1">
        {tForm("accountSetup.startOptionsTitle")}
      </Typography>

      {startOptions.map((option) => (
        <SimpleCardWide
          key={option.id}
          header={tForm(`accountSetup.startOptions.${option.id}.name`)}
          subheader={tForm(
            `accountSetup.startOptions.${option.id}.description`
          )}
          imageURL={option.imageURL}
          onClick={() => onSubmit(option.id)}
        />
      ))}
    </Box>
  );
};

export default SelectStartForm;
