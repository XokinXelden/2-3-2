import { Flex, ActionIcon } from "@mantine/core";
import plus from "../../shared/pictures/Button/Plus.png";
import minus from "../../shared/pictures/Button/Minus.png";
import type { ClickType } from "../../widgets/CreatorCard/CreatorCard";

type ButtonPlusMinusType = {
  id: number;
  count: number;
} & ClickType;

function ButtonPlusMinus({
  count,
  clickPlus,
  clickMinus,
  id,
}: ButtonPlusMinusType) {
  return (
    <div>
      <Flex align="center" gap={4} style={{ fontSize: "15px" }}>
        <ActionIcon
          onClick={() => {
            clickMinus(id);
          }}
          className="count-button"
          variant="light"
          color="black"
          size="md"
          radius="md"
        >
          <img src={minus} />
        </ActionIcon>
        {count}
        <ActionIcon
          onClick={() => {
            clickPlus(id);
          }}
          className="count-button"
          variant="light"
          color="black"
          size="md"
          radius="md"
        >
          <img src={plus} />
        </ActionIcon>
      </Flex>
    </div>
  );
}

export default ButtonPlusMinus;
