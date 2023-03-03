import {
  Card,
  Typography,
  CardMedia,
  Divider,
  CardContent,
  Stack,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const StepConfirm = () => {
  const { watch } = useFormContext();

  return (
    <Stack alignItems="center">
      <Card sx={{ maxWidth: 720, minWidth: 365 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.notion.so/images/page-cover/woodcuts_1.jpg"
          title="Ocean paint"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Avaliação:
          </Typography>
          <Typography variant="h6" color="text.primary">
            {watch("name")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {watch("city")} / {watch("state")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {watch("email")}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            {watch("review")}: {watch("comment")}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};
export default StepConfirm;
