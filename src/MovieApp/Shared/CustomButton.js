import { Button } from "@mui/material";

const CustomButton = ({ onClick, textButton }) => {
  return <Button onClick={onClick}>{textButton}</Button>;
};

export default CustomButton;
