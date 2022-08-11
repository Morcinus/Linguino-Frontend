import React from "react";
import { useForm } from "react-hook-form";
import Link from "@mui/material/Link";

// Material UI
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormHelperText } from "@mui/material";

// API
import useAuth from "../util/useAuth";

const EMAIL_REGEX = /\S+@\S+\.\S+/;

interface InputTypes {
  username: string;
  email: string;
  password: string;
  checked: boolean;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();
  const { signUp, loading } = useAuth();

  const onSubmit = (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    signUp(data.username, data.email, data.password);
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Box sx={{ my: 16 }}>
          <Card sx={{ p: 3, textAlign: "center" }}>
            <Stack direction="column" justifyContent="center" spacing={2}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                Registrace
              </Typography>
              <Stack
                direction="column"
                justifyContent="center"
                spacing={2}
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                style={{ textAlign: "center" }}
              >
                <TextField
                  id="username"
                  type="text"
                  label="Uživatelské jméno"
                  helperText={
                    errors.username?.type === "required" &&
                    "Toto pole je povinné!"
                  }
                  error={errors.username !== undefined}
                  {...register("username", {
                    required: true,
                  })}
                  fullWidth
                  autoComplete="username"
                />
                <TextField
                  id="email"
                  type="email"
                  label="Emailová adresa"
                  helperText={
                    errors.email?.type === "required"
                      ? "Toto pole je povinné!"
                      : errors.email?.type === "pattern" &&
                        "Neplatná emailová adresa!"
                  }
                  error={errors.email !== undefined}
                  {...register("email", {
                    required: true,
                    pattern: EMAIL_REGEX,
                  })}
                  fullWidth
                  autoComplete="email"
                />
                <TextField
                  id="password"
                  type="password"
                  label="Heslo"
                  helperText={
                    errors.password?.type === "required"
                      ? "Toto pole je povinné!"
                      : errors.password?.type === "minLength" &&
                        "Heslo musí být dlouhé alespoň 6 znaků!"
                  }
                  error={errors.password !== undefined}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  fullWidth
                  autoComplete="new-password"
                />
                <FormControlLabel
                  control={
                    <Checkbox {...register("checked", { required: true })} />
                  }
                  label={
                    <Typography variant="body2" sx={{ textAlign: "left" }}>
                      Souhlasím s{" "}
                      <Link
                        target="blank_"
                        href="https://www.pandulino.com/vseobecne-obchodni-podminky/"
                      >
                        Obchodními podmínkami
                      </Link>{" "}
                      a{" "}
                      <Link
                        target="blank_"
                        href="https://www.pandulino.com/ochrana-osobnich-udaju/"
                      >
                        Zpracováním osobních údajů
                      </Link>
                      .
                    </Typography>
                  }
                />
                <FormHelperText
                  error={errors.checked !== undefined}
                  sx={{ textAlign: "center" }}
                >
                  {errors.checked?.type === "required" &&
                    "Musíte souhlasit s podmínkami!"}
                </FormHelperText>
                <Box>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={loading}
                    loading={loading}
                  >
                    Registrovat
                  </LoadingButton>
                </Box>
              </Stack>
              <Typography variant="body2">
                Máte účet? Přihlaste se <Link href="/login">zde</Link>.
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Signup;
