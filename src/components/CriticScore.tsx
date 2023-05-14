import { Badge } from "@chakra-ui/react";
import { color } from "framer-motion";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
