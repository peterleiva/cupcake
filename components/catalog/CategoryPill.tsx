import { Button, ButtonProps, Chip, ChipProps } from 'react-native-paper';

export interface CategoryPillProps extends Omit<ChipProps, 'mode'> {
  active?: boolean;
}

const CategoryPill = ({ active, ...btnProps }: CategoryPillProps) => {
  return <Chip selected={active} {...btnProps}></Chip>;
};

export default CategoryPill;
