import * as S from ".//styled-components/styled-skeleton";
import { useThemeContext } from "./context";

export const SkeletonRect = ({ width, height }) => {
  const { theme } = useThemeContext();
  return (
    <S.SkeletonRect
      style={{ width, height }}
      backgroundColor={theme.avatarColor}
    ></S.SkeletonRect>
  );
};
