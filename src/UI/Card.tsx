import { Box } from "@mui/material";
import style from "../styles/Card.module.css";
type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <Box className={style.post}>{children}</Box>;
};

export default Card;
