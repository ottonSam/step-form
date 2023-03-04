import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import {
  BsFillEmojiHeartEyesFill,
  BsEmojiHeartEyes,
  BsFillEmojiSmileFill,
  BsEmojiSmile,
  BsFillEmojiNeutralFill,
  BsEmojiNeutral,
  BsFillEmojiFrownFill,
  BsEmojiFrown,
  BsFillEmojiAngryFill,
  BsEmojiAngry,
} from "react-icons/bs";

const CheckboxComponent = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  return (
    <FormGroup>
      <Stack flexDirection="row" justifyContent="center" gap={4}>
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("review") === "very_unsatisfied"}
              value="very_unsatisfied"
              onChange={(e) => setValue("review", e.target.value)}
              icon={<BsEmojiAngry size={40} />}
              checkedIcon={<BsFillEmojiAngryFill size={40} />}
            />
          }
          labelPlacement="bottom"
          label={"Muito insatisfeito"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("review") === "unsatisfied"}
              value="unsatisfied"
              onChange={(e) => setValue("review", e.target.value)}
              icon={<BsEmojiFrown size={40} />}
              checkedIcon={<BsFillEmojiFrownFill size={40} />}
            />
          }
          labelPlacement="bottom"
          label={"Insatisfeito"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("review") === "neutral"}
              value="neutral"
              onChange={(e) => setValue("review", e.target.value)}
              icon={<BsEmojiNeutral size={40} />}
              checkedIcon={<BsFillEmojiNeutralFill size={40} />}
            />
          }
          labelPlacement="bottom"
          label={"Normal"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("review") === "satisfied"}
              value="satisfied"
              onChange={(e) => setValue("review", e.target.value)}
              icon={<BsEmojiSmile size={40} />}
              checkedIcon={<BsFillEmojiSmileFill size={40} />}
            />
          }
          labelPlacement="bottom"
          label={"satisfeito"}
        />
        <FormControlLabel
          control={
            <Checkbox
              value="very_satisfied"
              onChange={(e) => setValue("review", e.target.value)}
              icon={<BsEmojiHeartEyes size={40} />}
              checkedIcon={<BsFillEmojiHeartEyesFill size={40} />}
            />
          }
          labelPlacement="bottom"
          label={"Muito satisfeito"}
        />
      </Stack>
      <FormHelperText>
        <Typography color="error" align="center">
          {errors.review?.message?.toString()}
        </Typography>
      </FormHelperText>
    </FormGroup>
  );
};

export default CheckboxComponent;
